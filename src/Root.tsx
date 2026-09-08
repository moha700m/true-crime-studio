import React from 'react';
import {Composition} from 'remotion';
import {SarahKhalifa} from './compositions/SarahKhalifa';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="SarahKhalifa"
        component={SarahKhalifa}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
