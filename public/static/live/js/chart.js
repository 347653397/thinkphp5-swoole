$(function () {
    var wsUrl = "ws://guo.eachfight.com:8812";

    var websocket = new WebSocket(wsUrl);


    //实例对象的onopen属性
    websocket.onopen = function (evt) {
        websocket.send("hello-sinwa");
        console.log("conected-swoole-success");
    }

    // 实例化 onmessage
    websocket.onmessage = function (evt) {
        push(evt.data)
        console.log("ws-server-return-data:" + evt.data);
    }

    //onclose
    websocket.onclose = function (evt) {
        console.log("close");
    }
    //onerror

    websocket.onerror = function (evt, e) {
        console.log("error:" + evt.data);
    }


    function push(result) {
        if (!isJSON(result)) return false;
        result = JSON.parse(result);

        var html = '<div class="comment"><span>' + result.user + '</span>' +
            '<span>' + result.content + '</span></div>';
        $('#comments').prepend(html);
    }

    function isJSON(str) {
        if (typeof str == 'string') {
            try {
                var obj = JSON.parse(str);
                if (str.indexOf('{') > -1) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                // console.log(e);
                return false;
            }
        }
        return false;
    }
})