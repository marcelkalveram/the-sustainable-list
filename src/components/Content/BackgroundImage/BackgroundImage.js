import React from 'react';
import { className, styles } from './styles';

export const BackgroundImage = () => (
  <>
    <img
      className={`background-image ${className}`}
      src="./forest-silhouette.jpg"
      style={{
        position: 'relative',
        zIndex: '-1',
        width: '100%',
        opacity: 0.75,
        marginTop: '-10vw',
      }}
    />
    {styles}
  </>
);
