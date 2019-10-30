export function getToken(){
    //拿token值
    return localStorage.getItem('token');
}
//
export function setToken(token){
    return localStorage.setItem('token',token);
}
export function removeToken(){
    return localStorage.removeItem('token');
}