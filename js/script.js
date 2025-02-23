// 确保DOM加载后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化主题状态
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');

  // 主题切换按钮创建(移动端优化版)
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '🌓 主题';
  document.body.prepend(themeToggle);

  // 双事件监听兼容方案
  themeToggle.addEventListener('touchstart', handleThemeToggle, { passive: true });
  themeToggle.addEventListener('click', handleThemeToggle);

  function handleThemeToggle(e) {
    e.preventDefault();
    document.documentElement.classList.toggle('dark-mode');
    const newTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    
    // 触觉反馈兼容方案
    try { navigator.vibrate(15); } catch {}
  }
});


