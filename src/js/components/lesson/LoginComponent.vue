<template>
    <form action="" @submit.prevent="onSubmit" class="mt-5 w-50 mx-auto">
        <h2 class="text-center mb-5">Вход в систему</h2>
        <input class="form-control mb-4" type="text" v-model="name" placeholder="login" required>
        <input class="form-control mb-4" type="text" v-model="password" placeholder="password" required>

        <button class="btn btn-primary w-50 d-block mx-auto">Войти</button>
    </form>
</template>

<script>
export default {
    name: "LoginComponent",

    data: ()=>({
        name: 'demo',
        password: 'demo'
    }),

    mounted() {

    },

    methods: {

        onSubmit() {

            if(this.name === 'demo' && this.password === 'demo') {
                sessionStorage['accessGranted'] = 'allowed';
                location.href = '/lesson.html';
            } else {
                sessionStorage['accessGranted'] = 'denied';
            }
        }
    }

}
</script>

<style scoped>
form {
    background-color: white;
    box-shadow: 0 0 20px rgba(0,0,0, .5);
    padding: 20px;
}
</style>
