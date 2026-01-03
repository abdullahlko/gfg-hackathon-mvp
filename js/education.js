/**
 * Education Module - Handles accordion cards for learning content
 */

// Video URLs
const VIDEO_URLS = {
    basics: 'https://www.youtube.com/embed/p7HKvqRI_Bo',
    fd: 'https://www.youtube.com/embed/nsDg3Q7ZXDA',
    mf: 'https://www.youtube.com/embed/ZJR-ocke2NQ'
};

/**
 * Toggle education card expansion
 */
function toggleCard(header) {
    const card = header.parentElement;
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other cards
    document.querySelectorAll('.edu-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Toggle current card
    if (!isExpanded) {
        card.classList.add('expanded');
        
        // Track that this card was read
        const cardIndex = Array.from(document.querySelectorAll('.edu-card')).indexOf(card);
        markCardAsRead(cardIndex);
    }
}

/**
 * Mark a card as read
 */
function markCardAsRead(index) {
    let readCards = JSON.parse(localStorage.getItem('nivesh_readCards') || '[]');
    if (!readCards.includes(index)) {
        readCards.push(index);
        localStorage.setItem('nivesh_readCards', JSON.stringify(readCards));
        updateReadingProgress();
    }
}

/**
 * Update reading progress display
 */
function updateReadingProgress() {
    const readCards = JSON.parse(localStorage.getItem('nivesh_readCards') || '[]');
    const totalCards = document.querySelectorAll('.edu-card').length;
    const progress = totalCards > 0 ? Math.round((readCards.length / totalCards) * 100) : 0;
    
    const progressPercent = document.getElementById('reading-progress');
    const progressFill = document.getElementById('reading-fill');
    
    if (progressPercent) {
        progressPercent.textContent = progress + '%';
    }
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
}

/**
 * Open video modal
 */
function openVideo(videoKey) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    
    if (!modal || !container || !VIDEO_URLS[videoKey]) return;
    
    container.innerHTML = `
        <iframe 
            src="${VIDEO_URLS[videoKey]}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close video modal
 */
function closeVideo() {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    
    if (modal) {
        modal.classList.remove('active');
    }
    
    if (container) {
        container.innerHTML = '';
    }
    
    document.body.style.overflow = '';
}

/**
 * Initialize education section
 */
function initEducation() {
    // Add keyboard support for card headers
    document.querySelectorAll('.edu-card-header').forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(header);
                
                // Update aria-expanded
                const card = header.parentElement;
                header.setAttribute('aria-expanded', card.classList.contains('expanded'));
            }
        });
        
        // Update aria on click too
        header.addEventListener('click', () => {
            setTimeout(() => {
                const card = header.parentElement;
                header.setAttribute('aria-expanded', card.classList.contains('expanded'));
            }, 10);
        });
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideo();
        }
    });
    
    // Close modal on background click
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeVideo();
            }
        });
    }
    
    // Update reading progress on load
    updateReadingProgress();
}

/**
 * Get reading progress percentage
 */
function getReadingProgress() {
    const readCards = JSON.parse(localStorage.getItem('nivesh_readCards') || '[]');
    const totalCards = document.querySelectorAll('.edu-card').length;
    return totalCards > 0 ? Math.round((readCards.length / totalCards) * 100) : 0;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEducation);
