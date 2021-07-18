/*
 * @Author: your name
 * @Date: 2021-07-17 17:55:19
 * @LastEditTime: 2021-07-18 17:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\list\index.tsx
 */
// list  模块主要用于dva数据流
import React,{useState,useEffect}from "react";
import { Table, Tag, Space,Modal, Button} from 'antd';
import { connect } from "@/.umi/plugin-dva/exports";
import ListModal from './components/listModal';
// const columns = [
//     {
//       title: 'id',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: '名称',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//         title: '邮箱',
//         key: 'email',
//         dataIndex: 'email',
//       },
//     {
//       title: '创建时间',
//       dataIndex: 'create_time',
//       key: 'create_time',
//     },
//     {
//         title: '状态',
//         dataIndex: 'status',
//         key: 'status',
//       },
//     {
//       title: '操作',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           <a>编辑 {record.name}</a>
//           <a>删除</a>
//         </Space>
//       ),
//     },
//   ];
// const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];

const List=(props)=>{
    let { list } = props;
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '名字',
          dataIndex: 'nickName',
          key: 'nickName',
        },
        {
            title: '电话',
            key: 'phoneNumber',
            dataIndex: 'phoneNumber',
          },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
            title: '城市',
            dataIndex: 'city',
            key: 'city',
          },
        {
          title: '操作',
          key: 'action',
          render: (text,record) => (
            <Space size="middle">
              <a onClick={()=>modalVisible(record)}>编辑 {record.name}</a>
              <a>删除</a>
            </Space>
          ),
        },
      ];
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [record, setRecord] = useState(undefined);
      const modalVisible=(record)=>{
        setRecord(record);
        setIsModalVisible(true)
      }
    console.log('isModalVisible---',isModalVisible)
    
    // callback=(value)=>{
    //     setIsModalVisible(value)
    // }
    console.log('propssddd',props)
    // list格式 list:{data:{data:[]}}
    // ES5语法
    // const dataList = list && list.data && list.data.data;
    // ES6+语法,可选链
    // const dataList = list?.data?.data;
    const dataList = list?.data?.data?.list;
    // let {data} =list && list.data;
    console.log('组件里面获取公共数据')

    
    return(
    <div>
        <Table columns={columns} dataSource={dataList}  rowKey="id"/>
        {/* setIsModalVisible={setIsModalVisible}子组件传父组件 */}
        <ListModal visible={isModalVisible} record={record} setIsModalVisible={setIsModalVisible}/>
    </div>
    );

};
  // 获取从公共仓reducers传递的数据,state{list}
// const mapStateToProps=(state)=>{
    const mapStateToProps=(state)=>{
        console.log('公共数据',state.list)
        return{
            list:state.list,
        }
    }
    
// 绑定数据到组件
export default connect(mapStateToProps)(List);

// 第二种写法
// export default connect(({list,loading,router})=>{
//     console.log('公共数据',state)
//     return{
//         list
//     }
// })(List);

// 简写
// export default connect(const mapStateToProps=({list,loading,router})=>({
//     list
// }))(List);