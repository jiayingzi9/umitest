/*
 * @Author: your name
 * @Date: 2021-07-13 16:45:26
 * @LastEditTime: 2021-07-13 16:49:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\components\userInfo.tsx
 */
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '@/service/admin'

// 获取用户信息数据
export default()=>{
    const[username,setUsername] = useState('')
    useEffect(()=>{
        getUserInfo().then(res=>{
            if(res==null) return
            setUsername(res.username)
        })
    })
    return(
        <div>当前用户：{username}</div>
    )

}