/* * @Author: thbelief  * @Date: 2019-04-19 13:40:27  * @Last Modified by:   thbelief  * @Last Modified time: 2019-04-19 13:40:27  */
//下面是UI层，主要就是图形
"ui";
//颜色设置
var color = "#66ccff";
//是否打开了无障碍权限，主要是用于Switch判断
var isAutoPermission=false;
//先建立一个本地的存储,用来提供版本号
var storage=storages.create("本地配置");
//每一次版本更新都需要改一下里面的值（不知道为什么app.versionName用不了）
//现在本地存储的versionShort更新还有一点问题，因为无法检测，只能设置默认点了浏览器下载或者直接下载之后就更改版本号
storage.put("versionShort","5.1.0");
//先打开欢迎页
//startPageFunction();
//登录界面
LoginPageFunction();
//打开主页面UI
//mainUI();
//检查是否有更新，有更新就提示，没更新就不提示
//checkHaveUpdate();
//下面是各个不同的页面UI
//主页面UI

function mainUI(){
    ui.layout(
    <frame>
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="脚本列表"/>
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical>
                        <ScrollView>
                            <vertical>
                                <horizontal>
                                    <text  text="无障碍权限（手动）" w="*" h="*" gravity="center" layout_weight="1"/>
                                    <Switch id="autoPermission"  w="*" h="*"  layout_weight="3"/>
                                </horizontal>
                                <horizontal>
                                    <button id="autoGood"  text="QQ名片自动点赞" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#FFC0CB"/>
                                    <button id="autoGoodRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>    
                                <horizontal>
                                    <button id="autoSignIn" text="I西科自动签到" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#4B0082"/>
                                    <button id="autoSignInRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>   
                                <horizontal>
                                    <button id="antForest" text="蚂蚁森林一键收取能量" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#00CED1"/>
                                    <button id="antForestRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="starStarBall" text="蚂蚁庄园星星球" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#556B2F"/>
                                    <button id="starStarBallRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="cubeAnimation" text="重力传感器验证" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#DAA520"/>
                                    <button id="cubeAnimationRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="clickOnTheStraight" text="连续点击" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#FFA500"/>
                                    <button id="clickOnTheStraightRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="yibanSign" text="易班批量签到" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#B22222"/>
                                    <button id="yibanSignRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="downGlide" text="匀速上滑" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#A9A9A9"/>
                                    <button id="downGlideRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="deviceMessage" text="设备信息" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#5F9EA0"/>
                                    <button id="deviceMessageRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="qrCode" text="二维码生成" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#DB7093"/>
                                    <button id="qrCodeRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="screenshotColor" text="截图取色" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#7B68EE"/>
                                    <button id="screenshotColorRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                                <horizontal>
                                    <button id="continuousTransmission" text="连续发送" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1" bg="#6495ED"/>
                                    <button id="continuousTransmissionRelate" text="相关" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="3" />
                                </horizontal>
                            </vertical>
                        </ScrollView>
                        
                    </vertical>  
                    
                </frame>
                <frame>
                    <vertical>
                        <horizontal>
                             <button id="chatRoom" text="IPV6聊天室(*)" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1"/>
                        </horizontal>
                        <horizontal>
                             <button id="qqSpaceLike" text="QQ空间自动下滑/点赞" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1"/>
                        </horizontal>
                        <horizontal>
                             <button id="weChatSpaceLike" text="朋友圈自动下滑/点赞" w="*" h="*" style="Widget.AppCompat.Button.Colored" layout_weight="1"/>
                        </horizontal>
                    </vertical>   
                </frame>
                <frame>
                    <vertical>
                        <list id="answerProblem">
                            <horizontal>
                                <text textColor="{{this.color}}"  w="*" h="*" textSize="20sp" text="{{this.line}}" />
                            </horizontal>             
                        </list>
                    </vertical>
                </frame>
                <frame>
                    <vertical>
                        <ScrollView>
                            <vertical>
                                <webview id="webview" h="*" margin="0 16"/>
                            </vertical>
                        </ScrollView>
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://i2.bvimg.com/682525/a1c337b714162972.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" w="*" h="*" textSize="15sp" text="{{this.title}}" gravity="center"  singleLine="true"/>                                         
                </horizontal>
            </list>
        </vertical>
    </drawer>
    </frame>
    );
    //自动点赞的相关点击事件
    ui.autoGoodRelate.click(()=>{
        autoGoodRelateUI();
    });
    //自动签到的相关点击事件
    ui.autoSignInRelate.click(()=>{
        autoSignInUI();
    });
    //蚂蚁森林的相关点击事件
    ui.antForestRelate.click(()=>{
        antForestUI();
    });
    //蚂蚁庄园星星球相关点击事件
    ui.starStarBallRelate.click(()=>{
        starStarBallUI();
    });
    //重力传感器验证相关点击事件
    ui.cubeAnimationRelate.click(()=>{
        cubeAnimationUI();
    });
    //连续点击相关点击事件
    ui.clickOnTheStraightRelate.click(()=>{
        clickOnTheStraightUI();
    });
    //易班相关点击事件
    ui.yibanSignRelate.click(()=>{
        yibanSignUI();
    });
    //匀速下滑相关的点击事件
    ui.downGlideRelate.click(()=>{
        downGlideUI();
    });
    //设备信息的相关事件
    ui.deviceMessageRelate.click(()=>{
        deviceMessageUI();
    });
    //二维码生成相关点击事件
    ui.qrCodeRelate.click(()=>{
        qrCodeUI();
    });
    //截图取色相关的点击事件
    ui.screenshotColorRelate.click(()=>{
        screenshotColorUI();
    });
    //连续发送相关的点击事件
    ui.continuousTransmissionRelate.click(()=>{
        continuousTransmissionUI();
    });
    //toolbar
    activity.setSupportActionBar(ui.toolbar);
    //设置滑动页面的标题
    ui.viewpager.setTitles(["可使用脚本", "开发中脚本","常见问题","帮助文档"]);
    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);
    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);
    //获取帮助文档的网页
    ui.webview.loadUrl("https://thbelief.github.io/2019/04/10/THBELIEFScript%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/");
    
    ui.menu.setDataSource([
    {
      title: "个人信息",
      icon: "https://img.icons8.com/ios/100/000000/ninja-turtle.png"
    },
    {
      title: "注意事项",
      icon: "https://img.icons8.com/ios/100/000000/assignment-late.png"
    },
    {
        title: "检查更新",
        icon: "https://img.icons8.com/ios/100/000000/available-updates.png"
    },
    {
        title: "当前版本",
        icon: "https://img.icons8.com/ios/100/000000/versions.png"
    },
    {
        title: "注销登录",
        icon: "https://img.icons8.com/material/100/000000/delete-sign.png"
    },
    {
        title: "关于",
        icon: "https://img.icons8.com/ios/100/000000/info.png"
    },
    {
      title: "退出",
      icon: "https://img.icons8.com/ios/100/000000/esc.png"
    }
    ]);
    ui.answerProblem.setDataSource([
        {
            line: "问：这个APP的作用的什么？",
            color: "red"
        },
        {
            line: "答： 这个软件的主要作用就是作为一个脚本集，来存放平时随手写的以及参考的一些脚本，也算作一个休闲的项目。",
            color: "black"
        },
        {
            line: "问： 可不可以一次性打开无障碍权限，而不是每一次都要打开？",
            color: "red"
        },
        {
            line: "答： 直接打开自启动就可以了，不用每次都打开无障碍权限",
            color: "black"
        },
        {
            line: "问：这个软件有哪些需要注意的地方？",
            color: "red"
        },
        {
            line: "答： 首先，所有的脚本都可以通过按下音量下键来关闭，如果没有关闭的话，请务必联系我。其次，本APP依托于Android开放的无障碍权限平台，不存在什么不正当的操作，请务必放心使用。",
            color: "black"
        },
        {
            line: "问：为什么很多时候不知道该如何使用某些脚本？",
            color: "red"
        },
        {
            line: "答：一般来说，我都是写的很清楚的提示toast，但是有的时候可能也是想当然了，如果看了相关还不明白的话，建议联系我。",
            color: "black"
        },
        {
            line: "问：可不可以定制脚本？",
            color: "red"
        },
        {
            line: "答：如果有意愿的话，可以把你的需求发到我的邮箱：2465749045@qq.com，如果我有时间会考虑的。",
            color: "black"
        },
        {
            line: "问：这个软件在哪些地方可以下载？",
            color: "red"
        },
        {
            line: "答：目前托管在https://fir.im/ha23上，不久之后有上架酷安的想法。",
            color: "black"
        },
    ]);
    ui.menu.on("item_click", item => {
        switch(item.title){
            case "个人信息":
                //下面就展示个人信息页面
                personalInformationUI();
                break;
            case "注意事项": 
                alert("本APP里面的脚本都是依托于无障碍服务，所以无障碍服务权限必须开启。"+"\n"+"注意：开发中脚本无法使用，点击没有效果，（*）除外。"+"\n"+"所有的脚本正常情况下都可以通过音量下键停止，如果有任何异常请反馈至开发者THBELIEF");
                break;
            case "检查更新": 
                //检查是否有更新
                checkIsUpdata();
                break;
            case "当前版本": 
                interfaceCartoonFunction();
                break;
            case "注销登录": 
                storages.remove("user");
                ui.finish();
                break;
            case "关于": 
                alert("Developed by THBELIEF!"+"\n"+"联系方式："+"\n"+"QQ:2465749045");
                break;
            case "退出":
                ui.finish();
                break;
        }
    })
    //QQ自动点赞的点击事件（因为有两个线程，所以用不了buttonClickEvent
    ui.autoGood.click(()=>{
        confirm("友情提示：亲，请确保你的无障碍服务权限以及通知使用权限打开了哟~~~").then(sure => {
            if(sure){
                //修改控件信息必须更改线程
                threads.start(function(){
                    //自动点赞
                    StartClick();
                });
                threads.start(function(){
                    //另外一个线程检测是否点击了音量下键
                    isKeyDown();
                })
            }
        });
    });
    //i西科自动签到点击事件
    buttonClickEvent(ui.autoSignIn,autoSignInFunction);  
    //无障碍服务权限开启点击事件Switch
    ui.autoPermission.on("check", (checked) => {
        if (checked== false) {
            toast("再按一下手动打开无障碍服务权限哦，亲~");
            isAutoPermission=false;
        } else {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
            toast("找到THBELIEFScript开启就好啦，亲~");
        }
    });
    //蚂蚁森林点击事件
    buttonClickEvent(ui.antForest,antForestFunction);
    //星星球点击事件
    buttonClickEvent(ui.starStarBall,starStarBallFunction);
    //重力传感器（立方体动画）
    buttonClickEvent(ui.cubeAnimation,cubeAnimationFunction);
    //IPV6聊天室
    buttonClickEvent(ui.chatRoom,chatRoomFunction);
    //连续点击
    buttonClickEvent(ui.clickOnTheStraight,clickOnTheStraightFunction);
    //易班签到批量
    buttonClickEvent(ui.yibanSign,yibanSignFunction);
    //匀速下滑
    buttonClickEvent(ui.downGlide,downGlideFunction);
    //设备信息
    buttonClickEvent(ui.deviceMessage,deviceMessageFunction);
    //二维码生成
    buttonClickEvent(ui.qrCode,qrCodeFunction);
    //截图取色
    buttonClickEvent(ui.screenshotColor,screenshotColorFunction);
    //连续点击
    buttonClickEvent(ui.continuousTransmission,continuousTransmissionFunction);
    
}
//QQ名片自动点赞相关UI
function autoGoodRelateUI(){
    ui.layout(
      <frame>
        <vertical>
            <button id="backMainUIByGoodRelateUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
            <text text="本脚本适配V7.9.9.3965版QQ.注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。使用的时候会提示打开无障碍服务
            如果已经没打开会前往打开页面，打开权限即可。脚本正常运行之后会前往QQ个人信息页面，需要手动点击进入点赞页面，按音量下键结束运行。使用前请保持QQ已经处于登录状态。" textSize="20sp"/>
        </vertical> 
      </frame>
    );
    //返回键返回主界面
    ui.backMainUIByGoodRelateUI.click(()=>{
        mainUI();
    });
}
//i西科自动签到相关UI
function autoSignInUI(){
    ui.layout(
      <frame>
        <vertical>
            <button id="backMainUIBySignInUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
            <text text="本脚本适配3.9.0Android版i西科.注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键结束运行" textSize="20sp"/>
        </vertical> 
      </frame>
    );
    ui.backMainUIBySignInUI.click(()=>{
        mainUI();
    });
}
//蚂蚁森林UI
function antForestUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByantForestUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。目前本脚本还存在些许BUG，有任何问题请反馈至开发者。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByantForestUI.click(()=>{
          mainUI();
      });
}
//星星球UI
function starStarBallUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByStarUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本只用于日常懒癌患者快捷操作，不建议用于刷分。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByStarUI.click(()=>{
          mainUI();
      });
}
//重力传感器UI
function cubeAnimationUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIBycubeUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本的作用只是简单的验证重力传感器是否正常使用。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIBycubeUI.click(()=>{
          mainUI();
      });
}
//连续点击
function clickOnTheStraightUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByClickStraightUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本的作用是在一个坐标上以指定的频率一直重复的点击。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByClickStraightUI.click(()=>{
          mainUI();
      });
}
//易班签到ui
function yibanSignUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByyibanSignUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本是基于易班开发，针对的是易班签到事件，主要功能是易班批量签到，使用方法:在账户编辑与密码编辑页面输入数据(一一对应，每个占一排)。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByyibanSignUI.click(()=>{
          mainUI();
      });
}
//匀速下滑UI
function downGlideUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIBydownGlideUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。目前支持的都是可以滑动的界面。长按滑动按钮1.5s以上自动退出脚本。适用于刷空间刷贴吧之类的。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIBydownGlideUI.click(()=>{
          mainUI();
      });
}
//设备信息UI
function deviceMessageUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIBydeviceMessageUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。该脚本的作用就是显示当前的设备信息。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIBydeviceMessageUI.click(()=>{
          mainUI();
      });
}
//二维码生成的相关UI
function qrCodeUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByqrCodeUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本的作用就是生成自定义的二维码。生成的二维码png保存在根目录下的THBELIEFScript文件夹下面。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByqrCodeUI.click(()=>{
          mainUI();
      });
}
//截图取色相关UI
function screenshotColorUI(){
    ui.layout(
        <frame>
          <vertical>
              <button id="backMainUIByscreenshotColorUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
              <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本的作用是直接截图或者从相册中取到图片然后取色。" textSize="20sp"/>
          </vertical> 
        </frame>
      );
      ui.backMainUIByscreenshotColorUI.click(()=>{
          mainUI();
      });
}
//连续发送相关UI
function continuousTransmissionUI(){
    ui.layout(
    <frame>
      <vertical>
          <button id="backMainUIBycontinuousTransmissionUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />
          <text text="注意：本脚本使用之前必须打开无障碍服务权限，否则不会运行。音量下键关闭脚本。本脚本的作用是在QQ或者WeChat之类的即时通讯的聊天界面重复的发某句话，按照一定的频率。长按悬浮输入框可以调整位置。" textSize="20sp"/>
      </vertical> 
    </frame>
  );
  ui.backMainUIBycontinuousTransmissionUI.click(()=>{
      mainUI();
  });
}

//个人信息的展示页面
function personalInformationUI(){
    ui.layout(
        <frame>
            <vertical>
                <horizontal>
                    <button id="backMainUIBypersonalUI" text="返回" w="auto" style="Widget.AppCompat.Button.Colored" />        
                </horizontal> 
                <vertical gravity="center">
                    <img src="https://img.icons8.com/color/48/000000/joe-pineapples.png"
                    w="100" h="100" circle="true" borderWidth="2dp" borderColor="#202020" gravity="center" marginTop="100dp"/>
                    <text id="level" text="等级: 普通会员(Min)" gravity="center" marginTop="20dp" textSize="20sp" textColor="#000000"/>
                    <horizontal gravity="center">
                        <text id="progress_value" text="经验值：0/100" marginleft="10dp" layout_weight="3" gravity="center"  marginTop="10dp" textSize="20sp" textColor="#000000"/>
                        <progressbar id="progress"layout_weight="6" marginTop="10dp" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
                        <button id="upgrade" text="升级" layout_weight="1" marginTop="10dp" style="Widget.AppCompat.Button.Colored" />    
                    </horizontal>
                    <text id="username" text="" gravity="center" marginTop="20dp" textSize="20sp" textColor="#000000"/>
                    <text id="userpassword" text="" gravity="center" marginTop="10dp" textSize="20sp" textColor="#000000"/>
                </vertical>
            </vertical>
        </frame>
      );
      if(storage.get("level")=="至尊会员(Max)"){
            ui.progress.setProgress(100);
            ui.level.setText("等级："+storage.get("level"));
            ui.progress_value.setText("经验值：100/100");
      }else{
          toast("请升级至至尊会员，升级不花一分钱，一键满级！");
      }
      var isOverUpgrade = null;
        ui.upgrade.click(()=>{
            if(ui.progress.getProgress()==0){
                if(isOverUpgrade != null){
                    stopDownload();
                }else{
                    startDownload();
                }
            }else{
                toast("升级失败，正在升级或者已经升至满级！");
            }
            
        });

        function stopDownload(){
            storage.remove("level");
            storage.put("level","至尊会员(Max)");
            toast("已经升级至最高等级！")
            clearInterval(isOverUpgrade);
            isOverUpgrade = null;
        }

        function startDownload(){
            if(ui.progress.getProgress() == 100){
                ui.progress.setProgress(0);
            }
            isOverUpgrade = setInterval(()=>{
                
                var p = ui.progress.getProgress();
                p++;
                if(p > 100){
                    ui.level.setText("等级: 至尊会员(Max)");
                    alert("恭喜账号:"+"\n  "+storage.get("username")+"您升至至尊会员！");
                    stopDownload();
                    return;
                }
                ui.progress.setProgress(p);
                ui.progress_value.setText("经验值："+p.toString()+"/100");
            },50);
        }
      ui.username.setText("用户名: "+storage.get("username"));
      ui.userpassword.setText("密码: "+storage.get("userpassword"));
      ui.backMainUIBypersonalUI.click(()=>{
          //退出之前必须先停掉
          if(isOverUpgrade){
            clearInterval(isOverUpgrade);
            toast("升级尚未完成即退出，升级失败！");
          }
          mainUI();
      });
}
//下面是各类方法的实现
//这个是对应功能的方法
//4.19 连续发送
function continuousTransmissionFunction(){
    isKeyDown();//检测是否按下了音量下键
    toast("请前往需要连续发送的聊天界面！");
    sleep(1000);
    var sendSpeed=rawInput("请输入发送的速度(每几秒发送一次):");
    var discourse="你好...";
    if(sendSpeed>0){
        //只有输入的大于等于零才可以进入
        floatingWindowDownGlide("发送内容","修改",modifyMessage);
        suspendButton(sendMessage);
    }else{
        toast("脚本启动失败，速度必须大于0！")
    }
    
    function sendMessage(){
        setInterval(()=>{
            className("android.widget.EditText").clickable().findOne().setText(discourse);
            sleep(1000);
            className("android.widget.Button").text("发送").findOnce().click();//发送即可
        },sendSpeed*1000);
        
    }
    function modifyMessage(input){
        discourse=input;
    }
}
//4.19 截图取色
function screenshotColorFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./截图取色.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("截图取色相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//从桌面一直打开到点赞页面的函数
function open(){
    //需要无障碍权限
    auto("normal");
    //直接打开QQ（应该还要判断一下是否已经登录了）
    launchApp("QQ");
    //调用QQ提供的Android以及ios通用API打开QQ名片
    var i = app.intent({
    action:"android.intent.action.VIEW",
        data:"mqqapi://card/show_pslcard?&uin="
    }); 
    app.startActivity(i);
    //打开点赞列表
    //toast("请点击QQ点赞的图标进入点赞页面哦，亲~~~");
    sleep(1000);
    descContains("次赞").clickable().findOne().click();

}
//具体点赞的方法
function good() {
    //寻找点赞的小图标
    var goodClick = desc("赞").untilFind();
    var i = 0;
    while (i < goodClick.size()) {
        var j = 0;
        while (j < 10) {//十次点击
            goodClick.get(i).click();
            j = j + 1;
        }
        i = i + 1;
    }
    //点击完之后要往下翻
    className("android.widget.AbsListView").scrollForward();
    sleep(500);
    //如果出现显示更多就点击一下
    if (text("显示更多").exists()) {
        text("显示更多").findOne().parent().click();
    }
    //有些时候会弹出（test中）
    if(text("提升点赞数").exists()){
        back();
    }
}
//这个是QQ名片自动点赞的主方法
function StartClick(){
    //下面就是主函数部分
    toast("请确保QQ已经登录哦亲~~~");
    open();
    //进入点赞页面，页面跳转需要时间，必须延迟才行。
    toast("已经进入点赞页面，准备开始点赞...");
    waitForActivity("com.tencent.mobileqq.activity.VisitorsActivity");
    toast("停止此脚本请按音量下键，亲~~~");
    while(true){
        good();
    }
}
//检测是否点击了音量下键的方法
function isKeyDown(){
    //监听音量下键是否按下，退出脚本
    threads.start(function(){
        events.setKeyInterceptionEnabled("volume_down",true);
        //监听按键
        events.observeKey();
        events.onKeyDown("volume_down", function(event){
            toast("已关闭此脚本！");
            engines.myEngine().forceStop();
        });
    });
}
//2019.4.2 i西科自动签到方法
function autoSignInFunction(){
    auto();
    //打开i西科
    launchApp("i西科");
    //跳转到相应的界面
    waitForPackage("org.weixvn.frame");
    //找到首页上签到的按钮，点击进去
    id("it_sign_in").clickable().findOne().click();
    waitForActivity("com.example.z.iswust.view.activity.impl.SignInActivity");
    //点击签到
    sleep(1000);
    if(text("暂无").exists()){
        //还没签到
        id("btn_signin").clickable().untilFind().click();
        toast("签到成功了哟，亲~~~");    
    }else{
        //如果已经签到了的话
        toast("今天已经签过到了哦，亲~~~");
    }
    sleep(500);
    //签到完成之后直接返回桌面
    home();
}
//2019.4.3检查是否有更新，有更新的话就下载
function checkIsUpdata(){
    threads.start(function(){
        //网络请求必须更改线程，不能在主线程
        //通过fir.im的API来进行版本查询
        var url="http://api.fir.im/apps/latest/5ca40357548b7a65912fc02b?api_token=b44bd08868ab6ad1b1c02ca260c389b6&type=android";
        var res =http.get(url);
        //下面必须用app.versionCode获取本地APP版本号，2.00是测试用的

        if(res.statusCode == 200){
            //toast("请求成功");
            //先检测是否有版本号存储本地
                var versionShortFromWeb=JSON.parse(res.body.string()).versionShort;
                //调试信息
                log(versionShortFromWeb);
                log("app:"+app.versionCode+app.versionName);
                if(storage.get("versionShort")==versionShortFromWeb){
                    //如果版本短号一样则不更新
                    toast("当前版本："+storage.get("versionShort")+"。已经是最新版了哦，亲~~~");
                }
                else{
                    //有更新
                    //弹出选择框
                    updataApp(url);
                }      
        }else{//网络请求失败
            toast("请求失败:" + res.statusMessage);
        };
    
    });
};
//更新的具体方法
function updataApp(url){
    //Json.stringify是将Json对象美化,parse是把它变成JSON对象
    updateMessage=JSON.parse(http.get(url).body.string());  
    var updateContent="更新版本："+"\n"+"名称: "+updateMessage.name+"\n"+"版本号: "+updateMessage.version+"\n"+"版本短号: "+updateMessage.versionShort;
    dialogs.build({
        title: "发现新版本",
        content: updateContent,
        positive: "立即下载",
        negative: "取消",
        neutral: "去浏览器下载"
    }).on("positive",()=>{
        download();
        //先删除再重新添加
        storage.remove("versionShort");
        storage.put("versionShort",updateMessage.versionShort);
    })
    .on("neutral", () => {
        app.openUrl("https://fir.im/ha23");
        //先删除再重新添加
        storage.remove("versionShort");
        storage.put("versionShort",updateMessage.versionShort);
    })
    .show();
    
}
//下载安装包的方法
function download(){
    threads.start(function(){
        /*var url="http://api.fir.im/apps/5ca40357548b7a65912fc02b/download_token?api_token=b44bd08868ab6ad1b1c02ca260c389b6";
        //转成JSON对象
        var downloadApi=JSON.parse(http.get(url).body.string()); 
        //转成字符串
        //var a=JSON.stringify(downloadApi.download_token).string();*/
        //这里的download_token如果动态拼接的话会出现问题，然后正好前面返回的数据看到的，并且测试之后更新版本并不影响它的值，所以就直接使用了，本来不该这样用
        //不同的应用必须改变值~~~
        app.openUrl("http://download.fir.im/apps/5ca40357548b7a65912fc02b/install?download_token=d1a11ae1ae9947fb66777f9540327497");
    });
}
//2019.4.4主页面按钮的点击事件，传入两个参数，一个是按钮的ID（注意前面加ui.），第二个是具体的实现方法
function buttonClickEvent(functionTest,functionTestFunction){
    functionTest.click(()=>{
        confirm("友情提示：亲，请确保你的无障碍服务权限以及通知使用权限打开了哟~~~").then(sure => {
            if(sure){
                //修改控件信息必须更改线程
                threads.start(function(){
                    //自动签到
                    functionTestFunction();
                });
            }
        });
    });
}
//2019.4.4 开屏进入检查是否有更新，有就提示，没有就不提示
function checkHaveUpdate(){
    threads.start(function(){
        //网络请求必须更改线程，不能在主线程
        //通过fir.im的API来进行版本查询
        var url="http://api.fir.im/apps/latest/5ca40357548b7a65912fc02b?api_token=b44bd08868ab6ad1b1c02ca260c389b6&type=android";
        var res =http.get(url);
        //下面必须用app.versionCode获取本地APP版本号，3.00是测试用的
        if(res.statusCode == 200){
            //toast("请求成功");
            //先检测是否有版本号存储本地
                var versionShortFromWeb=JSON.parse(res.body.string()).versionShort;
                if(storage.get("versionShort")==versionShortFromWeb){
                    //如果版本短号一样则不更新
                    if(storage.contains("level")){
                        toast("欢迎回来,尊敬的"+storage.get("level")+"！");
                    }else{
                        toast("欢迎回来,尊敬的普通会员(Min)！");
                    }
                    
                }
                else{
                    //有更新
                    //或许这里可以给一个alert框显示一些更新内容  
                    var allUpdateMessageUrl="http://api.fir.im/apps/5ca40357548b7a65912fc02b?api_token=b44bd08868ab6ad1b1c02ca260c389b6 ";
                    var allUpdateMessage =JSON.parse(http.get(allUpdateMessageUrl).body.string());
                    var showallUpdateMessage="更新内容： "+"\n"+allUpdateMessage.desc;
                    dialogs.build({
                        title: "发现新版本",
                        content:showallUpdateMessage,
                        positive: "知道了"
                    }).on("positive",()=>{
                        toast("有更新，请前往菜单页面更新哦，~亲~");
                    }).show(); 
                    log(versionShortFromWeb+app.versionName);  
                }           
        }else{//网络请求失败
            toast("找不到网络呢，亲！");
        };
    
    });
}
//2019.4.5 悬浮按钮方法
function suspendButton(qqSpaceLikeFunction){
        toast("悬浮按钮已部署！");
        var window =floaty.window(
            <frame>
                <button id="action" text="载入脚本..." textColor="#000000" style="Widget.AppCompat.Button.Colored" w="100" h="40" bg="#77ffffff"/>
            </frame>
        );
        //计时器1s
        window.setPosition(device.width/2,device.height/2);
        setInterval(()=>{}, 1000);
        for(i=3;i>0;i--){
            sleep(1000);
            window.action.setText(i+'s');
        }
        sleep(1000);
        window.action.setText('停止运行');
        var execution = null;
        //记录按键被按下时的触摸坐标
        var x = 0, y = 0;
        //记录按键被按下时的悬浮窗位置
        var windowX, windowY;
        //记录按键被按下的时间以便判断长按等动作
        var isWork=false;
        //当前点赞线程
        var thread;
        window.action.setOnTouchListener(function(view, event){
            switch(event.getAction()){
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    //移动手指时调整悬浮窗位置
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    //如果按下的时间超过1.5秒判断为长按，退出脚本
                    if(new Date().getTime() - downTime > 1500){
                        exit();
                    }
                    return true;
                case event.ACTION_UP:
                    //手指弹起时如果偏移很小则判断为点击
                    if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                        if(window.action.getText() == '开始运行'){
                            window.action.setText('停止运行');
                            toast("脚本停止运行");
                            threads.shutDownAll();
                        }else{
                            window.action.setText('开始运行');
                            toast("脚本开始运行");
                            thread=threads.start(function(){
                                qqSpaceLikeFunction();
                            });
                        }
                    }
                    return true;
            }
            return true;    
        });
}
//蚂蚁森林点击事件的方法2019.4.6
function antForestFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./蚂蚁森林.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("蚂蚁森林相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//星星球点击事件的方法2019.4.6
function starStarBallFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./星星球.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("星星球相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//重力传感器方法
function cubeAnimationFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./立方体动画.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("重力传感器验证相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//IPV6聊天室方法
function chatRoomFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./ipv6聊天室.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("IPV6聊天室相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//连续点击方法
function clickOnTheStraightFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./连点器.js";
    toast("开始运行，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("连续点击相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//易班签到方法
function yibanSignFunction(){
    //内置音量下键关闭，故不做监测
    //下面是其他js文件的载入路径
    var path = "./易班批量签到.js";
    toast("进入易班批量签到控制界面，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("易班批量签到相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//设备信息方法
function deviceMessageFunction(){
    var path = "./设备信息.js";
    toast("进入设备信息控制界面，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("设备信息相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//二维码方法
function qrCodeFunction(){
    var path = "./二维码生成.js";
    toast("进入二维码生成界面，音量下键结束运行...");
    sleep(1000);
    if(!files.exists(path)){
        toast("二维码生成相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
/*
//启动页
function startPageFunction(){
    var path = "./欢迎页.js";
    if(!files.exists(path)){
        toast("欢迎页相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}*/
//开屏悬浮窗动画
function interfaceCartoonFunction(){
    var path = "./ui 悬浮窗动画+滑动界面.js";
    if(!files.exists(path)){
        toast("开屏悬浮窗动画相关文件缺失...");
        exit();
    }
    var execution=null;
    execution=engines.execScriptFile(path);
}
//专属悬浮输入框2019.4.17
function floatingWindowDownGlide(messageTitle,buttonTitle,performFunction){
    //一个是修改完成后的提示信息，第二个是需要完成的工作
    var window = floaty.window(
        <vertical gravity="center">
            <horizontal  w="*" layout_gravity="center">
                 <text id="textTitle" text="" textSize="15sp" w="auto"/>
                 <input id="input" text="" textSize="15sp" focusable="true" w="auto"/> 
            </horizontal>
            <button id="ok" text="确定" w="auto"/>
        </vertical>
    );
    //重置文本
    window.textTitle.setText(messageTitle);
    window.ok.setText(buttonTitle);

    window.exitOnClose();
    
    toast("长按确定键可调整位置");
    
    window.input.on("key", function(keyCode, event){
        if(event.getAction() == event.ACTION_DOWN && keyCode == keys.back){
            window.disableFocus();
            event.consumed = true;
        }
    });
    
    window.input.on("touch_down", ()=>{
        window.requestFocus();
        window.input.requestFocus();
    });
    
    window.ok.on("click", ()=>{
        toast(messageTitle+"已经修改为："+window.input.text());
        performFunction(window.input.text());
        window.disableFocus();
    });
    
    window.ok.on("long_click", ()=>{
        window.setAdjustEnabled(!window.isAdjustEnabled());
    });
    
    setInterval(()=>{}, 1000);    
}
//匀速下滑的方法具体实现
function downGlideSpecific(){
    //点击完之后要往下翻
    while(true){   
        //className("android.widget.AbsListView").scrollForward();
        //sleep(2000);
        gesture(storage.get("downGlideSpeed")*1000,[400,device.height/2],[400,400]);
        sleep(500);
    }
    
}
//匀速下滑的方法
function downGlideFunction(){
    //这个悬浮输入框只有结束了才会执行后面的东西，这个东西很实用！
    var downGlideSpeed=rawInput("请输入下滑速度：(秒)");
    if(parseInt(downGlideSpeed)>=0){
        //只要速度输入的是大于零的都可以
        toast("成功修改速度至： "+parseInt(downGlideSpeed)+"s");
        //先清除掉数据再存进去
        storage.remove("downGlideSpeed");
        storage.put("downGlideSpeed",parseInt(downGlideSpeed));

    }
    suspendButton(downGlideSpecific);
}
//界面
function jiemian(){
    ui.run(()=>{
        mainUI();
    });
    checkHaveUpdate();
}
//登录界面
function LoginPageFunction(){
    ui.statusBarColor("#000000")
    var kg, kg2, u = 1,op = 0;
    var stg = storages.create("user");
    var zh = stg.get("list", {see: "",name: "",pass: ""});
    main();
    function main(){
        if (zh.see == "1") {
            denru(true,zh.name,zh.pass);
        }else if (zh.see == "2") {
            jiemian();
        }else{
            denru();
        }   
    }
        
    function denru(t,n,p){
    ui.layout(
        <vertical bg="#708090">
            <vertical h="auto" align="center" marginTop="100">
                <img layout_gravity="center" src="https://img.icons8.com/color/48/000000/joe-pineapples.png" w="70" h="70" circle="true"/>
            </vertical>
            <card w="*" h="250" margin="20" cardCornerRadius="15dp" cardBackgroundColor="#b0c4de"
            cardElevation="15dp" gravity="bottom" foreground="?selectableItemBackground">
            <vertical>
                <linear margin="0 40 0 0">
                    <img w="30" h="30" src="@drawable/ic_person_black_48dp"/>
                    <input id="name" w="*" h="40" hint="用户名"/>
                </linear>
                <linear>
                    <img w="30" h="30" src="@drawable/ic_https_black_48dp"/>
                    <input id="password" hint="密码" w="*" h="40" inputType="textPassword"/>
                </linear>
                <linear gravity="center">
                    <checkbox id="cb1" text="记住密码"/>
                    <checkbox id="cb2" text="自动登入"/>
                </linear>
                <linear gravity="center">
                    <horizontal>
                        <button id="login" w="250" h="*" text="登录" size="16" style="Widget.AppCompat.Button.Colored"/>
                    </horizontal>
                </linear>
                <linear gravity="center">
                    <text w="106" gravity="center" color="#111111" size="16">还没有账号？</text>
                    <text id="register" w="auto" h="auto" size="16" text="注册" paddingRight="15"/>
                    <text id="reg" w="auto" h="auto" size="16" paddingLeft="10" text="忘记密码"/>
                </linear>
            </vertical>
        </card>
        </vertical>
    );

    if (t) {ui.name.setText(n);ui.password.setText(p);ui.cb1.setChecked(t);}

    ui.login.on("click", () => {
        threads.start(function() {
            if (!ui.name.text()) {
                toast("您还没有输入用户名!");
                return;
            }
            if (!ui.password.text()) {
                toast("还没有输入密码呢");
                return;
            }
            var str = JSON.parse(http.get("https://api.apiopen.top/loginUser?apikey=d1cef6f3e25ab08f623bbb147f32bb5d&name=" + ui.name.text() + "&passwd=" + ui.password.text()).body.string());
            if (str.code !== 200) {
                toast(str.message);
                return;
            } else {
                //先删除再重新添加，这里是用于显示在个人信息的东西
                storage.remove("username");
                storage.remove("userpassword");
                storage.put("username",ui.name.text());
                storage.put("userpassword",ui.password.text());
                //等级
                storage.put("level","普通会员(Min)");
                //下面的判断都是判断是不是勾了框的
                if (op == 1) {
                    stg.put("list", {see: "1",name: ui.name.text(),pass: ui.password.text()});
                    toast("登入" + str.message);
                    jiemian();
                } else if (op == 2) {
                    stg.put("list", {see: "2",name: ui.name.text(),pass: ui.password.text()});
                    toast("登入" + str.message);
                    jiemian();
                } else {
                    storages.remove("user");
                    toast("登入" + str.message);
                    jiemian();
                }
                
            }
        })
    });

    ui.emitter.on("back_pressed", e => {
        if (!kg) {
            kg = true;
            toast("再按一次退出");
            setTimeout(() => {
                kg = false;
            }, 250);
            e.consumed = true;
        } else {
            e.consumed = false;
        };
    });

    ui.register.on("click", () => {
        zhuce();
    });

    ui.reg.on("click", () => {
        dialogs.confirm(null, "抱歉，暂时没有找回密码功能，是否重新注册一个新账号?", (a) => {
            if (a) {
                zhuce();
            }
        })
    });

    ui.cb1.on("check", (checked) => {
        if (checked) {
            op = 1;
        } else {
            op = 0;
            u = 0;
            ui.cb2.setChecked(false);
        }
    });

    ui.cb2.on("check", (checked) => {
        if (checked) {
            ui.cb1.setChecked(true);
            op = 2;
            u = 1;
        } else {
            if (u) {
                op = 1;
            }
        }
    });
    }

    function zhuce(){
    ui.layout(
        <vertical bg="#708090">
            <card w="*" h="250" margin="20 180 20 20" cardCornerRadius="15dp" cardBackgroundColor="#b0c4de"
            cardElevation="15dp" gravity="bottom" foreground="?selectableItemBackground">
            <vertical>
                <vertical h="auto" align="center" margin="5 30 5 5">
                    <linear>
                        <img w="30" h="30" src="@drawable/ic_person_black_48dp"/>
                        <input id="name" w="*" h="40" hint="输入用户名"  />
                    </linear>
                    <linear>
                        <img w="30" h="30" src="@drawable/ic_https_black_48dp"/>
                        <input id="password" hint="输入密码" w="*" h="40" inputType="textPassword"/>
                    </linear>
                    <linear>
                        <img w="30" h="30" src="@drawable/ic_https_black_48dp"/>
                        <input id="password2" hint="再次输入密码" w="*" h="40" inputType="textPassword"/>
                    </linear>
                    <linear gravity="center">
                        <horizontal>
                            <button id="login" w="250" h="*" text="立即注册" size="16" style="Widget.AppCompat.Button.Colored"/>
                        </horizontal>
                    </linear>
                </vertical>
            </vertical>
        </card>
        </vertical>
    );
    ui.emitter.on("back_pressed", e => {
        if (!kg2) {
            kg2 = true;
            denru();
            setTimeout(() => {
                kg2 = false;
            }, 1000);
            e.consumed = true;
        } else {
            e.consumed = false;
        };
    });
    ui.login.on("click", () => {
        threads.start(function() {
            if (!ui.name.text()) {
                toast("您还没有输入用户名!");
                return;
            }
            if (!ui.password.text() && !ui.password2.text()) {
                toast("还没有输入密码呢");
                return;
            }
            if (ui.password.text() !== ui.password2.text()) {
                toast("您输入的两次密码不一样");
            } else {
                var str = JSON.parse(http.get("https://api.apiopen.top/registerUser?apikey=d1cef6f3e25ab08f623bbb147f32bb5d&name=" + ui.name.text() + "&passwd=" + ui.password.text()).body.string());
                if (str.code !== 200) {
                    toast(str.message);
                } else {
                    dialogs.confirm("注册" + str.message, "您已经注册成为普通会员！\n您的户名为：" + ui.name.text() + "\n密码为：" + ui.password.text() + "\n是否马上去登入?", (a) => {
                        if (a) {
                            denru();
                        } else {
                            ui.finish();
                        }
                    })
                }
            }
        });
    });
    }
}
