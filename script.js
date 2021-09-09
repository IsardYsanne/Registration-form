// Проверка на валидность введенных данных

$(document).ready(function () {
    "use strict";

    var pattern = /^[a-z0-9][a-z0-9\._-]*[a-z0-9]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+/i;
    var mail = $('input[name=email]');

    mail.blur(function () { // проверка введенной почты
        if (mail.val() != '') {

            if (mail.val().search(pattern) == 0) {

                $('#valid_email_message').text('');
                $('input[type=submit]').attr('disabled', false);
            } else {

                $('#valid_email_message').text('Не правильный Email');
                $('input[type=submit]').attr('disabled', true);
            }
        } else {
            $('#valid_email_message').text('Введите Ваш email');
        }
    });


    var password = $('input[name=password]');

    password.blur(function () { // проверка пароля
        if (password.val() != '') {

            if (password.val().length < 6) {

                $('#valid_password_message').text('Минимальная длина пароля 6 символов');
                $('input[type=submit]').attr('disabled', true);

            } else {

                $('#valid_password_message').text('');
                $('input[type=submit]').attr('disabled', false);
            }
        } else {
            $('#valid_password_message').text('Введите пароль');
        }
    });
});
