/*
 * @Author: your name
 * @Date: 2021-07-14 18:36:31
 * @LastEditTime: 2021-07-14 18:39:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\app.tsx
 */
import React from 'react'
export async function render(oldRender: Function) {
    oldRender()
}

export const layout = {
    // 右上角显示用户名
    rightRender: () => {
        return <p>测试</p>
    },
}
