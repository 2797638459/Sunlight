$(function(){
	

$(function () {
        $(".barrager").barrager()
    });
    (function () {
        var Barrager = function (ele,options) {
            var defaults = {
                color:["#ff9999","#35d2f4","#9ee353","#9d77ff","#4785d9","#ff9333","#5bdea8","#51befc"],
                wrap:ele
            };
            this.settings = $.extend({},defaults,options||{});
            this._init();
            this.bindEven();
        };
        Barrager.prototype = {
            _init:function () {
                var item = $(this.settings.wrap).find("div");
                for(var i = 0;i<item.length;i++){
                    item.eq(i).css({
                        top:this.getReandomTop()+"px",
                        color:this.getReandomColor(),
                        fontSize:this.getReandomSize()+"px"
                    });
                    item.eq(i).css({
                        right:-item.eq(i).width()
                    })
                }
                this.randomTime(0);
            },
            bindEven:function () {
                var _this = this;
                $(".addBarrager .submit").on('click',function () {
                    _this._click(_this);
                });
            },
            getReandomColor:function () {
                var max = this.settings.color.length;
                var randomNum = Math.floor(Math.random()*max);
                return this.settings.color[randomNum];
            },
            getReandomTop:function () {
                var top = (Math.random()*450).toFixed(1);
                return top;
            },
            getReandomSize:function () {
                var size = (12+Math.random()*28);
                return size;
            },
            getReandomTime:function () {
                var time = Math.floor((8+Math.random()*10));
                return time*1000;
            },
            randomTime:function (n) {
                var obj = $(this.settings.wrap).find("div");
                var _this = this;
                var len = obj.length;
                if(n>=len){
                    n=0;
                }
                setTimeout(function () {
                    n++;
                    _this.randomTime(n)
                },1000);
                var item = obj.eq(n),_w = item.outerWidth(!0);
                item.animate({
                    left:-_w
                },_this.getReandomTime(),"linear",function () {
                    item.css({right:-_w,left:""});
                    _this.randomTime(n)
                });
            },
            _click:function (obj) {
                var _this = obj;
                var _val = $(".barVal");
                if(_val.val() == ""){
                    alert("请描述你对TA的印象！");
                    return false;
                }
                $(_this.settings.wrap).append("<div><span class='new'>"+_val.val()+"</span></div>");
                _this._init();
                _val.val("");
            }
        };
        $.fn.barrager = function (opt) {
            var bger = new Barrager(this,opt);
        }
    })(jQuery);
})