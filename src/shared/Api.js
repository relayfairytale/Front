import axios from 'axios';


// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
    baseURL:"http://miniproject-env.eba-bhekcpjt.ap-northeast-2.elasticbeanstalk.com/",
    headers:{
            /* */
    },
    withCredentials: true,
})


export const AuthApi = {
    signup: (payload)=> api.post('/signup', payload),
    signin: (payload)=> api.post('/signin', payload),
}
