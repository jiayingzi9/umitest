/*
 * @Author: your name
 * @Date: 2021-07-13 11:39:14
 * @LastEditTime: 2021-07-15 16:06:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\ajax.tsx
 */
// jwt
// Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).
// 该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。
// JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，
// 以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密
import axios, { AxiosRequestConfig, Method } from 'axios'
import { TOKEN_KEY_LOCAL_STORAGE } from '../utils/constants';//常量
import { getItem,setItem } from './localStorage';
// TypeScript下拓展AxiosRequestConfig类型定义

/**
 * @description: 获取token,设置 jwt-token到 localStorage
 * @param {*}
 * @return {*}
 */
export function setAuthorizationToken(token:string):void{
    setItem(TOKEN_KEY_LOCAL_STORAGE,token)
}

/**
 * @description: 封装同一的axios方法,定义函数customAxios,返回Promise对象
 * @param {*}
 * @return {*}
 */
async function customAxios(
    method:Method ='get',
    url:string = '',
    dataOrParams:Object={},
    headers:Object={}
):Promise<any>{
    // 把dataOrParams参数保存到promise参数;拼接 axios 配置
    const conf:AxiosRequestConfig={
        method,
        url,
        headers,
    }
    if(method==='get') conf.params = dataOrParams;
    else conf.data=dataOrParams

    // 在发送请求前校验token
    const token=getItem(TOKEN_KEY_LOCAL_STORAGE)
    if(token){
         // header 拼接 token - jwt
         conf.headers.authorization = `Bearer ${token}`
    }

    // 发送请求
    const res =await axios(conf)
    // 处理结果
    const { data: resData } = res
    if(resData.errno===0) return resData.data;
    console.error('请求错误', resData.errno, resData.message)
    // 创建错误，创造一个错误类型抛出
    throw new Error(resData.message)
}


/**
 * @description: 封装get,定义函数axiosGet,返回Promise对象
 * @param {*}
 * @return {*}
 */
export async function axiosGet(
    url:string='',
    params: object={}
):Promise<any>{
    const data = await customAxios('get',url,params)
    return data
}
/**
 * @description: post请求
 * @param {*}
 * @return {*}
 */
export async function axiosPost(
    url:string='',
    body:object={}
):Promise<any>{
    const data = await customAxios('post',url,body)
    return data;
}