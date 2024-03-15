
//时间日期
var i=0;
function myDate(){
    let date = new Date();
    let today = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    let time = date.toTimeString().split(" GMT")[0];
    let weekd = date.toDateString().split(" ")[0];
    document.getElementById("datetime").innerHTML= time+"\t"+today + "\t" + weekd;
}
setInterval(myDate,500);
//搜索引擎的选择
function changeEngine() {
    let engine_select ;
    let eng = document.getElementById("engine_list").value;
    let kw ;
    switch(eng){
        case "bing" :
            engine_select = "https://cn.bing.com/search?";
            kw = 'q';
            break;
        case "baidu" :
            engine_select = "https://www.baidu.com/s?wd=%s%";
            kw = 'wd';
            break;
        case "bilibili":
            engine_select = "https://search.bilibili.com/all";
            kw = 'keyword';
            break;
        case "douyin":
            engine_select = "https://www.douyin.com/search/";
            kw="";
            break;
        case "google" :
            engine_select = "https://www.google.com/s?wd=%s%";
            break;
        case "Yandex" :
            engine_select = "https://yandex.com/search/?text=%s%";
            kw ="text";
            break;
        case "fsoufsou":
            engine_select = "https://fsoufsou.com/search?";
            kw = 'q';
            break;
        case "tbox":
            engine_select = "https://www.tboxn.com/";
            kw = 's';
            break;
        case "gitee":
            engine_select = "https://search.gitee.com/";
            kw = 'q';
            break;
    }
    document.getElementById('engine').action = engine_select;
    document.getElementById('searchenter').name = kw;
}


// warframe  辅助函数
// wiki 引擎本地调用
function action_wiki(){
    let in_wiki = document.getElementById("wiki_in").value;
    tmp = "https://warframe.huijiwiki.com/index.php?profile=default&search=" + in_wiki;
    console.log(tmp)
    document.getElementById('action_wiki').action = tmp;
}

// 时间戳  转  时分秒
function ms_day(t){
    var t_s,t_m,t_h;
    t_m = parseInt(t/60);t_s = t % 60;
    t_h = parseInt(t_m/60); t_m = t_m % 60;
    return t_h.toString().padStart(2,'0')+":"+t_m.toString().padStart(2,'0')+":"+t_s.toString().padStart(2,'0');
}

// 夜灵平原
function state_Plains_Eidolon(){
    const tmp_date = parseInt(Date.parse('20 Dec 2023 14:30:00')/1000);
    var now = parseInt(Date.now()/1000);
    tmp = now - tmp_date
    f = parseInt(tmp/3000)%3;
    var flag,lasttime ;
    if (f == 0){
        flag = 'night';
        lasttime = ms_day(3000-tmp%3000)  
    }
    else if(f == 1){
        flag = ' day ';
        lasttime = ms_day(6000-tmp%3000)     
    }
    else if(f == 2){
        flag = ' day ';
        lasttime = ms_day(3000-tmp%3000)     
    }
    document.getElementById("wfstate_Plains_Eidolon").innerHTML= "#夜灵平原状态# "+"|"+flag+"| "+lasttime+"|";
}
setInterval(state_Plains_Eidolon,400);
// 奥布山谷
function state_orb_vallis(){
    const tmp_date = parseInt(Date.parse('2023-12-21 12:13:20')/1000);
    var now = parseInt(Date.now()/1000);
    tmp = now - tmp_date
    f = parseInt(tmp/400)%4;
    var flag,lasttime ;
    if (f == 0){
        flag = 'warm ';
        lasttime = ms_day(400-tmp%400)  
    }
    else if(f == 1){
        flag = 'cold ';
        lasttime = ms_day(1200-tmp%400)     
    }
    else if(f == 2){
        flag = 'cold ';
        lasttime = ms_day(800-tmp%400)     
    }
    else if(f == 3){
        flag = 'cold ';
        lasttime = ms_day(400-tmp%400)     
    }
    document.getElementById("wfstate_orb_vallis").innerHTML= "#奥布山谷状态# "+"|"+flag+" | "+lasttime+"|";
}
setInterval(state_orb_vallis,400);

// 魔胎之境
function state_cambion_drift(){
    const tmp_date = parseInt(Date.parse('2023-12-20 14:30:00')/1000);
    var now = parseInt(Date.now()/1000);
    tmp = now - tmp_date
    f = parseInt(tmp/3000)%3;
    var flag,lasttime ;
    if (f == 0){
        flag = 'vome ';
        lasttime = ms_day(3000-tmp%3000)  
    }
    else if(f == 1){
        flag = 'fass ';
        lasttime = ms_day(6000-tmp%3000)     
    }
    else if(f == 2){
        flag = 'fass ';
        lasttime = ms_day(3000-tmp%3000)     
    }
    document.getElementById("wfstate_cambion_drift").innerHTML= "#魔胎之境状态# "+"|"+flag+" | "+lasttime+"|";
}
setInterval(state_cambion_drift,400);

// JOSN获取   需要解决跨域问题
//JSONP
url: "http://content.warframe.com/dynamic/worldState.php"
function jsonp_world_state(response){
    alert(`You get the data : ${response}`)
}
const script = document.createElement('script')
script.src = 'http://content.warframe.com/dynamic/worldState.phpcallback=jsonp_world_state'
document.body.insertBefore(script, document.body.firstChild)