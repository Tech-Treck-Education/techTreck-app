import React from 'react';
import {Image as RNImage} from 'react-native';

// import {Post} from '@domain';

// const WIDTH = Dimensions.get('screen').width;

// type Props = Pick<Post, 'imageURL'>;
export function Image({
  imageURL,
  width = 100,
  height = 100,
  borderRadius = 12,
}: {
  imageURL: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}) {
  return (
    <RNImage
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}
