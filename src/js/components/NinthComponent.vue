<template>
    <section class="custom-section-padding">
        <div class="max-width-container section-9">
            <div class="top">
                <div class="top-left">
                    <h1 class="title mt-4 video-title">Почему мы даем <span class="text-primary">бесплатный доступ</span> к закрытым урокам?</h1>
                    <p class="descr">Желающих иметь высокие доходы намного больше, чем людей, реально способных стать профессионалом и стабильно зарабатывать в сфере недвижимости.</p>
                    <p class="descr">Часто люди, приходят в агентства, имея искаженное представление о работе риелтором.</p>
                    <p class="descr fw-bold">Это приводит к тому, что люди:</p>
                    <ul>
                        <li class="disc-left">впустую тратят 2-3 месяца на попытки заработать</li>
                        <li class="disc-left">разочаровываются в сфере и в своих способностях</li>
                        <li class="disc-left">уходят с пустыми карманами искать другую работу</li>
                    </ul>
                </div>
                <div class="top-right">
                    <div class="plyr-wrapper">
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
            </div>

            <div class="bottom">
                <h2 class="bottom-left">Поэтому, если вы думаете стать экспертом в недвижимости с доходом от 300 000 рублей в месяц, ваш первый и самый важный шаг – это получить реальное представление о работе и <span class="text-primary">честно ответить себе на вопросы:</span></h2>
                <div class="bottom-right">
                    <img src="src/images/icons/arrows.png" alt="" height="32px" class="d-none d-md-block">
                    <ol>
                        <li>Подходит ли МНЕ эта профессия?</li>
                        <li>Смогу ли Я получать удовольствие от работы и достигать высоких результатов?</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>
