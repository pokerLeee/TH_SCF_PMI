// Update time in status bar
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
    });
    document.querySelector('.status-time').textContent = timeString;
}

// Update time every minute
setInterval(updateTime, 60000);
updateTime(); 