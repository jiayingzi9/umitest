/*
 * @Author: your name
 * @Date: 2021-07-13 11:41:56
 * @LastEditTime: 2021-07-13 16:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\service\admin.ts
 */
/**
 * @description: 获取数据
 * @param {*}
 * @return {*}
 */
import{axiosGet} from '../utils/ajax'
import{APIHost}from '../config/host'

/**
 * @description: 获取用户信息
 * @param {*}
 * @return {*}
 */
export async function getUserInfo():Promise<any>{
    const url = `${APIHost}/api/admin/getUserInfo`
    const data = await axiosGet(url)
    return data
}

