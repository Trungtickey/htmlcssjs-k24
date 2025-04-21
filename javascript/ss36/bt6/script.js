let comments = [
    {
        point: 1,
        content: 'dở',
    }
];

if(localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
} else {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function setComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function renderComments(){
    let container = document.getElementById('comment-list');
    container.innerHTML = comments.map((t) => `
        <li>
            span>${'★'.repeat(t.point)}${'☆'.repeat(5 - t.point)}</span>
            <b>${t.content}</b>
        </li>
    `).join('');
    setComments();
}

let currentRating = 0;

const stars = document.querySelectorAll('.stars');
const ratingDisplay = document.querySelector('.selected-display');

stars.forEach(star => {
    star.addEventListener('click', () => {
        currentRating = parseInt(star.getAttribute('data-value'));
        ratingDisplay.textContent = `Đánh giá: ${currentRating} sao`;
        highLightStars(currentRating);
    })
});

function highLightStars(rating) {
    stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-value'));
        star.style.color = val <= rating ? 'gold' : 'gray';
    });
}

function submitReview() {
    const content = document.getElementById("comment-input").value.trim();

    if (currentRating === 0 || content === "") {
        alert("Vui lòng chọn số sao và nhập bình luận.");
        return;
    }

    const newComment = {
        point: currentRating,
        content: content
    };

    comment.push(newComment);
    document.getElementById("comment-input").value = "";
    currentRating = 0;
    ratingDisplay.textContent = "Bạn chưa đánh giá.";
    highLightStars(0);
    renderComments();
}
renderComments();