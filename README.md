<div align="center">
  <img src="./logo.png" width="200px"/>
   <h1 align="center">fuseement</h1>
</div>

## Packages

| Package                                                      | Status                                                        | Description                 |
| ------------------------------------------------------------ | ------------------------------------------------------------- | --------------------------- |
| [@fuseement/client-components](./packages/client-components) | ![status](https://shields.io/badge/-under_development-yellow) | Svelte/Vanilla JS component |
| [@fuseement/react-components](./packages/react-components)   | ![status](https://shields.io/badge/-under_development-yellow) | React component             |
| [@fuseement/vue-components](./packages/vue-components)       | ![status](https://shields.io/badge/-under_development-yellow) | Vue component               |
| [@fuseement/server-api](./packages/server-api)               | ![status](https://shields.io/badge/-under_development-yellow) | Vercel serverless function  |
| [@fuseement/dashboard](./packages/dashboard)                 | ![status](https://shields.io/badge/-under_development-yellow) | The dashboard site          |

## Contribution


### 🚗 如何开始?

- 使用 `yarn install` 安装依赖包
- 前端组件 package 在 `packages/client-components/lib` 下
- 运行 `yarn start` 启动 fuseement 文档网站及其主页
- 运行 `yarn dev:client` 启动 `storybook` 来查看组件效果，此时更改组件会热更新
- 运行 `yarn dev:api` 启动 vercel 本地调试模式
- 运行 `yarn dev:dash` 启动仪表盘站点
- 运行 `yarn build:client` 打包 svelte 组件 到 `packages/client-components/dist` 下
- 运行 `yarn build:react` 打包 react 组件到 `packages/react-components/dist` 下
- 运行 `yarn build:vue` 打包 react 组件到 `packages/vue-components/dist` 下
- 运行 `yarn fix:prettier` 来格式化所有代码

### 📦 如何安装包 ?

```bash
# 添加全局可用的依赖, 添加 -D 来安装开发依赖
yarn add your-depencency -W
# 安装依赖到指定包, 添加 -D 来安装开发依赖
lerna add your-depencency --scope=pakcage-name
# 安装所有依赖，相当于 npm install
lerna bootstrap
```


### 🤔️ Q&A

#### Cannot find module '@fuseement/client-components'

提示找不到 `@fuseement/client-components` 的 ts 定义文件，运行 `yarn build:client` 就可以

#### Storybook 运行失败

Storybook 运行访问后页面上只有 `Cannot Get /`，尝试运行 `dev:client-force`