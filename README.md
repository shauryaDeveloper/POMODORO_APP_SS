# 🍅 Pomodoro Timer - Boost Your Productivity

A modern, interactive Pomodoro Timer web application built with vanilla JavaScript, HTML5, and CSS3. Manage your work sessions effectively with customizable timers, statistics tracking, and a beautiful user interface.

**⏱️ [Try the Live Demo](https://shauryaDeveloper.github.io/POMODORO_APP_SS/)**

--

## ✨ Features

- ⏲️ **Customizable Timer** - Set work and break durations (default: 25 min work, 5 min break)
- 📊 **Statistics Dashboard** - Track completed sessions, total focus time, and productivity streaks
- 🔔 **Audio Notifications** - Get alerted when timer completes (with mute option)
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 💾 **Local Storage** - Your statistics persist across sessions
- 🎯 **Session Management** - Start, pause, reset, and skip sessions easily
- 🌙 **Dark/Light Mode Ready** - Elegant styling for different themes
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/shauryaDeveloper/POMODORO_APP_SS.git
   cd POMODORO_APP_SS
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   start index.html
   ```

3. **Start a session**
   - Click the "Start" button to begin your first Pomodoro session
   - The default timer is set to 25 minutes for work

4. **Customize (optional)**
   - Adjust work/break duration in the settings
   - Enable/disable notifications as preferred

5. **Track your progress**
   - Monitor your productivity stats in real-time

---

## 📖 How to Use

### Main Controls

| Control | Function |
|---------|----------|
| **Start** | Begins the current timer session |
| **Pause** | Temporarily stops the timer |
| **Resume** | Continues paused timer |
| **Reset** | Resets timer to initial value |
| **Skip** | Moves to next session (work ↔ break) |

### Settings

- **Work Duration** - Set focus session length (recommended: 20-30 min)
- **Break Duration** - Set break session length (recommended: 5-10 min)
- **Sound** - Toggle notification sounds on/off
- **Long Break** - Set longer break after 4 sessions

### Statistics

The dashboard displays:
- **Sessions Completed** - Total finished Pomodoro sessions
- **Total Focus Time** - Cumulative work time in hours
- **Current Streak** - Consecutive sessions today
- **Session History** - Timeline of today's sessions

---

## 📁 Project Structure

```
POMODORO_APP_SS/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Timer logic and functionality
└── README.md       # Project documentation
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, animations, and gradients
- **Vanilla JavaScript** - No frameworks, pure JS for timer logic and interactivity
- **Local Storage API** - For persisting user data and statistics
- **Web Audio API** - For notification sounds

---

## ⚙️ Key Functionality

### Timer Management
```javascript
// Timer operates on a state machine:
// IDLE → RUNNING → PAUSED → RUNNING → COMPLETE
```

### Persistent Statistics
- Data stored in browser's LocalStorage
- Automatically saved after each session
- Survives page refreshes and browser restarts

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly controls

---

## 🌐 Browser Support

✅ Chrome/Edge (recommended)
✅ Firefox
✅ Safari
✅ Opera
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 💡 Pomodoro Technique Tips

1. **Focus on One Task** - Work on a single task per session
2. **Eliminate Distractions** - Silence notifications, close tabs
3. **Take Real Breaks** - Step away from screen during breaks
4. **Track Your Sessions** - Monitor progress with statistics
5. **Experiment with Duration** - Find your optimal work/break ratio

Learn more: [Pomodoro Technique Official](https://pomodorotechnique.com/)

---

## 🎨 Customization Guide

### Change Timer Duration

Edit `script.js`:
```javascript
const DEFAULT_WORK_TIME = 25 * 60;    // Work duration in seconds
const DEFAULT_BREAK_TIME = 5 * 60;    // Break duration in seconds
```

### Modify Colors

Edit `style.css`:
```css
:root {
  --primary-color: #ff6b6b;      /* Main accent color */
  --secondary-color: #4ecdc4;    /* Secondary accent */
  --background: #f7f8fa;         /* Background color */
}
```

### Change Notification Sound

Replace audio file reference in `script.js`:
```javascript
const notificationSound = new Audio('path/to/your/sound.mp3');
```

---

## 📊 Statistics Dashboard

The app tracks:
- **Session Count** - Number of completed Pomodoro sessions
- **Focus Hours** - Total time spent in focus mode
- **Weekly Stats** - Productivity trends
- **Personal Best** - Longest consecutive sessions

All data is stored locally—your privacy is guaranteed!

---

## 🐛 Troubleshooting

### Timer not working?
- Clear browser cache: `Ctrl+Shift+Delete`
- Reload the page: `Ctrl+R` or `F5`
- Check browser console for errors: `F12 → Console`

### Notifications not playing?
- Check browser volume settings
- Enable audio in browser permissions
- Verify popup notifications are allowed

### Statistics not saving?
- Enable LocalStorage in browser settings
- Check if in private/incognito mode (disables storage)
- Verify browser storage quota isn't full

### App looks broken on mobile?
- Update browser to latest version
- Zoom to 100% (pinch to reset)
- Try opening in different browser

---

## 🚧 Future Enhancements

- 🔄 Sync statistics across devices
- 📈 Weekly/Monthly productivity reports
- 🎵 Multiple notification sounds
- 🌍 Multi-language support
- 🎯 Goal-setting and targets
- 📲 Progressive Web App (PWA) support
- 🔐 Cloud backup for statistics
- 🎨 Additional color themes

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Shaurya Singh**
- GitHub: [@shauryaDeveloper](https://github.com/shauryaDeveloper)
- Repository: [POMODORO_APP_SS](https://github.com/shauryaDeveloper/POMODORO_APP_SS)

---

## ⭐ Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking and contributing
- 💬 Sharing your feedback and suggestions
- 📢 Sharing with others who might benefit

---

**Happy Productivity! 🚀**
