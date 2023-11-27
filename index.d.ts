import * as React from 'react';
import { ImageProps, StyleProp } from 'react-native';

interface TSource {
    uri: string;
  }

export interface AutoHeightImageProps extends ImageProps {
    source: number | TSource;
    width: number;
    style?: StyleProp<any>;
  }

declare class AutoHeightImage extends React.Component<
  AutoHeightImageProps,
  any
> {}
export default AutoHeightImage;
