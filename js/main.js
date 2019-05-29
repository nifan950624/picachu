
!function () {
    var time = 50
    var id;
    var content = document.querySelector('#codeTag');
    var style = document.querySelector('#styleTag');
       
    $('.btns').on('click', 'button', function (e) {
        let $button = $(e.currentTarget);
        let speed = $button.attr('data')
        $($button).addClass('active')
            .siblings().removeClass('active')
        switch (speed) {
            case 'slow':
                time = 100;
                break;
            case 'normal': 
                time = 50;
                break;
            case 'fast':

                time = 0;
                break;
            case 'result':
                clearTimeout(id)
                content.innerHTML = code;
                style.innerHTML = code;
                content.scrollTop = content.scrollHeight;
                break;
        }
    })
  

    function writeCode(previous, code, fn) {
        let n = 0;
        id = setTimeout(function run() {
            n++
            content.innerHTML = previous + code.substring(0, n);
            content.scrollTop = content.scrollHeight;
            style.innerHTML = previous + code.substring(0, n);
            if (n <= code.length) {
                id = setTimeout(run, time)
            } else {
                fn && fn.call()
            }
        }, time)
    }


    var code = `
    /*
    *您好我将以代码的形式给您画一只皮卡丘*
            *首先我们先给皮卡丘皮肤*
    */  
     
    #picachu{
        background-color: rgb(255, 230, 0);
    }
    
    .wraper {
        max-width: 100%;
        height: 225px;
        box-sizing: border-box;
        position: relative;
        z-index: 0;
    }

    /*我们来开始画它的鼻子*/
    .nose {
        border: 14px solid transparent;
        border-top-color: black;
        border-radius: 40%;
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        top: 32px;
        transform: translateX(-50%)
    }

    /*下面要开始画眼睛了*/
    .eye {
        border: 2px black solid;
        width: 55px;
        height: 55px;
        background-color: rgb(46, 46, 46);
        position: absolute;
        border-radius: 50%;
    }

    /*这是它的眼珠*/
    .eye::after {
        content: '';
        border: black 3px solid;
        width: 23px;
        height: 23px;
        position: absolute;
        border-radius: 50%;
        background: white;
        left: 5px;
    }

    /*左眼在左边*/
    .eye.left {
        right: 50%;
        margin-right: 63px;
    }
    
    .eye.right {
        left: 50%;
        margin-left: 63px;
    }

    /*画它红色的小脸*/
    .face {
        border: 3px black solid;
        width: 75px;
        height: 75px;
        background-color: rgb(255, 0, 0);
        border-radius: 50%;
        position: absolute;
        top: 95px;
    }
    
    .face.left {
        right: 50%;
        margin-right: 97px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 97px;
    }
    
    /*画它的上嘴唇*/
    .upperlip {
        border: black 3px solid;
        position: absolute;
        width: 65px;
        height: 20px;
        top: 65px;
        background-color: rgb(255, 230, 0);
    }
    
    .upperlip.left {
        border-bottom-left-radius: 45px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-25deg);
        right: 50%;
    }
    
    .upperlip.right {
        border-bottom-right-radius: 45px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(25deg);
        left: 50%;
    }

    /*最后一步，画它的嘴巴*/
    .lowlip-hidden {
        z-index: -1;
        overflow: hidden;
        position: relative;
        width: 250px;
        height: 140px;
        top: 69px;    
    }
    
    .lowlip {
        overflow: hidden;
        border-radius: 150px/1700px;
        position: absolute;
        bottom: 0; 
        right: 50%;
        transform: translateX(50%);
        width: 100%;
        height: 30000px;
        border: solid 2px black;
        background-color: rgb(155, 0, 10);   
                   
    }
    
    .upperlip::after {
        content: '';
        height: 15px;
        width: 60px;
        position: absolute;
        background-color: rgb(255, 230, 0);
        bottom: 15px;
        left: 10px
    }
          
    .lowlip::before {
        content: '';
        position: absolute;
        height: 180px;
        width: 140px;
        left: 50%;
        transform: translateX(-50%);
        bottom: -70px;
        border-radius: 80%;
        background-color: rgb(255, 72, 95);
    } 

    /*
    *好了我画完了，是不是很可爱呀
    *希望您喜欢，谢谢观看
    */
    `
    writeCode('', code);
}.call()
