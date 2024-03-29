// import {request} from "@/network/request";
// export function getAboutDate(){
//     return request({
//         url:'/about',
//     })
// }
import Mock from 'mockjs'
import moment from "moment";
// 模拟数据列表
var arr = [];
var data=new Date();
for (let i = 0; i < 5; i++) {
    let newArticleObject = {
        projectID:i,
        projectName: '项目'+i.toString(),
        personName: '小明',
        startTime:moment().format('YYYY-MM-DD'),
        projectOrder:'为了xxxxxx'

    }
    arr.push(newArticleObject); //将模拟的数据放到数组中
}

// 数据的删除操作
let list = function (options) {
    console.log(options);
    let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
    console.log(options);
    switch (rtype) {
        case 'get':
            break;
        case 'post':
            let id = parseInt(JSON.parse(options.body).projectID); // 获取请求的id，将options.body转换为JSON对象
            arr = arr.filter(function (val) {
                return val.projectID != id; // 过滤掉前台传过来的id对应的相应数据，并重新返回
            });
            break;
        default:
            break;
    }
    return {
        data: arr
    }
}
Mock.mock('/about', /get|post/i, list);
// Mock.mock('/page1', /get|post/i, (option)=>{
//     return{
//         retule:true
//     }
// });

// 数据的添加操作
let listAdd = function (options) {
    console.log("传过来的数据",options.body);
    let obj = JSON.parse(options.body);
    // console.log("数据获取"+ obj);
    arr = arr.concat(obj); // 将前台返回来的数据，拼接到数组中。
    return {
        data: arr
    }
}
Mock.mock('/aboutAdd', /get|post/i, listAdd);

// 数据的修改操作
let listUpdate = function (options) {
    console.log(options);
    let obj = JSON.parse(options.body);
    // console.log(JSON.parse(options.body).params);
    // let id = parseInt(JSON.parse(options.body).params.obj.id);

    arr = arr.map(val => { // 遍历数据 将需要替换的数据替换掉
        // console.log(val)
        return val.projectID == obj.projectID ? obj : val;
    });
    return {
        data: arr
    }
}
Mock.mock('/aboutEdit', /get|post/i, listUpdate);
