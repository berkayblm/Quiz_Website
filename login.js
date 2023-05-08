const register = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
            alert("Successfully Registered")
        })
        .catch((err) => {
            alert(err.message)

            console.log(err.code)
            console.log(err.message)
        })
}

const login = ()=> {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
            alert("Logged In Successfully")
            window.location.href="quiz.html"
        })
        .catch((err) => {
            alert(err.message)

            console.log(err.code)
            console.log(err.message)
        })
}