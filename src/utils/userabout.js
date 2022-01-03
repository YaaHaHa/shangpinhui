import { v4 as uuidv4 } from 'uuid';

//这个函数是让用户获取到唯一的标识
//第一步：先从localStorage当中去获取，如果没有
//第二步：再调用uuid创建新的，并且还要存储到localStorage
function getUserTempId(){
    let userTempId = localStorage.getItem('USER_KEY')

    if (!userTempId){
        userTempId = uuidv4();
        localStorage.setItem('USER_KEY',userTempId);
    }

    return userTempId;
}

export {
    getUserTempId
}