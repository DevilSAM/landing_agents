<template>
    <!-- Modal -->
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content" >

                <div id="questionModalContent" :class="{faded: loading}">

                    <div class="modal-header">
                        <h5 class="modal-title" id="formModalLabel">Задать вопрос</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" id="questionForm">

                            <div class="preloader d-flex align-items-center justify-content-center" v-if="loading">
                                <div class="spinner-border spinner-centered" role="status">
                                    <span class="sr-only">Загрузка...</span>
                                </div>
                            </div>

                            <div class="">
                                <input type="text"
                                       class="form-control"
                                       :class="{has_errors: name_err}"
                                       name="name"
                                       required
                                       placeholder="Имя"
                                       v-model="form.name"
                                       @keypress="allowLettersOnly"
                                       @focus="dropErrors"
                                >
                                <small class="text-danger" v-if="name_err">Заполните это поле</small>
                            </div>
                            <div class="">
                                <input type="tel"
                                       class="form-control mt-3"
                                       :class="{has_errors: phone_err}"
                                       name="phone"
                                       required
                                       placeholder="Телефон"
                                       v-model="form.phone"
                                       v-mask="'+7 (###) ###-##-##'"
                                       @focus="dropErrors"
                                >
                                <small class="text-danger" v-if="phone_err">Заполните это поле</small>
                            </div>
                            <div class="">
                                <textarea
                                        class="form-control mt-3"
                                        name="question"
                                        rows="3"
                                        placeholder="Опишите суть вопроса"
                                        v-model="form.question">
                                </textarea>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click.prevent="sendForm" :disabled="loading">Отправить</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {

    data: ()=>({
        name_err: false,
        phone_err: false,

        form: {
            name: "",
            phone: "",
            question: ""
        },

        loading: false
    }),

    methods: {
        /**
         * Ввод только букв, тире и пробела
         */
        allowLettersOnly(e){
            // разрешаем ввод только цифр
            let key = e.keyCode || e.which;
            key = String.fromCharCode( key );
            let regex = /[A-Za-zА-Яа-яЁё -]/;
            if( !regex.test(key) ) {
                e.returnValue = false;
                if(e.preventDefault) {
                    e.preventDefault();
                }
            }
        },

        /**
         * Отправка формы на сервер
         */
        sendForm(e){
            this.checkForm()

            if (this.name_err || this.phone_err)
                return

            this.loading = true

            $.ajax('https://nasledie-don.ru/admin/ajax/landing_agents.php', {
                method: 'POST',
                data: {
                    name: this.form.name,
                    phone: this.form.phone,
                    question: this.form.question
                },
                success: (data) => {
                    this.loading = false
                    let jsn = JSON.parse(data)
                    if (jsn.success) {
                        this.resetForm()
                        $('#questionModalContent').replaceWith("<p class='modal-response text-center text-success'>Спасибо!<br>Ваша заявка успешно отправлена!<br>Наш специалист свяжется с Вами в ближайшее время.</p>");
                    } else {
                        $('#questionModalContent').replaceWith("<p class='modal-response text-center text-danger'>Ошибка!<br>Перезагрузите страницу и попробуйте ещё раз.</p>");
                    }
                },
                error: (err) => {
                    this.loading = false
                    console.log(err)
                },
            })
        },


        /**
         * Проверка заполненности полей
         */
        checkForm(){
            this.name_err = this.form.name.length < 1
            this.phone_err = this.form.phone.length < 18
        },

        /**
         * Убираем ошибки с полей при вводе
         */
        dropErrors(){
            this.name_err = false
            this.phone_err = false
        },

        /**
         * Очищаем формму
         */
        resetForm() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = ''
            })
        }
    }

}
</script>
