class PomodoroTimer {
    constructor() {
        // Timer elements
        this.timerDisplay = document.getElementById('timerDisplay');
        this.sessionLabel = document.getElementById('sessionLabel');
        
        // Buttons
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.clearDataBtn = document.getElementById('clearDataBtn');
        
        // Settings
        this.workDurationInput = document.getElementById('workDuration');
        this.breakDurationInput = document.getElementById('breakDuration');
        
        // Stats
        this.todayCountDisplay = document.getElementById('todayCount');
        this.totalCountDisplay = document.getElementById('totalCount');
        this.currentDateDisplay = document.getElementById('currentDate');
        this.historyContainer = document.getElementById('historyContainer');
        
        // Timer state
        this.workDuration = parseInt(this.workDurationInput.value) * 60; // Convert to seconds
        this.breakDuration = parseInt(this.breakDurationInput.value) * 60;
        this.timeLeft = this.workDuration;
        this.isWorkSession = true;
        this.isRunning = false;
        this.intervalId = null;
        
        // Data storage
        this.loadStats();
        
        // Event listeners
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.clearDataBtn.addEventListener('click', () => this.clearData());
        
        this.workDurationInput.addEventListener('change', () => this.updateDuration());
        this.breakDurationInput.addEventListener('change', () => this.updateDuration());
        
        // Initial display
        this.updateDisplay();
        this.updateCurrentDate();
        this.updateStats();
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.workDurationInput.disabled = true;
        this.breakDurationInput.disabled = true;
        
        this.intervalId = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            
            if (this.timeLeft === 0) {
                this.playNotification();
                this.toggleSession();
            }
        }, 1000);
    }
    
    pause() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
    }
    
    reset() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.isWorkSession = true;
        this.timeLeft = this.workDuration;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.workDurationInput.disabled = false;
        this.breakDurationInput.disabled = false;
        this.updateDisplay();
        this.sessionLabel.textContent = 'Work Session';
    }
    
    toggleSession() {
        if (this.isWorkSession) {
            // Work session completed, switch to break
            this.isWorkSession = false;
            this.timeLeft = this.breakDuration;
            this.sessionLabel.textContent = 'Break Time';
        } else {
            // Break completed, switch to work and increment count
            this.isWorkSession = true;
            this.timeLeft = this.workDuration;
            this.sessionLabel.textContent = 'Work Session';
            this.incrementCycleCount();
        }
        
        // Auto-start next session
        this.start();
    }
    
    incrementCycleCount() {
        const today = this.getToday();
        let stats = this.getStats();
        
        stats.totalCycles++;
        
        if (stats.lastDate === today) {
            stats.todayCycles++;
        } else {
            stats.todayCycles = 1;
            stats.lastDate = today;
        }
        
        // Add to history
        if (!stats.history) {
            stats.history = [];
        }
        
        const timestamp = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        stats.history.push({
            date: today,
            time: timestamp,
            cycleNumber: stats.todayCycles
        });
        
        // Keep only last 50 history items
        if (stats.history.length > 50) {
            stats.history.shift();
        }
        
        this.saveStats(stats);
        this.updateStats();
    }
    
    updateDuration() {
        if (!this.isRunning) {
            this.workDuration = parseInt(this.workDurationInput.value) * 60;
            this.breakDuration = parseInt(this.breakDurationInput.value) * 60;
            this.reset();
        }
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerDisplay.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Update page title
        document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - Pomodoro Timer`;
    }
    
    updateCurrentDate() {
        const today = new Date();
        const dateString = today.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
        this.currentDateDisplay.textContent = dateString;
    }
    
    updateStats() {
        const stats = this.getStats();
        this.todayCountDisplay.textContent = stats.todayCycles;
        this.totalCountDisplay.textContent = stats.totalCycles;
        this.updateHistory(stats);
    }
    
    updateHistory(stats) {
        const today = this.getToday();
        const todayHistory = stats.history ? stats.history.filter(h => h.date === today) : [];
        
        if (todayHistory.length === 0) {
            this.historyContainer.innerHTML = '<p class="no-history">No history yet. Start your first session!</p>';
            return;
        }
        
        this.historyContainer.innerHTML = todayHistory.map(item => `
            <div class="history-item">
                <span>Cycle ${item.cycleNumber}</span>
                <span>${item.time}</span>
            </div>
        `).join('');
    }
    
    getToday() {
        const today = new Date();
        return today.toISOString().split('T')[0]; // YYYY-MM-DD format
    }
    
    getStats() {
        const defaultStats = {
            todayCycles: 0,
            totalCycles: 0,
            lastDate: this.getToday(),
            history: []
        };
        
        const saved = localStorage.getItem('pomodoroStats');
        if (!saved) {
            return defaultStats;
        }
        
        const stats = JSON.parse(saved);
        
        // Reset todayCycles if it's a new day
        if (stats.lastDate !== this.getToday()) {
            stats.todayCycles = 0;
            stats.lastDate = this.getToday();
        }
        
        return stats;
    }
    
    saveStats(stats) {
        localStorage.setItem('pomodoroStats', JSON.stringify(stats));
    }
    
    loadStats() {
        this.updateStats();
    }
    
    clearData() {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            localStorage.removeItem('pomodoroStats');
            this.reset();
            this.updateStats();
            alert('All data has been cleared!');
        }
    }
    
    playNotification() {
        // Visual notification
        const originalBg = document.body.style.background;
        document.body.style.background = '#4caf50';
        setTimeout(() => {
            document.body.style.background = originalBg;
        }, 300);
        
        // Audio notification (beep sound)
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('Audio notification not available');
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PomodoroTimer();
});