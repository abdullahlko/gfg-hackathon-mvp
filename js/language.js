/**
 * Language Module - Handles English/Hindi translations
 */

const translations = {
    en: {
        // Header
        tagline: "Your trusted partner in small savings",
        
        // Demo Notice
        demoNotice: "This is a prototype demo for Byte Quest 2026. No real money involved.",
        
        // Tabs
        tabOnboarding: "Get Started",
        tabInvest: "Invest",
        tabTracker: "Tracker",
        tabEducation: "Learn",
        
        // Onboarding
        onboardingTitle: "Tell Us About Yourself",
        onboardingSubtitle: "This helps us suggest the right options for you",
        
        incomeQuestion: "What is your monthly income range?",
        incomeHelper: "This helps us suggest safe investment amounts for you",
        incomeBelow10k: "Below ₹10,000",
        income10kTo25k: "₹10,000 - ₹25,000",
        income25kTo50k: "₹25,000 - ₹50,000",
        incomeAbove50k: "Above ₹50,000",
        
        riskQuestion: "How comfortable are you with risk?",
        riskHelper: "We'll only suggest options that match your comfort level",
        riskVeryLow: "Very Low",
        riskVeryLowDesc: "I want my money to be very safe",
        riskLow: "Low",
        riskLowDesc: "Some risk is okay for better returns",
        
        goalQuestion: "What are you saving for?",
        goalHelper: "This helps us personalize your savings journey",
        goalSavings: "General Savings",
        goalEmergency: "Emergency Fund",
        goalEducation: "Education",
        
        summaryTitle: "🎉 You're all set!",
        summaryIncome: "Income Range",
        summaryRisk: "Risk Level",
        summaryGoal: "Saving Goal",
        startInvesting: "Start Investing",
        
        // Personalized Recommendations
        yourPlan: "Your Personalized Plan",
        suggestedDaily: "Suggested daily investment:",
        recEmergencyVeryLow: "Building an emergency fund is smart! With your very safe approach, we'll focus on Fixed Deposits and Bonds. Aim for 3-6 months of expenses saved up.",
        recEmergencyLow: "Great choice building an emergency fund! We'll balance safety with slightly better returns. Target 3-6 months of expenses as your safety net.",
        recEducationVeryLow: "Saving for education is a wonderful goal! With maximum safety, your money will grow steadily. Start early - even small amounts add up over time.",
        recEducationLow: "Education savings can benefit from a bit more growth! We'll keep most in safe options while allowing some room for better returns.",
        recSavingsVeryLow: "General savings with maximum safety - perfect for building good habits! We'll keep your money in the safest options available.",
        recSavingsLow: "Smart choice! General savings with balanced approach. We'll help your money grow while keeping risk low.",
        
        // Investment
        investTitle: "Invest Your Money",
        investSubtitle: "Start with as little as ₹10",
        selectAmount: "Choose an amount",
        orEnterAmount: "Or enter any amount:",
        whereMoneyGoes: "📊 Where your money goes",
        estimateNotice: "⚠️ All returns shown are estimated/simulated for demo purposes only",
        
        fixedDeposit: "Fixed Deposit",
        govtBonds: "Govt. Bonds",
        lowRiskMF: "Low-Risk Mutual Fund",
        estimatedReturn: "Est. return (1 yr):",
        totalInvested: "Total Invested:",
        estimatedValue: "Estimated Value (1 year):",
        profit: "Estimated Profit:",
        investNow: "Invest Now (Simulated)",
        
        // Investment Plan
        investmentPlan: "📈 Your Investment Plan",
        planSubtitle: "See how your money grows if you invest daily",
        
        habitMessage: "₹10 daily = ₹300/month = ₹3,600/year! Small habits, big results.",
        
        // Tracker
        trackerTitle: "📊 Investment Tracker",
        trackerSubtitle: "Monitor your portfolio growth",
        totalPortfolio: "Total Portfolio",
        investments: "Investments",
        avgReturn: "Avg Return",
        streak: "Streak",
        portfolioBreakdown: "Portfolio Breakdown",
        recentInvestments: "Recent Investments",
        clearHistory: "Clear All",
        confirmClearHistory: "Are you sure you want to clear your investment history?",
        historyCleared: "Investment history cleared",
        noInvestments: "No investments yet. Start investing above!",
        yourGoal: "🎯 Your Goal Progress",
        
        investmentSuccess: "✅ Investment of ₹{amount} simulated successfully!",
        
        // Education
        learnTitle: "📚 Learn About Investing",
        learnSubtitle: "Simple explanations, no confusing words",
        watchVideos: "🎥 Watch & Learn",
        yourProgress: "Your Learning Progress",
        
        videoBasics: "Investment Basics",
        videoBasicsDesc: "Learn what investing means in simple terms",
        videoFD: "Fixed Deposits Explained",
        videoFDDesc: "Understand how FDs work and earn interest",
        videoMF: "Mutual Funds for Beginners",
        videoMFDesc: "What are mutual funds and how do they work?",
        
        eduWhatIsInvesting: "What is Investing?",
        eduWhatIsInvestingContent: "Investing means putting your money to work so it can grow over time. Think of it like planting a seed - you put in a little now, and over time, it grows into something bigger. Instead of keeping money under your mattress, you put it in a safe place where it earns more money for you.",
        
        eduLowRisk: "What Does \"Low Risk\" Mean?",
        eduLowRiskContent: "Low risk means your money is kept very safe. It grows slowly but steadily - like a turtle in a race. You won't become rich overnight, but you also won't lose your hard-earned money. It's the safest way to start saving.",
        
        eduWhere10Goes: "Where Does Your ₹10 Go?",
        
        eduFD: "What is a Fixed Deposit?",
        eduFDContent: "A Fixed Deposit (FD) is when you give your money to a bank for a fixed time. The bank uses it and gives you back more money than you gave. It's one of the safest ways to grow your money. The longer you keep it, the more you earn.",
        
        eduBonds: "What are Government Bonds?",
        eduBondsContent: "When you buy a government bond, you're lending money to the government. The government promises to pay you back with extra money (interest). It's very safe because the government always pays back its loans.",
        
        eduMF: "What is a Mutual Fund?",
        eduMFContent: "A mutual fund collects money from many people and invests it together. An expert decides where to put this money. Low-risk mutual funds invest in safe things. It's like many neighbors pooling money to buy something useful for everyone.",
        
        eduSafe: "Is My Money Safe?",
        eduSafeContent: "Yes! We only recommend the safest investment options. Fixed Deposits are insured by the government up to ₹5 lakhs. Government Bonds are backed by the government itself - they always pay back. Low-risk mutual funds are regulated by SEBI (the market watchdog). Your money is in safe hands!",
        
        eduCompounding: "The Magic of Compounding",
        
        quickTips: "💡 Quick Tips",
        tip1: "Start small - even ₹10 per week adds up over time",
        tip2: "Be patient - good things take time to grow",
        tip3: "Invest regularly - make it a habit like saving rice",
        tip4: "Don't invest money you need for daily expenses",
        
        // Footer
        offlineNote: "Works offline for learning using saved data",
        footerDemo: "Demo Project - Byte Quest 2026",
        disclaimer: "⚠️ This is a prototype only. No real investments. All data is simulated."
    },
    
    hi: {
        // Header
        tagline: "छोटी बचत में आपका भरोसेमंद साथी",
        
        // Demo Notice
        demoNotice: "यह Byte Quest 2026 के लिए एक प्रोटोटाइप डेमो है। असली पैसे शामिल नहीं हैं।",
        
        // Tabs
        tabOnboarding: "शुरू करें",
        tabInvest: "निवेश",
        tabTracker: "ट्रैकर",
        tabEducation: "सीखें",
        
        // Onboarding
        onboardingTitle: "अपने बारे में बताएं",
        onboardingSubtitle: "इससे हम आपके लिए सही विकल्प सुझा सकते हैं",
        
        incomeQuestion: "आपकी मासिक आय कितनी है?",
        incomeHelper: "इससे हम आपके लिए सुरक्षित निवेश राशि सुझा सकते हैं",
        incomeBelow10k: "₹10,000 से कम",
        income10kTo25k: "₹10,000 - ₹25,000",
        income25kTo50k: "₹25,000 - ₹50,000",
        incomeAbove50k: "₹50,000 से ऊपर",
        
        riskQuestion: "आप जोखिम के साथ कितने सहज हैं?",
        riskHelper: "हम केवल आपके आराम स्तर से मेल खाने वाले विकल्प सुझाएंगे",
        riskVeryLow: "बहुत कम",
        riskVeryLowDesc: "मैं चाहता हूं कि मेरा पैसा बहुत सुरक्षित रहे",
        riskLow: "कम",
        riskLowDesc: "बेहतर रिटर्न के लिए थोड़ा जोखिम ठीक है",
        
        goalQuestion: "आप किसके लिए बचत कर रहे हैं?",
        goalHelper: "इससे हम आपकी बचत यात्रा को व्यक्तिगत बना सकते हैं",
        goalSavings: "सामान्य बचत",
        goalEmergency: "आपातकालीन फंड",
        goalEducation: "शिक्षा",
        
        summaryTitle: "🎉 आप तैयार हैं!",
        summaryIncome: "आय सीमा",
        summaryRisk: "जोखिम स्तर",
        summaryGoal: "बचत का लक्ष्य",
        startInvesting: "निवेश शुरू करें",
        
        // Personalized Recommendations
        yourPlan: "आपकी व्यक्तिगत योजना",
        suggestedDaily: "सुझाया गया दैनिक निवेश:",
        recEmergencyVeryLow: "आपातकालीन फंड बनाना बुद्धिमानी है! बहुत सुरक्षित दृष्टिकोण के साथ, हम FD और बॉन्ड पर ध्यान देंगे। 3-6 महीने के खर्च बचाने का लक्ष्य रखें।",
        recEmergencyLow: "आपातकालीन फंड बनाना बढ़िया विकल्प है! हम सुरक्षा और बेहतर रिटर्न का संतुलन रखेंगे। 3-6 महीने के खर्च आपका सेफ्टी नेट होंगे।",
        recEducationVeryLow: "शिक्षा के लिए बचत एक अद्भुत लक्ष्य है! अधिकतम सुरक्षा के साथ, आपका पैसा स्थिर रूप से बढ़ेगा। जल्दी शुरू करें!",
        recEducationLow: "शिक्षा बचत को थोड़ी अधिक वृद्धि से लाभ हो सकता है! हम अधिकांश को सुरक्षित विकल्पों में रखेंगे।",
        recSavingsVeryLow: "अधिकतम सुरक्षा के साथ सामान्य बचत - अच्छी आदतें बनाने के लिए बिल्कुल सही!",
        recSavingsLow: "स्मार्ट विकल्प! संतुलित दृष्टिकोण के साथ सामान्य बचत। हम जोखिम कम रखते हुए आपका पैसा बढ़ाने में मदद करेंगे।",
        
        // Investment
        investTitle: "अपना पैसा निवेश करें",
        investSubtitle: "सिर्फ ₹10 से शुरू करें",
        selectAmount: "राशि चुनें",
        orEnterAmount: "या सटीक राशि दर्ज करें:",
        whereMoneyGoes: "📊 आपका पैसा कहां जाता है",
        estimateNotice: "⚠️ दिखाए गए सभी रिटर्न केवल डेमो के लिए अनुमानित/सिमुलेटेड हैं",
        
        fixedDeposit: "सावधि जमा",
        govtBonds: "सरकारी बॉन्ड",
        lowRiskMF: "कम जोखिम म्यूचुअल फंड",
        estimatedReturn: "अनुमानित रिटर्न (1 वर्ष):",
        totalInvested: "कुल निवेश:",
        estimatedValue: "अनुमानित मूल्य (1 वर्ष):",
        profit: "अनुमानित लाभ:",
        investNow: "अभी निवेश करें (सिमुलेटेड)",
        
        // Investment Plan
        investmentPlan: "📈 आपकी निवेश योजना",
        planSubtitle: "देखें अगर आप रोज़ निवेश करें तो पैसा कैसे बढ़ता है",
        
        habitMessage: "₹10 रोज़ाना = ₹300/महीना = ₹3,600/साल! छोटी आदतें, बड़े परिणाम।",
        
        // Tracker
        trackerTitle: "📊 निवेश ट्रैकर",
        trackerSubtitle: "अपने पोर्टफोलियो की वृद्धि देखें",
        totalPortfolio: "कुल पोर्टफोलियो",
        investments: "निवेश",
        avgReturn: "औसत रिटर्न",
        streak: "स्ट्रीक",
        portfolioBreakdown: "पोर्टफोलियो ब्रेकडाउन",
        recentInvestments: "हाल के निवेश",
        clearHistory: "सब साफ़ करें",
        confirmClearHistory: "क्या आप वाकई अपना निवेश इतिहास साफ़ करना चाहते हैं?",
        historyCleared: "निवेश इतिहास साफ़ किया गया",
        noInvestments: "अभी तक कोई निवेश नहीं। ऊपर से निवेश शुरू करें!",
        yourGoal: "🎯 आपका लक्ष्य प्रगति",
        
        investmentSuccess: "✅ ₹{amount} का निवेश सफलतापूर्वक सिमुलेट किया गया!",
        
        // Education
        learnTitle: "📚 निवेश के बारे में सीखें",
        learnSubtitle: "सरल भाषा में समझें, कोई भ्रमित करने वाले शब्द नहीं",
        watchVideos: "🎥 देखें और सीखें",
        yourProgress: "आपकी सीखने की प्रगति",
        
        videoBasics: "निवेश की मूल बातें",
        videoBasicsDesc: "जानें निवेश का सरल भाषा में मतलब",
        videoFD: "सावधि जमा समझाया",
        videoFDDesc: "समझें FD कैसे काम करता है और ब्याज कमाता है",
        videoMF: "शुरुआती के लिए म्यूचुअल फंड",
        videoMFDesc: "म्यूचुअल फंड क्या हैं और कैसे काम करते हैं?",
        
        eduWhatIsInvesting: "निवेश क्या है?",
        eduWhatIsInvestingContent: "निवेश का मतलब है अपने पैसे को काम पर लगाना ताकि वह समय के साथ बढ़ सके। इसे बीज बोने जैसा समझें - आप अभी थोड़ा डालते हैं, और समय के साथ यह कुछ बड़ा बन जाता है।",
        
        eduLowRisk: "\"कम जोखिम\" का क्या मतलब है?",
        eduLowRiskContent: "कम जोखिम का मतलब है कि आपका पैसा बहुत सुरक्षित रखा जाता है। यह धीरे-धीरे लेकिन स्थिर रूप से बढ़ता है - जैसे दौड़ में कछुआ।",
        
        eduWhere10Goes: "आपके ₹10 कहां जाते हैं?",
        
        eduFD: "सावधि जमा (FD) क्या है?",
        eduFDContent: "सावधि जमा (FD) तब होता है जब आप अपना पैसा बैंक को एक निश्चित समय के लिए देते हैं। बैंक इसका उपयोग करता है और आपको जितना दिया उससे अधिक पैसा वापस देता है।",
        
        eduBonds: "सरकारी बॉन्ड क्या हैं?",
        eduBondsContent: "जब आप सरकारी बॉन्ड खरीदते हैं, तो आप सरकार को पैसे उधार दे रहे होते हैं। सरकार वादा करती है कि वह आपको अतिरिक्त पैसे (ब्याज) के साथ वापस करेगी।",
        
        eduMF: "म्यूचुअल फंड क्या है?",
        eduMFContent: "म्यूचुअल फंड कई लोगों से पैसे इकट्ठा करता है और इसे एक साथ निवेश करता है। एक विशेषज्ञ तय करता है कि इस पैसे को कहां लगाना है।",
        
        eduSafe: "क्या मेरा पैसा सुरक्षित है?",
        eduSafeContent: "हाँ! हम केवल सबसे सुरक्षित निवेश विकल्पों की सिफारिश करते हैं। सावधि जमा सरकार द्वारा ₹5 लाख तक बीमित हैं।",
        
        eduCompounding: "कंपाउंडिंग का जादू",
        
        quickTips: "💡 त्वरित सुझाव",
        tip1: "छोटी शुरुआत करें - हर हफ्ते ₹10 भी समय के साथ बढ़ जाते हैं",
        tip2: "धैर्य रखें - अच्छी चीजों को बढ़ने में समय लगता है",
        tip3: "नियमित निवेश करें - इसे चावल बचाने जैसी आदत बनाएं",
        tip4: "रोज़मर्रा के खर्चों के लिए ज़रूरी पैसे निवेश न करें",
        
        // Footer
        offlineNote: "सहेजे गए डेटा का उपयोग करके ऑफ़लाइन सीखने के लिए काम करता है",
        footerDemo: "डेमो प्रोजेक्ट - Byte Quest 2026",
        disclaimer: "⚠️ यह केवल एक प्रोटोटाइप है। कोई असली निवेश नहीं। सभी डेटा सिमुलेटेड है।"
    }
};

// Current language
let currentLanguage = localStorage.getItem('nivesh_language') || 'en';

/**
 * Set the current language and update UI
 */
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('nivesh_language', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    updateTranslations();
}

/**
 * Update all elements with data-i18n attribute
 */
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[currentLanguage][key];
            } else {
                el.innerHTML = translations[currentLanguage][key];
            }
        }
    });
}

/**
 * Get translation for a specific key
 */
function t(key, replacements = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;
    
    // Replace placeholders like {amount}
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    });
    
    return text;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});
