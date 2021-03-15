import Mock from 'mockjs'

let arr = [{loginId: 123, loginPassword: 123}, {loginId: 1234, loginPassword: 1234}]
let list = function (options) {
    console.log(options.body)
    let newArr = arr.filter(row => {
        return options.body.loginId == row.loginId&&options.body.loginPassword == row.loginPassword
    })
    if(newArr.length>0){
        return "成功"
    }
    else {
        return "失败"
    }

}
Mock.mock('/login', /get|post/i, list);

