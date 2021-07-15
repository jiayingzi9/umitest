/*
 * @Author: your name
 * @Date: 2021-07-13 14:34:48
 * @LastEditTime: 2021-07-15 11:10:50
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

export default()=>{
    //当前页默认为0
    const [pageIndex,setPageIndex]= useState(0);
    // 总页码默认为0
    const [total,setTotal]= useState(0)
    // 表格数据
    const [dataSource,setDataSource]= useState([])
    const [columns,setColumns] = useState([])
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