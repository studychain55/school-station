import Link from "next/link";
import type { JukuSchoolListItem } from "@/types";

interface Props {
  schools: JukuSchoolListItem[];
  title: string;
}

export default function JukuCompareTable({ schools, title }: Props) {
  if (schools.length < 2) return null;

  return (
    <div className="mt-8 bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-800">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="text-left py-2 px-3 font-medium sticky left-0 bg-gray-50 z-10 min-w-[140px]">塾名</th>
              <th className="text-left py-2 px-3 font-medium whitespace-nowrap">対象学年</th>
              <th className="text-left py-2 px-3 font-medium whitespace-nowrap">科目</th>
              <th className="text-left py-2 px-3 font-medium whitespace-nowrap">目的</th>
              <th className="text-left py-2 px-3 font-medium whitespace-nowrap">最寄駅</th>
              <th className="text-center py-2 px-3 font-medium whitespace-nowrap">評価</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, i) => {
              const brand = school.JukuBrand?.name || school.name;
              const years = school.JukuSchoolYear?.map((y) => y.year).join("・") || "—";
              const cats = school.JukuSchoolCategory?.slice(0, 2).map((c) => c.category).join("・") || "—";
              const purposes = school.JukuSchoolPurpose?.slice(0, 2).map((p) => p.purpose).join("・") || "—";
              const station = school.JukuSchoolStation?.[0]
                ? `${school.JukuSchoolStation[0].station_name}駅`
                : "—";
              const rating = school.review_average_rating
                ? school.review_average_rating.toFixed(1)
                : "—";

              return (
                <tr
                  key={school.id}
                  className={`border-t border-gray-100 hover:bg-red-50 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/40"}`}
                >
                  <td className="py-2 px-3 sticky left-0 z-10 bg-white font-medium">
                    <Link
                      href={`/juku/${school.slug}/`}
                      className="hover:underline"
                      style={{ color: "#C00000" }}
                    >
                      {brand}
                    </Link>
                  </td>
                  <td className="py-2 px-3 text-gray-700 whitespace-nowrap">{years}</td>
                  <td className="py-2 px-3 text-gray-700 whitespace-nowrap">{cats}</td>
                  <td className="py-2 px-3 text-gray-700 whitespace-nowrap">{purposes}</td>
                  <td className="py-2 px-3 text-gray-600 whitespace-nowrap">{station}</td>
                  <td className="py-2 px-3 text-center">
                    {rating !== "—" ? (
                      <span className="font-bold" style={{ color: "#C00000" }}>★ {rating}</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
