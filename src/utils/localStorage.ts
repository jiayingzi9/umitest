/*
 * @Author: your name
 * @Date: 2021-07-14 17:48:05
 * @LastEditTime: 2021-07-14 17:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\localStorage.ts
 */
/**
 * @description: 设置本地存储localStorage.setItem
 * @param {*}
 * @return {*}
 */
// Try...Catch 语句,测试代码中的错误
// try{
//    //在此运行代码
// }
// catch(err){
//    //在此处理错误
// }
export function setItem(key:string,val:string):void{
    try{
        localStorage.setItem(key, val)
    }catch(ex){
        const info = 'localStorage.setItem 错误'
        console.error(info, ex)
        throw new Error(info)
    }
}

/**
 * @description: 获取本地存储
 * @param {*}
 * @return {*}
 */
export function getItem(key:string):string{
    return localStorage.getItem(key) || ''
}