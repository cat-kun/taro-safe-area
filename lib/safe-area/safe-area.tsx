import React from 'react';
import { View } from '@tarojs/components';
import './safe-area.less';
import classNames from 'classnames';

interface SafeAreaProps {
  position: 'top' | 'bottom';
}

/**
 * SafeArea 安全区
 * @param props 安全区的位置 'top' | 'bottom'
 * @returns
 */
const SafeArea = (props: SafeAreaProps) => {
  return (
    <>
      {props?.position === 'top' && (
        <View className={classNames('safe-area-top', 'safe-area')} />
      )}
      {props?.position === 'bottom' && (
        <View className={classNames('safe-area-bottom', 'safe-area')} />
      )}
    </>
  );
};

export default SafeArea;
