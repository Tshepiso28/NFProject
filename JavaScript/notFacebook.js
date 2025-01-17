const postButton = document.getElementById('postButton');
const txtWPost = document.getElementById('txtWPost');
const imageUpload = document.getElementById('imageUpload');
const timeline = document.getElementById('timeline');
let uploadedImage = '';


imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            uploadedImage = event.target.result; 
        };
        reader.readAsDataURL(file);
    }
});


postButton.addEventListener('click', () => {
    const postContent = txtWPost.value.trim();


    if (!postContent && !uploadedImage) {
        alert('Please write something or upload an image!');
        return;
    }
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('User not logged in. Please sign in first.');
        return;
    }


    const postDiv = document.createElement('div');
    postDiv.classList.add('time-line');

    postDiv.innerHTML = `
        <div class="user-line">
            <div class="post-info">

                <h4>${loggedInUser}</h4>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div class="user-post">
            <p>${postContent}</p>
            ${uploadedImage ? `<img src="${uploadedImage}" alt="Post Image" style="max-width: 100%; margin-top: 10px;">` : ''}
        </div>
    `;

    timeline.prepend(postDiv);


    txtWPost.value = '';
    uploadedImage = '';
    imageUpload.value = '';
});
