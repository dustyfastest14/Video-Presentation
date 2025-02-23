function parseVideo() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const api = document.getElementById('parseApi').value;
    const player = document.getElementById('player');
    const loader = document.getElementById('loader');

    if (!videoUrl) {
        alert('请输入有效的视频链接');
        return;
    }

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
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) document.body.classList.add('dark-mode');
});
