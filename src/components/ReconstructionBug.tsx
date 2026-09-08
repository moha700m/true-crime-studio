import React from 'react';
import {theme} from '../styles/theme';

export const ReconstructionBug: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: 54,
      left: 60,
      padding: '10px 16px',
      border: `1px solid ${theme.colors.red}`,
      color: theme.colors.white,
      background: 'rgba(7,7,7,0.82)',
      fontFamily: theme.fontFamily,
      fontSize: 18,
      letterSpacing: 1.2
    }}
  >
    DRAMATIZED RECONSTRUCTION • إعادة تمثيل
  </div>
);
