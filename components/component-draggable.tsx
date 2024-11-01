
'use client'

import { useDrag } from '@use-gesture/react';
import { useState } from 'react';

function ComponentDraggable() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bind = useDrag((params) => {
    setPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  return (
    <div
      {...bind()}
      style={{
        width: 100,
        height: 100,
        background: 'lightblue',
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    />
  );
}

export default ComponentDraggable