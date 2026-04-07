import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function KokoseiBaitoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校生のバイトと勉強の両立" },
  ];

  const faqItems = [
    {
      question: "高校生のバイトは大学受験に悪影響を与えますか？",
      answer: "バイトそのものが悪いわけではありません。むしろ、バイトを通じて時間管理能力やコミュニケーション能力が養われます。大切なのは、受験勉強とのバランスを適切に保つことです。",
    },
    {
      question: "受験生でもバイトはできますか？",
      answer: "高3の秋以降は、本格的な受験対策に集中するため、バイトを減らすか辞めることをお勧めします。ただし、調整次第では両立可能です。重要なのは、受験勉強を最優先に考えることです。",
    },
    {
      question: "バイト代を有効活用する方法は？",
      answer: "参考書の購入、塾や予備校の授業料、模試の受験料、受験に必要な物品購入など、受験にかかる費用に充てることが効果的です。このようにバイト代を有効活用することで、よりモチベーションが高まります。",
    },
    {
      question: "どのくらいの勤務時間が理想的ですか？",
      answer: "高1・2年生であれば、週10～15時間程度（1日2～3時間）が目安です。定期テスト前2週間は勤務を減らす、受験本番3か月前は辞めるなど、柔軟に調整することが重要です。",
    },
    {
      question: "バイトでストレス解消はできますか？",
      answer: "はい。適度なバイトは、勉強のストレス解消や気分転換になります。人間関係も広がり、社会経験も得られます。ただし、バイトが勉強よりも優先されないよう注意が必要です。",
    },
    {
      question: "バイト先選びのコツは？",
      answer: "融通が利く職場、勤務時間を調整しやすい職場を選びましょう。飲食店、コンビニ、スーパーなどは、シフト調整が比較的しやすいです。また、職場の人間関係も重要なため、面接時に職場の雰囲気を確認することをお勧めします。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校生のバイトと勉強の両立｜受験に影響しない働き方 | School Station"
        description="高校生がバイトと勉強を両立させるための実践的なガイド。時間管理、バイト先選び、受験期の対策など、受験に影響しない効果的な働き方をご紹介します。"
        canonical="/column/kokosei-baito/"
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
            "headline": "高校生のバイトと勉強の両立｜受験に影響しない働き方",
            "description": "高校生がバイトと勉強を両立させるための実践的なガイド。時間管理、バイト先選び、受験期の対策などを解説。",
            "datePublished": `${CURRENT_YEAR}-04-07`,
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校生のバイトと勉強の両立
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            受験に影響しない効果的なバイト活用法を実践的に解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校生のバイトについて" id="about-baito">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校生がバイト（アルバイト）をすることは、文部科学省の指導でも認められている活動です。適切な時間管理の下で、勉強とバイトを両立させることは十分に可能です。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            バイトを通じて、生徒は実社会のルールやマナーを学び、コミュニケーション能力を養い、経済感覚を身につけることができます。また、受験に必要な費用を自分で稼ぐことで、受験へのモチベーションも高まります。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            重要なのは、バイトを優先するのではなく、受験勉強を最優先に考え、その上でバイトを調整することです。計画的な時間管理があれば、バイトと勉強の両立は十分に実現可能です。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="バイトのメリット" id="merits">
          <SubSection title="1. 経済力が付く">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バイトで得た給料を自分で管理することで、お金の使い方を学びます。参考書代、塾代、受験料など、受験に必要な費用を自分で賄うことで、親に頼らない経済的自立が実現できます。
            </Typography>
          </SubSection>

          <SubSection title="2. 時間管理能力が養われる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              限られた時間の中で、勉強とバイトを両立させるためには、効率的な時間管理が必須です。この経験は、大学生活や社会人生活でも大いに役立つ重要なスキルとなります。
            </Typography>
          </SubSection>

          <SubSection title="3. 実社会のルールを学べる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バイト先では、職場のルールや上下関係、報告・連絡・相談といったビジネスマナーを学べます。これらは、大学や社会人生活で必須の知識です。
            </Typography>
          </SubSection>

          <SubSection title="4. コミュニケーション能力が高まる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バイト先では、様々な年代の人と関わります。多くの人との関わりを通じて、コミュニケーション能力が自然と高まります。これは、面接試験での対答力向上にも繋がります。
            </Typography>
          </SubSection>

          <SubSection title="5. 受験モチベーションが高まる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              バイトで得た給料を受験に充てることで、「自分の力で受験に挑戦している」という実感が湧き、受験へのモチベーションが高まります。また、社会人の大変さを知ることで、「勉強して良い大学に行きたい」という気持ちも強くなります。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="バイトのデメリット・注意点" id="cautions">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            バイトは多くのメリットがある一方で、注意すべき点もあります。以下の点を意識して、バイトと勉強のバランスを保つことが重要です：
          </Typography>

          <List>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>勉強時間の減少</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  バイトに時間を取られると、必然的に勉強時間が減ります。特に受験期は、勉強時間の確保が最優先です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>疲労の蓄積</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  バイトの疲労が勉強に影響を与える可能性があります。十分な睡眠時間の確保が重要です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>集中力の分散</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  バイトのことが頭に残っていると、勉強に集中できません。オン・オフの切り替えが重要です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>定期テスト・受験への影響</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定期テスト2週間前や受験本番前にバイトを続けると、成績低下に繋がる可能性があります。柔軟な対応が必須です。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="バイト先選びのポイント" id="choosing-baito">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            バイトと勉強を両立させるには、バイト先選びが非常に重要です。以下のポイントを参考に、自分に合ったバイト先を見つけましょう：
          </Typography>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB", mb: 3 }}>
            <SubSection title="シフト調整が可能な職場">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                定期テスト前や受験時期に勤務を減らすことができる職場が理想的です。飲食店、コンビニ、スーパーなどは、比較的シフト調整がしやすいです。面接時に「定期テスト前は勤務を減らしたい」と相談してみましょう。
              </Typography>
            </SubSection>

            <Divider sx={{ my: 2 }} />

            <SubSection title="通勤時間が短い職場">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                家や学校の近くにあるバイト先なら、通勤時間を短縮でき、勉強時間を確保しやすくなります。自転車で15分以内、徒歩10分以内など、条件を絞って探すことをお勧めします。
              </Typography>
            </SubSection>
          </Paper>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB", mb: 3 }}>
            <SubSection title="勤務時間が短めの職場">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                1日3～4時間程度のシフトが多い職場が理想的です。長時間勤務の職場は疲労が溜まりやすく、勉強に支障が出やすいため、避けた方が無難です。
              </Typography>
            </SubSection>

            <Divider sx={{ my: 2 }} />

            <SubSection title="職場の人間関係が良好">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                面接時に、職場の雰囲気を観察してみましょう。従業員が笑顔で仕事をしているか、人間関係が良好そうか、という点を確認することが重要です。職場の人間関係が良いと、バイトのストレスが軽減されます。
              </Typography>
            </SubSection>
          </Paper>

          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontSize: "0.9rem", fontStyle: "italic" }}>
            注意：深夜勤務や高校指定禁止職種（キャバクラなど）は避けるべきです。これらは学校規則で禁止されていることが多く、また健康面での悪影響も懸念されます。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="勉強とバイトの両立スケジュール" id="schedule">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学年や時期に応じて、勤務時間を調整することが重要です。以下の目安を参考にしてください：
          </Typography>

          <Paper sx={{ overflowX: "auto", mb: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#0D47A1" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>時期</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>推奨勤務時間</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>注意点</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>高1・2年（通常時）</TableCell>
                  <TableCell>週10～15時間程度</TableCell>
                  <TableCell>1日2～3時間、週3～4日程度</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>定期テスト2週間前</TableCell>
                  <TableCell>週5～10時間程度</TableCell>
                  <TableCell>勤務を減らし、勉強を優先</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>高3春～夏</TableCell>
                  <TableCell>週10～15時間程度</TableCell>
                  <TableCell>基礎固めの時期。バイトと勉強をバランス</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>高3秋以降</TableCell>
                  <TableCell>週5時間程度または休止</TableCell>
                  <TableCell>受験対策に集中。バイトを減らすか辞める</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontSize: "0.9rem" }}>
            ※ この目安は参考値です。自分の学力状況や進学目標に応じて、柔軟に調整してください。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="バイトと勉強の時間配分テクニック" id="time-management">
          <SubSection title="1. 1日の流れを把握する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              朝は学校、放課後はバイト、夜は勉強、というように、1日の流れを可視化しましょう。隙間時間（通学時間、昼休みなど）を活用することで、勉強時間を確保できます。
            </Typography>
          </SubSection>

          <SubSection title="2. 通学時間を学習時間に充てる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バスや電車での移動時間を活用して、単語帳の暗記や問題演習を行いましょう。1日30分の通学時間があれば、月に15時間の追加学習時間を確保できます。
            </Typography>
          </SubSection>

          <SubSection title="3. バイト前後の勉強時間を活用">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バイト前に1時間、バイト後に30分という具合に、細切れ時間を活用します。細切れ時間でも、語呂合わせ暗記、演習問題、読み込みなど、工夫次第で有効な学習ができます。
            </Typography>
          </SubSection>

          <SubSection title="4. バイト先での待ち時間を活用">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              バイト中に細切れ時間があれば、単語帳を見るなど、短時間の学習を心がけます。（職場のルール内でのみ）
            </Typography>
          </SubSection>

          <SubSection title="5. 休日は集中学習の日に">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              定期テスト前や受験期は、休日を集中学習に充てることが重要です。午前中は問題演習、午後は復習、というように、計画的に時間を使いましょう。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="受験期のバイト対策" id="exam-period">
          <SubSection title="高3秋以降の対応">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高3の秋からは、受験勉強に集中する時期です。以下の対応を検討してください：
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>バイト本数を減らす</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    週1～2回程度に減らし、受験勉強に時間を確保します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>バイトを辞める</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    受験に集中したければ、バイトを辞めることも選択肢です。多くの受験生が秋以降、バイトを辞めています。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>短時間シフトのみ</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    どうしてもバイトを続けたい場合は、週5時間程度の短時間シフトに限定し、メンタル面のバランスを保ちます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="バイト先への相談">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高3の秋に勤務を減らす場合や辞める場合は、バイト先に早めに相談しましょう。「受験対策のため、秋から勤務を減らしたい」と事前に伝えることで、バイト先も代わりのスタッフを確保できます。
            </Typography>
          </SubSection>

          <SubSection title="経済面のサポート">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              バイトを減らす場合、受験に必要な費用（模試、参考書、塾代など）について、親に相談することが大切です。バイトで貯めた貯金を活用したり、親にサポートしてもらったりして、経済面での不安を解消しましょう。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="バイト代を有効活用する方法" id="use-baito-money">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            バイト代を単なる遊興費ではなく、受験や将来のために活用することで、より高いモチベーションが得られます：
          </Typography>

          <List>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#2E7D32" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>受験必要経費に充てる</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  模試代（5,000円/回）、参考書代、塾の追加授業料など、受験に直接必要な費用に充てる。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#2E7D32" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>大学資金に貯蓄</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  大学進学後の教科書代、授業料サポート、一人暮らしの初期費用など、将来に向けた貯蓄を心がける。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#2E7D32" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学習用具の購入</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  質の良い筆記用具、タイマー、勉強に必要な物品など、学習環境を整えるために活用。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#2E7D32" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>適度な気分転換費</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  勉強疲れのリフレッシュに充てる。全額を受験費に充てるのではなく、バランスを取ることが大切。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Call to Action */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#E3F2FD", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
            受験対策に役立つコラム記事
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            他の受験対策記事も参考に、志望校合格に向けた準備を進めましょう。
          </Typography>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#0D47A1",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1565C0", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              コラム一覧を見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 関連記事 */}
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/study-methods/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1565C0" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1565C0", mb: 1 }}>
                  効果的な勉強法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  高校受験に向けた効果的な勉強法と時間管理のコツ
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1565C0" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1565C0", mb: 1 }}>
                  受験スケジュール完全ガイド
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  中3の年間スケジュール解説と受験対策
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1565C0" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1565C0", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験校を決める5つの重要な基準
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1565C0" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/study-methods/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#1565C0" }}>
                次の記事: 効果的な勉強法
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ mb: 3 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#0D47A1" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" component="h3" sx={{ mb: 1.5, fontSize: "1.1rem", fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
