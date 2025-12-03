$(document).ready(function () {
    let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
    alert(currentUser.nome)
    // let users = JSON.parse(localStorage.getItem('user')) || [];
    // users = user.users_get()
    // localStorage.setItem('user', JSON.stringify(user));


    // let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
    // currentUser = currUser_get();
    // localStorage.setItem('currUser', JSON.stringify(currUser));

    // alert(users[0].nome);
    // alert(currUser.nome);
});

