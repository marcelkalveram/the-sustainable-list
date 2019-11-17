import React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import { majorScale, minorScale } from 'evergreen-ui/commonjs/scales';
import { Text } from 'evergreen-ui';
import { Instagram } from '../images/index';
import { Link } from 'evergreen-ui/commonjs/typography';

const InstaGridComponent = ({ classes, media, account, status }: Props) => {
  if (media && status === 'completed') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: majorScale(6),
          marginRight: majorScale(2),
          marginTop: majorScale(2),
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: minorScale(1),
            backgroundColor: '#E4E7EB',
          }}
        >
          {media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
            <a href={postLink || `https://www.instagram.com/${account}/`}>
              <img
                width={60}
                height={60}
                style={{ marginRight: '1px' }}
                src={displayImage}
                alt={accessibilityCaption || 'Instagram picture'}
              />
            </a>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: minorScale(1),
            paddingLeft: minorScale(4),
            paddingRight: minorScale(4),
            backgroundColor: '#E4E7EB',
            borderLeft: '1px solid #F9F9FB',
          }}
        >
          <img
            width={24}
            height={24}
            style={{ marginRight: minorScale(3) }}
            src={Instagram}
          />
          <Text color="#425A70" size={300}>
            For more photos, inspiration and advice on <b>sustainability</b> and{' '}
            <b>great brands</b>,{' '}
            <a href="https://www.instagram.com/thesustainablelist/">
              follow us on Instagram...
            </a>
          </Text>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

InstaGridComponent.defaultProps = {
  media: undefined,
};

export const InstaGrid = withInstagramFeed(InstaGridComponent);
