const user = "John"
const password = "123"

document.getElementById("submit").addEventListener("click", function () {
    const user = document.getElementById("user").value;
    const password = document.getElementById("mail").value;

    if (user == "John" && password == "123") {
        alert(window.location = 'bank.html')

    } else {
        alert("Invalid Credentials")

    }

    user.value = " ";
    password.value = " ";

})
