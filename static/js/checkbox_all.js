$(document).ready(function () {
    function chekced(obj) { //체크하기
        obj.parentNode.querySelector('input').checked = true;
    }
    function unChekced(obj) { //체크해제
        obj.parentNode.querySelector('input').checked = false;
    }


    const filter01 = document.querySelectorAll('.filter01'); // 체크버튼
    const filterAll = document.querySelector('.all'); // 'all' 체크버튼

    filter01.forEach(function (el) {
        el.addEventListener('click', function (e) {
            if (e.target == filterAll) {
                if (e.target.parentNode.querySelector('input').checked !== true) {
                    filter01.forEach(function (obj) {
                        chekced(obj); //모두체크
                    })
                } else {
                    filter01.forEach(function (obj) {
                        unChekced(obj); //모두해제
                    })
                }
            } else {
                if (e.target.parentNode.querySelector('input').checked !== true) {
                    chekced(e.target);
                    const checked = document.querySelectorAll('.filter_wrap input:checked');
                    if (filter01.length - 1 == checked.length) { //모두 체크되어있다면 all도 체크
                        chekced(filterAll);
                    }

                } else {
                    unChekced(e.target);
                    unChekced(filterAll); //한개라도 체크 안되면 all버튼 체크 해제
                }
            }



        })
    })

});
