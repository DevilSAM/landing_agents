require('./bootstrap');

import Vue from "vue";
import VuePlyr from 'vue-plyr'
import VueMask from 'v-mask'

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

Vue.component('form-modal', require('./components/ModalForm').default);

// компоненты для страницы логина и урока
Vue.component('left-side', require('./components/lesson/LeftSide').default);
Vue.component('right-side', require('./components/lesson/RightSide').default);
Vue.component('login-component', require('./components/lesson/LoginComponent').default);
Vue.component('lesson-component', require('./components/lesson/LessonComponent').default);
// модалки
Vue.component('right-menu', require('./components/lesson/modal/RightMenu').default);
Vue.component('feedback-component', require('./components/lesson/modal/FeedbackComponent').default);

Vue.use(VuePlyr)
Vue.use(VueMask)

new Vue({
    el: '#app',
});
