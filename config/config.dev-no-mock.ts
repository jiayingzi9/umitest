/*
 * @Author: your name
 * @Date: 2021-07-14 18:23:25
 * @LastEditTime: 2021-07-14 18:23:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\config\config.dev-no-mock.ts
 */
export default{
    mock:false,
     // 定义全局变量
     define: {
        'process.env.ENV': 'dev-no-mock',
    },
}