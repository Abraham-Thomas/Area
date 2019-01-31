(function () {
    //如果不用大写字母开头的变量来定义构造函数，就不太容易区分构造函数与其他函数。
    var SideBar = function (eId, closeBarId) {
        this.state = 'opend';       //初始状态
        //如果不提供参数，则传入默认id
        this.el = document.getElementById(eId||'sidebar');
        this.closeBarEl = document.getElementById(closeBarId||'closeBar');
        this.el.addEventListener('click',function () {
            if (event.target !== this.el){
                this.triggerSwitch();
            }
        },false);
    };
    SideBar.prototype.close = function () {
        
    };
    SideBar.prototype.open = function () {

    };
    SideBar.prototype.open = function () {
        if (this.state === 'opend'){
            this.close();
        }else {
            this.open();
        }
    }
})();