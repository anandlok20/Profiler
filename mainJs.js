// $(document).ready(function () {

// });
window.onload = function() {
    var test = localStorage.getItem("user_array");
    var u_array = JSON.parse(test);
    // var cardData;
    for (let i = 0; i < u_array.length; i++) {
        var data = localStorage.getItem("profile" + u_array[i]);
        var udata = JSON.parse(data);
        // document.getElementById("showData").innerHTML+=udata.Name;

        var html = '<div class="col-md-2"><div class="card"><img class="card-img-top" src="\
        ' + udata.image + '" alt="profileImage"><div class="card-body"><h4 class="card-title">\
        ' + udata.Name + '</h4><p class="card-text">DOB: ' + udata.dateOfBirth + '<br><button  class="btn btn-primary"\
        onclick="showData(' + udata.Username + ')">Full Profile</a></p></div></div></div>';

        document.getElementById("showData").innerHTML += html;
    }
    // document.getElementById("showData").innerHTML+=cardData;
    // window.alert(u_array.length);  
};