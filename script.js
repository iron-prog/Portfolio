// script.js

// Function to fetch user stats from GitHub
async function fetchUserStats() {
    const username = 'iron-prog';
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    document.getElementById('repos').innerText = data.public_repos;
    document.getElementById('followers').innerText = data.followers;
    document.getElementById('following').innerText = data.following;
}

// Smooth scrolling navigation
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    links.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Fetch user stats on page load
window.onload = fetchUserStats;