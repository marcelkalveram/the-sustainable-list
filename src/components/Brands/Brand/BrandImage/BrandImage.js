import React from 'react';
import { Pane, minorScale } from 'evergreen-ui';

const DEFAULT_IMAGE =
  '//images.ctfassets.net/hfvaxsztohci/5F8GCHPzqNPyyFyRBt8Z34/7639bd473a33e5e8515dc27dbc53f241/70911900_243466726561461_1687436012864667648_o.jpg';

export const BrandImage = ({ children, image }) => {
  const imageUrl = image ? image.fields.file.url : DEFAULT_IMAGE;

  return (
    <Pane
      width="100%"
      height="200px"
      overflow="hidden"
      position="relative"
      zIndex="-1"
      borderRadius={minorScale(3)}
    >
      <img
        src={imageUrl}
        alt="Brand: TODO"
        style={{
          position: 'absolute',
          width: '100%',
          top: '0',
          left: '0',
        }}
      />
      {children}
    </Pane>
  );
};
