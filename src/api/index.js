//back end 라이브러리 호출 js
import axios from 'axios'
import router from '../router'

const DOMAIN ='http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthrorized = () =>{
    router.push('/login')
}
const request = (method , url, data) =>{
    return axios({
        method,
        url: DOMAIN+url,
        data
    }).then(resutl =>result.data)
        .catch(result =>{
            const {status} = result.response
            if(status === UNAUTHORIZED) return onUnauthrorized()
            throw Error(result)
        })
}
export const board ={
    fetch(){
        return request('get','/boards')
    }
}