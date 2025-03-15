// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = {
        'feed': document.getElementById('feed-section'),
        'about': document.getElementById('about-section'),
        'content': document.getElementById('content-section'),
        'guestbook': document.getElementById('guestbook-section')
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show selected section, hide others
            const tabName = item.getAttribute('data-tab');
            Object.keys(sections).forEach(key => {
                if (key === tabName) {
                    sections[key].classList.remove('hidden');
                } else {
                    sections[key].classList.add('hidden');
                }
            });
        });
    });


// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
}

// Update theme toggle button
function updateThemeToggle() {
    const isDark = body.classList.contains('dark-theme');
    // Animate through CSS classes instead of direct style manipulation
    themeToggle.classList.toggle('dark', isDark);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeToggle();
});

// Initial update
updateThemeToggle();

// Follow Button (updated)
const followButton = document.querySelector('.follow-button');
let following = false;

followButton.addEventListener('click', () => {
    following = !following;
    if (following) {
        followButton.innerHTML = 'Following <i class="fab fa-x"></i>';
        followButton.style.backgroundColor = '#1DA1F2';
    } else {
        followButton.innerHTML = 'Follow <i class="fab fa-x"></i>';
        followButton.style.backgroundColor = '#ec6cb9';
    }
});

// Rest of existing script.js remains the same...
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        
        if (email) {
            alert(`Thanks for subscribing with ${email}! I'll keep you updated on my latest adventures.`);
            newsletterForm.reset();
        }
    });



// Update the guestbook form handler inside DOMContentLoaded
if (guestbookForm) {
    guestbookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = guestbookForm.querySelector('textarea').value.trim();
        const name = guestbookForm.querySelector('input').value.trim();
        
        if (message && name) {
            const entry = document.createElement('div');
            entry.className = 'guestbook-entry';
            entry.innerHTML = `
                <div class="entry-header">
                    <div class="user-avatar">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </div>
                    <div class="entry-info">
                        <h3 class="entry-author">${name}</h3>
                        <div class="entry-meta">
                            <span class="entry-date">
                                <svg viewBox="0 0 24 24" width="14" height="14">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                </svg>
                                ${new Date().toLocaleString('en-US', { 
                                    month: 'long', 
                                    day: 'numeric', 
                                    year: 'numeric', 
                                    hour: 'numeric', 
                                    minute: '2-digit', 
                                    hour12: true 
                                })}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="entry-content">
                    <p>${message}</p>
                </div>
            `;
            
            // Target the correct container
            const container = document.getElementById('guestbook-entries-container');
            container.prepend(entry);
            
            // Clear form and prevent scroll
            guestbookForm.reset();
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}


    

    // Load profile image with error handling
    const profileImg = document.getElementById('profile-img');
    const postAvatar = document.getElementById('post-avatar');
    
    // Fallback to placeholder if error
    profileImg.onerror = () => {
        profileImg.src = 'https://via.placeholder.com/140';
    };
    
    postAvatar.onerror = () => {
        postAvatar.src = 'https://via.placeholder.com/40';
    };
});






// Update the JavaScript
const linksButton = document.getElementById('links-button');
const socialModal = document.getElementById('socialModal');
const closeModal = document.querySelector('.close-modal');

// Show modal
linksButton.addEventListener('click', (e) => {
    e.preventDefault();
    socialModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
const closeModalFunc = () => {
    socialModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => e.target === socialModal && closeModalFunc());
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModalFunc());





