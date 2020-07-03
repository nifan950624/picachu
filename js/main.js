(function () {
  var code = `
    /*
    *这将以代码的形式画一只皮卡丘*
    *首先我们先给皮卡丘皮肤*
    */  
    .pikaqiu {
      width: 100vw;
      flex: 0 0 310px;
      background: #ffe000;
    }
       
    /*下面要开始画眼睛了*/  
    .eye {
      position: absolute;
      top: 20px;
      width: 60px;
      height: 60px;
      background: #2e2e2e;
      border: 2px solid #000;
      border-radius: 50%;
    }
    
    /*这是它的眼珠*/
    .eye::after {
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      margin-left: 8px;
      background: #FFF;
      border: 2px solid #000;
      border-radius: 50%;
    }
    
    /*左眼在左边*/
    .eye-left {
      left: 70px;
    }
    
    /*右眼在右边*/
    .eye-right {
      right: 70px;
    }
    
    /*我们来开始画它的鼻子*/
    .nose {
      position: absolute;
      left: 50%;
      top: 50px;
      transform: translateX(-50%);
      width: 0;
      border-top: 20px solid #000;
      border-bottom: none;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
    
    /*画它的嘴巴*/
    .upperLip {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      z-index: 1;
    }

    .upperLip::before {
      content: '';
      display: block;
      width: 80px;
      height: 20px;
      transform: rotate(-20deg);
      background: #ffe000;
      border: 3px solid #000;
      border-top: none;
      border-right: none;
      border-bottom-left-radius: 76% 96%;
    }

    .upperLip::after {
      content: '';
      display: block;
      width: 80px;
      height: 20px;
      transform: rotate(20deg);
      background: #ffe000;
      border: 3px solid #000;
      border-top: none;
      border-left: none;
      border-bottom-right-radius: 76% 96%;
    }

    .lowerLip {
      position: absolute;
      left: 50%;
      top: 88px;
      transform: translateX(-50%);
      width: 124px;
      height: 150px;
      background: #9d0512;
      border: 2px solid #000;
      border-top: none;
      border-bottom-left-radius: 62px 150px;
      border-bottom-right-radius: 62px 150px;
      overflow: hidden;
    }

    .lowerLip:after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      width: 166px;
      height: 166px;
      margin: 22px auto 0;
      transform: translateX(-50%);
      background: #fc4653;
      border-radius: 50%;
    }
    
    /*画它红色的小脸*/
    .face {
      position: absolute;
      bottom: 20px;
      width: 80px;
      height: 80px;
      background: #fb0d1c;
      border: 2px solid #000;
      border-radius: 50%;
    }

    .face-left {
      left: 10px;
    }

    .face-right {
      right: 10px;
    }
    
    /*
    *好了我画完了，是不是很可爱呀
    *希望您喜欢，谢谢观看
    */
    `
  var time = 50
  var timer = null
  var content = document.querySelector('#codeTag')
  var style = document.querySelector('#styleTag')
  var isReload = false
  var lastSpeed = 'normal'

  $('.btns').on('click', 'button', function (e) {
    var $button = $(e.currentTarget);
    var speed = $button.attr('data')

    if (lastSpeed === speed) {
      return false
    }

    lastSpeed = speed
    $($button).addClass('active')
        .siblings().removeClass('active')

    if (isReload) {
      $(content).children().remove()
      $(style).children().remove()

      writeCode('', code, () => {
        isReload = true
      })
      isReload = false
    }

    switch (speed) {
      case 'slow':
        time = 120
        break
      case 'normal':
        time = 60
        break
      case 'fast':
        time = 0
        break
      case 'result':
        clearTimeout(timer)
        content.innerHTML = Prism.highlight(
            code,
            Prism.languages.css,
            "css"
        )
        content.scrollTop = content.scrollHeight
        style.innerHTML = code
        isReload = true
        break
    }
  })

  function writeCode(previous, code, fn) {
    var n = 0
    var reg = /[\s\n]/

    timer = setTimeout(function run() {

      n++
      while (reg.test(code[n])) {
        n++
      }
      content.innerHTML = Prism.highlight(
          previous + code.substring(0, n),
          Prism.languages.css,
          "css"
      )
      style.innerHTML = previous + code.substring(0, n)
      content.scrollTop = content.scrollHeight
      if (n <= code.length) {
        timer = setTimeout(run, time)
      } else {
        fn && fn.call()
      }
    }, time)
  }

  writeCode('', code, () => isReload = true)

  // Rainbow.color(code, {
  //   language: 'css',
  //   globalClass: 'animate'
  // });
})()
