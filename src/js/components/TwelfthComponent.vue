<template>
    <section >
        <div class="max-width-container section-12">
            <div class="section-title">
                <h1 class="title">Реально ли выйти на доход<br>от 300 т.р/мес за 90 дней?</h1>
                <p >Посмотри видео-отзывы тех, кто уже это сделал, и реши сам.</p>
            </div>
            <div class="feedback-videos">
                <div class="video-wrapper mb-4 mb-xl-0">
                    <vue-plyr>
                        <video controls crossorigin playsinline>
                            <source
                                size="720"
                                src="src/video/welcome.mp4"
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
                                src="src/video/welcome.mp4"
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
                                src="src/video/welcome.mp4"
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

            <h1 class="title text-center mt-5">Сделай 1-й шаг к лучшей жизни</h1>
            <button class="btn btn-primary d-block mx-auto mt-4 mb-5">Посмотри уроки и прими решение бесплатно</button>
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
