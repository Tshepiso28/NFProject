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


    const postDiv = document.createElement('div');
    postDiv.classList.add('time-line');

    postDiv.innerHTML = `
        <div class="user-line">
            <div class="post-info">
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="">
                <h4>Donald</h4>
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
