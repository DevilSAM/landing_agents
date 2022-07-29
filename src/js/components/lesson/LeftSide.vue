<template>

    <div class="left-side d-none d-md-block col-3 col-lg-2 mt-3 ps-0 pe-0 text-center">
        <div class="nasledie-logo ">
            <a href="/">
                <img src="src/images/logo.png" alt="Наследие лого" width="43%">
            </a>
        </div>
        <hr>
        <div class="user-picture">
            <img src="src/images/no-image.png" alt="фото пользователя" class="user-picture__img">
        </div>
        <h4 class="user-name">Риелтор</h4>
        <p class="user-level"><span id="userLevel">1</span> уровень</p>
        <div class="progressbar">
            <span id="filledProgress"></span>
        </div>
        <p class="to-next-level grey-text font-14 d-none d-md-block mb-0">до следующего уровня</p>
        <p class="to-next-level grey-text font-14 d-none d-md-block"><span id="toNextLevel">236</span> балов</p>

        <button id="callbackBtn" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#feedback_form_modal">Свяжитесь со мной</button>
    </div>

</template>

<script>
export default {
    name: "LeftSide"
}
</script>

<style scoped>
@media(max-width: 1200px) {
    #callbackBtn {
        font-size: 0.8rem;
    }
}
@media(max-width: 992px) {
    #callbackBtn {
        font-size: 0.9rem;
    }
}

</style>
