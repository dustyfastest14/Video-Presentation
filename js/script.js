@@ -1,28 +1,29 @@
// 确保DOM加载后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化主题状态
// 通用主题切换方案
function initTheme() {
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
  
  const themeToggle = document.querySelector('.theme-toggle') || createThemeButton();
  
  // 通用事件处理
  themeToggle.onclick = function(e) {
    e.stopPropagation();
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // 触觉反馈兼容方案
    try { navigator.vibrate(15); } catch {}
  }
});
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
