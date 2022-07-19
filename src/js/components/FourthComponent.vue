<template>
    <section>
        <div class="max-width-container section-4">
            <h2 class="video-title text-center">Посмотри короткое видео и узнай, что тебя ждет,<br>если сможешь стать частью нашей команды</h2>

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
