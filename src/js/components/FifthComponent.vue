<template>
    <section class="secondary-background">
        <div class="max-width-container section-5">
            <h1 class="section-title title text-center"><span class="text-primary">Путь профессионала</span> — это путь каждодневной работы над собой</h1>
            <p class="text-center section-descr">Рынок недвижимости очень динамичен. Чтобы оставаться экспертом, ты должен быть в курсе всех изменений.  В нашем деле обучение не заканчивается никогда.</p>
            <p class="text-center section-descr">У нас созданы все условия для твоего профессионального развития:</p>
            <div class="tasks-wrapper">
                <div class="task-item" v-for="task in tasks">
                    <img :src="task.icon" alt="" class="task-icon">
                    <p class="task-title text-center">{{task.title}}</p>
                    <p class="task-text text-center">{{task.txt}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tasks: [
                    {icon: 'src/images/icons/sun.png', title: 'Каждое утро', txt: 'Практическая отработка ключевых компетенций вместе с богачами месяца'},
                    {icon: 'src/images/icons/chart.png', title: '3-5 раз в неделю', txt: 'Индивидуальные занятия с куратором, отработка скриптов, разборы текущих клиентов'},
                    {icon: 'src/images/icons/calendar.png', title: 'Каждую неделю', txt: 'Выявление и устранение слабых мест в работе'}
                ]
            }
        }
    }
</script>
