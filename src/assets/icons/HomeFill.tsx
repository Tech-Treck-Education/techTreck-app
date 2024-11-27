import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {IconBase} from '@components';

export function HomeFill({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      <Path
        d="M19.7323 8.82109L11.3989 0.487769C11.0864 0.175445 10.6627 0 10.2208 0C9.77899 0 9.35523 0.175445 9.0427 0.487769L0.709377 8.82109C0.553861 8.97546 0.430584 9.15919 0.346714 9.36163C0.262845 9.56406 0.220056 9.78114 0.220836 10.0003V20.0002C0.220836 20.2213 0.308633 20.4332 0.464913 20.5895C0.621193 20.7458 0.833155 20.8336 1.05417 20.8336H7.72083C7.94184 20.8336 8.1538 20.7458 8.31008 20.5895C8.46636 20.4332 8.55416 20.2213 8.55416 20.0002V14.1669H11.8875V20.0002C11.8875 20.2213 11.9753 20.4332 12.1316 20.5895C12.2878 20.7458 12.4998 20.8336 12.7208 20.8336H19.3875C19.6085 20.8336 19.8205 20.7458 19.9767 20.5895C20.133 20.4332 20.2208 20.2213 20.2208 20.0002V10.0003C20.2216 9.78114 20.1788 9.56406 20.0949 9.36163C20.0111 9.15919 19.8878 8.97546 19.7323 8.82109ZM18.5542 19.1669H13.5542V13.3336C13.5542 13.1126 13.4664 12.9006 13.3101 12.7443C13.1538 12.5881 12.9418 12.5003 12.7208 12.5003H7.72083C7.49981 12.5003 7.28785 12.5881 7.13157 12.7443C6.97529 12.9006 6.8875 13.1126 6.8875 13.3336V19.1669H1.8875V10.0003L10.2208 1.66693L18.5542 10.0003V19.1669Z"
        fill={color}
      />
    </Svg>
  );
}