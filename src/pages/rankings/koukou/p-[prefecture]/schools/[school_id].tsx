import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { getPrefectureBySlug } from "@/data/prefectures";
import SchoolDetailPage from "@/features/koukou/pages/SchoolDetailPage";
import supabase from "@/utils/supabase";
import type { MinkouSchoolListItem } from "@/types";

type Props = {
  school: MinkouSchoolListItem;
  prefectureTitle: string;
  prefectureSlug: string;
  schoolId: number;
  relatedSchools: MinkouSchoolListItem[];
};

export default function SchoolDetail(props: Props) {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
    { label: props.prefectureTitle, href: `/rankings/koukou/p-${props.prefectureSlug}/` },
    { label: props.school.name },
  ];

  return (
    <SchoolDetailPage
      school={props.school}
      breadcrumbs={breadcrumbs}
      canonical={`/rankings/koukou/p-${props.prefectureSlug}/schools/${props.schoolId}/`}
      prefectureTitle={props.prefectureTitle}
      relatedSchools={props.relatedSchools}
      prefectureSlug={props.prefectureSlug}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const prefSlug = (params?.prefecture as string).replace("p-", "");
  const schoolId = Number(params?.school_id as string);

  const pref = getPrefectureBySlug(prefSlug);
  if (!pref || !schoolId) return { notFound: true };

  // Fetch school details
  const { data: school, error } = await supabase
    .from("MinkouSchool")
    .select(
      `id, source_id, slug, name, level, classification, gender,
       prefecture_id, city_id, address,
       star_rating, review_count,
       deviation_value_min, deviation_value_max,
       description, source_url,
       MinkouCourse(id, name, deviation_value, sort_order)`
    )
    .eq("id", schoolId)
    .eq("prefecture_id", pref.id)
    .single();

  if (error || !school) {
    return { notFound: true };
  }

  // Fetch related schools (same prefecture, sorted by deviation value)
  const { data: relatedSchools } = await supabase
    .from("MinkouSchool")
    .select(
      `id, source_id, slug, name, level, classification, gender,
       prefecture_id, city_id, address,
       star_rating, review_count,
       deviation_value_min, deviation_value_max,
       description, source_url`
    )
    .eq("prefecture_id", pref.id)
    .eq("is_hidden", false)
    .neq("id", schoolId)
    .order("deviation_value_max", { ascending: false })
    .limit(5);

  return {
    props: {
      school: school as MinkouSchoolListItem,
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      schoolId,
      relatedSchools: (relatedSchools || []) as MinkouSchoolListItem[],
    },
    revalidate: 3600, // Revalidate every hour
  };
};
