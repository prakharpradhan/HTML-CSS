function submitdata() {


}
function validatename() {

    var name = document.cal.name.value;
    var reg = /^([a-zA-Z0-9_-]){3,10}$/;
    var result = reg.test(name);
    if (!result) {

        document.getElementById("name").style.display = "inline";
    }
    else {
        document.getElementById("name").style.display = "none";
    }
}
function validateDob() {

    var dob = document.cal.dob.value;
    var reg = /(?!3[2-9]|00|02-3[01]|04-31|06-31|09-31|11-31)[0-3][0-9]-(?!1[3-9]|00)[01][0-9]-(?!10|28|29)[12][089][0-9][0-9]/;
    var result = reg.test(dob);
    alert(result);
    if (!result) {
        document.getElementById("dob").style.display = "inline";
    }
    else {
        alert("else");
        document.getElementById("dob").style.display = "none";
    }
}
function validatePhoneNumber() {
    var phoneno = document.cal.name.phone;
    var reg = /^\d{10}$/;
    var result = reg.test(phoneno);

    if (!result) {
        document.getElementById("phone").style.display = "inline";
    }
    else {
        document.getElementById("phone").style.display = "none";
    }
}
function validateEmail() {
    alert("sdf")
    var email = document.cal.email.value;

    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result = reg.test(email);
    alert(result);
    if (!result) {
        document.getElementById("email").style.display = "inline";
    }
    else {
        document.getElementById("email").style.display = "none";
    }
}

