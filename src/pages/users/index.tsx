/*
 * @Author: your name
 * @Date: 2021-07-13 14:34:48
 * @LastEditTime: 2021-07-15 11:40:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\users\index.ts
 */
import React,{ useEffect, useState }from 'react'
import styles from './style.less'
import { Button, Input, Row, Col, message } from 'antd'  //ant
const { Search } = Input
import UmiTable from '@/components/table'
import cloums from './columns'
import { APIHost } from '../../config/host'
import { axiosGet } from '../../utils/ajax'

export default()=>{
    //当前页默认为0
    const [pageIndex,setPageIndex]= useState(0);
    // 总页码默认为0
    const [total,setTotal]= useState(0)
    // 表格数据
    const [dataSource,setDataSource]= useState([])
    // 默认当前页
    const DEFAULT_PAGE_SIZE: number = 10;
    // 表格默认key
    const [keyword,setKeyword]= useState('')
    /**
     * @description: 查询用户列表
     * @param {*}
     * @return {*}
     */ 
    async function getUsersList(keyword:string,pageIndex:number=0,pageSize=DEFAULT_PAGE_SIZE) {
        const url= `${APIHost}/api/users`
        const data = await axiosGet(url,{keyword,pageIndex,pageSize})
        return data
    }
    // 请求数据
    useEffect(()=>{
        getUsersList(keyword,pageIndex).then((data:any)=>{
            const {count,list} = data;
            setTotal(count) //更新总数
            setDataSource(list)  //更新用户表格数据
        })
    },[])

    return(
        <div className={styles.user}>
            <Row>
                <Col>
                    <Button>冻结</Button>
                </Col>
                <Col> <Button>解除</Button></Col>
                <Col>
                    <Search/>
                </Col>
            </Row>
            <UmiTable
                dataSource={dataSource}
                columns={cloums}
                pageData={{pageIndex, total}}
            />
            
        </div>
    )
}