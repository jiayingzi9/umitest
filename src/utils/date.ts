/*
 * @Author: your name
 * @Date: 2021-07-15 11:04:57
 * @LastEditTime: 2021-07-15 11:09:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\date.tsx
 */
/**
 * @description: 封装日期工具
 * @param {*}
 * @return {*}
 */
 import { format } from 'date-fns'

 /**
  * @description: 格式化时间 yyyy-MM-dd HH:mm:ss
  * @param {*} day 时间
  * @return {*}
  */
export function formatTime(day:any):string{
    const date = new Date(day);
    return format(date,'yyyy-MM-dd HH:mm:ss')
}

/**
 * @description: 格式化时间 yyyy-MM-dd
 * @param {*}
 * @return {*}
 */
export function formatDate(day:any):string{
    const date = new Date(day);
    return format(date,'yyyy-MM-dd')
}
/**
 * @description: 格式化时间 MM-dd
 * @param {*}
 * @return {*}
 */
export function formatDay(day:any):string{
    const date = new Date(day);
    return format(date,'MM-dd')
}
