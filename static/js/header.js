	$(document).ready(function(){
        var $header = $("#header");
        var $gnb = $("#gnb");
        var $gnb_li = $("#gnb").children("li");
        var speed = 500;

        var ht_arr = []; //빈 배열 생성
        var ht_max = 0; //초기화
        var ht_header = $header.height();
        var bgColor = $("#gnb>li>ul>li>a").css("background-color");

        getSubMaxHeight();

        //header 영역 마우스오버, 아웃 이벤트
        $gnb.on("mouseenter", openSub);
        $gnb.on("mouseleave", closeSub);

        //1depth 활성화 유지
        $gnb_li.on("mouseenter", function () {
            $(this).children("a").addClass("on");
        });
        $gnb_li.on("mouseleave", function () {
            $(this).children("a").removeClass("on");
        });

        //포커스 이벤트
        $gnb_li.children("a").on("focusin", openSub);
        $gnb_li.last().find("a").last().on("focusout", closeSub);


        function getSubMaxHeight() {
            $gnb_li.each(function (i) {
                var current_ht = $(this).children('ul').height();
                ht_max = Math.max(ht_max, current_ht);
                //ht_arr.push( $(this).children('ul').height() );
                //ht_max = Math.max(ht_max, ht_arr[i]);	
            });
        }

        function openSub() {

            //bgGnb 없으면 0=false
            var isBgGnb = $(".bgGnb").length;

            if (!isBgGnb) {
                $header.prepend(
                    $("<div class='bgGnb'>").css({
                        position: "absolute",
                        top: ht_header, left: 0,
                        width: "100%", height: ht_max,
                        backgroundColor: bgColor,
                        display: "none"
                    })
                );
            }

            $gnb.find("ul").stop().slideDown(speed);
            $(".bgGnb").stop().slideDown(speed);
        }

        function closeSub() {
            $gnb.find("ul").stop().slideUp(speed - 300);
            $(".bgGnb").stop().slideUp(speed - 300, function () {
                $(this).remove();
            });
        }
	});