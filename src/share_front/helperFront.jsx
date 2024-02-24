import moment from "moment";

export const isEmptyOrNullFront = (value) => {
    return (value === null || value === '' || value === undefined) ? true : false;
}

// export const isEmptyOrNull = (value) => {
//     return (value == null || value == "" || value == undefined) ? true : false;
// }

export const ConfigFront = {
    image_path_front : "http://localhost:8080/project/image_preycode_g1/"
}

export const getUser = () => {
    var user = localStorage.getItem('user');
    if(!isEmptyOrNullFront(user)){
        user = JSON.parse(user);
        return user;
    }else{
        logout()
        return {};
    }
}

export let getPermission = () => {
    var permission = localStorage.getItem('permission');
    if(!isEmptyOrNullFront(permission)){
        permission = JSON.parse(permission);
        return permission;
    }else{
        return null;
    }
}

export const isPermission = (code_permission) => {
    var arrPermission = getPermission();
    if(arrPermission){
        if(arrPermission.includes(code_permission)){
            return true;  // mean have permission
        }
        return false; // mean don't have permission
    }else{
        return false;
    }
}

export const getAccessToken = () => {
   var access_token = localStorage.getItem('access_token');
   if(!isEmptyOrNullFront(access_token)){
      return access_token;
   }else{
      return null;
   }
}

export const formateDateClient = (date) => {
    if(!isEmptyOrNullFront(date)){
        return moment(date).format("dddd Do MMMM YYYY");
    }
    return null;
}

export const formateDateServer = (date) => {
    if(!isEmptyOrNullFront(date)){
        return moment(date).format("YYYY-MM-DD");
    }
    return null;
}

export const logout = () => {
    localStorage.setItem('isLogin',false);
    window.location.href = "/login";
}
 
export const isLogin = () => {
    var isLogin = localStorage.getItem('isLogin');
    if(!isEmptyOrNullFront(isLogin)){
        return isLogin;
    }else{
        logout()
    }
}

export const storeCustomerData = (data) => {
    localStorage.setItem('access_token',data.access_token);
    localStorage.setItem('user',JSON.stringify(data.user));
    localStorage.setItem('permissions',JSON.stringify(data.permissions));
}