let form = document.getElementById("form")
form.addEventListener("submit", function(){
    event.preventDefault()
    let email =form.email.value;
    let password=form.password.value;
    console.log(email, password)
    if(email=="user@empher.com" && password=="user@123"){
        alert("login success")
        window.location.href="books.html"
    } 

})



