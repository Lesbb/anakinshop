import store from "../store"

if(localStorage.getItem("anakin")){
    store.commit("login/setUser",JSON.parse(localStorage.getItem("anakin")))
}