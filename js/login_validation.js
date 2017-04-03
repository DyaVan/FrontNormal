(function () {

    $(document).ready(function () {

        $("#login-form").submit(function (event) {
            alert("dad");


            if(validateInput() && validatePassword()) {
                event.preventDefault();
                alert("pisya");
            }

            alert("hurei");


        });



    })

    function validateInput() {
        return true;
    }
    function validatePassword() {
        return true;
    }


})();
