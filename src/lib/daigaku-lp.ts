export type Department = {
  name: string;
  duration: string;
  admissionCapacity: string;
};

export type Faculty = {
  name: string;
  slug: string;
  departments: Department[];
  prefecture: string;
  city: string;
  duration: string;
  admissionCapacity: number;
};

export type Campus = {
  name: string;
  address: string;
  phone: string;
};

export type University = {
  slug: string;
  name: string;
  englishName: string;
  sector: string;
  schoolCode: string;
  prefecture: string;
  address: string;
  phone: string;
  campuses: Campus[];
  faculties: Faculty[];
};

export function universityHref(university: University) {
  return `/daigakujyukentaisaku/${university.slug}/`;
}

export function facultyHref(university: University, faculty: Faculty) {
  return `/daigakujyukentaisaku/${university.slug}/${faculty.slug}/`;
}

export function facultyCategory(facultyName: string) {
  if (/看護|医療|保健|リハビリ|薬|歯|獣医|生命|栄養/.test(facultyName)) {
    return {
      label: "医療・看護系",
      point: "国家資格や職種理解、面接での志望理由の具体性が差になりやすい系統です。",
      subjects: "英語・数学・理科の基礎固めに加え、推薦・総合型では志望理由書と面接対策を早めに進める必要があります。",
      interview: "なぜその職種を目指すのか、患者支援やチーム医療をどう理解しているかを、自分の経験と結びつけて説明できる状態が有効です。",
    };
  }
  if (/工|理工|情報|理|農|環境/.test(facultyName)) {
    return {
      label: "理系",
      point: "数学・理科の得点安定と、学科ごとの研究分野への理解が重要な系統です。",
      subjects: "数学の標準問題、英語長文、理科の分野別演習を早期に分け、共通テスト利用と一般選抜の両方で得点源を作る必要があります。",
      interview: "学びたい分野、将来扱いたいテーマ、高校で取り組んだ探究や課題研究を具体的に話せる状態が有効です。",
    };
  }
  if (/法|経済|経営|商|社会|国際|文|外国語|教育|心理/.test(facultyName)) {
    return {
      label: "文系",
      point: "英語・国語・社会の得点設計と、志望理由の一貫性が重要な系統です。",
      subjects: "英語長文、現代文、選択社会の基礎を早めに固め、推薦・総合型では小論文や面接で学部理解を示す必要があります。",
      interview: "その学部で学ぶ理由、社会課題への関心、高校生活での経験を大学の学びにつなげて説明できる状態が有効です。",
    };
  }
  return {
    label: "総合系",
    point: "学部内の学科差が大きく、受験方式と科目選択を早めに整理する必要がある系統です。",
    subjects: "英語・国語・数学・理科・社会のうち、大学が指定する科目と自分の得点源を照らし合わせて学習順を決める必要があります。",
    interview: "学びたい内容と将来像を具体化し、志望理由書・面接・小論文で同じ軸を示せる状態が有効です。",
  };
}
