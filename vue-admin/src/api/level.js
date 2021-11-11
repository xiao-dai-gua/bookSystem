import request from '../utils/request'

//添加等级
export function addPeople(data){//有几个写几个data别忘记写了需要传参数
    return request({
        url:"/insertOneLevel",//接口地址给啥写啥
        method:"post",//请求方式
        data
        //如果有参数 get是params post是data
    })
    
}
//获取等级
export function getPeople(){
    return request({
        url:"/showLevel",//404资源找不到
        method:"get",
    })
}
//删除等级
export function delPeople(params){
    return request({
        url:"/delOneLevel",
        method:"get",
        params
    })
}
