"ui";
auto();
//是否按下音量下键
isKeyDown();
//测试用例
//SignIn("18227410387","13547296248tyty");

//创建两个txt文件，一个是账号一个是密码，一一对应
files.create("/sdcard/account.txt");
files.create("/sdcard/password.txt");
//本地键值对存储
var storage=storages.create("易班批量签到速率");
//账户签到信息
var accountSignInMessage=[];
//是否打开了签到同步动态
var isShareButton=false;
//是否打开了群聊冒泡
var isSendMessage=false;
//群聊名称 发送内容
var sendName="无";
var sendContent="无";
//先清除所有的本地数据，因为每次的默认值都是15s每次登陆
storage.clear();
storage.put("speed",15);
//这个是全局变量用来判断当前的线程是否已经完成，完成之后就开始执行下一个
var isOverNow=true;
//这个是界面的UI
interfaceUI();
     

function interfaceUI(){
    ui.layout(
        <frame>
          <vertical gravity="center">
              <horizontal>
                  <img src="http://sowcar.com/t6/698/1554895620x1822614218.jpg" w="*" h="200" scaleType="fitXY" />
              </horizontal>
              <horizontal>
                  <text text="基本设置" h="*" w="*" gravity="center" textSize="20dp" textColor="red"/>
              </horizontal>
              <horizontal>
                  <list id="accountList" layout_weight="1" gravity="center">
                        <vertical>
                            <text  textColor="black" w="*" h="*" textSize="15dp" text="{{this.title}}" gravity="center"  singleLine="true"/>
                        </vertical>
                  </list>
                  <list id="passwordList" layout_weight="1" gravity="center">
                        <vertical>
                            <text  textColor="black" w="*" h="*" textSize="15dp" text="{{this.title}}" gravity="center"  singleLine="true"/>
                        </vertical>
                  </list>
              </horizontal>
              
              <horizontal>
                <button id="addDeleteAccount" text="账户编辑" w="*" h="*" style="Widget.AppCompat.Button.Colored" gravity="center" />
              </horizontal>
              
              <horizontal>
                <button id="addDeletePassword" text="密码编辑" w="*" h="*" style="Widget.AppCompat.Button.Colored" gravity="center" />
              </horizontal>
              <horizontal>
                <input id="SignInSpeed" text="15" hint="签到速率（默认15s）" inputType="number" layout_weight="1"/>
                <text text="秒/登陆" />
                <button id="sureSpeed" text="更改速率"  h="*" style="Widget.AppCompat.Button.Colored" gravity="center" layout_weight="3"/>
              </horizontal>
              <horizontal>
                <text  text="签到同步动态" w="auto" h="auto" gravity="center" layout_weight="1" textSize="15sp"/>
                <Switch id="signInShare"  w="auto" h="auto"  layout_weight="3"/>
                <text  text="群聊冒泡" w="auto" h="auto" gravity="center" layout_weight="1" textSize="15sp"/>
                <Switch id="sendMessageButton"  w="auto" h="auto"  layout_weight="3"/>
              </horizontal>
              <horizontal>
                <text text="冒泡群名：" layout_weight="1" gravity="center"/>
                <input id="sendMessageObject"  hint="某某班级群"  layout_weight="1"/>
                <text text="冒泡内容：" layout_weight="1" gravity="center"/>
                <input id="sendMessage"  hint="大家早上好"  layout_weight="1"/>
              </horizontal>
              <horizontal>
                <button id="start" text="开始运行" w="*" h="*" style="Widget.AppCompat.Button.Colored" gravity="center" />
              </horizontal>
          </vertical> 
        </frame>
      );
    //增添的点击事件
    ui.addDeleteAccount.click(()=>{
        toast("可以增添账号啦!~~~");
        app.viewFile("/sdcard/account.txt");
    });
    ui.addDeletePassword.click(()=>{
        toast("可以增添密码啦!~~~");
        app.viewFile("/sdcard/password.txt");
    });
    ui.sureSpeed.click(()=>{
        alert("登陆速率是根据自身手机流畅度调节的，默认是15s/每次登陆签到，如果出现一次登陆签到还没结束就提示了下一次登录的话，建议调大数值，放缓频率，反之亦然！");
        if(ui.SignInSpeed.text()<=9){
            toast("修改失败，不允许修改至9s(包括)以下。");
            ui.SignInSpeed.setText("15");
        }else{
            storage.remove("speed");
            storage.put("speed",ui.SignInSpeed.text());
            toast("成功修改至:"+storage.get("speed"));
            ui.SignInSpeed.setText(storage.get("speed"));
        }
    });
    ui.signInShare.on("check", (checked) => {
        if (checked== false) {
            toast("签到同步动态已经关闭，亲~");
            isShareButton=false;
        } else {
            toast("签到同步动态已经打开，亲~");
            isShareButton=true;
        }
    });
    ui.sendMessageButton.on("check", (checked) => {
        if (checked== false) {
            toast("群聊冒泡已经关闭，亲~");
            isSendMessage=false;
        } else {
            toast("群聊冒泡已打开，速率重置，不允许修改至21s(包括)以下。");
            if(storage.get("speed")<=21){
                storage.remove("speed");
                storage.put("speed","22");
                ui.SignInSpeed.setText("22");
            } 
            isSendMessage=true;
        }
    });
    ui.start.click(()=>{
        //群聊冒泡名字与内容
        if(ui.sendMessageObject.text().length!=0&&ui.sendMessage.text().length!=0){
            sendName=ui.sendMessageObject.text();
            sendContent=ui.sendMessage.text();
        }
        var accountFile=open("/sdcard/account.txt","r");
        var passwordFile=open("/sdcard/password.txt","r");
        var count=1;
        var nullCount=0;
        //文件里面第一排必须排除
        //accountFile.readline();
        //passwordFile.readline();
        //var accountFileArray=[];
        //var passwordFileArray=[];
        app.launchApp("易班");
        toast(storage.get("speed")+"秒之后将正式开始运行！");
        setInterval(function(){    
            //或许这里可以有一个思路？还是按照原来的速度设置定时器，但是
            //每一次执行的时候就判断一下（全局变量），上一个做完了，在修改那个变量以便可以进行下一个？
            if(isOverNow){
                //修改状态
                isOverNow=false;
                //已经完成了上一个或者刚开始的时候就可以直接进来执行里面的东西
                var accountFileArray=accountFile.readline();
                var passwordFileArray=passwordFile.readline();
                log("第"+count+"个文件读取"+accountFileArray+" "+passwordFileArray);
                count++;//计数   
                if(accountFileArray==null){
                    nullCount++;
                    toast("批量签到完成了！");
                    if(nullCount==1){
                        //最后显示签到信息 
                        dialogs.build({
                            title: "签到情况",
                            content: accountSignInMessage.toString(),
                            positive: "知道了"
                        }).on("positive",()=>{
                            toast("正在自动退出脚本...");
                            engines.myEngine().forceStop();
                        }).show(); 
                    }
                }else{
                    toast("正在准备登录中，每一次登录签到约"+storage.get("speed")+"s~~~");
                    log("登录"+accountFileArray);
                    toast("登录"+accountFileArray);
                    SignIn(accountFileArray,passwordFileArray);
                }   
            }else{
                toast("当前的签到任务尚未完成，完成后将执行下一个任务！");
            }
            
        }, 1000*storage.get("speed")); 
               
    });
    
}
function SignIn(signInAccount,signInPassword){
    var t=threads.start(function(){ 
        //输入账号密码
        id("login_account_et").findOne().setText(signInAccount);
        id("login_password_et").findOne().setText(signInPassword);
        sleep(1000);
        //登录按钮
        id("login_btn").findOne().click();
        //等待前往主页面活动
        waitForActivity("com.yiban.app.activity.HomeActivity");
        sleep(1000);
        //去签到的页面
        id("page_home_discover_tab_btn").findOne().click()
        id("page_explore_chenckin_layout").findOne().click();
        sleep(1000);
        //判断是否有签到，签到了直接退出，没有签到就签到
        if(text("奖励已经拿过咯~").exists()){
            //已经签过到的页面
            toast(signInAccount+"已经签到过了!");
            accountSignInMessage.push(signInAccount+"已经签到过了!");
            sleep(1000);
            id("widget_custom_titlebar_back_btn").findOne().click();
            waitForActivity("com.yiban.app.activity.HomeActivity");
        }else if(text("下一步").exists()){
            //检测是否打开自动同步开关
            if(isShareButton){
                //如果打开了就直接勾选
                    id("sync_to_feed_check").clickable().find().click();
                    accountSignInMessage.push(signInAccount+"签到已经同步至动态!");
                    toast("已经勾选同步动态按钮，正在同步中...");
            }
            //没有签过到的页面
            sleep(1000);
            var t=className("android.widget.LinearLayout").clickable().find();
            //默认选择第二个答案
            t[2].click();
            toast(signInAccount+"签到完成了哦！");
            accountSignInMessage.push(signInAccount+"签到完成了哦!");
            sleep(1000);
            text("下一步").findOne().click();
            sleep(1000);
            id("positiveButton").findOne().click();
            waitForActivity("com.yiban.app.activity.HomeActivity");
        }else{
            toast("签到失败，未检索到");
            accountSignInMessage.push(signInAccount+"签到失败，未检索到");
            sleep(1000);
            id("widget_custom_titlebar_back_btn").findOne().click();
            waitForActivity("com.yiban.app.activity.HomeActivity");
        }
        if(isSendMessage){
            //如果打开了群聊冒泡的开关
            toast("正在准备群聊冒泡...");
            id("page_home_contacts_tab_btn").clickable().find().click();
            sleep(1000);
            id("l_groupchat").clickable().find().click();
            waitForActivity("com.yiban.app.activity.GroupMergeActivity");
            sleep(1000)
            if(text(sendName).exists()){
                toast("发现群聊:"+sendName+"!");
                sleep(1000);
                //本身返回的不是集合，还要找子控件集合
                var t=className("android.widget.TextView").text(sendName).findOne().bounds();
                click(t.centerX(),t.centerY());
                waitForActivity("com.yiban.app.activity.ChatActivity");
                toast("已经打开群聊，准备冒泡...");
                sleep(1000);
                id("page_chat_message_et").findOne().setText(sendContent);
                sleep(1000);
                id("page_chat_message_send_btn").findOne().click();
                toast("账号"+signInAccount+"发送"+sendContent+"在"+sendName);
                accountSignInMessage.push("账号"+signInAccount+"发送"+sendContent+"在"+sendName);
                id("widget_custom_titlebar_back_btn").findOne().click();
                waitForActivity("com.yiban.app.activity.GroupMergeActivity");
            }else{
                toast("未检索到群聊！");
                accountSignInMessage.push("账号"+signInAccount+"未检索到"+sendName);
            }
            sleep(1000);
            id("widget_custom_titlebar_back_btn").findOne().click();
            waitForActivity("com.yiban.app.activity.HomeActivity");
        }
        //退出当前账号
        id("widget_custom_head").findOne().click();
        waitForActivity("com.yiban.app.activity.UserInfoPageActivity");
        sleep(1000);
        id("r_setting").findOne().click();
        waitForActivity("com.yiban.app.activity.SettingMainActivity");
        sleep(1000);
        text("退出账号").findOne().click();
        sleep(1000);
        id("positiveButton").findOne().click();
        waitForActivity("com.yiban.app.activity.LoginNew2Activity");
        toast(signInAccount+"正常退出并正在销毁线程...");
        accountSignInMessage.push("账号"+signInAccount+"正常销毁线程！");
        //是否完成当前线程
        isOverNow=true;
        t.interrupt();
       
    });
}

function isKeyDown(){

    //监听音量下键是否按下，退出脚本
    threads.start(function(){
        events.setKeyInterceptionEnabled("volume_down",true);
        //监听按键
        events.observeKey();
        events.onKeyDown("volume_down", function(event){
            toast("已关闭易班批量签到脚本！");
            engines.myEngine().forceStop();
        });
    });
}
