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

// 控制 SEasyPay 广告卡片和状态卡片的显示
document.addEventListener('DOMContentLoaded', function() {
    console.log("初始化 SEasyPay 卡片显示控制");
    
    // 获取两个卡片元素
    const easypayAdContainer = document.getElementById('easypay-ad-container');
    const easypayStatusContainer = document.getElementById('easypay-status-container');
    
    // 初始设置为都不显示
    if (easypayAdContainer) easypayAdContainer.style.display = 'none';
    if (easypayStatusContainer) easypayStatusContainer.style.display = 'none';
    
    // 根据 localStorage 中的状态控制显示
    const savedStatus = localStorage.getItem('sellerLoanStatus') || 'active';
    console.log("当前状态:", savedStatus);
    
    if (savedStatus === 'inactive') {
        // 显示广告卡片
        if (easypayAdContainer) {
            easypayAdContainer.style.display = 'block';
            console.log("显示广告卡片");
        }
    } else if (savedStatus === 'active') {
        // 显示状态卡片
        if (easypayStatusContainer) {
            easypayStatusContainer.style.display = 'block';
            console.log("显示状态卡片");
        }
    }
    
    // 添加控制按钮到页面底部，便于测试
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = 'position: fixed; bottom: 80px; left: 0; right: 0; background: rgba(255,255,255,0.9); padding: 10px; display: flex; justify-content: center; gap: 10px; z-index: 1000;';
    
    const inactiveBtn = document.createElement('button');
    inactiveBtn.textContent = '显示广告';
    inactiveBtn.style.cssText = 'padding: 8px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px;';
    inactiveBtn.onclick = function() {
        localStorage.setItem('sellerLoanStatus', 'inactive');
        if (easypayAdContainer) easypayAdContainer.style.display = 'block';
        if (easypayStatusContainer) easypayStatusContainer.style.display = 'none';
    };
    
    const activeBtn = document.createElement('button');
    activeBtn.textContent = '显示状态';
    activeBtn.style.cssText = 'padding: 8px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px;';
    activeBtn.onclick = function() {
        localStorage.setItem('sellerLoanStatus', 'active');
        if (easypayAdContainer) easypayAdContainer.style.display = 'none';
        if (easypayStatusContainer) easypayStatusContainer.style.display = 'block';
    };
    
    const hideBtn = document.createElement('button');
    hideBtn.textContent = '隐藏全部';
    hideBtn.style.cssText = 'padding: 8px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px;';
    hideBtn.onclick = function() {
        localStorage.setItem('sellerLoanStatus', 'none');
        if (easypayAdContainer) easypayAdContainer.style.display = 'none';
        if (easypayStatusContainer) easypayStatusContainer.style.display = 'none';
    };
    
    controlPanel.appendChild(inactiveBtn);
    controlPanel.appendChild(activeBtn);
    controlPanel.appendChild(hideBtn);
    
    document.body.appendChild(controlPanel);
}); 