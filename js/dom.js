/**
 * Created by shikokuyt on 2016/5/7 0007.
 */
(function (exports) {
    var $ = function (el) {
        return document.querySelector(el);
    };
    var $more = $('.more'); // 更多
    var $aside = $('.aside'); // 侧边栏
    var $add_out = $('.add-out'); // 添加ToDo
    var $add = $('.add');
    var $add_input = $('.add-input');
    var $qd = $('.queding');
    var $main = $('.main');
    var $start_time = $('.startTime');
    var timer = null;
    var $back = $('.back');
    var time = parseInt($start_time.getAttribute('data-time'));
    time *= 60;
    $back.addEventListener('click', function (event) {
        event.preventDefault();
        clearTimeout(timer);
    }, false);
    $main.addEventListener('click', function (event) {
        var target = event.target;
        if (target.className !== 'start') {
            return ;
        }
        loseTime(time);
    }, false);
    function loseTime(time) {
        timer = setTimeout(function () {
            var f = time / 60;
            var m = time % 60;
            if (f>1) {
                $start_time.innerHTML = f+'分'+m+'秒';
            } else {
                $start_time.innerHTML = time+'秒';
            }
            time --;
            if (time > 0) {
                loseTime(time);
            } else {
                $start_time.innerHTML = '结束';
                clearTimeout(timer);
            }
        }, 1000);
    }
    $more.addEventListener('click', function (event) {
        event.stopPropagation();
        this.style.transform = "rotate(-15deg)";
        $aside.style.left = '0';
    }, false);
    $add_out.addEventListener('click', function (event) {
        var _self = this;
        $add_input.style.display = 'none';
        setTimeout(function () {
            _self.style.display = 'none';
        }, 0)
    }, false);
    $qd.addEventListener('click', function (event) {
        $add_input.style.display = 'none';
        setTimeout(function () {
            $add_out.style.display = 'none';
        }, 0)
    }, false);
    $add.addEventListener('click', function (event) {
        $add_out.style.display = 'block';
        setTimeout(function () {
            $add_input.style.display = 'block';
        }, false);
    }, false);
    document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.className === 'aside') {
            return ;
        }
        $aside.style.left = '-85%';
        $more.style.transform = "rotate(0deg)";
    }, true);
})(typeof exports === 'object'?exports:window);