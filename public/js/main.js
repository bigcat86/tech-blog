const handleLogout = async(event) => {
    // event.preventDefault();
    console.log('im handling logout');
    try {
       const response = await fetch('api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
       });
       if (response.ok) {
        document.location.replace('/login');
        console.log('logged out');
       }
    } catch (error) {
        alert(error);
    }
};

