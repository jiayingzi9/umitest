/*
 * @Author: your name
 * @Date: 2021-07-17 18:07:08
 * @LastEditTime: 2021-07-18 17:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\list\components\listModal.tsx
 */
import React,{useState,useEffect}from "react";
import { Table, Tag, Space,Modal, Button} from 'antd';

const ListModal=props=>{
    const {visible}=props;
    console.log('父组件传递的visible',visible)
    const handleOk = () => {
        // props.callback(false)
        props.setIsModalVisible(false)
      };
    
      const handleCancel = () => {
        // props.callback(false)
        props.setIsModalVisible(false)
      };
    return (
        <div>
            <Modal title="模态框" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                {/*props.record需要转换成json子符串的模式才能在页面显示  */}
                {JSON.stringify(props.record)}
            </Modal>
        </div>
    )
}
export default ListModal;