// 通用主题切换方案
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');
  
  const themeToggle = document.querySelector('.theme-toggle') || createThemeButton();
  
  // 通用事件处理
  themeToggle.onclick = function(e) {
    e.stopPropagation();
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // 兼容性触觉反馈
    typeof navigator.vibrate === 'function' && navigator.vibrate(15);
  };
}

function createThemeButton() {
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.innerHTML = '🌓 主题';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:1000;padding:12px;';
  document.body.appendChild(btn);
  return btn;
}

// 统一初始化入口
document.addEventListener('DOMContentLoaded', initTheme);
