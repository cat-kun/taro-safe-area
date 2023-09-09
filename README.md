# Taro SafeArea 安全区

在全面屏下提供自适应的边距调整。

## 说明

> SafeArea 组件是用来在全面屏下提供自适应的边距调整，它的底层实现其实是 env(safe-area-inset-xxx)。

- 兼容 Taro 3.x
- 兼容 node 16.x
- 兼容微信小程序

## 安装

```ssh
# npm
npm i taro-safe-area -D
```

```ssh
# pnpm
pnpm i taro-safe-area -D
```

```ssh
# yarn
yarn add taro-safe-area -D
```

## 示例

```tsx
import SafeArea from 'taro-safe-area';

export default () => {
  return (
    <View>
      <SafeArea />
    </View>
  );
};
```
