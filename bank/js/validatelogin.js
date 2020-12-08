function validateForm() {

            var name1 = document.getElementById("usr");

            if (name1.value == "") {
                // alert("Enter your Mail Id");
                document.getElementById("nam").innerHTML = "*Please Enter your Mail ID*";
                name1.focus();
                //name1.style.border = "solid 3px red";
                return false;
            }

            var pass1 = document.getElementById("pass");

            if (pass1.value == "") {
                // alert("Enter correct password");
                document.getElementById("passrr").innerHTML = "*Enter your correct password*";
                pass1.focus();
                //pass1.style.border = "solid 4px red";
                return false;
            }

            if (pass1.value.length < 8) {
                //alert("password must have 8 characters");
                document.getElementById("passrr").innerHTML = "*password must contain 8 characters*";
                return false;
            }

        }