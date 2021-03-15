import Mock from 'mockjs'

let arr = [{loginId: 123, loginPassword: 123}, {loginId: 1234, loginPassword: 1234}]
let list = function (options) {
    let result={}
    let opj=JSON.parse(options.body);
    let newArr = arr.filter(row => {
        console.log(opj.loginId == row.loginId&&opj.loginPassword == row.loginPassword)
        return opj.loginId == row.loginId&&opj.loginPassword == row.loginPassword
    })
    console.log(newArr)
    if(newArr.length>0){
        result.success=true
        result.msg="成功"
        return result
    }
    else {
        result.success=false
        result.msg="密码或ID错误"
        return result
    }

}
Mock.mock('/login', /get|post/i, list);

