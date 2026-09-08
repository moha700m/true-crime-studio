export type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  seconds: number;
};

export const chapters: Chapter[] = [
  {id: 'cold-open', title: 'الحكم', subtitle: 'نبدأ من النتيجة ثم نرجع للخلف', seconds: 32},
  {id: 'before-fame', title: 'قبل القضية', subtitle: 'الإعلام والصورة العامة قبل الانفجار الإعلامي', seconds: 150},
  {id: 'turn', title: 'تغيّر اللعبة', subtitle: 'الأشخاص والعلاقات والقرارات التي غيّرت المسار', seconds: 220},
  {id: 'network', title: 'الشبكة', subtitle: 'خريطة الأدوار والاتهامات كما وردت في أوراق القضية', seconds: 300},
  {id: 'break', title: 'الخطأ', subtitle: 'النقطة التي بدأت تكشف الخيوط', seconds: 180},
  {id: 'raid', title: 'المداهمة', subtitle: 'التحريات والضبط دون اختلاق لقطات توحي بأنها أصلية', seconds: 220},
  {id: 'evidence', title: 'ملف الأدلة', subtitle: 'الشهود والأدلة الفنية والرقمية المنسوبة للنيابة', seconds: 240},
  {id: 'court', title: 'المحكمة', subtitle: 'الحكم الصادر في 5 سبتمبر 2026 وما بعده قانونيًا', seconds: 260}
];
