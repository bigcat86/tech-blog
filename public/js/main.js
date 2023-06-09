const handleLogin = (event) => {
    event.preventDefault();
    document.location.replace('/login');
}

const handleLogout = async(event) => {
    event.preventDefault();
    console.log('im clicked');
    try {
       const response = await fetch('api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
       });
       if (response.ok) {
        document.location.replace('/login');
       }
    } catch (error) {
        alert(error);
    }
};

// document.querySelector('#login').addEventListener('click', handleLogin);
document.querySelector('#logout').addEventListener('click', handleLogout);