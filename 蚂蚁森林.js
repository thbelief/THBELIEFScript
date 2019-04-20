auto(); 
var title = "\r\n\r\n 《蚂蚁森林自动收取》 \r\n\r\n 版本2019.04.06\r\n"; 
var xc = device.width / 2, yc = device.height / 2; 
var IsAppStarted = false; 
threads.start(function(){
    events.setKeyInterceptionEnabled("volume_down",true);
    //监听按键
    events.observeKey();
    events.on("key_down",function(volume_down,event){
        toast("已经关闭蚂蚁森林脚本,亲~~~");
        //退出脚本
        sleep(500);
        exit();
    });
});
//开始运行脚本 
main_JsRun();

/* 
* 主函数 
*/ 
function main_JsRun(friendNumber) { 
toast(title); 
sleep(2000);
//主进程开始 
log("开始"); 
if (!requestScreenCapture()) { 
toastLog("请求截图失败"); 
exit_js(); 
} 
//sleep(3000); 
//启动支付宝 
launchAlipay(); 
//进入蚂蚁森林 
enterAntFortreen(); 
//收集自己的能量 
sleep(2000); 
collectByForce(); 
//打开好友排行 
enterEnergyList(); 
//偷好友能量 
stealFriend(500); 
//重新回到首页 
launchAlipay();  
exit_js();

} 
//结束脚本 
function exit_js() { 
toastLog("脚本结束"); 
home();
exit(); 
}

//启动应用,并到有蚂蚁森林的页面。 
function launchAlipay() { 
var i = 20; 
while (true) { 
var ca = currentActivity(); 
if (ca == "com.eg.android.AlipayGphone.AlipayLogin") { 
if (text("首页").exists() && text("口碑").exists()) { 
clickByText("首页", 0, -30); 
sleep(200); 
swipe(xc * 0.95, yc * 0.5, xc * 1.05, yc * 1.5, 100); //下拉 
sleep(500); 
break; 
} 
} else if (ca.toLowerCase().indexOf("alipay") > 0) { 
back(); 
} else { 
toastLog("启动支付宝"); 
startApp(); 
sleep(2000); 
} 
sleep(500); 
if (i-- <= 0) { 
toastLog("启动应用过慢。"); 
exit_js(); 
} 
}

}

//启用支付宝并保持 在最前 
function startApp() { 
if (IsAppStarted) return; 
IsAppStarted = true; 
threads.start(function () { 
while (IsAppStarted) { 
if (currentActivity().toLowerCase().indexOf("alipay") < 0) { 
launchApp("支付宝"); 
} 
sleep(100); 
} 
}); 
}

//进入蚂蚁森林 
function enterAntFortreen() { 
var i = 10; 
while (true) { 
if (descContains("我的大树养成").exists()) { 
break; 
} else { 
clickByText("蚂蚁森林", 0, -60); 
} 
sleep(500); 
if (i-- <= 0) { 
toastLog("进入蚂蚁森林失败。"); 
exit_js; 
} 
} 
sleep(2000); 
} 
//查找文本并点击text=查找内容，offset=点击偏移 
function clickByText(text, offsetX, offsetY) { 
if (textContains(text).exists()) { 
textContains(text).find().forEach(function (pos) { 
//pos.click(); 
var posb = pos.bounds(); 
click(posb.centerX() + offsetX, posb.centerY() + offsetY); 
}); 
return true; 
} else { 
return false; 
} 
} 
//查找文本并点击text=查找内容，offset=点击偏移 
function clickByDesc(desc, offsetX, offsetY) { 
if (descContains(desc).exists()) { 
descContains(desc).find().forEach(function (pos) { 
//var posb = pos.bounds(); 
pos.click(); 
//click(posb.centerX() + offsetX, posb.centerY() + offsetY); 
}); 
return true; 
} else { 
return false; 
} 
}

function enterEnergyList() {

toastLog("打开排行榜"); 
//sleep(500); 
//滑动屏幕，找到查看更多好友进入到好友排行榜 
var i = 10; 
while (true) { 
if (clickByDesc("查看更多好友", 0, 0)) { 
break; 
} 
swipe(500, 600, 500, 100, 500); 
sleep(500); 
if (i-- <= 0) { 
toastLog("无法进入好友排行。"); 
exit_js(); 
} 
} 
//等待好友列表载入 
i = 10; 
while (true) { 
if (textContains("好友排行榜").exists()) break; 
sleep(500); 
if (i-- <= 0) { 
toastLog("好友排行载入过慢。"); 
exit_js(); 
} 
} 
sleep(1000); 
}

//一个一个偷能量 
function stealFriend(k) { 
while (k-- > 0) { 
if (descContains("没有更多了").exists() && k > 10) k = 10; 
if (findFriendEnergy()) { 
sleep(2000); 
collectByForce(); 
back(); 
sleep(200); 
} 
//xc与yc是屏幕尺寸的一半
swipe(xc, yc, xc, yc - 180, 200); 
sleep(100); 
} 
} 
//找好友的能量 
function findFriendEnergy() {

var img = captureScreen(); 
//findColorInRegion(img, "#1AA16F", 0, 100, device.width, 300);
var point = findColor(img, "#1AA16F"); 
var point2 = findColor(img, "#f99137"); 
if (point) { 
click(point.x, point.y+50); 
return true; 
} else if (point2) { 
click(point2.x, point2.y+50); 
return true; 
} else { 
return false; 
} 
}

function collectByForce() {

//返回找到的能量球的集合
var energyBall=boundsInside(0,181,1080,1617).descContains("收集能量").find();
if(energyBall){
        for(var i=0;i<energyBall.length;i++){
        //if(energyBall[i].bounds().height>energyBall.width()){
            click(energyBall[i].bounds().centerX(),energyBall[i].bounds().centerY());
            toast("点击"+energyBall[i].bounds().centerX()+"和"+energyBall[i].bounds().centerY());
            sleep(500);
        //}       
        }
        sleep(1500);
        toast("已经收完自己的能量了哦，亲~");
}else{
    toast("你现在没有可以收的能量哦，亲！");
}
}
