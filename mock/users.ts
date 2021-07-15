/*
 * @Author: your name
 * @Date: 2021-07-15 11:27:16
 * @LastEditTime: 2021-07-15 11:28:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit  
 * @FilePath: \umiapp\mock\users.ts
 */
/**
 * @description: 用户列表数据
 * @param {*}
 * @return {*}
 */
export default{
    // 用户列表数据
    'GET /api/users/':{
        errno: 0,
        data: {
            count: 30,
            list: [
                {
                    id: '1',
                    username: 'zhangsan',
                    nickName: '张三',
                    phoneNumber: '15500001111',
                    gender: '0',
                    city: '北京',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: false,
                },
                {
                    id: '2',
                    username: 'lisi',
                    nickName: '李四',
                    phoneNumber: '15500002222',
                    gender: '1',
                    city: '杭州',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: false,
                },
                {
                    id: '3',
                    username: 'aaa',
                    nickName: 'AAA',
                    phoneNumber: '15500003333',
                    gender: '2',
                    city: '广州',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: true,
                },
            ],
        },
    }

}
