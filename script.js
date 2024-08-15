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
