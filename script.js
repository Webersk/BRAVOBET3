// Global variables
let currentUser = null;
let currentDate = "31/07/2025";
let currentCourt = "all";
let bettingCart = [];
let leaderboard = JSON.parse(localStorage.getItem('bravobet_leaderboard')) || [];
let bettingHistory = JSON.parse(localStorage.getItem('bravobet_history')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is logged in
    currentUser = localStorage.getItem('bravobet_user');
    
    if (currentUser) {
        showMainContent();
        updateUserGreeting();
        loadBettingCart();
    } else {
        showLoginModal();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Load initial data
    loadMatches();
    updateLeaderboard();
    updateBettingHistory();
}

function setupEventListeners() {
    // Login functionality
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    document.getElementById('usernameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleLogin();
    });
    
    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Date navigation
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectDate(this.dataset.date);
        });
    });
    
    // Court navigation
    document.querySelectorAll('.court-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectCourt(this.dataset.court);
        });
    });
    
    // Cart functionality
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('confirmBetsBtn').addEventListener('click', showBetConfirmation);
    document.getElementById('closeBetModalBtn').addEventListener('click', closeBetModal);
    document.getElementById('sendWhatsAppBtn').addEventListener('click', sendWhatsApp);
}

function handleLogin() {
    const username = document.getElementById('usernameInput').value.trim();
    if (username) {
        currentUser = username;
        localStorage.setItem('bravobet_user', username);
        hideLoginModal();
        showMainContent();
        updateUserGreeting();
        loadBettingCart();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('bravobet_user');
    saveBettingCart();
    showLoginModal();
    hideMainContent();
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('usernameInput').focus();
}

function hideLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showMainContent() {
    document.querySelector('.main-content').style.display = 'block';
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.sponsors-section').style.display = 'block';
}

function hideMainContent() {
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.sponsors-section').style.display = 'none';
}

function updateUserGreeting() {
    document.getElementById('userGreeting').textContent = `Olá, ${currentUser}!`;
}

function selectDate(date) {
    currentDate = date;
    
    // Update active button
    document.querySelectorAll('.date-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-date="${date}"]`).classList.add('active');
    
    loadMatches();
}

function selectCourt(court) {
    currentCourt = court;
    
    // Update active button
    document.querySelectorAll('.court-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-court="${court}"]`).classList.add('active');
    
    loadMatches();
}

function loadMatches() {
    const container = document.getElementById('matchesContainer');
    container.innerHTML = '';
    
    // Find the selected date data
    const dateData = tournamentData.dates.find(d => d.date === currentDate);
    if (!dateData) {
        container.innerHTML = '<p class="no-matches">Nenhum jogo encontrado para esta data.</p>';
        return;
    }
    
    // Filter courts based on selection
    let courtsToShow = dateData.courts;
    if (currentCourt !== 'all') {
        courtsToShow = dateData.courts.filter(court => court.id === currentCourt);
    }
    
    if (courtsToShow.length === 0) {
        container.innerHTML = '<p class="no-matches">Nenhum jogo encontrado para esta quadra.</p>';
        return;
    }
    
    // Render matches for each court
    courtsToShow.forEach(court => {
        if (court.matches.length > 0) {
            const courtSection = createCourtSection(court);
            container.appendChild(courtSection);
        }
    });
    
    // Update odds dynamically
    updateOdds();
}

function createCourtSection(court) {
    const section = document.createElement('div');
    section.className = 'court-section';
    section.innerHTML = `
        <h3 class="court-title">
            <span class="court-icon">📍</span>
            ${court.name}
        </h3>
        <div class="matches-grid">
            ${court.matches.map(match => createMatchCard(match)).join('')}
        </div>
    `;
    return section;
}

function createMatchCard(match) {
    const matchId = match.id;
    return `
        <div class="match-card" data-match-id="${matchId}">
            <div class="match-header">
                <div class="match-time">
                    <span class="time-icon">🕐</span>
                    ${match.time}
                </div>
                <div class="match-category">${match.category}</div>
                <div class="match-phase">${match.phase}</div>
            </div>
            
            <div class="teams-section">
                <div class="team team1">
                    <span class="team-name">${match.team1}</span>
                    <button class="odds-btn" data-bet-type="team1" data-match-id="${matchId}" data-odds="${match.odds.team1}">
                        ${match.odds.team1}
                    </button>
                </div>
                
                <div class="vs-divider">VS</div>
                
                <div class="team team2">
                    <span class="team-name">${match.team2}</span>
                    <button class="odds-btn" data-bet-type="team2" data-match-id="${matchId}" data-odds="${match.odds.team2}">
                        ${match.odds.team2}
                    </button>
                </div>
            </div>
            
            <div class="special-bets">
                <h4>⭐ Apostas Especiais (Resenha Garantida!)</h4>
                <div class="special-bets-grid">
                    ${createSpecialBets(match)}
                </div>
            </div>
        </div>
    `;
}

function createSpecialBets(match) {
    const specialBets = [
        { id: 'double_fault', name: 'Dupla Falta', description: 'Alguém vai mandar no alambrado?', odds: match.specialBets.double_fault },
        { id: 'glass_smash', name: 'Smash no Vidro', description: 'Vai quebrar o vidro hoje?', odds: match.specialBets.glass_smash },
        { id: 'hit_opponent', name: 'Acertar o Adversário', description: 'Vai rolar uma bolada no rival?', odds: match.specialBets.hit_opponent },
        { id: 'complain_lighting', name: 'Reclamar da Iluminação', description: 'Quem vai culpar a luz primeiro?', odds: match.specialBets.complain_lighting }
    ];
    
    return specialBets.map(bet => `
        <div class="special-bet" data-bet-type="${bet.id}" data-match-id="${match.id}" data-odds="${bet.odds}">
            <div class="special-bet-name">${bet.name}</div>
            <div class="special-bet-odds">${bet.odds}</div>
            <div class="special-bet-description">${bet.description}</div>
        </div>
    `).join('');
}

function updateOdds() {
    // Add click listeners to odds buttons and special bets
    document.querySelectorAll('.odds-btn, .special-bet').forEach(element => {
        element.addEventListener('click', function() {
            addToBettingCart(this);
        });
    });
}

function addToBettingCart(element) {
    const matchId = element.dataset.matchId;
    const betType = element.dataset.betType;
    const odds = parseFloat(element.dataset.odds);
    
    // Find match data
    const match = findMatchById(matchId);
    if (!match) return;
    
    // Create bet object
    const bet = {
        id: `${matchId}_${betType}`,
        matchId: matchId,
        betType: betType,
        odds: odds,
        match: match,
        description: getBetDescription(match, betType)
    };
    
    // Check if bet already exists
    const existingBetIndex = bettingCart.findIndex(b => b.id === bet.id);
    if (existingBetIndex !== -1) {
        // Remove existing bet
        bettingCart.splice(existingBetIndex, 1);
        element.classList.remove('selected');
    } else {
        // Add new bet
        bettingCart.push(bet);
        element.classList.add('selected');
    }
    
    updateBettingCartDisplay();
    saveBettingCart();
}

function findMatchById(matchId) {
    for (const date of tournamentData.dates) {
        for (const court of date.courts) {
            const match = court.matches.find(m => m.id === matchId);
            if (match) return match;
        }
    }
    return null;
}

function getBetDescription(match, betType) {
    if (betType === 'team1') {
        return `Vitória: ${match.team1}`;
    } else if (betType === 'team2') {
        return `Vitória: ${match.team2}`;
    } else {
        const specialBetNames = {
            'double_fault': 'Dupla Falta',
            'glass_smash': 'Smash no Vidro',
            'hit_opponent': 'Acertar o Adversário',
            'complain_lighting': 'Reclamar da Iluminação'
        };
        return specialBetNames[betType] || betType;
    }
}

function updateBettingCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const confirmBtn = document.getElementById('confirmBetsBtn');
    
    if (bettingCart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Nenhuma aposta selecionada</p>';
        confirmBtn.disabled = true;
        return;
    }
    
    confirmBtn.disabled = false;
    cartItems.innerHTML = bettingCart.map(bet => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-match">${bet.match.team1} vs ${bet.match.team2} (${bet.match.time} - ${bet.match.phase})</div>
                <div class="cart-bet">${bet.description}</div>
                <div class="cart-odds">Odd: ${bet.odds}</div>
            </div>
            <button class="remove-bet-btn" onclick="removeBetFromCart('${bet.id}')">×</button>
        </div>
    `).join('');
}

function removeBetFromCart(betId) {
    bettingCart = bettingCart.filter(bet => bet.id !== betId);
    
    // Remove visual selection
    document.querySelectorAll(`[data-match-id][data-bet-type]`).forEach(element => {
        const elementBetId = `${element.dataset.matchId}_${element.dataset.betType}`;
        if (elementBetId === betId) {
            element.classList.remove('selected');
        }
    });
    
    updateBettingCartDisplay();
    saveBettingCart();
}

function clearCart() {
    bettingCart = [];
    
    // Remove all visual selections
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });
    
    updateBettingCartDisplay();
    saveBettingCart();
}

function showBetConfirmation() {
    if (bettingCart.length === 0) return;
    
    const modal = document.getElementById('betConfirmationModal');
    const summary = document.getElementById('betSummary');
    
    const totalOdds = bettingCart.reduce((total, bet) => total * bet.odds, 1).toFixed(2);
    
    summary.innerHTML = `
        <div class="bet-summary-header">
            <h3>📋 Resumo das Apostas</h3>
            <p><strong>Apostador:</strong> ${currentUser}</p>
            <p><strong>Total de apostas:</strong> ${bettingCart.length}</p>
            <p><strong>Odd combinada:</strong> ${totalOdds}</p>
        </div>
        <div class="bet-summary-list">
            ${bettingCart.map(bet => `
                <div class="summary-item">
                    <div class="summary-match">${bet.match.team1} vs ${bet.match.team2}</div>
                    <div class="summary-details">
                        <span>${bet.description}</span>
                        <span class="summary-odds">Odd: ${bet.odds}</span>
                    </div>
                    <div class="summary-time">${bet.match.time} - ${bet.match.phase}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeBetModal() {
    document.getElementById('betConfirmationModal').style.display = 'none';
}

function sendWhatsApp() {
    if (bettingCart.length === 0) return;
    
    // Create WhatsApp message
    const message = createWhatsAppMessage();
    
    // Save to history
    const historyEntry = {
        id: Date.now(),
        user: currentUser,
        date: new Date().toLocaleString('pt-BR'),
        bets: [...bettingCart],
        totalBets: bettingCart.length
    };
    
    bettingHistory.unshift(historyEntry);
    localStorage.setItem('bravobet_history', JSON.stringify(bettingHistory));
    
    // Update leaderboard
    updateLeaderboardData();
    
    // Clear cart
    clearCart();
    
    // Close modal
    closeBetModal();
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/5549991854235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Update displays
    updateBettingHistory();
    updateLeaderboard();
}

function createWhatsAppMessage() {
    const totalOdds = bettingCart.reduce((total, bet) => total * bet.odds, 1).toFixed(2);
    
    let message = `🎾 *BRAVOBET - APOSTAS DO TORNEIO* 🎾\n\n`;
    message += `👤 *Apostador:* ${currentUser}\n`;
    message += `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n`;
    message += `🎯 *Total de apostas:* ${bettingCart.length}\n`;
    message += `💰 *Odd combinada:* ${totalOdds}\n\n`;
    message += `📋 *APOSTAS:*\n`;
    
    bettingCart.forEach((bet, index) => {
        message += `\n${index + 1}. *${bet.match.team1} vs ${bet.match.team2}*\n`;
        message += `   ⏰ ${bet.match.time} - ${bet.match.phase}\n`;
        message += `   🎲 ${bet.description}\n`;
        message += `   💵 Odd: ${bet.odds}\n`;
    });
    
    message += `\n🏆 *Boa sorte no torneio!*`;
    
    return message;
}

function updateLeaderboardData() {
    const existingUser = leaderboard.find(user => user.name === currentUser);
    
    if (existingUser) {
        existingUser.totalBets += bettingCart.length;
        existingUser.points += bettingCart.length * 10; // 10 points per bet
    } else {
        leaderboard.push({
            name: currentUser,
            totalBets: bettingCart.length,
            points: bettingCart.length * 10
        });
    }
    
    // Sort by points
    leaderboard.sort((a, b) => b.points - a.points);
    
    localStorage.setItem('bravobet_leaderboard', JSON.stringify(leaderboard));
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p class="empty-leaderboard">Nenhuma aposta realizada ainda</p>';
        return;
    }
    
    leaderboardList.innerHTML = leaderboard.slice(0, 10).map((user, index) => `
        <div class="leaderboard-item ${user.name === currentUser ? 'current-user' : ''}">
            <div class="rank">${index + 1}º</div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-stats">${user.totalBets} apostas • ${user.points} pontos</div>
            </div>
            ${index < 3 ? `<div class="medal">${['🥇', '🥈', '🥉'][index]}</div>` : ''}
        </div>
    `).join('');
}

function updateBettingHistory() {
    const historyList = document.getElementById('historyList');
    
    if (bettingHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-history">Nenhuma aposta realizada ainda</p>';
        return;
    }
    
    historyList.innerHTML = bettingHistory.slice(0, 10).map(entry => `
        <div class="history-item">
            <div class="history-header">
                <div class="history-user">${entry.user}</div>
                <div class="history-date">${entry.date}</div>
            </div>
            <div class="history-summary">${entry.totalBets} apostas realizadas</div>
        </div>
    `).join('');
}

function saveBettingCart() {
    if (currentUser) {
        localStorage.setItem(`bravobet_cart_${currentUser}`, JSON.stringify(bettingCart));
    }
}

function loadBettingCart() {
    if (currentUser) {
        const savedCart = localStorage.getItem(`bravobet_cart_${currentUser}`);
        if (savedCart) {
            bettingCart = JSON.parse(savedCart);
            updateBettingCartDisplay();
            
            // Restore visual selections
            bettingCart.forEach(bet => {
                const element = document.querySelector(`[data-match-id="${bet.matchId}"][data-bet-type="${bet.betType}"]`);
                if (element) {
                    element.classList.add('selected');
                }
            });
        }
    }
}

// Dynamic odds update (simulate real-time changes)
setInterval(() => {
    if (document.querySelector('.odds-btn')) {
        document.querySelectorAll('.odds-btn').forEach(btn => {
            const currentOdd = parseFloat(btn.textContent);
            const variation = (Math.random() - 0.5) * 0.1; // ±0.05 variation
            const newOdd = Math.max(1.1, Math.min(5.0, currentOdd + variation));
            btn.textContent = newOdd.toFixed(2);
            btn.dataset.odds = newOdd.toFixed(2);
        });
    }
}, 30000); // Update every 30 seconds

