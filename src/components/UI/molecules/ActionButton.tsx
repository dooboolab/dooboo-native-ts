import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Button from '../atoms/Button';
import ButtonDisabled from '../atoms/ButtonDisabled';
import ButtonLoading from '../atoms/ButtonLoading';
import type {FC} from 'react';
import React from 'react';

interface Props {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: ImageSourcePropType;
  imgLeftStyle?: StyleProp<ImageStyle>;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

const ActionButton: FC<Props> = ({
  testID,
  isLoading,
  isDisabled,
  onPress,
  style,
  disabledStyle,
  textStyle,
  imgLeftSrc,
  imgLeftStyle,
  indicatorColor,
  activeOpacity,
  text,
}) => {
  if (isDisabled)
    return <ButtonDisabled style={disabledStyle} textStyle={textStyle} />;

  if (isLoading) return <ButtonLoading indicatorColor={indicatorColor} />;

  return (
    <Button
      testID={testID}
      onPress={onPress}
      imgLeftSrc={imgLeftSrc}
      style={style}
      imgLeftStyle={imgLeftStyle}
      activeOpacity={activeOpacity}
      text={text}
      textStyle={textStyle}
    />
  );
};

export default ActionButton;
