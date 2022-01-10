// 采用分别暴露使用Element—ui

import Vue from 'vue';
import { MessageBox ,Message} from 'element-ui';
import App from '../App.vue';

Vue.component(MessageBox.name, MessageBox);

//  Vue.use(MessageBox)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;