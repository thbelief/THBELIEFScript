"ui";
auto();
//是否按下音量下键
isKeyDown();
mainUI();

function mainUI(){
    ui.layout(
        <frame>
            <vertical gravity="center">
                <text gravity="center"  text="设备信息" textSize="30sp" textColor="#000000"/>      
                <text gravity="center" id="Width" text="" textSize="15sp" textColor="#000000"/>      
                <text gravity="center" id="Height" text="" textSize="15sp" textColor="#000000"/>  
                <text gravity="center" id="BuildId" text="" textSize="15sp" textColor="#000000"/>   
                <text gravity="center" id="Broad" text="" textSize="15sp" textColor="#000000"/>  
                <text gravity="center" id="Brand" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Device" text="" textSize="15sp" textColor="#000000"/>    
                <text gravity="center" id="Model" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Product" text="" textSize="15sp" textColor="#000000"/>
                <text gravity="center" id="Bootloader" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Hardware" text="" textSize="15sp" textColor="#000000"/>     
                <text gravity="center" id="Fingerprint" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Serial" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="SdkInt" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Incremental" text="" textSize="15sp" textColor="#000000"/>
                <text gravity="center" id="Release" text="" textSize="15sp" textColor="#000000"/>  
                <text gravity="center" id="BaseOS" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="SecurityPatch" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="Codename" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="GetAndroidId" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="GetMacAddress" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="GetTotalMem" text="" textSize="15sp" textColor="#000000"/> 
                <text gravity="center" id="GetAvailMem" text="" textSize="15sp" textColor="#000000"/> 
            </vertical>
        </frame>
    );
    ui.Width.setText("设备宽度： "+device.width);
    ui.Height.setText("设备高度： "+device.height);
    ui.BuildId.setText("修订版本号： "+device.buildId);
    ui.Broad.setText("主板型号： "+device.broad);
    ui.Brand.setText("厂商品牌： "+device.brand);
    ui.Device.setText("工业设计名称： "+device.device);
    ui.Model.setText("设备型号： "+device.model);
    ui.Product.setText("整个产品名称： "+device.product);
    ui.Bootloader.setText("Bootloader版本： "+device.bootloader);
    ui.Hardware.setText("硬件名称： "+device.hardware);
    ui.Fingerprint.setText("唯一标识码： "+device.fingerprint);
    ui.Serial.setText("硬件序列号： "+device.serial);
    ui.SdkInt.setText("AndroidAPI版本： "+device.sdkInt);
    ui.Incremental.setText("Incremental： "+device.incremental);
    ui.Release.setText("Android系统版本号： "+device.release);
    ui.BaseOS.setText("BaseOS： "+device.baseOS);
    ui.SecurityPatch.setText("安全补丁程序级别： "+device.securityPatch);
    ui.Codename.setText("开发代号： "+device.codename);
    ui.GetAndroidId.setText("AndroidId： "+device.getAndroidId());
    ui.GetMacAddress.setText("Mac地址： "+device.getMacAddress());
    ui.GetTotalMem.setText("内存总量： "+device.getTotalMem());
    ui.GetAvailMem.setText("当前可用内存： "+device.getAvailMem());
}
function isKeyDown(){
    //监听音量下键是否按下，退出脚本
    threads.start(function(){
        events.setKeyInterceptionEnabled("volume_down",true);
        //监听按键
        events.observeKey();
        events.onKeyDown("volume_down", function(event){
            toast("已关闭设备信息脚本！");
            engines.myEngine().forceStop();
        });
    });
}
