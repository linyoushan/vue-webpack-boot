import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'

new Vue({
    el:'#container',
    components:{App},
    template:'<App />',
    render:h=>h(App)
});