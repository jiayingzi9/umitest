/*
 * @Author: your name
 * @Date: 2021-07-14 18:36:31
 * @LastEditTime: 2021-07-15 09:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\app.tsx
 */
import React from 'react'
import UserInfo from '@/components/userInfo'

export async function render(oldRender: Function) {
    oldRender()
}

export const layout={
    rightRender:()=>{
        return <UserInfo/>
        // return <p>测试</p>
    }
}
