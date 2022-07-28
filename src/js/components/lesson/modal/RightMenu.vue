<template>
    <!--   менюшная МОДАЛКА  -->
    <div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="menuModalLabel">Оглавление</h2>
                    <svg class="close-modal-btn" data-bs-dismiss="modal" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L37 37" stroke="#EE9536" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M37 1L0.999998 37" stroke="#EE9536" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="modal-body">
                    <ol class="menu-outer-ol" @click="showFeedbackModal">

                        <li class="outer-li" v-for="lesson in lessons">
                            {{ lesson.name }}
                            <ol class="menu-inner-ol">
                                <li class="inner-li" v-for="sub in lesson.sub">
                                    {{ sub }}
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        lessons: [
            {
                title: 'Введение в работу',
                sub: [
                    'От чего зависит успех агента',
                    'Доходы агента: управление и планирование. Воронка продаж',
                    'Воронка агента при работе с покупателями',
                    'Воронка агента при работе с собственниками',
                ],
            },
            {
                title: 'Работа с покупателями',
                sub: [
                    'Этапы в работе с покупателями недвижимости',
                    'Задачи на этапе входящего обращения',
                        'Ранжирование',
                        'Выявление целей и потребностей клиента',
                        'Назначение встречи',
                        'План первой встречи с покупателем',
                        'Подписание договора показа',
                        'Инструктаж',
                        'Проведение показа',
                        'Удержание клиента в работе',
                        'Подготовка к показу',
                        'Подготовка собственника к сделке',
                        'Скрипты'
                ],
            },
            {
                title: 'Юридическая часть',
                sub: [
                    'Введение в юрчасть',
                    'Заключение сделки купли-продажи недвижимости',
                    'Готовность собственника к сделке',
                    'Правовая экспертиза',
                    'Внесение задатка',
                    'Продажа квартиры при несовершеннолетнем собственнике',
                    'Продажа квартиры, купленной в браке',
                    'Продажа квартиры при недееспособном собственнике',
                    'Ипотека'
                ],
            },
        ]
    }),

    methods: {
        showFeedbackModal(){
            $("#menuModal").modal('hide')
            $("#feedback_form_modal").modal('show')
        }
    },
}
</script>
