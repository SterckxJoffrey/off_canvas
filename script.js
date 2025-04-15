const toggleBtn = document.getElementById('toggle');
const content = document.getElementById('off_canvas');
const closeImg = document.getElementById('close_img');

toggleBtn.addEventListener('click', () => {
  content.classList.toggle('active');
});

closeImg.addEventListener('click', () => {
  content.classList.remove('active');
});
