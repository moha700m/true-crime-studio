import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {ChapterCard} from '../components/ChapterCard';
import {theme} from '../styles/theme';

export const SarahKhalifa: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.black}}>
      <Sequence from={0} durationInFrames={300}>
        <ChapterCard
          kicker="القاهرة • 5 سبتمبر 2026"
          title="حُكم عليها بالإعدام… لكن هذه ليست بداية القصة."
          subtitle="نسخة تأسيسية للمشروع. استبدل بطاقات الفصول بالمشاهد والأرشيف والصوت بعد اعتماد السيناريو النهائي."
        />
      </Sequence>
      <Sequence from={300} durationInFrames={300}>
        <ChapterCard
          kicker="REWIND"
          title="كيف وصلت القصة إلى هنا؟"
          subtitle="القاعدة التحريرية: نفرّق دائمًا بين الوقائع المثبتة، اتهامات النيابة، أقوال الدفاع، وإعادة البناء البصري."
        />
      </Sequence>
      <Sequence from={600} durationInFrames={300}>
        <ChapterCard
          kicker="TRUE CRIME STUDIO"
          title="الفيلم الأول: سارة خليفة"
          subtitle="الهدف: فيلم تحقيق عربي أصلي، لا نسخة من الفيديو المرجعي."
        />
      </Sequence>
    </AbsoluteFill>
  );
};
