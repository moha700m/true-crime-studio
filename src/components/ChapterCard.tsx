import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export const ChapterCard: React.FC<Props> = ({kicker, title, subtitle}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.black,
        color: theme.colors.white,
        fontFamily: theme.fontFamily,
        direction: 'rtl',
        justifyContent: 'center',
        padding: '0 150px'
      }}
    >
      <div
        style={{
          opacity: interpolate(frame, [0, 0.45 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1)
          }),
          translate: interpolate(frame, [0, 0.6 * fps], ['0 34px', '0 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1)
          })
        }}
      >
        <div style={{fontSize: 28, letterSpacing: 2, color: theme.colors.red, marginBottom: 22}}>{kicker}</div>
        <div style={{fontSize: 118, fontWeight: 800, lineHeight: 1.02, maxWidth: 1300}}>{title}</div>
        {subtitle ? (
          <div style={{fontSize: 34, lineHeight: 1.6, color: theme.colors.muted, maxWidth: 1100, marginTop: 28}}>
            {subtitle}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
