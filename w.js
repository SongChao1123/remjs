/**
 * rem自适应脚本
 */
(function(){
    // 动态设置html字体大小
    var psdWidth = 1080; //效果图宽度
    var psdFont = 100; //效果图下对应的html字体大小
    var fixRoot = function(){
        document.documentElement.style.fontSize = window.innerWidth / psdWidth * psdFont + 'px';
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