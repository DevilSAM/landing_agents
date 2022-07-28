<template>

    <div class="app-wrapper row" id="eduCenter" v-if="access_granted === 'allowed'">

        <left-side></left-side>
        <right-side></right-side>

        <right-menu></right-menu>

    </div>

    <div v-else>
        <h2 class="text-center mt-5">Необходимо <a href="/login.html">авторизоваться</a></h2>
    </div>

</template>

<script>
export default {
    name: "LessonComponent",
    data: ()=>({
        access_granted: 'denied',
    }),

    mounted(){
        this.access_granted = sessionStorage['accessGranted'];
        console.log(this.access_granted)
    },
}
</script>

<style scoped>

</style>
