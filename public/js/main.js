const handleLogout = async() => {
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

const commentCreate = async () => {
    // event.preventDefault();
    try {
        console.log('creating comment');
        const postCard = document.querySelector('#post-card');
        const commentBody = document.querySelector('#new-comment').value.trim();
        console.log(commentBody);

        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                body: commentBody,
                post_id: postCard.dataset.postId
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/'); //already doing render??
            console.log('new post okay');
        }

    } catch (error) {
        alert(error);
    }
};