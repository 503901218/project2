import {request} from "@/network/request";
export function getAboutDate(){
    return request({
        url:'/about',
    })
}