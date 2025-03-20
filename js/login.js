//*** TEMPORARY SOLUTION ***//

// --- LOGIN TO ACCOUNT ---
function validateLogin(event) {
    const email = document.getElementById("email").value;

    // (this will check emails in database later)
    const email_1 = /^tbjoye@uncg\.edu$/;
    const email_2 = /^mrgood@uncg\.edu$/;
    const email_3 = /^r_mei@uncg\.edu$/;
    const email_4 = /^d_vasqu2@uncg\.edu$/;
    
    // check if email is recognized 
    if (email_1.test(email) || email_2.test(email) || email_3.test(email)) {
        document.getElementById("errorMessage").style.display = "none";     // if valid
        event.preventDefault();
        window.location.href = "home.html";
        return true;

    } else if (email_4.test(email)) {
        document.getElementById("errorMessage").style.display = "none";     // if admin is valid
        event.preventDefault();
        window.location.href = "admin.html";
        return true;
        
    } else {
        document.getElementById("errorMessage").style.display = "block";    // if invalid
        return false; 
    }
}

// --- CREATE ACCOUNT ---
function createAccount() {
    const email = document.querySelector('input[type="email"]').value;

    const regex = /^[a-zA-Z0-9._%+-]+@uncg\.edu$/;

    // check if uncg email 
    if (regex.test(email)) {
        window.location.href = "index.html";
        return false; 
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    }
}