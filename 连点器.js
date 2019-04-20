auto.waitFor();

var window = floaty.window(
    <frame>
        <button id="action" w="100" h="100" bg="#3000ff00"/>
    </frame>
);
var SD = rawInput("请输入连点速度(1000=1秒)","1000");
alert("移动悬浮窗，在悬浮窗区域内点击需要连点的区域！");

setInterval(() => {}, 1000);
var x = 0,
    y = 0;
var X, Y;
var windowX, windowY;

window.action.setOnTouchListener(function(view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            return true;
        case event.ACTION_MOVE:
            window.setPosition(windowX + (event.getRawX() - x), windowY + (event.getRawY() - y));
            return true;
        case event.ACTION_UP:
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                X = event.getRawX();
                Y = event.getRawY();
                window.close();
                onClick();
            }
            return true;
    }
    return true;
});
threads.start(function(){
    events.setKeyInterceptionEnabled("volume_down",true);
    //监听按键
    events.observeKey();
    events.onKeyDown("volume_down", function(event){
        toast("已关闭连续点击器脚本！");
        engines.myEngine().forceStop();
    });
});


function onClick() {
    threads.start(function() {
        while (true) {
            sleep(SD);
            click(X, Y);
        }
    });
}
