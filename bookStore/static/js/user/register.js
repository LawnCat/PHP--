///判断背景音乐是否播放
function IsMusic() {
    var m = document.getElementsByTagName("audio")[0];
    console.log(m);
    if (m.paused) {
        m.paused = false;
        m.play();
    }
}
setInterval(IsMusic, 1)


