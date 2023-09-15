import React from 'react';
import { View } from '@tarojs/components';
import './index.less';

/**
 * SafeArea 安全区
 * @returns
 */
const SafeArea = () => {
  return (
    <>
      <View className='safe-area-bottom safe-area' />
    </>
  );
};

export default SafeArea;
