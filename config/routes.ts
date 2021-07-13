/*
 * @Author: your name
 * @Date: 2021-07-13 10:29:08
 * @LastEditTime: 2021-07-13 15:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\config\routes.ts
 */
export default [
  {
    path:'/login',
    component:'@/pages/login/index'
  },
  {
    path:'/',
    name:'首页',
    icon: 'index',
    component:'@/pages/index/index'
  },
  {
    path: '/users',
    name: '用户管理',
    icon: 'UserOutlined',
    component: '@/pages/users/index',
  },
  {component: '@/pages/404/index'},
]
