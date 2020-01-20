import React from 'react';

export const BackgroundImage = () => (
  <img
    src="./forest-silhouette.jpg"
    style={{
      position: 'absolute',
      zIndex: '-1',
      bottom: '-42%',
      left: 0,
      width: '100%',
      opacity: 0.75,
    }}
  />
);
