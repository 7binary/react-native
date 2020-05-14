import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const BadgeIcon = (props: any) => {
  const {badge, badgeTheme} = props;
  const isDarkTheme = badgeTheme && badgeTheme === 'dark';
  const backgroundColor = isDarkTheme ? '#DDDD16' : '#DDDD16';
  const borderColor = isDarkTheme ? '#BBB' : '#BBB';
  const fontSize = 12;

  const badgeStyle: any = {
    borderColor,
    backgroundColor,
    fontSize,
    fontWeight: 'bold',
    width: 20,
    height: 20,
    lineHeight: 18,
    borderRadius: 10,
    borderWidth: 0.5,
    overflow: 'hidden',
    textAlign: 'center',
    position: 'absolute',
    top: -8,
    right: -4,
  };

  return (
    <View>
      <Ionicons {...props}/>
      {typeof badge === 'number' && badge !== 0 && <Text style={badgeStyle}>{badge}</Text>}
    </View>
  );
};

export default BadgeIcon;