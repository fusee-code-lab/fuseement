<div align="center">
  <img src="./logo.png" width="200px"/>
   <h1 align="center">fuseement</h1>
</div>

## Packages

| Package | Description |
| --- | --- |
| [@fuseement/client-components](./packages/client-components) | Svelte/Vanilla JS component |
| [@fuseement/react-components](./packages/react-components) |  React component |
| [@fuseement/vue-components](./packages/vue-components) | Vue component |

## Contribution

### 🚗 如何开始?

- 使用 `yarn install` 安装依赖包
- 前端组件 package 在 `packages/client-components/lib` 下
- 运行命令 `yarn dev` 启动 `storybook` 来查看组件效果，此时更改组件会热更新
- 运行命令 `yarn start` 启动 fuseement 站点
- 运行命令 `yarn build:client` 打包 svelte 组件 到 `packages/client-components/dist` 下
- 运行 `yarn build:react` 打包 react 组件到 `packages/react-components/dist` 下
- 运行 `yarn build:vue` 打包 react 组件到 `packages/vue-components/dist` 下
- 运行 `yarn fix:prettier` 来格式化所有代码

### 📦 How to install package ?

```bash
# 添加全局可用的依赖, 添加 -D 来安装开发依赖
yarn add your-depencency -W
# 安装依赖到指定包, 添加 -D 来安装开发依赖
lerna add your-depencency --scope=pakcage-name
# 安装所有依赖，相当于 npm install
lerna bootstrap --hoist
```
