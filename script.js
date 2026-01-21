// script.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('button-grid');

    // 檢查資料庫是否有資料
    if (typeof soundList !== 'undefined' && soundList.length > 0) {
        soundList.forEach(item => {
            // 1. 建立按鈕元件
            const btn = document.createElement('button');
            btn.className = 'sound-btn';
            btn.innerText = item.name;

            // 2. 建立音效物件
            const audio = new Audio(`Audio/${item.file}`);

            // 3. 點擊事件
            btn.addEventListener('click', () => {
                // 重點：如果正在播放則回到開頭，達成快速連續點擊效果
                audio.currentTime = 0;
                audio.play();
            });

            // 4. 加入畫面
            grid.appendChild(btn);
        });
    } else {
        grid.innerHTML = "<p>請在 jsdb.js 中新增音效資料</p>";
    }
});
