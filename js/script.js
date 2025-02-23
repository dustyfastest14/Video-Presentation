// 精简PC端专用主题切换方案
document.addEventListener('DOMContentLoaded', () => {
  // 初始化主题
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark-mode', theme === 'dark');

  // 创建切换按钮
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.textContent = '🌓 切换主题';
  Object.assign(toggleBtn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    zIndex: 1000
  });

  // 经典点击事件
  toggleBtn.onclick = () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  document.body.appendChild(toggleBtn);
});
