// localStorage.setItem("user_array", null);

function saveData() {
    var nam = document.cProfile.name.value;
    var uname = document.cProfile.uname.value;
    var pass = document.cProfile.pass.value;
    var gender = document.cProfile.gender.value;
    var dob = document.cProfile.dob.value;
    var email = document.cProfile.email.value;
    var addr = document.cProfile.addr.value;
    var city = document.cProfile.city.value;
    var ctry = document.cProfile.ctry.value;
    var contact = document.cProfile.contact.value;
    var image = document.cProfile.image.value;
    var isport = document.cProfile.isport.value;
    var osport = document.cProfile.osport.value;
    var hobbies = document.cProfile.hobbies.value;

    // if (nam == "") {
    //     document.getElementById("helpIdnam").innerHTML += " empty name!!"
    // } else {
    //     if (uname == "") {
    //         document.getElementById("helpIduname").innerHTML += " empty username!!"
    //     } else {
    //         if (pass == "" && pass.length > 7) {
    //             document.getElementById("helpIdpass").innerHTML += " empty password!!"
    //         } else {
    //             if (email == "") {
    //                 var pattern = /@/;
    //                 pattern.test(email);
    //             } else {
    //                 var data = { Name: nam, Username: uname, Password: pass, Gender: gender, dateOfBirth: dob, email: email, address: addr, city: city, country: ctry, contact: contact, image: image, isport: isport, osport: osport, hobbies: hobbies };
    //                 // var myJson = JSON.stringify(data);
    //                 localStorage.setItem("profile" + uname, JSON.stringify(data));
    //                 // window.alert(myJson);
    //                 var obj = localStorage.getItem("user_array");
    //                 var test = JSON.parse(obj);
    //                 // window.alert(test);
    //                 if (test == null) {
    //                     test = new Array();
    //                     test.push(uname);
    //                 } else {
    //                     test.push(uname);
    //                 }
    //                 localStorage.setItem("user_array", JSON.stringify(test));
    //                 // window.alert(test);
    //             }
    //         }
    //     }
    // }
    if (validation(nam)) {
        var data = { Name: nam, Username: uname, Password: pass, Gender: gender, dateOfBirth: dob, email: email, address: addr, city: city, country: ctry, contact: contact, image: image, isport: isport, osport: osport, hobbies: hobbies };
        // var myJson = JSON.stringify(data);
        localStorage.setItem("profile" + uname, JSON.stringify(data));
        // window.alert(myJson);
        var obj = localStorage.getItem("user_array");
        var test = JSON.parse(obj);
        // window.alert(test);
        if (test == null) {
            test = new Array();
            test.push(uname);
        } else {
            test.push(uname);
        }
        localStorage.setItem("user_array", JSON.stringify(test));
        // window.alert(test);
        window.location.replace("index.html");
    }

}

function validation(para) {
    if (para == "") {
        document.getElementById("helpId" + para).innerHTML += " empty " + para + "!!";
    } else {
        return true;
    }
}