const loginFormHandler = async (event) => {
    event.preventDefault();
    try {
        const usernameLogin = document.getElementById('username-login').value.trim();
        const passwordLogin = document.getElementById('password-login').value.trim();
        
        console.log(usernameLogin + ' ' + passwordLogin);

        if (usernameLogin && passwordLogin) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                user_name: usernameLogin,
                password: passwordLogin
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        }
        } else {
            alert('Please enter username and password');
        }
    } catch (error) {
        alert(error);
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    try {
        const usernameSignup = document.getElementById('username-signup').value.trim();
        const passwordSignup = document.getElementById('password-signup').value.trim();
        
        console.log(usernameSignup + ' ' + passwordSignup);

        if (usernameSignup && passwordSignup) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                user_name: usernameSignup,
                password: passwordSignup 
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        }
        } else {
            alert('Please enter username and password');
        }
    } catch (error) {
        alert(error);
    }
};

const submitLogin = document.getElementById('submit-login');
const submitSignup = document.getElementById('submit-signup');

submitLogin.addEventListener('click', loginFormHandler);
submitSignup.addEventListener('click', signupFormHandler);