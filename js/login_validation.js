(function () {

    $(document).ready(function () {

        $("#login-form").submit(function (event) {
            event.preventDefault();
            var login = $("#login-input")[0].value.trim();
            var password = $("#password-input")[0].value.trim();


            if(validateLogin(login) & validatePassword(password)) {
                window.location.href = 'homePage.html';
            }

        });

    })



    function validateLogin(login) {
        var isValid = true;

        var dogPlacement = login.indexOf('@');
        if( dogPlacement < 4 | dogPlacement > 20) {
            isValid=false;
            alert("text@example.net, text – до символа @ может быть не меньше 4 символов и до 20 символов в верхнем/нижнем регистре.");
        }

        var username = login.substring(0, dogPlacement);
        var domain = login.substring(dogPlacement + 1);

        if(notValidLoginSymbols(username+domain)){
            alert("Допускаются символы нижнего подчеркования (_), точка(.), дефис (-). Эмейл может быть на киррилице.");
            isValid=false;
        }

        if (onlyDigitsUsername(username)) {
            alert("Нельзя чтобы эмейл состоял только из цифр(!), необходимы еще буквенные символы");
            isValid=false;
        }

        if(invalidDomain(domain)) {
            alert("Домен допускает 2 или 3 части, от 2 до 5 , буквенных символов каждая");
            isValid=false;
        }

        return isValid;

        function notValidLoginSymbols(login) {
            var pattern = /[^А-Яа-я\w.-]/;
            return pattern.test(login);
        }

        function invalidDomain(domain) {
            var pattern = /^([A-ZА-Я]{2,5})\.([A-ZА-Я]{2,5})(\.([A-ZА-Я]{2,5}))*$/i;
            return !pattern.test(domain);
        };


        function onlyDigitsUsername(username) {
            var pattern = /^\d+$/;
            return pattern.test(username);
        };

    }

    function validatePassword(password) {
        var isValid = true;

        var passWLength = password.length;
        if ( passWLength < 8 || password.length > 20) {
            alert("Введите пароль 8-10 символов");
            isValid = false;
        }
        var patternHasUpperAndLower = /(?=.*?[A-ZА-Я])(?=.*?[a-zа-я]).*/;

        var patternHasSymbols = /(?=.*?[#])(?=.*?[$])(?=.*?[!])/;

        if(!patternHasSymbols.test(password)) {
            alert("В пароле должны присутствовать символы: \'#\' \'!\' \'$\'");
            isValid = false;
        }

        if(!patternHasUpperAndLower.test(password)) {
            alert("Должны быть символи и нижнего и верхнего регистра.");
            isValid = false;
        }

        return isValid;
    }


})();
