const sm_close_btn = document.getElementById('support-message-close-btn');
const sm_content = document.getElementById('support-message');

sm_close_btn.addEventListener('click', function () {
    sm_content.style.display = 'none'
})


let isVisible = false;
function searchShow() {
    const block = document.querySelector('#nav-search-content');
    isVisible = !isVisible;

    if (isVisible) {
        block.classList.add('show');
    } else {
        block.classList.remove('show');
    }
}
