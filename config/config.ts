/*
 * @Author: your name
 * @Date: 2021-07-13 10:26:25
 * @LastEditTime: 2021-07-18 16:30:08
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
  // 安装完@ant-design/pro-layout左侧会出现菜单栏，只需要在config.ts和路由里面配置就行
  layout: {
    // 需要提前安装 @ant-design/pro-layout
    title: 'umijstest',
    logo: '/logo.png',
  },
  
  // 定义全局变量
  define:{
    'process.env.ENV':'dev'
  },
  // 配置代理能力
  //配置完成之后,不需要访问http://public-api-v1.aspirantzhang.com,直接访问http://localhost:8000/api/users
  proxy: {
    '/api': {
      'target': 'http://public-api-v1.aspirantzhang.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  fastRefresh: {},
});
