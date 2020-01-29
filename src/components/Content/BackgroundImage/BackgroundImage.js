import React from 'react';
import { className, styles } from './styles';

export const BackgroundImage = () => (
  <>
    <img
      className={`background-image ${className}`}
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
    {styles}
  </>
);
