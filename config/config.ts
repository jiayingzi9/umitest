/*
 * @Author: your name
 * @Date: 2021-07-13 10:26:25
 * @LastEditTime: 2021-07-13 10:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\config\config.ts
 */
import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,//路由配置
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // 定义全局变量
  define:{
    'process.env.ENV':'dev'
  },
  fastRefresh: {},
});
