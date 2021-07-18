/*
 * @Author: your name
 * @Date: 2021-07-17 18:07:43
 * @LastEditTime: 2021-07-18 17:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\list\model.ts
 */
import { useCallback } from 'react';
import {Reducer,Effect,Subscription} from 'umi';
import { getRemoteList } from './service';
interface ListModelTyp{
    namespace:'list',
    state:{},
    reducers:{
        typeList:Reducer,
    },
    effects:{
        getRemote:Effect
    },
    subscriptions:{
        setup:Subscription,
    }

}
// 公共仓
const ListModel:ListModelTyp={
    namespace:'list',
    state:{},
    // 同步的数据
    reducers:{
        // {type,payload} 就是action{type,payload}
        // 返回给页面的数据
        // statez之前的数据,更新的数据action{type,payload}
        // 获取到effects远程数据到action
        typeList(state,{type,payload}){
            return payload
            // const data = [
            //     {
            //       key: '1',
            //       name: 'reducers公共数据1',
            //       age: 32,
            //       address: 'New York No. 1 Lake Park',
            //       tags: ['nice', 'developer'],
            //     },
            //     {
            //       key: '2',
            //       name: 'reducers公共数据2',
            //       age: 42,
            //       address: 'London No. 1 Lake Park',
            //       tags: ['loser'],
            //     },
            //     {
            //       key: '3',
            //       name: 'reducers公共数据3',
            //       age: 32,
            //       address: 'Sidney No. 1 Lake Park',
            //       tags: ['cool', 'teacher'],
            //     },
            //   ];
            //   return data;
        }
    },
    // 异步的数据
    effects: {
        // 获取远程数据
        // effects{put,call}
        *getRemote(action,{put,call}){
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
            //  yield put({
            //       type:'typeList',
            //       payload:data,
            //   })
            const data = yield call(getRemoteList)
            // data是一个数组,修改一下传递是对象
            yield put({
                  type:'typeList',
                //   payload:data,
                payload:{
                    data,
                }
            })
        }
    },
    //监听数据,订阅
    subscriptions:{
        setup({dispatch,history}){
           return history.listen((location,action)=>{
                if(location.pathname==='/list'){
                    dispatch({
                        // type:'typeList',
                        type:'getRemote',
                    })
                }
            })
        }
    }
    
}
export default ListModel;
