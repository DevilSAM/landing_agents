<template>

    <div class="right-side col-12 col-md-9 col-lg-10 pt-5">

        <svg id="menuIconMobile" class="menu-icon" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#menuModal">
            <rect y="0" width="22" height="2" fill="#EE9536"/>
            <rect y="6" width="22" height="2" fill="#EE9536"/>
            <rect y="12" width="22" height="2" fill="#EE9536"/>
        </svg>

        <div class="d-flex program-video align-items-center">

            <div class="program-video-header flex-grow-1 d-flex flex-column align-items-center">
                <div class="program-video-header__img mb-2"></div>
                <div class="program-video-header__theme font-14">Введение в работу</div>
                <div class="program-video-header__title"><h3 class="program-video-header__title-name">Как стать экспертом по недвижимости и начать зарабатывать</h3></div>
                <div class="program-video-header__number font-14">1.1</div>
            </div>

            <div class="menu-title ms-auto font-14 me-4 mb-0" data-bs-toggle="modal" data-bs-target="#menuModal">
                <p class="menu-title__name d-none d-sm-inline">Оглавление</p>
                <svg id="menuIconDesktop" class="menu-icon" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0" width="22" height="2" fill="#EE9536"/>
                    <rect y="6" width="22" height="2" fill="#EE9536"/>
                    <rect y="12" width="22" height="2" fill="#EE9536"/>
                </svg>
            </div>
        </div>



        <div class="video-container">
            <vue-plyr>
                <div data-plyr-provider="youtube" data-plyr-embed-id="9nj521vzvIE"></div>
            </vue-plyr>
        </div>

        <button class="btn btn-primary d-block mx-auto my-5" data-bs-toggle="modal" data-bs-target="#feedback_form_modal">Свяжитесь со мной</button>

        <feedback-component></feedback-component>
    </div>

</template>

<script>
export default {
    name: "RightSide",

    methods: {},
}
</script>

<style scoped>

</style>
