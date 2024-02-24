
import axios from 'axios';
import { getAccessToken } from './helperFront';

export const config_front = {
    base_server_front: "http://localhost:8081/api/",
    image_path_front : "",
    version : 1
}

export default function requestFront( url, method, data={},){
    let access_token = getAccessToken();
    return axios({
        method: method,
        url: config_front.base_server_front + url,
        data: data,
        headers: {
            'Authorization': 'Bearer ' + access_token,
        }
    }).then((res) => {
        return res.data;
    }).catch((err) => {
        return err;
    });
}