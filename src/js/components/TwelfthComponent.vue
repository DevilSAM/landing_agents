<template>
    <section >
        <div class="max-width-container section-12">
            <div class="section-title">
                <h1 class="title">Сможешь ли ты выйти на доход <br class="d-none d-sm-inline">от 300т.р/мес за 90 дней?</h1>
                <p>Посмотри видео-отзывы действующих агентов и реши сам</p>
            </div>
            <div class="feedback-videos">
                <div class="video-wrapper mb-4 mb-xl-0">
                    <vue-plyr>
                        <video controls crossorigin playsinline>
                            <source
                                size="720"
                                src="src/video/feedback_1.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </vue-plyr>
                </div>
                <div class="video-wrapper mb-4 mb-xl-0">
                    <vue-plyr>
                        <video controls crossorigin playsinline>
                            <source
                                size="720"
                                src="src/video/feedback_2.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </vue-plyr>
                </div>
                <div class="video-wrapper mb-4 mb-xl-0">
                    <vue-plyr>
                        <video controls crossorigin playsinline>
                            <source
                                size="720"
                                src="src/video/feedback_3.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </vue-plyr>
                </div>
            </div>
            <h2 class="slogan">Успех наших коллег — это не везение, а предсказуемый результат:</h2>
            <div class="factors-wrapper">
                <div class="factor-item" v-for="fact in factors">
                    <img src="src/images/icons/check.png" alt="иконка чек" width="30px">
                    <p class="factor-descr text-center">{{fact}}</p>
                </div>
            </div>

            <hr>

            <h1 class="title text-center mt-3 mt-sm-5">Сделай 1-й шаг к лучшей жизни</h1>
            <a href="/lesson.php" class="d-block mx-auto">
                <button class="btn btn-primary d-block mx-auto mt-3 mt-sm-4 mb-3 mb-sm-5">Посмотри урок<span class="d-none d-sm-inline"> и прими решение</span> бесплатно</button>
            </a>
            <hr>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            factors: [
                    'Эффективной методики работы',
                    'Мощной системы развития ключевых компетенций',
                    'Сильной команды наставников и руководителей',
                    'IT-решений, повышающих эффективность работы',
                    'Готовности агента четко следовать стандартам компании'
            ]
        }
    }
}
</script>
