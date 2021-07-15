/*
 * @Author: your name
 * @Date: 2021-07-15 09:59:35
 * @LastEditTime: 2021-07-15 10:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\components\table.tsx
 */
import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

/**
 * @description: 定义页码类型接口 , ?ts语法可选 interface用来约束一个函数，对象，以及类的结构和类型
 * @param {*}
 * @return {*}
 */
interface PageDataType{
    pageIndex ?: number; // // PageDataType可选一个pageIndex属性，值为number
    pageSize?:number;
    total:number;
}

// never类型表示值的类型从不出现
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
interface propsTypes{
    dataSource:never[];  //dataSource表格数据
    columns:ColumnsType<never>;//表头
    pageData:PageDataType; //页码数据
    onpageIndexChange?:(page:number,pageSize?:number|undefined)=>void
    // 表格行是否可选
    onRowSelected?:(
        selectedRowKeys:React.ReactText[],//指定选中项的 key 数组，需要和 onChange 进行配合
        selectedRows:never[],
    )=>void

}
// 默认 pageSize
const DEFAULT_PAGE_SIZE: number = 10

/**
 * @description: dataSource表格数据
 * @description: columns表头
 * @description: pageData页码
 * @param {propsTypes} props
 * @return {*}
 */
// ts类型断言1、尖括号，2、as语法 ，类型断言（Type Assertion）可以用来手动指定一个值的类型
//  any无法确定变量的类型时（或者无需确认类型时）
// void 表示没有任何类型，never 表示永远不存在的值的类型。
export default(props:propsTypes)=>{
    const {dataSource,columns,pageData,onpageIndexChange,onRowSelected} = props;
    const{pageIndex=0,pageSize=DEFAULT_PAGE_SIZE,total=0}=pageData
    // 为表格数据增加key属性
    const dataSourceKey = dataSource.map((item:any)=>{
        if(item.key !=null )return item;
        return{
            key:item.id||item._id,
            ...item
        }
    }) as never[];
    // 切换页
    function pageIndexChange(pageIndex:number,pageSize?:number | undefined,):void{
        if(!onpageIndexChange) return
        onpageIndexChange(
            pageIndex-1,// 从 0 开始计算
            pageSize
        )
    }
    return(
        <Table
            dataSource={dataSourceKey}
            columns={columns}
            rowSelection={{
                type: 'checkbox',
                onChange:onRowSelected
            }}//rowSelection表格行是否可选择
            pagination={{
                    defaultCurrent:pageIndex+1, //defaultCurrent	默认的当前页数
                    pageSize,
                    total,
                    showSizeChanger:false,   //  showSizeChanger: 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
                    onChange:pageIndexChange,
                }
            }  //pagination分页器

        />
    )

}