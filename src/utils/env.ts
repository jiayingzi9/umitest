/*
 * @Author: your name
 * @Date: 2021-07-13 16:10:46
 * @LastEditTime: 2021-07-13 16:13:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\env.ts
 */
/**
 * @description: 定义环境变量
 * @param {*}
 * @return {*}
 */
export const ENV=process.env.ENV
export const isPrd=ENV==='production'
export const isPrdDev = ENV === 'prd_dev'
export const isDev = ENV === 'dev'
export const isDevNoMock = ENV === 'dev-no-mock'
export const isTest = ENV === 'test'


