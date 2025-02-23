// 移动端专用修复方案
function initTheme() {
  // 初始化主题状态
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');

  // 创建适配移动端的按钮
  const themeToggle = document.querySelector('.theme-toggle') || createThemeButton();

  // 移动端专用事件处理
  let lastTouch = 0;
  themeToggle.addEventListener('touchstart', function(e) {
    if (Date.now() - lastTouch < 300) return;
    lastTouch = Date.now();
    toggleThemeState();
    e.preventDefault();
  }, { passive: false });

  // PC端保留点击事件
  themeToggle.addEventListener('click', toggleThemeState);
}

function createThemeButton() {
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.innerHTML = '🌓 主题';
  btn.style.cssText = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 1000;
    padding: 15px 25px !important;
    font-size: 18px !important;
    border-radius: 30px;
    touch-action: manipulation; /* 移动端点击优化 */
  `;
  document.body.appendChild(btn);
  return btn;
}

function toggleThemeState() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // 安全触发触觉反馈
  try { navigator.vibrate?.(20); } catch {}
}

// 移动端特定样式修复
@media (pointer: coarse) {
  .theme-toggle {
    min-width: 120px;
    background: var(--bg-color) !important;
    border: 2px solid var(--text-color) !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
}

document.addEventListener('DOMContentLoaded', initTheme);
