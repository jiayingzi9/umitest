/*
 * @Author: your name
 * @Date: 2021-07-13 11:41:02
 * @LastEditTime: 2021-07-15 14:25:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\config\host.ts
 */
import{isDevNoMock, isPrd, isPrdDev} from '../utils/env';

// API host
let APIHost = '' // 默认为本地运行 mock
if (isDevNoMock) APIHost = 'http://localhost:3003' // 本地，不用 mock
if (isPrdDev) APIHost = 'http://127.0.0.1:9000' // 测试机，在这里用的是本地环境
if (isPrd) APIHost = '' // 线上环境，用当前域名即可




export{APIHost}