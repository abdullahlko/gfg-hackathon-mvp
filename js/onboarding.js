/**
 * Onboarding Module - Handles user profile collection
 */

// User profile data
let userProfile = {
    income: null,
    risk: null,
    goal: null
};

// Current step
let currentStep = 1;

/**
 * Initialize onboarding - reset everything on page load
 */
function initOnboarding() {
    // Check if user has completed onboarding before
    const savedProfile = localStorage.getItem('nivesh_userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
    } else {
        userProfile = {
            income: null,
            risk: null,
            goal: null
        };
    }
    
    currentStep = 1;
    updateProgress();
    updateStepIndicators();
}

/**
 * Select income range
 */
function selectIncome(button) {
    // Clear previous selection
    document.querySelectorAll('#step-income .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Set new selection
    button.classList.add('selected');
    userProfile.income = button.dataset.value;
    saveProfile();
    
    // Move to next step after short delay
    setTimeout(() => {
        showStep(2);
    }, 300);
}

/**
 * Select risk level
 */
function selectRisk(button) {
    document.querySelectorAll('#step-risk .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
    userProfile.risk = button.dataset.value;
    saveProfile();
    
    setTimeout(() => {
        showStep(3);
    }, 300);
}

/**
 * Select savings goal
 */
function selectGoal(button) {
    document.querySelectorAll('#step-goal .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
    userProfile.goal = button.dataset.value;
    saveProfile();
    
    setTimeout(() => {
        showStep(4);
        updateSummary();
    }, 300);
}

/**
 * Show specific step
 */
function showStep(step) {
    currentStep = step;
    
    // Hide all steps
    document.querySelectorAll('.onboarding-step').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Show target step
    const stepIds = ['step-income', 'step-risk', 'step-goal', 'step-summary'];
    const targetStep = document.getElementById(stepIds[step - 1]);
    if (targetStep) {
        targetStep.classList.remove('hidden');
    }
    
    updateProgress();
    updateStepIndicators();
}

/**
 * Update step indicators
 */
function updateStepIndicators() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        const line = dot?.nextElementSibling;
        
        if (dot) {
            dot.classList.remove('active', 'completed');
            if (i < currentStep) {
                dot.classList.add('completed');
            } else if (i === currentStep) {
                dot.classList.add('active');
            }
        }
        
        if (line && line.classList.contains('step-line')) {
            line.classList.remove('completed');
            if (i < currentStep) {
                line.classList.add('completed');
            }
        }
    }
}

/**
 * Update progress bar
 */
function updateProgress() {
    const progress = (currentStep / 4) * 100;
    const progressBar = document.getElementById('onboarding-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

/**
 * Update summary display with personalized recommendations
 */
function updateSummary() {
    const summaryContent = document.getElementById('summary-content');
    if (!summaryContent) return;
    
    const incomeLabels = {
        'below-10k': t('incomeBelow10k'),
        '10k-25k': t('income10kTo25k'),
        '25k-50k': t('income25kTo50k'),
        'above-50k': t('incomeAbove50k')
    };
    
    const riskLabels = {
        'very-low': t('riskVeryLow'),
        'low': t('riskLow')
    };
    
    const goalLabels = {
        'savings': t('goalSavings'),
        'emergency': t('goalEmergency'),
        'education': t('goalEducation')
    };
    
    summaryContent.innerHTML = `
        <p><span>${t('summaryIncome')}:</span> <strong>${incomeLabels[userProfile.income] || '-'}</strong></p>
        <p><span>${t('summaryRisk')}:</span> <strong>${riskLabels[userProfile.risk] || '-'}</strong></p>
        <p><span>${t('summaryGoal')}:</span> <strong>${goalLabels[userProfile.goal] || '-'}</strong></p>
    `;
    
    // Generate personalized recommendation
    updatePersonalizedRecommendation();
}

/**
 * Generate personalized recommendations based on user profile
 */
function updatePersonalizedRecommendation() {
    const recText = document.getElementById('rec-text');
    const suggestedAmount = document.getElementById('suggested-amount');
    if (!recText || !suggestedAmount) return;
    
    // Calculate suggested daily investment based on income
    let dailyAmount = 10;
    let recommendation = '';
    
    const { income, risk, goal } = userProfile;
    
    // Income-based suggestions
    if (income === 'below-10k') {
        dailyAmount = 10;
    } else if (income === '10k-25k') {
        dailyAmount = 25;
    } else if (income === '25k-50k') {
        dailyAmount = 50;
    } else if (income === 'above-50k') {
        dailyAmount = 100;
    }
    
    // Goal + Risk based personalized message
    if (goal === 'emergency') {
        if (risk === 'very-low') {
            recommendation = t('recEmergencyVeryLow');
        } else {
            recommendation = t('recEmergencyLow');
        }
    } else if (goal === 'education') {
        if (risk === 'very-low') {
            recommendation = t('recEducationVeryLow');
        } else {
            recommendation = t('recEducationLow');
        }
    } else { // savings
        if (risk === 'very-low') {
            recommendation = t('recSavingsVeryLow');
        } else {
            recommendation = t('recSavingsLow');
        }
    }
    
    recText.textContent = recommendation;
    suggestedAmount.textContent = `₹${dailyAmount}`;
    
    // Store for use in invest section
    localStorage.setItem('nivesh_suggestedDaily', dailyAmount);
}

/**
 * Save profile to localStorage
 */
function saveProfile() {
    localStorage.setItem('nivesh_userProfile', JSON.stringify(userProfile));
}

/**
 * Navigate to investment tab
 */
function goToInvest() {
    switchTab('invest');
}

/**
 * Tab navigation
 */
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(tabName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Initialize sections based on tab
    if (tabName === 'invest') {
        updateInvestmentHistory();
    } else if (tabName === 'tracker') {
        updateTrackerDisplay();
    } else if (tabName === 'education') {
        updateReadingProgress();
    }
}

// Initialize tab navigation
document.addEventListener('DOMContentLoaded', () => {
    initOnboarding();
    
    // Add click handlers to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });
});
