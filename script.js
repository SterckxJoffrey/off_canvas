
const toggleBtn = document.getElementById('toggle');
const content = document.getElementById('off_canvas');

toggleBtn.addEventListener('click', () => {
content.classList.toggle('hidden');
});

