/*
 * @Author: your name
 * @Date: 2021-07-17 18:08:56
 * @LastEditTime: 2021-07-18 16:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\list\service.ts
 */
import {request} from 'umi';
// 异步数据在这边获取
export const getRemoteList = async ()=>{
    // const data = [
    //     {
    //       key: '1',
    //       name: 'effects公共数据1',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //       tags: ['nice', 'developer'],
    //     },
    //     {
    //       key: '2',
    //       name: 'effects公共数据2',
    //       age: 42,
    //       address: 'London No. 1 Lake Park',
    //       tags: ['loser'],
    //     },
    //     {
    //       key: '3',
    //       name: 'effects公共数据3',
    //       age: 32,
    //       address: 'Sidney No. 1 Lake Park',
    //       tags: ['cool', 'teacher'],
    //     },
    //   ];
    //   return data;
//    return request('http://127.0.0.1:9000/system/admin/user/list', {
    // return request('http://public-api-v1.aspirantzhang.com/users', {
    return request('/api/users', {
        method: 'get',
      })
        .then(function(response) {
          console.log('远程获取的数据',response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
}
