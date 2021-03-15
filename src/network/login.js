import Mock from 'mockjs'

let arr = [{loginId: 123, password: 123}, {loginId: 123, password: 123}]
let list = function (options) {
    arr = arr.filter(row => {
        options.loginId == row.loginId

    })
    console.log(arr)
    return arr
}
Mock.mock('/login', /get|post/i, list);

