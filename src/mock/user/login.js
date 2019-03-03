import Mock from "mockjs"
const user= Mock.mock({
  name: 'admin',
  password: '888888'
})
Mock.mock('/login', 'post',({body})=> {
  let result = {}
  const {name, password} = JSON.parse(body)
  if(name !== 'admin' || password !== '888888') {
    result.code = -1
    result.message = "账户或密码错误(admin/888888)"
  }else {
    result.code = 0;
    result.data = {}
    result.data.user = user
  }
  return result
})