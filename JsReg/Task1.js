
        function saveData() {
            let name, email, mobile, address, Count;
            name = document.getElementById("name").value;
            email = document.getElementById("email").value;
            mobile = document.getElementById("mobile").value;
            address = document.getElementById("address").value;
            Count = document.getElementById("Count").value;

            let user_records = new Array();
            user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
            if (user_records.some((v) => { return ((v.email == email) || (v.name == name)) })) {
                alert("duplicate data");
            }
            else if(name == ""){
                alert(" Name field required");
            }
            else if(email == ""){
                alert("Email feild required");
            }
            else if(mobile == ""){
                alert("mobile feild required");
            }
           
            else {
                if (mobile.length != 10) {
                    alert("Enter Valid 10 digit Phone number")
                }
                else if (name != "") {
                    user_records.push({
                        "name": name,
                        "email": email,
                        "mobile": mobile,
                        "address": address,
                        "Count": Count
                    })
                    localStorage.setItem("users", JSON.stringify(user_records));
                }
                else
                    alert("valid data");
            }
        }



