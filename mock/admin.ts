/*
 * @Author: your name
 * @Date: 2021-07-13 16:22:38
 * @LastEditTime: 2021-07-13 16:24:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\mock\admin.ts
 */
export default{
    'GET /api/admin/getUserInfo':{
        errno:0,
        data:{
            username:'mock测试数据'
        }
        // errno: 1,
        // message: '未登录',
    },
    'POST /api/admin/login':{
        errno:0,
        data:{
            token:'xxxxx'
        }
    }
}
