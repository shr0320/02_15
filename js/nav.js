;(function($){

    var obj = {
        init:function(){
            this.headerFn();            
        },
        headerFn:function(){
            var $mainBtn = $('#header .main-btn'); // #header 자손 반드시 필요
            var $sub  = $('#header .sub');//헤더영역 안에서의 .main-btn
            var $nav = $('#header #nav > ul');

            //네비게이션 이벤트                                  
            //GNB(메인메뉴) - 항상 전체 홈페이지에 노출되어있는 메뉴
            //LNB(서브메뉴) - 감추워진 메뉴 - 마우스 이벤트에 의해서 노출되는 메뉴
            //메인메뉴의 마우스 오버시(mouseenter 버튼 리스너이벤트(핸들러))
            //메인메뉴 바로 아래(next()) 해당 서브메뉴는 아래로 부드럽게 펼쳐진다.(slideDown(300) 메서드)
            //객체 배열처리 : 자바스크립트 forEach(); 메서드
            //객체 배열처리 : 제이쿼리는 each(); 메서드
            //$mainBtn 버튼 4개를 배열처리

        //$mainBtn.each(); 순서1
        //$mainBtn.each(function(){}); 순서2
        //$mainBtn.each(function(index){ //4개의 반복처리 순서3
        // console.log(index) //0 1 2 3
        //});
            //메인 메뉴 마우스 오버시 \

            $mainBtn.each(function(idx){
                // $mainBtn.eq(idx).on({
                $(this).on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $sub.stop().slideUp(100);
                        $(this).next().stop().slideDown(300);
                        $mainBtn.removeClass('on'); //모든 메인버튼 클래스 삭제
                        $(this).addClass('on'); //클래스 추가
                    }
                });

            });

            //마우스가 #nav 영역(선택자 영역)을 떠나면 (마우스 이벤트 : mouseleave)
            //모든 서브메뉴는 접힌다. (slideUp(300)) 선택자
            $nav.on({
                mouseleave:function(event){
                    event.preventDefault();
                    $sub.stop().slideUp(300);
                        $mainBtn.removeClass('on'); //모든 메인버튼 클래스 삭제
                     //모든 서브메뉴 접힘 
                   

                }
            });
            // $mainBtn.eq(0).on({
            //     mouseenter:function(event){
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100); //모든 서브메뉴 초기화(접는다)
            //         $(this).next().stop().slideDown(300); //해당 서브메뉴만 펼친다.
            //         // $('.sub').eq(0).slideDown(300);
            //     }
            // });

            // $mainBtn.eq(1).on({
            //     mouseenter:function(event){
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

            // $mainBtn.eq(2).on({
            //     mouseenter:function(event){
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

            // $mainBtn.eq(3).on({
            //     mouseenter:function(event){
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

        }
        
    };

    obj.init(); //객체 전체 실행


})(jQuery);