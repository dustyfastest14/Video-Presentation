// 添加历史记录相关函数
function addToHistory(url) {
    let history = JSON.parse(localStorage.getItem('videoHistory') || '[]');
    history = history.filter(item => item !== url);
    history.unshift(url);
    if (history.length > 10) {
        history = history.slice(0, 10);
    }
    localStorage.setItem('videoHistory', JSON.stringify(history));
    updateHistoryDropdown();
}

function updateHistoryDropdown() {
    const history = JSON.parse(localStorage.getItem('videoHistory') || '[]');
    const dropdown = document.getElementById('historyDropdown');
    dropdown.innerHTML = '';
    
    if (history.length === 0) {
        return;
    }

    history.forEach(url => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.textContent = url;
        item.onclick = () => {
            document.getElementById('videoUrl').value = url;
            hideHistoryDropdown();
        };
        dropdown.appendChild(item);
    });
}

function showHistoryDropdown() {
    const dropdown = document.getElementById('historyDropdown');
    dropdown.classList.add('show');
}

function hideHistoryDropdown() {
    const dropdown = document.getElementById('historyDropdown');
    dropdown.classList.remove('show');
}

function parseVideo() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const api = document.getElementById('parseApi').value;
    const player = document.getElementById('player');
    const loader = document.getElementById('loader');

    if (!videoUrl) {
        alert('请输入有效的视频链接');
        return;
    }

    // 添加到历史记录
    addToHistory(videoUrl);

    loader.style.display = 'block';
    player.style.display = 'none';

    const encodedUrl = encodeURIComponent(videoUrl);
    const timestamp = new Date().getTime();
    player.src = `${api}${encodedUrl}&_t=${timestamp}`;

    player.onload = () => {
        loader.style.display = 'none';
        player.style.display = 'block';
    };

    player.onerror = () => {
        loader.style.display = 'none';
        alert('解析失败，请尝试更换接口');
    };
}

document.getElementById('videoUrl').addEventListener('keypress', e => {
    if (e.key === 'Enter') parseVideo();
});

function toggleTheme() {
    const body = document.body;
    const isDark = !body.classList.contains('dark-mode');
    
    // 添加过渡类
    body.classList.add('theme-transitioning');
    
    // 切换主题
    body.classList.toggle('dark-mode');
    
    if (isDark) {
        body.classList.remove('hope-ui-light');
        body.classList.add('hope-ui-dark');
    } else {
        body.classList.remove('hope-ui-dark');
        body.classList.add('hope-ui-light');
    }
    
    // 保存主题设置
    localStorage.setItem('darkMode', isDark);
    
    // 移除过渡类
    setTimeout(() => {
        body.classList.remove('theme-transitioning');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.body.classList.add('hope-ui-dark');
    } else {
        document.body.classList.add('hope-ui-light');
    }

    // 初始化历史记录
    updateHistoryDropdown();

    const videoUrl = document.getElementById('videoUrl');
    
    // 输入框获得焦点时显示历史记录
    videoUrl.addEventListener('focus', () => {
        const history = JSON.parse(localStorage.getItem('videoHistory') || '[]');
        if (history.length > 0) {
            showHistoryDropdown();
        }
    });
    
    // 点击其他地方时隐藏历史记录
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-wrapper')) {
            hideHistoryDropdown();
        }
    });
});

// 添加主题切换过渡效果的 CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .theme-transitioning * {
            transition: background-color 0.5s ease, 
                      color 0.5s ease, 
                      border-color 0.5s ease, 
                      box-shadow 0.5s ease !important;
        }
        
        .theme-transitioning {
            transition: background-image 0.5s ease !important;
        }
    </style>
`);

// 使用参考样式中的点击特效代码
(function() {
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 99999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651",
                "font-size": "16px",
                "white-space": "nowrap",
                "user-select": "none",
                "opacity": 1,
                "transition": "all .3s cubic-bezier(0.12, 0, 0.39, 0)"
            });
            $("body").append($i);
            
            // 使用 CSS transform 来实现更流畅的动画
            setTimeout(function() {
                $i.css({
                    "transform": "translateY(-180px) scale(1.2)",
                    "opacity": 0
                });
            }, 0);

            // 动画结束后移除元素
            setTimeout(function() {
                $i.remove();
            }, 800);
        });
    });
}());
