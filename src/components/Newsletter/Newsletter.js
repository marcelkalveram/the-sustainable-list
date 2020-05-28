import React, { useEffect, useState } from 'react';
import { colors } from '../../config/constants';
import {
  majorScale,
  Icon,
  Pane,
  Paragraph,
  TextInput,
  Button,
  minorScale,
} from 'evergreen-ui';
import { styles, className } from './styles.js';

export const Newsletter = () => {
  const [showNewsletter, setShowNewsLetter] = useState(false);
  const [fadeInNewsletter, setFadeInNewsletter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNewsLetter(true);
      setTimeout(() => setFadeInNewsletter(true), 100);
    }, 1);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!showNewsletter) {
    return null;
  }

  return (
    <>
      <Pane
        className={`newsletter ${className}`}
        zIndex={1}
        background={colors.white}
        display={showNewsletter ? 'flex' : 'none'}
        opacity={fadeInNewsletter ? 1 : 0}
        style={{
          transition: 'opacity 1s',
          border: `1px dashed ${colors.secondary}`,
        }}
        justifyContent="space-between"
        alignItems="center"
        marginRight={majorScale(2)}
        marginLeft="40px"
        marginTop={majorScale(2)}
        paddingX="0"
        paddingY={majorScale(2)}
        backgroundColor="rgba(84,137,142,0.1)"
        padding={majorScale(2)}
        borderRadius={12}
        position="relative"
      >
        <Pane
          className="newsletter__left"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Icon
            icon="cell-tower"
            color={colors.secondarySoft}
            size={24}
            marginRight={majorScale(2)}
            marginLeft={majorScale(1)}
          />
          <Paragraph
            color={colors.secondarySoft}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            Want to receive the latest news from The Sustainable List, brand
            updates and discounts in the future?
          </Paragraph>
        </Pane>
        <Pane className="newsletter__right" display="flex" flexDirection="row">
          <Paragraph
            color={colors.secondarySoft}
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginRight={majorScale(1)}
          >
            <Icon
              icon="hand-right"
              color={colors.secondarySoft}
              marginRight={majorScale(1)}
              marginLeft={majorScale(2)}
            />
            Sign up for our newsletter:
          </Paragraph>
          <Pane className="newsletter__right__cta">
            <TextInput
              style={{
                backgroundColor: colors.white,
                boxShadow: 'none',
              }}
              name="text-input-name"
              placeholder="Your e-mail address"
              marginRight={majorScale(1)}
              marginLeft={majorScale(1)}
            />
            <Button>Subscribe</Button>
          </Pane>
        </Pane>
        <Pane
          display="flex"
          position="absolute"
          right={-majorScale(1)}
          top={-majorScale(1)}
          backgroundColor="#EFF3F3"
          padding={minorScale(1)}
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          onClick={() => setShowNewsLetter(false)}
          cursor="pointer"
        >
          <Icon size={14} icon="cross" color={colors.secondary} />
        </Pane>
      </Pane>
      {styles}
    </>
  );
};
