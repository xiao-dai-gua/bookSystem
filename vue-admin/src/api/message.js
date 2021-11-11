import request from '../utils/request'

//获取信息接口
export function getMessage(){
    return request({
        url:"/showMessage",//接口地址
        method:"get"//请求方式
        //如果有参数 get是params post是data
    })
    
}
//添加信息接口
export function addMessage(data){
    return request({
        url:"/insertAllMessage",//接口地址
        method:"post",//请求方式
        data
        //如果有参数 get是params post是data
    })
    
}
//删除信息的接口
export function delMessage(params){//人家接口请求传递的接口是啥你就写传啥不然连接不上
    return request({
        url:"/delOneMessage",
        method:"get",
        params
    })

}

//根据地址查询查询信息
export function messageAddress(data){
    return request({
        url:"/searchaddressid",
        method:"post",
        data
    })
}
//根据id获取信息
export function messageid(params){
    return request({
        url:"/showOneMessage",
        method:"get",
        params
    })
}
//修改信息
export function updateMessage(data){
    return request({
        url:"/updateMessage",
        method:"post",
        data
    })
}