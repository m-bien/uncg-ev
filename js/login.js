function login() {
    localStorage.setItem("loggedIn", true);

    let email = $("#email")[0].value.toLowerCase();
    console.log(email);

    if (email.includes("admin")) {
        localStorage.setItem("admin", true);
        window.location.href = 'admin.html';
    } else if (email.includes("uncg")) {
        window.location.href = 'home.html';
    } else {
        window.location.href = 'home.html';
    }
}

function signup() {
    window.location.href = 'home.html';
}

