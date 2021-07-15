/*
 * @Author: your name
 * @Date: 2021-07-15 14:44:45
 * @LastEditTime: 2021-07-15 17:11:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\config\config.dev.ts
 */
export default {
    mock: false,

    // 定义全局变量
    define: {
        'process.env.ENV': 'prd_dev',
    },
}
