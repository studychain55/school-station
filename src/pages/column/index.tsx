import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ColumnIndexPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム" },
  ];

  const articles = [
    {
      title: "高校留学・海外研修プログラムガイド｜短期・長期留学の選び方と費用・単位認定",
      description: "高校留学の完全ガイド。留学プログラムの種類（文部科学省認定・交換留学・私費留学・語学研修）、短期留学（1～4週間）と長期留学（3ヶ月～1年）の費用相場と違い、留学中の単位認定・卒業資格の調整方法、留学に向いている生徒の特徴、準備期間、留学先国の選び方（英語圏・非英語圏）、帰国後の大学受験・帰国子女枠・英語力活用を完全解説。",
      href: "/column/koukou-ryugaku/",
      date: "2026-04-07",
    },
    {
      title: "高校入試・総合型選抜（AO入試）の対策ガイド｜内申・面接・小論文・活動実績の準備",
      description: "総合型選抜（旧AO入試）の完全対策ガイド。総合型選抜とは何か、学力検査以外での評価方法、実施高校の種類（私立・中高一貫・国際系・特色校）、志望理由書の書き方と審査官が見るポイント、面接対策の具体的方法、小論文・グループディスカッション対策、中学校での活動実績の活かし方を完全解説。",
      href: "/column/koukou-sogo/",
      date: "2026-04-07",
    },
    {
      title: "高校のキャリア教育・職場体験ガイド｜大学選びと将来の仕事を考えるきっかけ作り",
      description: "高校で行われるキャリア教育の種類（職場体験・インターンシップ・職業講話・大学出前授業）、キャリア教育が充実している高校の見分け方、職場体験で将来の仕事への興味を広げる方法、進路指導室の活用法（大学パンフレット・OB/OG情報）、高校1年生からできる将来設計の始め方、親子で話し合うべき将来の仕事・学部選びの会話例を完全解説。",
      href: "/column/koukou-shokugyou/",
      date: "2026-04-07",
    },
    {
      title: "高校の特別活動・生徒会活動ガイド｜入試・大学推薦に活かせる学校生活の実績作り",
      description: "高校の特別活動の種類（生徒会・委員会・学校行事・ホームルーム）、生徒会役員になるメリット（リーダーシップ・協調性の育成）、文化祭・体育祭・修学旅行での活躍が推薦入試に与える影響、委員会活動（図書委員・保健委員・放送委員等）の選び方と評価、特別活動の実績を調査書・自己推薦文に活かす方法、部活動との両立テクニックを完全解説。",
      href: "/column/koukou-tokkatsu/",
      date: "2026-04-07",
    },
    {
      title: "高校のオープンキャンパス・学校説明会の参加ガイド｜準備すべきことと質問リスト",
      description: "オープンキャンパスと学校説明会の違い（目的・内容・参加者）、参加前に準備すべきこと（志望理由の整理・質問リストの作成）、在校生との交流で聞くべき7つの質問、見学時にチェックすべき施設・環境・雰囲気、複数校を比較するための記録方法（スコアシート活用）、中学3年生の最適な参加時期（2年生での下見推奨）を完全解説。",
      href: "/column/koukou-open/",
      date: "2026-04-07",
    },
    {
      title: "高校入試の種類と仕組み完全ガイド｜推薦・一般・公立・私立の入試制度を解説",
      description: "高校入試の主な種類（公立一般選抜・公立推薦・私立一般・私立推薦）の違いと特徴、公立と私立の入試日程の違い、推薦入試の種類（学校推薦・自己推薦・スポーツ推薦）と条件、内申点の計算方法と影響度、都道府県別入試制度の違い、複数校受験戦略を完全解説。",
      href: "/column/koukou-juken-system/",
      date: "2026-04-07",
    },
    {
      title: "高校の偏差値の正しい見方と活用法｜模試の種類によって偏差値が変わる理由",
      description: "偏差値とは何か（平均点との差・標準偏差の仕組み）、同じ学校でも模試によって偏差値が異なる理由（母集団の違い・難易度の違い）、代表的な模試（全統模試・駿台模試・進研模試・W模試）の特徴、偏差値だけでは判断できない学校の実力（進学実績・カリキュラム）、偏差値の経年変化と人気校の見極め方を完全解説。",
      href: "/column/koukou-hensachi-how/",
      date: "2026-04-07",
    },
    {
      title: "高校の第一志望校の決め方｜偏差値・校風・進学実績で後悔しない学校選び",
      description: "高校の第一志望校を決める3つの基準（学力・校風・進路実績）、偏差値だけで決めてはいけない理由、公立と私立の比較（費用・進学実績・校風の違い）、学校見学・説明会を最大限活用する方法、志望校を絞り込むための具体的なステップ、親と子の意見が合わない場合の調整方法を完全解説。",
      href: "/column/koukou-daiichi/",
      date: "2026-04-07",
    },
    {
      title: "高校の学費・授業料と奨学金ガイド｜公立・私立・通信の費用比較",
      description: "公立高校の年間学費（授業料・PTA費・修学旅行積立：20～50万円）、私立高校の学費（授業料・施設費・教材費：60～150万円）、高等学校等就学支援金制度の仕組み、都道府県別の私立高校補助制度の違い、奨学金・給付型奨学金の申請方法と注意点を完全解説。",
      href: "/column/koukou-gakuhi/",
      date: "2026-04-07",
    },
    {
      title: "高校入試の面接対策｜よく聞かれる質問と回答例・当日の服装マナー",
      description: "高校入試で実施される面接が学校の種類（私立・推薦・公立一部）、よく聞かれる質問10選と回答のコツ、志望動機の答え方、面接練習の方法（学校の先生・塾・オンライン練習）、当日の服装・言葉遣い・マナー、集団面接と個人面接の違いを完全解説。",
      href: "/column/koukou-mensetsu/",
      date: "2026-04-07",
    },
    {
      title: "高校の通学時間と通学方法の選び方｜1時間以内が理想？電車・自転車・バスの実態",
      description: "高校の通学時間の目安（平均30～60分）、電車・自転車・バス・徒歩それぞれの利点と注意点、通学時間を勉強時間に変える方法、遠距離通学（1～2時間）を選ぶ判断基準、自転車通学の学校ルールと安全対策、通学費用の目安と補助制度を完全解説。",
      href: "/column/koukou-tsuugaku/",
      date: "2026-04-07",
    },
    {
      title: "不登校・体調不良のサポートが充実した高校の選び方｜スクールカウンセラーと支援体制",
      description: "不登校・体調不良の生徒を受け入れる高校の種類（通信制・定時制・チャレンジスクール）、スクールカウンセラー・サポートルームの有無と活用方法、全日制高校での不登校対応の現実、不登校経験者の高校選びのポイント、出席日数が進級・卒業に与える影響、通信制・定時制の比較を完全解説。",
      href: "/column/koukou-futoko/",
      date: "2026-04-07",
    },
    {
      title: "音楽・美術・芸術系高校の選び方｜専門的な教育環境と進学先",
      description: "芸術系高校の種類（音楽科・美術科・演劇科・舞踊科）と特徴、普通高校の芸術選択との違い、芸術系大学への進学実績・推薦枠、実技試験対策、ポートフォリオ作成、卒業後の就職・進路の現実を完全解説。",
      href: "/column/koukou-arts/",
      date: "2026-04-07",
    },
    {
      title: "体育・スポーツ系高校の特徴｜スポーツ推薦入学と進路の実態",
      description: "体育科・スポーツ科のある高校の特徴、設備・コーチ陣・練習時間、スポーツ推薦入学の仕組みと条件、文武両道の学校選びポイント、卒業後の進路（体育大学・実業団・プロ）、スポーツ推薦失敗時のリスク対策を完全解説。",
      href: "/column/koukou-sports/",
      date: "2026-04-07",
    },
    {
      title: "高校入学後の大学進学準備｜1年生から始めるべき勉強習慣と情報収集",
      description: "高校1年生から大学進学を意識した勉強習慣の作り方、指定校推薦・総合型選抜に必要な高1～2年の評定維持、英語外部試験の早期対策メリット、文理選択のポイント、オープンキャンパスはいつから行くべきかを完全ガイド。",
      href: "/column/koukou-shingaku/",
      date: "2026-04-07",
    },
    {
      title: "高校生の塾・予備校の選び方｜集団授業・個別指導・映像授業の比較",
      description: "高校生向け塾の種類（大手予備校・個別指導・映像授業・オンライン）と特徴を徹底比較。年間30～100万円の費用相場、高1～高3で変わる塾活用法、部活との両立方法、塾なしで難関大合格できるかを完全解説。",
      href: "/column/koukou-juku/",
      date: "2026-04-07",
    },
    {
      title: "内申点の仕組みと上げ方｜高校受験に必要な評定平均と内申点の目安",
      description: "高校受験で重要な内申点（調査書点）の計算方法、都道府県別の扱い方、内申点を上げるための具体的な勉強方法を解説。志望校別の必要内申点の目安も紹介。",
      href: "/column/koukou-seiseki/",
      date: "2026-04-07",
    },
    {
      title: "内申書（調査書）の仕組みと高校受験への影響｜内申点アップのための具体的な対策",
      description: "高校入試で重要な内申書（調査書）の仕組みを完全解説。記載内容（成績・欠席日数・特別活動・資格）、内申点の計算方法（地域差）、高校受験への影響度（公立一般は当日点+内申点の配分）、内申点を上げるための具体的対策（定期テスト・提出物・授業態度）、欠席・遅刻のマイナス影響、内申点が低い場合の受験戦略を完全ガイド。",
      href: "/column/koukou-naishinsho/",
      date: "2026-04-07",
    },
    {
      title: "高校での勉強方法ガイド｜中学との違いと授業についていくための予習・復習習慣",
      description: "高校の授業と中学の大きな違い（スピード・難度・科目数の増加）、高校1年生がつまずきやすい科目（数学Ⅱ・英文法・古文）と対策、効果的な予習・復習のサイクル、定期テスト対策スケジュールの立て方、スタディサプリなどの映像授業活用法と注意点、進学校と中堅校・普通科での勉強のペース違いを完全ガイド。",
      href: "/column/koukou-benkyou/",
      date: "2026-04-07",
    },
    {
      title: "高校選びで失敗しない相談先ガイド｜塾・学校説明会・先輩情報の活用法",
      description: "高校選びの情報収集方法を徹底ガイド。学校説明会・オープンキャンパス・塾の先生・先輩からの情報を効果的に活用し、最適な高校を選ぶコツを解説。",
      href: "/column/koukou-soudan/",
      date: "2026-04-07",
    },
    {
      title: "高校の体育祭・文化祭・修学旅行の魅力｜高校生活を充実させるイベントガイド",
      description: "高校の主要行事（体育祭・文化祭・修学旅行）の魅力と高校選びへの活かし方を解説。行事への参加度が高校生活の充実度に与える影響と、行事の充実した学校の見分け方を紹介。",
      href: "/column/koukou-event/",
      date: "2026-04-07",
    },
    {
      title: "保護者が知っておくべき高校受験サポート方法｜親ができること・できないこと",
      description: "高校受験を控えた子どもを持つ保護者向けに、受験サポートの正しい方法を解説。親がやるべきこと・避けるべきこと、受験情報の集め方、メンタルサポートのコツを紹介。",
      href: "/column/koukou-oyako/",
      date: "2026-04-07",
    },
    {
      title: "高校数学の勉強法｜数学が苦手な人のための効率的な学習方法",
      description: "高校数学が苦手な人のための効率的な学習法を解説。数ⅠA・数ⅡB・数ⅢCの特徴、基礎から応用への勉強ステップ、問題集の選び方、受験数学の対策法を紹介。",
      href: "/column/koukou-math/",
      date: "2026-04-07",
    },
    {
      title: "高校の校則と学校選びのポイント｜制服・スマホ・アルバイトのルールを比較",
      description: "高校の校則の種類と厳しさの違いを解説。制服・私服、スマホ持参、アルバイト許可の有無など校則の観点から高校を比較する方法と、自分に合った校風の見つけ方を紹介。",
      href: "/column/koukou-school-select/",
      date: "2026-04-07",
    },
    {
      title: "高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法",
      description: "私立高校の特待生制度と奨学金制度の種類・条件・申請方法を解説。授業料免除・一部免除の基準となる学力・スポーツ成績、高校の奨学金と都道府県の支援制度も紹介。",
      href: "/column/koukou-tokutasei/",
      date: "2026-04-07",
    },
    {
      title: "高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策",
      description: "高校の英語教育の変化と大学入試への影響を解説。英語4技能（読む・聞く・書く・話す）重視の流れ、大学入学共通テストの英語問題の特徴、高校での英語力を伸ばす方法を紹介。",
      href: "/column/koukou-english/",
      date: "2026-04-07",
    },
    {
      title: "高校のICT教育・タブレット活用の現状｜1人1台端末時代の高校選び",
      description: "GIGAスクール構想で変わった高校のICT環境（1人1台タブレット）、タブレット・PCを活用した授業スタイル（プログラミング・動画学習・デジタルノート）、ICT教育に力を入れる高校の見分け方、Chromebook・iPad・Windowsの使われ方の違い、ICT活用が大学受験・就職に与える影響を完全解説。",
      href: "/column/koukou-ict/",
      date: "2026-04-07",
    },
    {
      title: "外国語教育に力を入れる高校の選び方｜英語以外の言語教育も充実した学校",
      description: "英語教育が充実した高校の特徴（ネイティブ教師・英検・TOEFL対策）、英語以外の言語（中国語・韓国語・フランス語・スペイン語）の授業がある高校、海外留学プログラム・国際交流が活発な学校の選び方、Super English Language High School（SELHi）の仕組み、語学力重視の大学入試（英語外部試験利用）への対応を完全解説。",
      href: "/column/koukou-language/",
      date: "2026-04-07",
    },
    {
      title: "高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較",
      description: "高校卒業後の主な進路（大学・短大・専門学校・就職・留学）のメリット・デメリットを比較。自分の目標・適性・経済状況に合った進路を選ぶための考え方を解説。",
      href: "/column/koukou-career/",
      date: "2026-04-07",
    },
    {
      title: "偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ",
      description: "高校の偏差値の意味と正しい使い方を解説。模試別の偏差値の違い、偏差値だけに頼らない志望校選びの判断基準、安全校・チャレンジ校のバランスの取り方を紹介。",
      href: "/column/koukou-hensachi/",
      date: "2026-04-07",
    },
    {
      title: "高校から大学受験を見据えた学習計画の立て方",
      description: "高1・高2・高3の各時期にやるべきことを詳しく解説。推薦入試・総合型選抜・一般入試に対応した効果的な学習戦略を、段階的にご紹介します。",
      href: "/column/daigaku-juken/",
      date: "2026-04-07",
    },
    {
      title: "高校生活を充実させる方法｜勉強・部活・友達・行事の両立",
      description: "高校生活の4つの柱（勉強・部活・人間関係・学校行事）のバランスの取り方を解説。時間管理、部活と勉強の両立テクニック、修学旅行・体育祭・文化祭の取り組み方をご紹介。",
      href: "/column/koukou-seikatsu/",
      date: "2026-04-07",
    },
    {
      title: "高校入試の種類と対策｜推薦・一般・特色選抜の違い",
      description: "高校入試の3つの主要な種類（推薦入試・一般入試・特色選抜）について、出願資格、対策方法、面接のポイント、出願スケジュールを詳しく解説。",
      href: "/column/kokosei-nyushi/",
      date: "2026-04-07",
    },
    {
      title: "高校生の効率的な勉強法｜定期テスト・大学受験対策",
      description: "高校生向けの効率的な勉強法を詳しく解説。勉強時間の目安、定期テスト対策、科目別の学習方法、大学受験ロードマップ、スマートフォン対策など。",
      href: "/column/kokosei-study/",
      date: "2026-04-07",
    },
    {
      title: "高校受験にかかるお金の全まとめ｜費用の相場と節約術",
      description: "高校受験にかかる全費用を徹底解説。受験料、塾代、教材費から入学後の費用まで、費用の相場と節約術をご紹介します。",
      href: "/column/juken-kihu/",
      date: "2026-04-07",
    },
    {
      title: "高校受験の塾・予備校の選び方｜個別指導vs集団指導",
      description: "高校受験に向けた塾・予備校選びの完全ガイド。個別指導と集団指導の特徴、オンライン塾の活用、コスト比較、体験授業の活用法を解説します。",
      href: "/column/yobiko-choice/",
      date: "2026-04-07",
    },
    {
      title: "受験のストレスと上手に付き合う方法",
      description: "受験ストレスの対処法、睡眠・栄養の管理、メンタルトレーニング、親とのコミュニケーションなど、心身の健康を保ちながら受験に臨むための完全ガイド。",
      href: "/column/juken-stress/",
      date: "2026-04-07",
    },
    {
      title: "スポーツ推薦で高校に入る方法とポイント",
      description: "スポーツ推薦入試の手続き、必要な準備、成功の秘訣、入学後の両立方法を詳しく解説。スポーツ推薦で志望校に合格するための完全ガイド。",
      href: "/column/koko-sports/",
      date: "2026-04-07",
    },
    {
      title: "偏差値の見方・使い方を徹底解説",
      description: "偏差値とは何か、どのように活用すべきか、初心者からの徹底解説。偏差値の計算方法、見方、そして受験戦略への活かし方を理解しましょう。",
      href: "/column/hensachi-guide/",
      date: "2026-04-07",
    },
    {
      title: "志望校の選び方｜受験校を決める5つの基準",
      description: "自分に最適な志望校を選ぶための5つの重要な基準。学力レベル、学科、教育方針、立地、大学進学実績など、総合的な判断基準をご紹介します。",
      href: "/column/koko-choice/",
      date: "2026-04-07",
    },
    {
      title: "学校見学・体験入学の活用ガイド｜志望校選びに役立てよう",
      description: "学校見学・体験入学を最大限に活用するための完全ガイド。見学のコツ、質問するべき項目、志望校比較方法など、効果的な学校選びのための情報。",
      href: "/column/taiken-nyugaku/",
      date: "2026-04-07",
    },
    {
      title: "高校受験のスケジュール｜中3の年間スケジュール解説",
      description: "中3が知っておくべき高校受験の年間スケジュール。春の基礎固めから冬の追い込みまで、各時期の勉強法と重要ポイントをまとめました。",
      href: "/column/nyushi-schedule/",
      date: "2026-04-07",
    },
    {
      title: "公立高校と私立高校の違い｜費用・教育内容を比較",
      description: "公立高校と私立高校の学費、教育内容、受験方法、校風の違いを徹底比較。あなたに合った学校選びをサポートします。",
      href: "/column/kouritsu-vs-shiritsu/",
      date: "2026-04-07",
    },
    {
      title: "内申点の上げ方｜中学生が今すぐできる具体的な方法",
      description: "内申点を上げるための具体的な方法を解説。定期テスト対策、授業態度、提出物管理など、すぐに実践できるポイントをご紹介します。",
      href: "/column/naishin-up/",
      date: "2026-04-07",
    },
    {
      title: "高校受験の面接対策｜よく出る質問と答え方を解説",
      description: "高校受験の面接対策を徹底解説。よく出る質問・回答例・本番での注意点など、合格につながる面接対策をすべてご紹介します。",
      href: "/column/mensetsu-guide/",
      date: "2026-04-07",
    },
    {
      title: "中学受験の基礎知識｜いつから準備する？費用・日程・学校選びを解説",
      description: "中学受験とは何か、いつから準備すべきか、費用の内訳、志望校の選び方など、中学受験の基礎知識をわかりやすく解説します。",
      href: "/column/chugaku-entrance/",
      date: "2026-04-07",
    },
    {
      title: "高校受験に向けた効果的な勉強法｜教科別攻略と時間管理のコツ",
      description: "高校受験合格に必要な勉強量、教科別の効果的な勉強法、スケジュール管理のコツ、モチベーション維持方法をわかりやすく解説します。",
      href: "/column/study-methods/",
      date: "2026-04-07",
    },
    {
      title: "特色選抜・推薦入試完全ガイド｜受験資格と対策",
      description: "特色選抜・推薦入試の完全ガイド。学校推薦と自己推薦の違い、内申点要件、面接対策、自己PR作成法など、推薦入試で合格するための全知識。",
      href: "/column/tokkoku-guide/",
      date: "2026-04-07",
    },
    {
      title: "高校の部活選び｜入学前に知っておくべきこと",
      description: "高校の部活選びの完全ガイド。部活と勉強の両立方法、主要部活の特徴、顧問の選び方、大学受験への影響など、充実した高校生活のためのポイント。",
      href: "/column/bukatsu-choise/",
      date: "2026-04-07",
    },
    {
      title: "高校生のバイトと勉強の両立｜受験に影響しない働き方",
      description: "高校生がバイトと勉強を両立させるための実践的なガイド。時間管理、バイト先選び、受験期の対策など、受験に影響しない効果的な働き方。",
      href: "/column/kokosei-baito/",
      date: "2026-04-07",
    },
    {
      title: "通信制高校と定時制高校の違い｜どちらを選ぶべきか徹底比較",
      description: "通信制高校と定時制高校の仕組みや違いを徹底比較。学費・卒業要件・進学実績・向いている人の特徴を解説し、どちらを選ぶべきか判断できるガイドを提供。",
      href: "/column/tsushinsei-koukou/",
      date: "2026-04-07",
    },
    {
      title: "高校の学校説明会・オープンキャンパスを最大限活用する方法",
      description: "高校受験を控えた中学生向けに、学校説明会とオープンキャンパスの違い、参加前の準備、当日の確認ポイント、複数校を比較するコツを解説。",
      href: "/column/koukou-setsumeikai/",
      date: "2026-04-07",
    },
    {
      title: "高校の推薦入試対策｜学校推薦型・総合型選抜の違いと面接のコツ",
      description: "高校受験の推薦入試（学校推薦型・総合型選抜）の仕組みと対策を解説。内申点の重要性、志望動機の書き方、面接の準備方法まで詳しく紹介。",
      href: "/column/suisen-nyushi/",
      date: "2026-04-07",
    },
    {
      title: "高校の部活動選び｜勉強との両立と進路への影響",
      description: "高校の部活動の選び方と勉強との両立方法を解説。文化系・体育系の特徴から、部活動が大学受験・進路選択に与える影響、時間管理のコツまで詳しく紹介。",
      href: "/column/koukou-bukatsu/",
      date: "2026-04-07",
    },
    {
      title: "高校の転校・転入手続きガイド｜公立・私立・通信制それぞれの方法",
      description: "高校を転校・転入する際の手続きと必要書類を解説。公立高校・私立高校・通信制高校への転入方法の違い、転校後の単位認定、在籍期間の扱いについて紹介。",
      href: "/column/koukou-tenko/",
      date: "2026-04-07",
    },
    {
      title: "高校で留年・退学になりそうな場合の対処法｜代替進路の選択肢",
      description: "高校で留年・退学の危機にある場合の対処法と代替進路を解説。出席日数・単位不足への対応、高卒認定試験の活用、通信制への転校、高校中退後の進路選択肢を紹介。",
      href: "/column/koukou-ryuunen/",
      date: "2026-04-07",
    },
  ];

  return (
    <>
      <SEO
        title="高校受験コラム | School Station"
        description="高校受験に役立つコラム記事を掲載。偏差値の見方、志望校選びのコツ、入試対策など、受験生に必要な情報をわかりやすく解説します。"
        canonical="/column/"
        breadcrumbs={breadcrumbs}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "高校受験コラム",
            "description": "高校受験に役立つコラム記事の一覧",
            "url": "https://school-station.com/column/",
            "hasPart": articles.map((article) => ({
              "@type": "Article",
              "headline": article.title,
              "description": article.description,
              "url": `https://school-station.com${article.href}`,
              "datePublished": article.date,
            })),
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
            mb: 5,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校受験コラム
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            志望校選び、偏差値の活用方法、受験対策まで、受験生に役立つ情報をお届けします
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(1, 1fr)" }, gap: 3 }}>
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid #E0E0E0",
                  borderLeft: "4px solid #FF6F00",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    transform: "translateY(-4px)",
                    borderLeftColor: "#E65100",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                  <Typography variant="caption" sx={{ color: "#666", fontSize: "0.85rem" }}>
                    {new Date(article.date).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    fontWeight: 700,
                    color: "#0D47A1",
                    mb: 1.5,
                    lineHeight: 1.4,
                  }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6, mb: 2 }}>
                  {article.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#FF6F00", fontWeight: 600, fontSize: "0.95rem" }}>
                  詳しく読む
                  <ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />
                </Box>
              </Paper>
            </Link>
          ))}
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            全国の高校情報をチェック
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            全国の高校偏差値ランキングで、志望校を探しましょう。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="a"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#FF6F00",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { bgcolor: "#E65100", transform: "translateY(-1px)" },
                transition: "all 0.2s",
              }}
            >
              高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
