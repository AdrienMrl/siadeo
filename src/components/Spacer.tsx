import React from 'react';

// size in pixels
interface SpacerProps {
  width?: number;
  height?: number;
}

const Spacer = ({ width, height }: SpacerProps) => (
  <div
    style={{ width: width && `${width}px`, height: height && `${height}px` }}
  />
);

export default Spacer;
