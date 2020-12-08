function validateForm() {

            var name1 = document.getElementById("usr");

            if (name1.value == "") {
                document.getElementById("nam").innerHTML = "*Please Enter your name*";
                name1.focus();
                name1.style.border = "solid 3px red";
                return false;
            }








            var pass1 = document.getElementById("pass");

            if (pass1.value == "") {
                document.getElementById("passrr").innerHTML = "*Enter your correct password*";
                pass1.focus();
                pass1.style.border = "solid 4px red";
                return false;
            }

            if (pass1.value.length < 8) {
                document.getElementById("passrr").innerHTML = "*password must contain 8 characters*";
                return false;
            }

        }

        function validate() {

            var transfer = document.getElementById("acc");
            if (transfer.value == "") {
                document.getElementById("money").innerHTML = "*Please Enter your account number*";
                transfer.focus();
                transfer.style.border = "solid 3px red";
                return false;
            }

            if (transfer.value.length < 16) {
                document.getElementById("money").innerHTML = "*Account number must contain 16 characters*";
                return false;
            }


        }



        function onlyNumber(evt) {

            var ASCIICode = (evt.which) ? evt.which : evt.keyCode
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
                return false;
            return true;
        }