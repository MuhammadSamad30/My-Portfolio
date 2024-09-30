const typed = new Typed(".multi-text", {
  strings: [
    "Fullstack Developer",
    "Software Developer",
    "Web Designer",
    "UI/UX Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// Dark mode   

const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

   if (body.classList.contains('dark-mode')) {
    icon.classList.replace('bx-moon', 'bx-sun');
  } else {
    icon.classList.replace('bx-sun', 'bx-moon');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const progressBar = skill.querySelector('.progress');
    const percentage = skill.getAttribute('data-percentage');

    
    setTimeout(() => {
      progressBar.style.width = `${percentage}%`;
      progressBar.textContent = `${percentage}%`;
    }, 400);
  });
});

function projectPage(){
  window.location.href = "project.html";
}

function goToHome(){
  window.location.href = "index.html";
}