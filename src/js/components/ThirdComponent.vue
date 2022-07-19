<template>
    <section>
        <div class="max-width-container section-3">
            <div class="work-in-company">
                <h1 class="about-work-title title text-center">Что такое работа в Наследии?</h1>
                <div class="top-row">
                    <div class="about-work-item" v-for="item in about_top">
                        <div class="icon-wrapper">
                            <img :src="item.img" alt="">
                        </div>
                        <p class="about-work-descr text-center" v-html="item.txt"></p>
                    </div>
                </div>
                <div class="bottom-row">
                    <div class="about-work-item" v-for="item in about_bottom">
                        <div class="icon-wrapper">
                            <img :src="item.img" alt="">
                        </div>
                        <p class="about-work-descr text-center" v-html="item.txt"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                about_top: [
                    {img: 'src/images/icons/star.png', txt: 'Ежедневная работа по развитию<br>ключевых навыков'},
                    {img: 'src/images/icons/users_group.png', txt: 'Сильное окружение<br>которое тянет тебя вверх'},
                    {img: 'src/images/icons/activity.png', txt: 'Выход на стабильные доходы от<br>300т.р./мес за 90 дней'}
                ],
                about_bottom: [
                    {img: 'src/images/icons/image.png', txt: 'Путешествия 3-4 раза в год<br>Мини-отпуск каждый месяц'},
                    {img: 'src/images/icons/heart.png', txt: 'Принесение максимальной<br>пользы клиентам'},
                    {img: 'src/images/icons/shield.png', txt: 'Благодарные клиенты<br>и чистая совесть'}
                ]
            }
        }
    }
</script>
