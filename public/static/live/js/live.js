
$(function () {
    var wsUrl = "ws://guo.eachfight.com:8811";

    var websocket = new WebSocket(wsUrl);

    //实例对象的onopen属性
    websocket.onopen = function(evt) {
        websocket.send("hello-sinwa");
        console.log("conected-swoole-success");
    }


    // 实例化 onmessage
    websocket.onmessage = function(evt) {
        pushLive(evt.data)
        console.log("ws-server-return-data:" + evt.data);
    }

    //onclose
    websocket.onclose = function(evt) {
        console.log("close");
    }
    //onerror

    websocket.onerror = function(evt, e) {
        console.log("error:" + evt.data);
    }


    function pushLive(data) {
        if(!isJSON(data)) return false
        data = JSON.parse(data);
        var html = '<div class="frame"><h3 class="frame-header">';
        html +='<i class="icon iconfont icon-shijian"></i>第一节 10：30</h3>';
        html +='<div class="frame-item">';
        html += '<span class="frame-dot"></span>';
        html += '<div class="frame-item-author">';
        html += '<img src="./imgs/team1.png" width="20px" height="20px" /> 马刺';
        html += "</div>";
        html += '<p>'+data.content+'</p>';
        html += '</div>';

        $('#match-result').prepend(html);

    }

    function isJSON(str) {
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(str.indexOf('{')>-1){
                    return true;
                }else{
                    return false;
                }
            } catch(e) {
                // console.log(e);
                return false;
            }
        }
        return false;
    }
})