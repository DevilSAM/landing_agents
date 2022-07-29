<template>
    <section>
        <div class="max-width-container section-4">
            <h2 class="video-title text-center">Посмотри короткое видео и узнай, что тебя ждет,<br class="d-none d-lg-block">если сможешь стать частью нашей команды</h2>

            <div class="video-wrapper">

                <div class="plyr-wrapper">
                    <vue-plyr>
                        <video controls crossorigin playsinline
                        >
                            <source
                                size="720"
                                src="src/video/welcome.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </vue-plyr>
                </div>

            </div>

            <a href="/lesson.html" class="d-block mx-auto">
                <button class="btn btn-primary d-block mx-auto mt-3 mt-sm-4 mb-3 mb-sm-5">Посмотреть бесплатный урок<span class="d-none d-sm-inline"> и принять решение</span></button>
            </a>

        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {}
    }
}
</script>
