/**
 * rem自适应脚本
 */
(function(){
    // 动态设置html字体大小
    var psdWidth = 1080; //效果图宽度
    var psdHeight = 1620; //效果图单屏高度,单屏效果时用到
    var psdFont = 100; //效果图下对应的html字体大小
    var fixRoot = function(){
        var target = Math.min(window.innerWidth / psdWidth, window.innerHeight / psdHeight);
        document.documentElement.style.fontSize = target * psdFont + 'px';
    };
    fixRoot();
    document.addEventListener("DOMContentLoaded", function() {
        fixRoot();
    }, false);
    window.addEventListener('resize', function(){
        fixRoot();
    }, false);
    window.addEventListener('load', function() {
    fixRoot();
    }, false);
})();