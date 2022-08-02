<template>
    <!-- МОДАЛКА отправки формы -->
    <div class="modal fade" id="feedback_form_modal" tabindex="-1" aria-labelledby="feedbackFormLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">

                <button type="button" id="close_modal_btn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <form action="" @submit.prevent="onSubmit">
                    <div class="modal-header">
                        <h3 class="modal-title text-center" id="feedbackFormLabel">Все уроки доступны нашим сотрудникам</h3>
                    </div>
                    <div class="modal-body">
                        <p class="text-center mb-5">Если Вам это интересно - оставьте свои данные и мы свяжемся с Вами в ближайшее время</p>

                        <div class="input-group mt-5">
                            <input type="text"
                                   class="form-control"
                                   :class="{invalid: name_err}"
                                   placeholder="Имя"
                                   v-model="name"
                                   required
                                   @focus="name_err=false"
                                   @keypress="allowLettersOnly">
                        </div>
                        <small class="text-danger" v-if="name_err">Не менее 2х символов</small>

                        <div class="input-group mt-4">
                            <input type="tel"
                                   class="form-control"
                                   :class="{invalid: phone_err}"
                                   placeholder="Телефон"
                                   v-model="phone"
                                   required
                                   @focus="phone_err=false"
                                   v-mask="'+7 (###) ###-##-##'">
                        </div>
                        <small class="text-danger" v-if="phone_err">Укажите телефон в виде: +7 (xxx) xxx-xx-xx</small>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" >Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name_err: false,
        phone_err: false,
        name: '',
        phone: '',
    }),

    methods: {
        onSubmit(e){
            this.checkForm()

            if (this.name_err || this.phone_err)
                return

            this.loading = true

            $.ajax('https://nasledie-don.ru/admin/ajax/landing_agents.php', {
                method: 'POST',
                data: {
                    name: this.name,
                    phone: this.phone,
                },
                success: (data) => {
                    this.loading = false
                    let jsn = JSON.parse(data)
                    if (jsn.success) {

                        ym(89811416, 'reachGoal', 'form');

                        this.resetForm()
                        $('form').replaceWith("<p class='modal-response text-center text-success'>Спасибо!<br>Ваша заявка успешно отправлена!<br>Наш специалист свяжется с Вами в ближайшее время.</p>");
                    } else {
                        $('form').replaceWith("<p class='modal-response text-center text-danger'>Ошибка!<br>Перезагрузите страницу и попробуйте ещё раз.</p>");
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
            this.name_err = this.name.length < 2
            this.phone_err = this.phone.length < 18
        },
        /**
         * Очистка формы
         */
        resetForm(){
            this.name = ''
            this.phone = ''
        },

        /**
         * Только буквы для ввода имени
         * @param e
         */
        allowLettersOnly(e){
            // разрешаем ввод только цифр
            let key = e.keyCode || e.which;
            key = String.fromCharCode( key );
            let regex = /[A-яA-zЁё -]/;
            if( !regex.test(key) ) {
                e.returnValue = false;
                if(e.preventDefault) {
                    e.preventDefault();
                }
            }
        },

    },
}
</script>

<style scoped>
.modal-content {
    position: relative;
}
#close_modal_btn {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: white;
    opacity: 1;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 20px -2px rgb(0 0 0);
}
</style>
