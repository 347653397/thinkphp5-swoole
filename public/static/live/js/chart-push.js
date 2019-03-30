$(function () {
    $('#discuss-box').keydown(function (event) {
        if (event.keyCode == 13) {
            var text = $(this).val();
            var url = "http://guo.eachfight.com:8811?s=index/chart/index";
            var data = {'content': text, 'game_id': 1};
            $.post(url, data, function (result) {
                console.log(result);
                // if (result.status == 1) {
                //     var html = '<div class="comment"><span>' + result.data.user + '</span>' +
                //         '<span>' + result.data.content + '</span></div>';
                //     $('#comments').prepend(html);
                // }
                $(this).val('');
            }, 'json')
        }
    })

})