import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#0D47A1", mb: 2, scrollMarginTop: 80 }} id={id}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3, ml: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#1565C0", mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function KoukouFutokoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "不登校・体調不良のサポートが充実した高校の選び方｜スクールカウンセラーと支援体制" },
  ];

  const faqItems = [
    {
      question: "不登校・体調不良の生徒を受け入れる高校にはどのような種類がありますか？",
      answer: "不登校・体調不良の生徒を受け入れる高校には、（1）定時制高校（夜間授業で、昼間の登校が少ない）、（2）通信制高校（自宅学習が中心で、スクーリングは月数回）、（3）チャレンジスクール（東京都など一部地域の定時制で、不登校生向けの特別なサポート）、（4）不登校支援コース付き全日制高校（全日制だが、出席日数や授業形式を柔軟に対応）があります。通信制高校は自宅での学習が可能で、スクーリング（登校日）も少なく、自分のペースで学習を進められるため、不登校・長期入院経験者に適しています。定時制高校は夜間通学が多く、昼間に別のことに時間を使える利点があります。全日制でありながら不登校対応コースを用意する学校も増えており、『友人関係を築きながら少しずつ登校日数を増やす』という段階的な復帰を支援しています。",
    },
    {
      question: "高校のスクールカウンセラー・サポートルームはどのように活用できますか？",
      answer: "スクールカウンセラーは、生徒の心理的困難（対人関係不安、学習ストレス、メンタルヘルス）に対応する専門家です。通常、週3～4日、1回50分程度の面談を無料で受けられます。全日制高校の多くに配置されており、進学指導よりもメンタルサポートを重視する学校では、複数のカウンセラーを配置していることもあります。サポートルームは、いじめ・不適応による一時的な別室登校を支援する施設で、通常の教室に行けない生徒が、サポートルームで授業を受けたり、カウンセリングを受けたりできます。サポートルーム利用者の出席扱いは、学校によって異なり、『サポートルームの出席を全て出席に扱う』学校と『一部のみ出席に扱う』学校があります。高校選びの際には、この点を必ず確認することが重要です。",
    },
    {
      question: "全日制高校での不登校対応の現実はどのようなものですか？",
      answer: "全日制高校は、毎日の登校を前提とした教育カリキュラムであるため、不登校生への対応は学校によって大きく異なります。進学実績を重視する難関進学校では、不登校生への対応が限定的で『休学して通信制に転校してください』と勧められる場合もあります。一方、生徒サポートを重視する学校では、スクールカウンセラーの配置を手厚くしたり、サポートルームを充実させたり、担任が定期的に家庭訪問を行ったりするなど、積極的な支援を実施しています。ただし、全日制は毎日の授業出席が前提の教育システムであるため、完全不登校状態が長く続く場合、進級・卒業が難しくなる可能性があります。不登校経験者が全日制を選択する際は、『学校側の支援体制』だけでなく、『自身が毎日登校できるようになるまでの回復プロセスを支援できるか』を慎重に検討する必要があります。",
    },
    {
      question: "不登校経験者が高校を選ぶ際のポイントは何ですか？",
      answer: "不登校経験者が高校を選ぶ際の最大のポイントは、『その学校の教育環境が自分の心理的・身体的状態に合致しているか』です。具体的には、（1）スクールカウンセラーの配置数と経験年数、（2）サポートルームの有無と出席扱いの判断基準、（3）担任の面談頻度と家庭訪問体制、（4）少人数クラス・個別対応の可否、（5）進学実績よりも生徒サポートを重視する学校風土、が確認ポイントです。学校説明会では、『不登校生向けのサポート体制について具体的に説明してください』と質問し、曖昧な回答をする学校は避けた方が無難です。また、在校生からの口コミや、学校のWebサイトに『スクールカウンセラーの相談件数』『サポートルーム利用者の進路実績』などの情報が公開されているか確認することも重要です。",
    },
    {
      question: "出席日数と進級・卒業への影響はどのようなものですか？",
      answer: "文部科学省の指標では、『年間出席日数が3分の2（約120日）以上でなければ進級できない』とされていますが、この基準は学校によって異なる場合があります。一部の学校では、『サポートルーム出席も認める』『医師の診断書があれば欠席を認める』など、柔軟に対応しています。ただし、出席日数が足りない場合は、『留年』（同学年をもう一度）するか、『別室での学習』（単位認定試験合格による進級）など、代替手段が用意されている学校も増えています。通信制高校は、出席日数の制約が少なく、年4回程度のスクーリング（登校）と、インターネット課題提出による単位認定により、進級・卒業が可能です。全日制で出席日数が足りない可能性がある場合は、進学前に学校に『出席日数が足りない場合の対応』について確認しておくことが重要です。",
    },
    {
      question: "通信制高校と定時制高校のどちらが不登校経験者に適していますか？",
      answer: "通信制高校と定時制高校は、不登校経験者にとって異なる利点があります。通信制高校は、スクーリング（登校）が年4～6回程度で、自宅学習が中心であるため、『登校に対する心理的負担が最小限』です。また、年齢層が多様であり、全日制と異なる人間関係環境が期待できます。一方、定時制高校は、毎日（または週数日）登校しますが、夜間授業であるため、昼間に別のこと（アルバイト・療養など）に時間を使えます。また、定時制の方が、スクールカウンセラーの配置が手厚い傾向があります。選択は、本人の『登校への心理的負担の大きさ』と『毎日の日中の過ごし方の希望』によって異なります。登校自体に強い抵抗感がある場合は通信制を、登校は可能だが昼間の時間を有効活用したい場合は定時制を選択するという判断が一般的です。",
    },
  ];

  return (
    <>
      <SEO
        title="不登校・体調不良のサポートが充実した高校の選び方｜スクールカウンセラーと支援体制 | School Station"
        description="不登校・体調不良の生徒を受け入れる高校の種類（通信制・定時制・チャレンジスクール）、スクールカウンセラー・サポートルームの有無と活用方法、全日制高校での不登校対応の現実、不登校経験者の高校選びのポイント、出席日数が進級・卒業に与える影響、通信制・定時制の比較を完全解説。"
        canonical="/column/koukou-futoko/"
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "不登校・体調不良のサポートが充実した高校の選び方｜スクールカウンセラーと支援体制",
            "description": "不登校・体調不良の生徒を受け入れる高校の種類（通信制・定時制・チャレンジスクール）、スクールカウンセラー・サポートルームの有無と活用方法、全日制高校での不登校対応の現実、不登校経験者の高校選びのポイント、出席日数が進級・卒業に与える影響、通信制・定時制の比較を完全解説。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((bc, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": bc.label,
              "item": bc.href ? `https://school-station.com${bc.href}` : undefined,
            })).filter((item) => item.item !== undefined || item.position === breadcrumbs.length),
          })
        }} />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <BreadCrumb items={breadcrumbs} />

        {/* Hero */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5 },
            mb: 4,
            background: "linear-gradient(135deg, #1565C0 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            不登校・体調不良のサポートが充実した高校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            スクールカウンセラーと支援体制
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="不登校・体調不良の生徒を受け入れる高校の種類" id="koukou-shurui">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            日本の高校教育は、全日制が主流ですが、不登校や体調不良により全日制での学習が困難な生徒向けに、複数の選択肢が存在します。これらの学校は、単に『甘い環境』ではなく、生徒一人ひとりのペースに合わせた『個別対応型の教育』を提供しており、卒業後の進学・就職実績も年々向上しています。不登校経験者が高校を選ぶ際、『偏差値』よりも『本人に適した学習環境』を優先することが、高校生活の充実と進学準備の成功につながります。全日制・定時制・通信制・チャレンジスクールなど、複数の選択肢の中から、自身の心身の状態と将来の目標に最も合致する学校を選ぶことが重要です。
          </Typography>

          <SubSection title="定時制高校：夜間授業で昼間の時間が有効活用できる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              定時制高校は、夜間（通常17時～21時）に授業を行う高校です。昼間に別のこと（療養・アルバイト・インターンシップなど）に時間を使えることが最大の特徴です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業時間：夜間（17時～21時程度）、毎日または週数日登校</strong> — 定時制高校は、夜間に集中的に授業を行う形式が一般的です。毎日通学する学校と、週3日程度の通学で済む学校があり、後者は昼間の時間活用が可能です。授業内容は全日制と同じ学習指導要領に基づいており、大学受験も可能です。ただし、疲労による授業中の寝落ちや、昼夜の生活リズムの乱れが課題となることもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>卒業までの年限：4年間（全日制より1年長い）</strong> — 定時制高校の修業年限は4年であり、全日制より1年長くなります。この1年の余裕により、不登校からの段階的な回復、心身の安定化が期待できます。4年かけることで、各科目の学習時間が増えるため、進学希望者の学力養成にも適しています。ただし、『4年通学しなければならない』という時間的負担については、本人の覚悟が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクールカウンセラーの配置が手厚い傾向</strong> — 不登校・体調不良生が集中する定時制高校では、スクールカウンセラーの配置が充実している傾向があります。全日制では週3日勤務が多いのに対し、定時制では週5日配置の学校も多いです。また、進路指導の先生が『進学指導』より『生徒のメンタルサポート』を優先する傾向があり、生徒との相談体制が充実しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在学生が多様（社会人経験者・他校からの転編入など）</strong> — 定時制高校の在学生構成は多様であり、全日制と異なる年齢層・背景の生徒が学んでいます。不登校経験者だけでなく、アルバイトをしながら学ぶ者、家庭の事情により働く者、海外からの編入生など、異なるバックグラウンドの生徒と交流することで、『自分だけが問題ではない』という認識を持つことができます。このような多様な人間関係環境は、全日制では得難い利点です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="通信制高校：自宅学習が中心で登校日数が少ない">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              通信制高校は、自宅での学習（通信教育）が中心であり、月1～2回のスクーリング（登校日）で授業を受ける形式です。登校に対する心理的負担が最小限であることが最大の特徴です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクーリング（登校）：月1～2回、数日間のまとめ登校</strong> — 通信制高校の登校日は非常に少なく、月1回程度のまとめ登校（金土日など）で授業を受けます。学校によっては、年3回の集中スクーリング（夏休み・冬休み・春休み）に統合されている場合もあります。自宅での学習が可能であるため、登校そのものが困難な不登校生、長期療養中の生徒、仕事をしながら高卒資格を取得したい社会人に適しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習形式：教科書+課題提出（紙またはオンライン）+試験</strong> — 通信制高校では、配布される教科書を自宅で学習し、定期的に課題を提出します。最近は、インターネット学習（オンライン課題提出・Web授業など）を導入する学校が増えており、スマートフォンやパソコンで全ての学習を完結させることも可能です。ただし、『自宅学習はサボりやすい』というリスクがあり、本人の自己管理能力が要求されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>卒業までの年限：3年間（全日制と同じ）</strong> — 通信制高校も修業年限は3年であり、全日制と同じです。効率的な学習計画により、留年も含まず3年での卒業が可能です。ただし、課題提出が遅れたり、試験に不合格になったりすれば、4年目以降に進級がずれ込むことになります。通信制高校の課題は『いかに自宅学習を習慣化させるか』であり、本人の学習意欲が卒業成否の決め手になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学進学実績も向上（難関大進学者も多数）</strong> — 通信制高校も大学受験が可能であり、最近は大学進学実績を向上させている学校が増えています。特に、新興の私立通信制高校では、大学受験対策コース・予備校連携制度などを設け、難関大進学を目指す生徒を支援しています。ただし、公立通信制高校では大学受験対策が限定的であり、大学進学希望の場合は『受験対策コースの有無』を確認することが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>心理的負担が最小限（登校日数が少ないため）</strong> — 通信制高校の最大の利点は、『登校に対する心理的負担が最小限』であることです。対人関係が原因の不登校、学校環境への適応困難、完全不登校状態からの回復段階にある生徒にとって、月1～2回の登校は、心理的障壁を大幅に低くします。この心理的余裕があることで、中長期的には『登校への抵抗感が薄れ、社会参加への動機が生じる』という好転が期待できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="チャレンジスクール（東京都など一部地域）：全日制で不登校生向けの特別サポート">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              チャレンジスクールは、東京都の定時制高校の一部で、不登校経験者を対象に特化した『別枠入試』と『特別サポート』を実施する学校です。『昼夜間定時制高校』として、午前・昼間・夜間の3部制で、本人のペースに合わせた登校が可能です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>不登校経験者対象の『チャレンジスクール入試』</strong> — 東京都の公立高校では、『チャレンジスクール入試』という不登校経験者専用の入試制度を設けています。この入試では、学力試験ではなく『本人との面接』『作文』などで適性を判定し、不登校経験者を積極的に受け入れています。入試難度が低いため、学力的な不安がある場合でも合格しやすく、『新しい環境でやり直したい』という強い気持ちがあれば十分です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>3部制で、本人に合った時間帯を選択可能</strong> — チャレンジスクール（昼夜間定時制）は、午前部（9時～12時）、昼間部（12時30分～16時）、夜間部（17時～21時）の3つの時間帯から選択でき、本人の心身の状態に合わせた登校が可能です。入学後に時間帯の変更も可能であり、『最初は夜間から始めて、徐々に昼間部に移行する』という段階的な復帰をサポートしています。この柔軟性が、チャレンジスクールの強みです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクールカウンセラー・社会福祉士による手厚いサポート</strong> — チャレンジスクールには、スクールカウンセラーに加えて、社会福祉士（生活指導の専門家）が配置されており、不登校から高卒資格取得・社会復帰までを総合的にサポートしています。月1回以上の保護者面談を実施し、家庭の協力を得ながら、生徒の成長を支援しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>東京都以外の地域では類似制度の有無を確認が重要</strong> — チャレンジスクール的な制度は、東京都の独自制度です。他の都道府県では類似制度が存在しないか、存在しても規模が限定的な場合が多いです。大阪府、京都府など一部地域では、不登校対応の定時制高校や『不登校サポートコース』付きの全日制高校が存在しており、志望する地域の制度について確認することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="不登校支援コース付き全日制高校：出席日数を柔軟に対応">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              一部の進学校では、『不登校サポートコース』『メンタルサポートコース』などの名称で、全日制でありながら不登校生向けの柔軟な対応を実施する学校があります。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サポートルーム登校による段階的な復帰を支援</strong> — このコースでは、最初は『サポートルーム（別室）』での学習から始め、本人の回復に応じて『教室への一時的な出席』『複数科目の教室出席』というように、段階的に教室登校を増やしていきます。『友人関係を築きながら少しずつ通常の環境に慣れる』という心理的アプローチが特徴です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出席日数要件を緩和（サポートルーム出席も認める）</strong> — 通常の全日制高校は『年間出席日数3分の2（約120日）以上が進級条件』ですが、このコースでは『サポートルーム出席も全て出席に扱う』という柔軟な判定を行っています。その結果、『教室には行けないが、サポートルームなら登校できる』という生徒でも、出席日数要件をクリアし、進級・卒業が可能です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>全日制であるため、通常の友人関係や行事参加が期待できる</strong> — このコースは全日制であるため、同じ年代の生徒との交流機会が多く、『友人関係の構築』『学園生活の充実』が期待できます。定時制・通信制と異なり、年齢層が統一されており、『同期生との競争意識』『学園行事への参加感』が、モチベーション向上につながることもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績も良好（難関大進学者も多数）</strong> — 不登校サポートコースは、進学実績が良好な学校が多く、国公立大・難関私立大への進学者も多数輩出しています。『不登校からの回復』『心身の安定化』さえ実現すれば、通常の全日制と同等の学習環境が得られるため、進学準備も充実しています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="スクールカウンセラー・サポートルームの有無と活用方法" id="counsel-support">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校での心理的・身体的な問題（不登校・対人関係不安・メンタルヘルス）への対応は、『スクールカウンセラーの配置』『サポートルームの有無』で大きく異なります。不登校経験者の高校選びでは、これらの支援体制の充実度が、進級・卒業・進学に直結する最重要要素です。
          </Typography>

          <SubSection title="スクールカウンセラーの役割と活用方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>心理職の専門家による個別カウンセリング（通常無料）</strong> — スクールカウンセラーは、学校心理士・臨床心理士などの資格を持つ心理の専門家です。生徒の心理的困難（対人関係不安、学習ストレス、メンタルヘルスなど）に対応し、通常1回50分程度の個別面談を定期的に行います。スクールカウンセラーとの相談は学校を通じて申し込み、通常無料で受けられます。不登校からの回復段階にある生徒にとって、『定期的に話を聞いてくれる大人の存在』は、心理的な拠り所になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>配置日数による支援体制の差（週1～2日 vs 週5日）</strong> — スクールカウンセラーの配置日数は学校によって異なり、週1～2日という限定的な配置から、週5日常勤という手厚い配置まで様々です。一般的には、進学実績を重視する難関進学校では週1～2日、不登校対応を重視する学校では週3日以上という傾向があります。スクールカウンセラーの配置日数が少ない場合、『相談を予約しても数週間待たなければならない』という課題が生じることがあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ minWidth: 32 }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進路指導との連携による『生活指導+進学指導』</strong> — スクールカウンセラーが充実している学校では、カウンセラーと進路指導の先生が連携し、『心理的問題の解決』と『進学準備』を同時並行で支援しています。例えば、『対人関係が原因で登校できない生徒』に対して、カウンセラーが心理的サポートを、進路指導の先生が『登校可能になった時の進学プラン』を用意するという、統合的な支援が行われます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="サポートルーム：別室登校による段階的な復帰">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>通常の教室に行けない生徒の『別室』での学習空間</strong> — サポートルーム（別室）は、いじめ・対人関係問題・身体的不調により、通常の教室での学習が困難な生徒のための専用空間です。個別学習机が用意されており、複数の生徒が同じサポートルーム内で学習しながらも、プライバシーが保たれています。サポートルームの雰囲気は『懲罰的』ではなく、『段階的な復帰を支援する環境』として設計されています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出席扱いの判定が学校によって異なる（重要な確認ポイント）</strong> — サポートルーム利用時の『出席扱いの判定』は、学校によって大きく異なります。『サポートルーム出席を全て出席に扱う』学校では、出席日数要件（年間120日程度）をクリアしやすく、進級・卒業が相対的に容易です。一方、『サポートルーム出席は出席扱いせず、欠席扱い』とする学校では、出席日数が足りず、留年するリスクが高まります。この点は『進級・卒業に直結する極めて重要な確認ポイント』であり、必ず学校に事前確認する必要があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階的な教室復帰を支援（『サポートルーム→一部科目出席→全科目出席』）</strong> — 充実したサポートルームでは、『最初はサポートルームで全科目を学習、次に得意科目だけ教室出席、その後苦手科目も加える』というように、段階的な教室復帰を支援する計画が立てられます。この段階的なアプローチにより、心理的な抵抗感を最小化しながら、通常の学習環境への適応が進みます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サポートルーム専任の教員配置が理想的</strong> — サポートルームの質は、『専任教員の配置』で大きく異なります。専任教員が配置されている場合、毎日の生徒の心身の変化に気付き、迅速に対応できます。一方、複数の学年が同じサポートルームを利用し、専任教員が配置されていない場合、『管理的な空間』になってしまい、生徒の心理的負担が増すことがあります。学校説明会では、『サポートルームの専任教員の有無』『1日の平均利用生徒数』を確認することをお勧めします。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="全日制高校での不登校対応の現実と課題" id="zennichi-genjitsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            全日制高校は、毎日の登校を前提とした教育システムであるため、不登校生への対応は学校によって大きく異なります。進学実績を重視する難関進学校では、不登校対応が限定的で『転校をお勧めします』と勧められる場合も存在します。一方、生徒サポートを教育方針に掲げる学校では、スクールカウンセラー・サポートルーム・家庭訪問など、積極的な支援体制を構築しています。全日制で不登校生の復帰が成功するかどうかは、『学校側の支援体制』と『生徒本人の回復のモチベーション』の両者がかみ合うかにかかっています。
          </Typography>

          <SubSection title="難関進学校での不登校対応の実態">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績重視のため、不登校生への対応が限定的</strong> — 進学実績を重視する難関進学校では、教育資源が『上位進学者への指導』に集中しており、不登校生への個別対応の余裕がないことが多いです。スクールカウンセラーの配置も週1～2日と限定的で、相談の予約も困難な場合があります。このような学校では、『不登校が長く続く場合は、定時制や通信制への転校を勧めさせていただくことがあります』という説明が学校説明会で行われることもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『不登校は甘え』という認識の学校も存在</strong> — 一部の伝統的な進学校では、『不登校は本人の甘えであり、根性で克服すべき』という厳格な考え方を持つ教職員が多く、心理的サポートの必要性を認識していない場合があります。このような環境では、不登校生がさらに孤立し、心身の問題が悪化する危険性があります。不登校経験者を持つ家庭では、『この学校の不登校に対する向き合い方は、自分の子どもに適しているか』を慎重に見極める必要があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>留年・単位不足による退学のリスク</strong> — 全日制高校は毎日の登校が前提であり、不登校が継続すれば、『年間出席日数が足りず進級できない』という留年に至ります。留年した場合、同じ学年をもう一度学ぶ必要があり、心理的な負担が増します。さらに、『2年目も同じ問題が再発する』ことを恐れて、進学先を定時制・通信制に変更することが現実です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="生徒サポートを重視する学校での対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクールカウンセラー・サポートルームの充実</strong> — 生徒サポートを重視する全日制高校では、スクールカウンセラーを週3日以上配置し、サポートルームを設置して、不登校生の段階的な復帰を支援しています。この場合、『サポートルーム出席も全て出席に扱う』という柔軟な判定がなされ、出席日数要件をクリアしやすい環境が整っています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>担任による定期的な家庭訪問・電話相談</strong> — 親身な指導を重視する学校では、不登校生の担任が月1回以上の家庭訪問を行い、本人・保護者と面談して、登校への動機付けや、家庭での課題への対応を支援します。『学校から見捨てられていない』という感覚が、不登校からの回復を促進します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学サポートも並行（心理的安定後の進学準備）</strong> — 不登校から回復した生徒に対しては、遅れ込みの進学指導を実施し、進学希望者向けの受験対策を提供しています。このような学校では、『不登校からの回復』『心身の安定化』『進学準備』を統合的に支援する体制が構築されています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="不登校経験者が高校選びで確認すべきポイント" id="sentaku-point">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            不登校経験者の高校選びは、『偏差値』『進学実績』よりも、『心身の回復を支援する学校環境』を最優先すべきです。以下のポイントを学校説明会で必ず確認し、複数の学校を比較検討することが重要です。
          </Typography>

          <SubSection title="学校説明会での確認項目">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクールカウンセラーの配置状況（配置日数・資格・相談予約状況）</strong> — 『週何日配置されているか』『臨床心理士などの資格を持っているか』『相談予約まで何週間かかるか』を確認します。配置日数が少ない場合、『相談を受けたくても予約が取れない』という事態が発生します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サポートルーム（別室学習）の有無・機能・出席扱いの判定</strong> — 『サポートルームは設置されているか』『利用生徒数はどの程度か』『サポートルーム出席は全て出席に扱うか、一部のみ出席に扱うか』を確認します。この判定が進級・卒業に直結するため、極めて重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>担任による家庭訪問・定期面談の頻度</strong> — 『不登校生に対して、月何回の家庭訪問や面談を行うか』を確認します。これが『学校側の本気度』を測る指標になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出席日数要件（進級条件）の詳細説明</strong> — 『年間出席日数は最低いくつ必要か』『サポートルーム出席や医師の診断書がある欠席は出席扱いか』を確認します。学校によって柔軟性が大きく異なります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>不登校からの段階的復帰への具体的な計画例</strong> — 『不登校生がどのようなステップで通常の教室学習に戻るか』について、具体的な事例を説明してもらいます。曖昧な説明をする学校は、実績がない可能性があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="在校生・卒業生からの口コミ確認">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『不登校を経験した先輩』からの直接のアドバイス</strong> — 学校説明会後、『不登校を経験した在校生・卒業生』に直接話を聞く機会があれば、『学校の支援体制の現実』『進級・卒業の実態』を確認できます。学校側は美しく見える説明をしますが、実際の経験者の声が最も信頼できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学予備校・学習支援機関からの情報収集</strong> — 複数の高校に合格者を輩出している進学予備校では、『各学校の実態』について詳しい情報を持っています。『不登校対応は手厚いか』『進級・卒業はしやすいか』など、第三者視点からのアドバイスが得られます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="出席日数と進級・卒業への影響" id="shusseki-eikyo">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文部科学省の指標では、『年間出席日数が3分の2（約120日）以上でなければ進級できない』とされていますが、この基準は学校の判断により柔軟に対応される場合があります。特に、スクールカウンセラーやサポートルームが充実している学校では、『医師の診断書があれば欠席を認める』『サポートルーム出席は全て出席に扱う』という柔軟な判定により、出席日数要件をクリアしやすい環境が整っています。不登校経験者が高校選びをする際、『この学校では、出席日数要件をどう判定するのか』を事前に確認することが、進級・卒業の成否を大きく左右します。
          </Typography>
        </Section>

        <Box sx={{ mt: 5 }}>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
