import { axiosInstance } from "@/plugin/axios_service";

const user = JSON.parse(localStorage.getItem('user')!);
const initialState = user ? {status: {isLoggedIn:true}, user} : {status: {isLoggedIn:false}, user:null};

export const auth= {
    namespaced: true,
    state: initialState,
    actions: {
        login(context:any, LoginDat:any){
            console.log(user);
            axiosInstance.post('/auth/login/',LoginDat).then(data =>{
                context.commit('loginSuccess', data)
            }).catch(err =>{

            });
        }
    },
    mutations: {
        loginSuccess(state:any, user:any){
            state.status.isLoggedIn = true;
            state.user = user;
        },
        loginFailed(state:any){
            state.status.isLoggedIn =false;
            state.user = null;
        }
    }
}
 