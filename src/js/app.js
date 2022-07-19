require('./bootstrap');

import Vue from "vue";
import VuePlyr from 'vue-plyr'

Vue.component('header-component', require('./components/HeaderComponent').default);
Vue.component('footer-component', require('./components/FooterComponent').default);

Vue.component('first-component', require('./components/FirstComponent').default);
Vue.component('second-component', require('./components/SecondComponent').default);
Vue.component('third-component', require('./components/ThirdComponent').default);
Vue.component('fourth-component', require('./components/FourthComponent').default);
Vue.component('fifth-component', require('./components/FifthComponent').default);
Vue.component('sixth-component', require('./components/SixthComponent').default);
Vue.component('seventh-component', require('./components/SeventhComponent').default);
Vue.component('eighth-component', require('./components/EighthComponent').default);
Vue.component('ninth-component', require('./components/NinthComponent').default);
Vue.component('tenth-component', require('./components/TenthComponent').default);
Vue.component('eleventh-component', require('./components/EleventhComponent').default);
Vue.component('twelfth-component', require('./components/TwelfthComponent').default);


Vue.use(VuePlyr)

new Vue({
    el: '#app',
});
