function showPassword() {
    let input = document.getElementById('password')
    if (input.type == 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}
