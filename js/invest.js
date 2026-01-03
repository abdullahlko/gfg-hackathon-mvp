/**
 * Investment Module - Handles micro-investment simulation
 */

// Simulated interest rates (annual)
const RATES = {
    fd: 0.065,      // 6.5% for Fixed Deposits
    bonds: 0.072,   // 7.2% for Government Bonds
    mf: 0.08        // 8% for Low-Risk Mutual Funds
};

// Allocation percentages
const ALLOCATION = {
    fd: 0.50,       // 50% to Fixed Deposits
    bonds: 0.30,    // 30% to Government Bonds
    mf: 0.20        // 20% to Mutual Funds
};

// Current selected amount
let selectedAmount = 0;

// Investment history
let investments = [];

/**
 * Initialize investments from localStorage
 */
function initInvestments() {
    const savedInvestments = localStorage.getItem('nivesh_investments');
    if (savedInvestments) {
        investments = JSON.parse(savedInvestments);
    }
    updateInvestmentHistory();
    updateTrackerDisplay();
}

/**
 * Select a preset amount
 */
function selectAmount(amount) {
    selectedAmount = amount;
    
    // Update button states
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.amount) === amount) {
            btn.classList.add('selected');
        }
    });
    
    // Clear custom input
    const customInput = document.getElementById('custom-input');
    if (customInput) {
        customInput.value = '';
    }
    
    updateAllocation();
}

/**
 * Handle custom amount input
 */
function handleCustomAmount(value) {
    const amount = parseInt(value) || 0;
    
    // Clear preset selections
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    if (amount >= 10) {
        selectedAmount = Math.min(amount, 100000); // Cap at 1,00,000
        updateAllocation();
    } else {
        selectedAmount = 0;
        hideAllocation();
    }
}

/**
 * Format currency with commas (Indian format)
 */
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

/**
 * Update allocation display with breakdown and growth calculator
 */
function updateAllocation() {
    if (selectedAmount < 10) {
        hideAllocation();
        return;
    }
    
    const allocationSection = document.getElementById('allocation-display');
    if (allocationSection) {
        allocationSection.classList.remove('hidden');
    }
    
    // Calculate allocations
    const fdAmount = Math.round(selectedAmount * ALLOCATION.fd);
    const bondsAmount = Math.round(selectedAmount * ALLOCATION.bonds);
    const mfAmount = selectedAmount - fdAmount - bondsAmount; // Remainder to MF
    
    // Calculate estimated returns (1 year)
    const fdReturn = Math.round(fdAmount * (1 + RATES.fd));
    const bondsReturn = Math.round(bondsAmount * (1 + RATES.bonds));
    const mfReturn = Math.round(mfAmount * (1 + RATES.mf));
    
    const totalReturn = fdReturn + bondsReturn + mfReturn;
    const totalProfit = totalReturn - selectedAmount;
    
    // Update display
    updateElement('fd-amount', formatCurrency(fdAmount));
    updateElement('bonds-amount', formatCurrency(bondsAmount));
    updateElement('mf-amount', formatCurrency(mfAmount));
    
    updateElement('fd-return', formatCurrency(fdReturn));
    updateElement('bonds-return', formatCurrency(bondsReturn));
    updateElement('mf-return', formatCurrency(mfReturn));
    
    updateElement('total-invested', formatCurrency(selectedAmount));
    updateElement('total-return', formatCurrency(totalReturn));
    updateElement('total-profit', '+' + formatCurrency(totalProfit));
    
    // Update investment plan timeline
    updateInvestmentPlan(selectedAmount);
    
    // Update habit message
    updateHabitMessage(selectedAmount);
}

/**
 * Calculate and display investment plan projections
 */
function updateInvestmentPlan(dailyAmount) {
    // Average annual rate (weighted)
    const avgRate = (RATES.fd * ALLOCATION.fd) + (RATES.bonds * ALLOCATION.bonds) + (RATES.mf * ALLOCATION.mf);
    
    // Calculate projections for different periods
    const periods = [
        { key: '1m', days: 30, years: 1/12 },
        { key: '6m', days: 180, years: 0.5 },
        { key: '1y', days: 365, years: 1 },
        { key: '5y', days: 365 * 5, years: 5 },
        { key: '10y', days: 365 * 10, years: 10 }
    ];
    
    periods.forEach(period => {
        const totalInvested = dailyAmount * period.days;
        
        // Compound growth formula (simplified SIP approximation)
        let futureValue;
        if (period.years <= 1) {
            futureValue = Math.round(totalInvested * (1 + avgRate * period.years));
        } else {
            // SIP compound growth approximation
            const monthlyRate = avgRate / 12;
            const months = period.years * 12;
            const monthlyAmount = dailyAmount * 30;
            futureValue = Math.round(monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        }
        
        updateElement(`plan-${period.key}-invested`, formatCurrency(totalInvested));
        updateElement(`plan-${period.key}-value`, '→ ' + formatCurrency(futureValue));
    });
}

/**
 * Update habit message based on amount
 */
function updateHabitMessage(amount) {
    const monthly = amount * 30;
    const yearly = amount * 365;
    const message = `${formatCurrency(amount)} daily = ${formatCurrency(monthly)}/month = ${formatCurrency(yearly)}/year! Small habits, big results.`;
    updateElement('habit-text', message);
}

/**
 * Hide allocation section
 */
function hideAllocation() {
    const allocationSection = document.getElementById('allocation-display');
    if (allocationSection) {
        allocationSection.classList.add('hidden');
    }
}

/**
 * Helper to update element text
 */
function updateElement(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    }
}

/**
 * Simulate investment
 */
function simulateInvestment() {
    if (selectedAmount < 10) {
        showToast('Please select at least ₹10 to invest', 'error');
        return;
    }
    
    // Create investment record
    const investment = {
        id: Date.now(),
        amount: selectedAmount,
        date: new Date().toISOString(),
        allocation: {
            fd: Math.round(selectedAmount * ALLOCATION.fd),
            bonds: Math.round(selectedAmount * ALLOCATION.bonds),
            mf: selectedAmount - Math.round(selectedAmount * ALLOCATION.fd) - Math.round(selectedAmount * ALLOCATION.bonds)
        }
    };
    
    investments.push(investment);
    saveInvestments();
    updateInvestmentHistory();
    updateTrackerDisplay();
    
    // Show success message with confetti
    showToast(t('investmentSuccess', { amount: selectedAmount }), 'success');
    createConfetti();
    
    // Reset selection
    selectedAmount = 0;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    const customInput = document.getElementById('custom-input');
    if (customInput) {
        customInput.value = '';
    }
    hideAllocation();
}

/**
 * Create confetti animation
 */
function createConfetti() {
    const colors = ['#22c55e', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${2 + Math.random() * 2}s ease-out forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

/**
 * Update tracker display
 */
function updateTrackerDisplay() {
    if (investments.length === 0) {
        updateElement('tracker-total', '₹0');
        updateElement('tracker-growth', '+₹0 (0%)');
        updateElement('tracker-count', '0');
        updateElement('tracker-streak', '0 days');
        updateElement('donut-total', '₹0');
        updateElement('breakdown-fd', '₹0');
        updateElement('breakdown-bonds', '₹0');
        updateElement('breakdown-mf', '₹0');
        updateElement('goal-current', '₹0');
        updateElement('goal-fill', '').style && (document.getElementById('goal-fill').style.width = '0%');
        return;
    }
    
    // Calculate totals
    const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
    const avgRate = (RATES.fd * ALLOCATION.fd) + (RATES.bonds * ALLOCATION.bonds) + (RATES.mf * ALLOCATION.mf);
    const estimatedGrowth = Math.round(totalInvested * avgRate);
    const currentValue = totalInvested + estimatedGrowth;
    const growthPercent = ((estimatedGrowth / totalInvested) * 100).toFixed(1);
    
    // Calculate allocations
    const totalFD = investments.reduce((sum, inv) => sum + (inv.allocation?.fd || Math.round(inv.amount * ALLOCATION.fd)), 0);
    const totalBonds = investments.reduce((sum, inv) => sum + (inv.allocation?.bonds || Math.round(inv.amount * ALLOCATION.bonds)), 0);
    const totalMF = totalInvested - totalFD - totalBonds;
    
    // Calculate streak (consecutive days with investments)
    const streak = calculateStreak();
    
    // Update tracker elements
    updateElement('tracker-total', formatCurrency(currentValue));
    updateElement('tracker-growth', `+${formatCurrency(estimatedGrowth)} (${growthPercent}%)`);
    updateElement('tracker-count', investments.length.toString());
    updateElement('tracker-streak', `${streak} days`);
    
    // Update donut chart
    updateElement('donut-total', formatCurrency(totalInvested));
    updateElement('breakdown-fd', formatCurrency(totalFD));
    updateElement('breakdown-bonds', formatCurrency(totalBonds));
    updateElement('breakdown-mf', formatCurrency(totalMF));
    
    // Update goal progress
    const goalTarget = 10000;
    const goalProgress = Math.min((totalInvested / goalTarget) * 100, 100);
    updateElement('goal-current', formatCurrency(totalInvested));
    const goalFill = document.getElementById('goal-fill');
    if (goalFill) {
        goalFill.style.width = goalProgress + '%';
    }
    
    // Update goal message
    const goalMessage = document.getElementById('goal-message');
    if (goalMessage) {
        if (goalProgress >= 100) {
            goalMessage.textContent = '🎉 Congratulations! You reached your goal!';
        } else if (goalProgress >= 75) {
            goalMessage.textContent = '🔥 Almost there! Keep going!';
        } else if (goalProgress >= 50) {
            goalMessage.textContent = '💪 Great progress! Halfway there!';
        } else if (goalProgress >= 25) {
            goalMessage.textContent = '👍 Good start! Keep building the habit!';
        } else {
            goalMessage.textContent = '🌱 Every journey starts with a small step!';
        }
    }
}

/**
 * Calculate investment streak
 */
function calculateStreak() {
    if (investments.length === 0) return 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streak = 0;
    let currentDate = new Date(today);
    
    for (let i = 0; i < 365; i++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const hasInvestment = investments.some(inv => {
            const invDate = new Date(inv.date).toISOString().split('T')[0];
            return invDate === dateStr;
        });
        
        if (hasInvestment) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    return streak;
}

/**
 * Clear investment history
 */
function clearHistory() {
    if (confirm(t('confirmClearHistory'))) {
        investments = [];
        saveInvestments();
        updateInvestmentHistory();
        updateTrackerDisplay();
        showToast(t('historyCleared'));
    }
}

/**
 * Save investments to localStorage
 */
function saveInvestments() {
    localStorage.setItem('nivesh_investments', JSON.stringify(investments));
}

/**
 * Update investment history display
 */
function updateInvestmentHistory() {
    const historyContainer = document.getElementById('investment-history');
    if (!historyContainer) return;
    
    if (investments.length === 0) {
        historyContainer.innerHTML = `
            <div class="history-empty">
                <p>${t('noInvestments')}</p>
            </div>
        `;
        return;
    }
    
    // Sort by date (newest first)
    const sortedInvestments = [...investments].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    historyContainer.innerHTML = sortedInvestments.slice(0, 10).map(inv => {
        const date = new Date(inv.date);
        const formattedDate = date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        const formattedTime = date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <div class="history-item">
                <div>
                    <div class="amount">${formatCurrency(inv.amount)}</div>
                    <div class="date">${formattedDate} • ${formattedTime}</div>
                </div>
                <div class="status">✅</div>
            </div>
        `;
    }).join('');
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Hide toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initInvestments);
