//时间日期
var i = 0;
function myDate() {
    let date = new Date();
    let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let time = date.toTimeString().split(" GMT")[0];
    let weekd = date.toDateString().split(" ")[0];
    document.getElementById("datetime").innerHTML = time + "\t" + today + "\t" + weekd;
}
setInterval(myDate, 100);
//搜索引擎的选择
function changeEngine() {
    let engine_select;
    let eng = document.getElementById("engine_list").value;
    let kw;
    switch (eng) {
        case "bing":
            engine_select = "https://cn.bing.com/search?";
            kw = 'q';
            break;
        case "baidu":
            engine_select = "https://www.baidu.com/s?wd=%s%";
            kw = 'wd';
            break;
        case "bilibili":
            engine_select = "https://search.bilibili.com/all";
            kw = 'keyword';
            break;
        case "douyin":
            engine_select = "https://www.douyin.com/search/";
            kw = "";
            break;
        case "google":
            engine_select = "https://www.google.com/s?wd=%s%";
            break;
        case "Yandex":
            engine_select = "https://yandex.com/search/?text=%s%";
            kw = "text";
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


// //鼠标悬停打开选项卡
// function openCity(evt, cityName) {
//     // 声明所有变量
//    var i, tabcontent, tablinks;

//    // 获取所有带有 class="tabcontent" 的元素并隐藏它们
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//      tabcontent[i].style.display = "none";
//    }

//    // 获取所有带有 class="tablinks" 的元素并移除类 "active"
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//      tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }

//     // 显示当前选项卡，并在打开选项卡的链接中添加一个 "active" 类
//    document.getElementById(cityName).style.display = "block";
//    evt.currentTarget.className += " active";
// }


// 悬停&自动切换选项卡
var tablinks = document.getElementById("tab").getElementsByTagName("button");
var len = tablinks.length;

/*索引值  大小是从0-3*/
var current_index = 0;
/*计时器  每隔三秒执行一次autoChange函数*/
var timer = window.setInterval(autoChange, 6000);

/*为每个div添加鼠标事件*/
for (var i = 0; i < len; i++) {
    /*移入事件*/
    tablinks[i].onmouseover = function () {
        /*清除定时器*/
        clearInterval(timer);
        /*获取所有ul*/
        var tabcontent = document.getElementById("tab_con").getElementsByTagName("div");
        /*循环 先把所有ul和所有head_div设置为普通样式*/
        for (var j = 0; j < len; j++) {
            tablinks[j].className = tablinks[j].className.replace(" current", "");
            tabcontent[j].className = tabcontent[j].className.replace(" current", "");
            /*遇到当前鼠标指着的位置  设置其样式为变化样式*/
            if (tablinks[j] == this) {
                tablinks[j].className += " current";
                tabcontent[j].className += " current";
            }
        }
    }
    /*移出事件 恢复定时器  自动切换*/
    tablinks[i].onmouseout = function () {
        timer = setInterval(autoChange, 8000);
    }
}

function autoChange() {
    /*索引值自加*/
    ++current_index;
    /*如果索引大于导航个数（等于len也就是大于总个数） 清零*/
    if (current_index == len) {
        current_index = 0;
    }
    /*获取全部ul*/
    var tabcontent = document.getElementById("tab_con").getElementsByTagName("div");

    for (var i = 0; i < len; i++) {
        /*遍历 清除所有变化 都恢复为普通样式*/
        tabcontent[i].className = tabcontent[i].className.replace(" current", "");
        tablinks[i].className = tablinks[i].className.replace(" current", "");
        /*索引值代表当前位置 为当前位置设置变化*/
        if (tablinks[i] == tablinks[current_index]) {
            tablinks[i].className += " current";
            tabcontent[i].className += " current";
        }
    }
}

// 今日诗词API 需要引入外部js
jinrishici.load(function (result) {
    document.getElementById("poem_sentence").innerHTML = '「 ' + result.data.content + '」' + "———— " + result.data.origin.dynasty + "·" + result.data.origin.author + ' ⟪' + result.data.origin.title + '⟫';
});


