import request from "../utils/request"

//添加地址
export function addAddress(data){
    return request ({
        url:"/insertOneAddress",
        method:"post",
        data
    })
}
//获取地址
export function getAddress(){
    return request({
        url:"/showAddresses",//404的错误就是这个地址写错了
        method:"get"
    })
}
//删除地址
export function delAddress(params){
    return request({
        url:"/delOneAddress",
        method:"get",
        params
    })
}