// const deleteBtn = document.querySelector('#delete-post');
// const updateBtn = document.querySelector('#update-post');
// const createBtn = document.querySelector('#post-create');

// createBtn.addEventListener('click', postCreate);
// deleteBtn.addEventListener('click', postDelete);
// updateBtn.addEventListener('click', postUpdate);

// file /js/main or dash - button function for create post
const postCreate = async () => {
    // event.preventDefault();
    try {
        const postTitle = document.querySelector('#new-title').value.trim();  //update html with ID's !!
        const postBody = document.querySelector('#new-body').value.trim();
        
        console.log(postTitle + ' ' + postBody);

        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                body: postBody
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard'); //already doing render??
            console.log('new post okay');
        }

    } catch (error) {
        alert(error);
    }
};

// file /js/main or dash - button function for create GPT post
const gptCreate = async (event) => {
    event.preventDefault();
    try {
        const postTitle = document.getElementById('post-title').value.trim();  //update html with ID's !!
        const postBody = document.getElementById('post-body').value.trim();
        
        console.log(postTitle + ' ' + postBody);

        const response = await fetch('/api/post/gpt', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                body: postBody
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard'); //already doing render??
        }

    } catch (error) {
        alert(error);
    }
};

// file /js/main or dash - button function for update
const postUpdate = async (event) => {
    // event.preventDefault();
    try {
        const titleUpdate = document.getElementById('title-update').value.trim();  //update html with ID's !!
        const bodyUpdate = document.getElementById('body-update').value.trim();
        const postId = titleUpdate.dataset.id
        
        console.log(postTitle + ' ' + postBody);

        const response = await fetch('/api/post', {
            method: 'PUT',
            body: JSON.stringify({
                id: postId,
                title: titleUpdate,
                body: bodyUpdate
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/dashboard'); //already doing render??
            console.log('update okay');
        }

    } catch (error) {
        alert(error);
    }
};

// file /js/main or dash - button function for delete
const postDelete = async () => {
    // event.preventDefault();
    console.log('delete clicked');
    try {
        const deletePost = document.querySelector('#delete-post');  //update html with ID's !!
        const postId = deletePost.dataset.bsId;
        const postTitle = deletePost.dataset.bsTitle;

        console.log(postId + ' ' + postTitle);

        const response = await fetch('/api/post', {
            method: 'DELETE',
            body: JSON.stringify({
                id: postId,
                title: postTitle
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard'); //already doing render??
            console.log('post deleted');
        }

    } catch (error) {
        alert(error);
    }
};