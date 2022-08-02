<template>
    <form id="login_form" action="" @submit.prevent="onSubmit" class="mx-auto" :class="{shake: name_err || password_err}">
        <h2 class="text-center mb-5">Вход в систему</h2>
        <input class="form-control mb-4"
               :class="{invalid: name_err}"
               type="text"
               v-model="name"
               placeholder="login"
               @focus="name_err = false"
               required>
        <input class="form-control mb-4"
               :class="{invalid: password_err}"
               type="text"
               v-model="password"
               placeholder="password"
               @focus="password_err = false"
               required>

        <p class="text-danger text-center mb-4" v-if="name_err || password_err">Неверное имя / пароль<br>Используйте demo / demo</p>

        <button class="btn btn-primary w-50 d-block mx-auto">Войти</button>
    </form>
</template>

<script>
export default {
    name: "LoginComponent",

    data: ()=>({
        name: 'demo',
        password: 'demo',
        name_err: false,
        password_err: false,
    }),

    mounted() {

    },

    methods: {

        onSubmit() {

            this.checkForm()

            if(this.name === 'demo' && this.password === 'demo') {
                sessionStorage['accessGranted'] = 'allowed';
                location.href = '/lesson.php';
            } else {
                sessionStorage['accessGranted'] = 'denied';
                if(this.name !== 'demo'){
                    this.name_err = true
                }
                if(this.password !== 'demo'){
                    this.password_err = true
                }

                // $('form').addClass('shake-it')
            }
        },

        /**
         * Проверка заполненности полей
         */
        checkForm(){
            this.name_err = this.name !== 'demo'
            this.password_err = this.password !== 'demo'
        },
    }

}
</script>

