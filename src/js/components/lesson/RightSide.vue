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
                <video controls crossorigin playsinline>
                    <source
                        size="720"
                        src="src/video/lesson.mp4"
                        type="video/mp4"
                    />
                </video>
            </vue-plyr>
        </div>

        <div class="prev-next-video d-flex mt-3 mt-md-4 mt-lg-5 mb-5" data-bs-toggle="modal" data-bs-target="#feedback_form_modal">
            <div class="next-video nav-video-link d-flex justify-content-between">
                <div class="next-text d-flex flex-column align-items-start pe-2">
                    <p class="grey-text font-14">Следующее</p>
                    <p class="prev-next-video__title d-none d-sm-block">Доходы агента: управление и планирование...</p>
                </div>
                <div class="video-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>

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
