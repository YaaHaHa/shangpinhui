// 采用分别暴露使用Element—ui

import Vue from 'vue';
import { MessageBox ,Message, Pagination, Input, Button} from 'element-ui';
import App from '../App.vue';


// Vue.component('el-pagination',Pagination);
Vue.use(Pagination);      // use或component都行

//  Vue.use(MessageBox)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.component(Input.name,Input);
Vue.component(Button.name,Button);