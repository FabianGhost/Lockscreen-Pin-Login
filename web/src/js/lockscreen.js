/**
 *  Functions
 */

    function clear() {
        document.querySelector("#inputbox").value = "";
    }

    function delNum() {
        var pwd = document.querySelector("#inputbox").value;
        document.querySelector("#inputbox").value = pwd.substring(0, pwd.length-1);
    }

    function addNum(num){
        document.querySelector("#inputbox").value += String(num);
        checkNums();
    }

    function checkNums(){
        var str = document.querySelector("#inputbox").value;
        if(str.length === 4){

            /**
             *  Send here API request for checking the code.
             *  Code VAR is str.
             */

            var api = true;

            //If API request = true
            if(api == true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are logged in!',
                    showConfirmButton: false,
                    timer: 1500
                });

                clear();

                //Put here your forwarding to your site after successful login

            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Wrong code!',
                    showConfirmButton: false,
                    timer: 1500
                });

                clear();

            }
        }
}

/**
 *  Events
 */

    document.querySelector("#btn_clear").addEventListener("click", function () {
        clear();
    })