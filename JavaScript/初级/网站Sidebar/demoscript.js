(function () {
    var Menubar = function () {
        this.el = document.querySelector('#sidebar ul');
        this.state = 'allClosed';   //hasopened
        this.el.addEventListener('click',function (e) {
            e.stopPropagation();
        });
    };
    var self = this;
    this.currentOpendMenuContent = null;
    this.menuList = document.querySelectorAll('#sidebar ul');
    for (var i=0;i<this.menuList.length;i++){
        this.menuList[i].addEventListener('click',function (e) {
            var menuContentEl = document.getElementById(e.currentTarget.id+'-content');
            if (self.state === 'allClosed'){
                console.log('打开' + menuContentEl.id);
                self.state = "hasOpened";
                self.currentOpendMenuContent = menuContentEl;
            }else{
                console.log('关闭' + self.currentOpendMenuContent.id);
                console.log('打开' + menuContentEl.id);
                self.state = "hasOpened";
                self.currentOpendMenuContent = menuContentEl;
            }
        });
    }

    //如果不用大写字母开头的变量来定义构造函数，就不太容易区分构造函数与其他函数。
    var SideBar = function (eId, closeBarId) {
        this.state = 'opend';       //初始状态
        //如果不提供参数，则传入默认id
        this.el = document.getElementById(eId||'sidebar');
        this.closeBarEl = document.getElementById(closeBarId||'closeBar');
        var self = this;    //仍然指向构造函数
        this.menubar = new Menubar();       //将menubar作为属性传进来
        this.el.addEventListener('click',function () {
            if (event.target !== self.el){
                self.triggerSwitch();
            }
        },false);
    };
    SideBar.prototype.close = function () {
        console.log('关闭sidebar');
        this.state = 'closed';
    };
    SideBar.prototype.open = function () {
        console.log('打开sidebar');
        this.state = 'opened';
    };
    SideBar.prototype.triggerSwitch = function () {
        if (this.state === 'opened'){
            this.close();
        }else {
            this.open();
        }
    };
    var sidebar = new SideBar();

})();