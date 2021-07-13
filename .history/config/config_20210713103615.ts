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
  fastRefresh: {},
});
