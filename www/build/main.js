webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_preferences__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Services



var LoginPage = (function () {
    function LoginPage(loginService, userService, alertCtrl, navCtrl, appPreferences, navParams) {
        this.loginService = loginService;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.appPreferences = appPreferences;
        this.navParams = navParams;
        this.user = {
            name: '',
            pwd: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var body = 'data=' + JSON.stringify({
            usuario: this.user.name,
            contrasena: this.user.pwd,
            idRegistration: '' + this.userService.getIdRegistration()
        });
        this.loginService.login(body).subscribe(function (data) {
            if (data.token) {
                // console.log(data)
                _this.appPreferences.remove('user');
                _this.appPreferences.store("user", data);
                _this.userService.addUserData(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Usuario o contraseña invalidos',
                    buttons: ['Volver']
                });
                alert_1.present();
                return;
            }
        });
        // this.navCtrl.setRoot(HomePage)
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/login/login.html"*/'<ion-content padding>\n  <div padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n        <img src="assets/img/interfresa.svg"/>\n        <div>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-person" md="md-person" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Usuario</ion-label>\n            <ion-input type="text" [(ngModel)]="user.name" class="input-color"></ion-input>\n          </ion-item>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-lock" md="md-lock" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.pwd" class="input-color"></ion-input>\n          </ion-item>\n        </div>\n        <div padding-top>\n          <div align="center" padding-top>\n            <button ion-button large block class="button-interfresa" (click)="login()">Iniciar Sesión</button>\n          </div>\n          <!-- <div align="center" padding-top>\n            <button ion-button outline large block color="light" (click)="register()">Registrarse</button>\n          </div> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_preferences__["a" /* AppPreferences */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wysiwyg_wysiwyg__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Providers




// import { AppPreferences } from '@ionic-native/app-preferences';
var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, platform, newsService, userService, alertCtrl, toastCtrl, events, menu, navParams, sanitizer, 
        // private appPreferences: AppPreferences,
        http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.newsService = newsService;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menu = menu;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.show_search = false;
        this.edit_id = undefined;
        this.selection = "no_leidas";
        platform.ready().then(function () {
            _this.loadingCtrl = undefined;
            _this.loadingCtrl = loadingCtrl;
            _this.userData = _this.userService.getData();
            console.log(_this.userData);
            _this.selectedItem = navParams.get('item');
            _this.noticias = [];
            _this.categoria = (_this.navParams.get("id")) ? _this.navParams.get("id") : undefined;
            if (_this.categoria == undefined) {
                _this.title = "Inicio";
            }
            else {
                _this.title = "Categoria - " + _this.navParams.get('name');
            }
            _this.getNewsSimple(0, _this.categoria);
        });
        /*this.appPreferences.fetch('user').then((res)=>{
          // this.userService.addUserData(data);
          // this.navCtrl.setRoot(HomePage);
  
          if((typeof res) == "object"){
  
          }else{
            this.userService.deleteData()
            this.appPreferences.remove('user')
            this.navCtrl.setRoot(HomePage)
          }
  
        })*/
        // let loader = this.loadingCtrl.create({
        //   content:"Obteniendo noticias desde el servidor por favor espere",
        //   duration:3000
        // })
        // loader.present();
    }
    HomePage.prototype.itemTapped = function (event, noticia) {
        if (this.edit_id == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_detail__["a" /* DetailPage */], {
                id: noticia.id
            });
        }
    };
    HomePage.prototype.getNewsSimple = function (limit, category) {
        var _this = this;
        var vistas = (this.selection == "no_leidas") ? 0 : 1;
        this.newsService.getNewsSimple(limit, category, vistas).subscribe(function (data) {
            // this.loader.dismiss()
            if (data) {
                _this.noticias = undefined;
                _this.noticias = [];
                console.log("Con data", data);
                console.log("Noticias", _this.noticias);
                for (var i = 0; i < data.length; i++) {
                    // console.log(this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers"+data[i].cover.replace("mague1","%2F15").replace("mague2","?alt=").replace("mague3","&token="))['changingThisBreaksApplicationSecurity'].replace('covers/','covers%2F'))
                    _this.noticias.push({
                        id: data[i].id,
                        title: data[i].title,
                        body: data[i].body,
                        cover: _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data[i].cover.replace("mague1", "%2F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F'),
                        autor: data[i].autor,
                        date: data[i].date,
                        tags: data[i].tags
                    });
                }
            }
            else {
                console.log("No data");
                _this.noticias = null;
                _this.noticias = undefined;
                _this.noticias = [];
            }
        });
    };
    HomePage.prototype.getNews = function (limit, category, infiniteScroll) {
        var _this = this;
        var vistas = (this.selection == "no_leidas") ? 0 : 1;
        this.loader = this.loadingCtrl.create({
            content: "Obteniendo noticias desde el servidor por favor espere"
        });
        this.loader.present();
        this.newsService.getNews(limit, category, vistas).subscribe(function (data) {
            if (data) {
                if (data.length == 0) {
                    _this.loader.dismiss();
                    infiniteScroll.complete();
                }
                else {
                    _this.loader.dismiss();
                    // "id":,"title","body","date":,"autor","premium","cover"}
                    for (var i = 0; i < data.length; i++) {
                        _this.noticias.push({
                            id: data[i].id,
                            title: data[i].title,
                            body: data[i].body,
                            cover: _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data[i].cover.replace("mague1", "%252F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F'),
                            autor: data[i].autor,
                            date: data[i].date,
                            tags: data[i].tags
                        });
                        if (i == data.length - 1) {
                            infiniteScroll.complete();
                        }
                    }
                }
                // this.userService.addUserData(data.data);
                //alert(JSON.stringify(this.userService.getData()));
            }
            else {
                _this.loader.dismiss();
                infiniteScroll.complete();
            }
        });
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Obteniendo noticias desde el servidor por favor espere",
            duration: 3000
        });
        loader.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.userData = this.userService.getData();
        this.events.subscribe('menu:opened', function () {
        });
        this.events.subscribe('menu:closed', function () {
        });
        //alert(JSON.stringify(this.userData));
    };
    HomePage.prototype.refresh = function () {
        this.noticias = [];
        this.categoria = (this.navParams.get("id")) ? this.navParams.get("id") : undefined;
        this.getNewsSimple(0, this.categoria);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("volvio");
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.getNews(this.noticias.length, this.categoria, infiniteScroll);
    };
    HomePage.prototype.searchToggle = function () {
        if (this.show_search) {
            this.show_search = false;
        }
        else {
            this.show_search = true;
        }
    };
    HomePage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.noticias = this.noticias.filter(function (noticia) {
                if (noticia.title.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return noticia;
                }
                else {
                    console.log("No hay coincidencias");
                }
            });
        }
    };
    HomePage.prototype.edit = function (id) {
        this.edit_id = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wysiwyg_wysiwyg__["a" /* WysiwygPage */], {
            id: id,
            edit: true
        });
        this.edit_id = undefined;
    };
    HomePage.prototype.trash = function (id) {
        var _this = this;
        this.edit_id = id;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Esta seguro de eliminar la noticia?',
            buttons: [
                {
                    text: 'Confirmar',
                    icon: 'trash',
                    handler: function () {
                        _this.newsService.trash(_this.edit_id).subscribe(function (data) {
                            _this.edit_id = undefined;
                            console.log(data);
                            if (data.success == "") {
                                _this.noticias = [];
                                _this.categoria = (_this.navParams.get("id")) ? _this.navParams.get("id") : undefined;
                                _this.getNewsSimple(0, _this.categoria);
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Error al elinar la noticia',
                                    duration: 3000
                                });
                                toast.present();
                            }
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.edit_id = undefined;
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.changeTab = function (val) {
        if (val == 0) {
            this.selection = "no_leidas";
            this.noticias = null;
            this.noticias = undefined;
            this.noticias = [];
            this.categoria = (this.navParams.get("id")) ? this.navParams.get("id") : undefined;
            if (this.categoria == undefined) {
                this.title = "Inicio";
            }
            else {
                this.title = "Categoria - " + this.navParams.get('name');
            }
            this.getNewsSimple(0, this.categoria);
        }
        else {
            this.selection = "leidas";
            this.noticias = null;
            this.noticias = undefined;
            this.noticias = [];
            this.categoria = (this.navParams.get("id")) ? this.navParams.get("id") : undefined;
            if (this.categoria == undefined) {
                this.title = "Inicio";
            }
            else {
                this.title = "Categoria - " + this.navParams.get('name');
            }
            this.getNewsSimple(0, this.categoria);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Inicio</ion-title>\n    <ion-buttons end>\n      <!--<button ion-button style="color:white;font-size: 2em" (click)="searchToggle()">\n            <ion-icon ios="ios-search" md="md-search"></ion-icon>\n          </button>-->\n      <button ion-button style="color:white;font-size: 2em" (click)="refresh()">\n            <ion-icon ios="ios-refresh" md="md-refresh"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="selection" color="light" class="segmentbg" [hidden]="userData.user.userdata.admin == 2 ">\n    <ion-segment-button value="no_leidas" (tap)="changeTab(0)">\n      NO LEIDOS\n    </ion-segment-button>\n    <ion-segment-button value="leidas" (tap)="changeTab(1)">\n      LEIDOS\n    </ion-segment-button>\n\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-tabs>\n      <ion-tab [root]="tab1Root" tabTitle="NO LEIDOS"></ion-tab>\n      <ion-tab [root]="tab2Root" tabTitle="LEIDOS"></ion-tab>\n    </ion-tabs> -->\n    <ion-list [hidden]="noticias.length == 0" [virtualScroll]="noticias" bufferRatio="10" approxItemHeight="120px">\n      <ion-item  *virtualItem="let noticia" style="background: none;">\n        <ion-grid>\n          <ion-row style="background: #f7e3e4">\n            <ion-col col-4 (tap)="itemTapped($event,noticia)">\n              <ion-avatar>\n                <img [src]="noticia.cover" />\n                <!-- <ion-img src="../assets/img/cover.png"></ion-img> -->\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-8 class="flex">\n              <div (tap)="itemTapped($event,noticia)">\n                <h1>\n                  {{noticia.title}}\n                </h1>\n                <p style="color:#ff4286">{{noticia.tags}}</p>\n                <ion-row>\n                  <ion-col col-6 class="rose">\n                      {{noticia.autor}}\n                  </ion-col>\n                  <ion-col col-6 class="rose">\n                      {{noticia.date}}\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <h2>{{noticia.autor}}</h2>\n              <div>\n              <time>{{noticia.date}}</time>\n              </div> -->\n              <ion-row [hidden]="userData.user.userdata.admin != 1">\n                <ion-col col-6>\n                  <button ion-button clear (tap)="edit(noticia.id)">Editar</button> \n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button clear (tap)="trash(noticia.id)">Eliminar</button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <div style="background: none;height: 1em"></div>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, newsService, userService, events, http, toastCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsService = newsService;
        this.userService = userService;
        this.events = events;
        this.sanitizer = sanitizer;
        this.comment = "";
        // alert(JSON.stringify(this.navParams.get("noticia")))
        this.http = http;
        this.userData = this.userService.getData();
        this.user_name = this.userData.user.userdata.usuario;
        this.toastCtrl = toastCtrl;
        this.noticia = {
            id: 0,
            title: '',
            body: '',
            cover: '',
            autor: '',
            date: '',
            tags: ''
        };
        this.comments = [];
        var id = this.navParams.get("id");
        this.newsService.get(id).subscribe(function (data) {
            if (data) {
                _this.noticia.id = data.id;
                _this.noticia.title = data.title;
                _this.noticia.body = data.body.replace("covers/", "covers%2F").replace("magueitoramp;", "&");
                _this.noticia.cover = _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data.cover.replace("mague1", "%252F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F');
                _this.noticia.autor = data.autor;
                _this.noticia.date = data.date;
                _this.noticia.tags = data.tags;
                // console.log(this.noticia.body)
                _this.events.publish('comment:new', '');
            }
        });
    }
    //// "host":"http://ondesarrollo.com/proyectos/appinterfresa/"
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getComments(this.noticia.id);
        this.events.subscribe('comment:new', function () {
            _this.getComments(_this.noticia.id);
        });
    };
    DetailPage.prototype.addFav = function () {
        var _this = this;
        var body = 'data=' + JSON.stringify({
            id: this.noticia.id
        });
        this.newsService.addFav(body).subscribe(function (data) {
            if (data) {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 2000
                });
                toast.present();
                _this.events.publish('comment:new', '');
            }
        });
    };
    DetailPage.prototype.addComment = function () {
        var _this = this;
        var privilege = this.userData.user.userdata.admin;
        if (privilege == 1 || privilege == 3) {
            var body = 'data=' + JSON.stringify({
                noticia: this.noticia.id,
                comentario: this.comment
            });
            if (this.comment.length > 0) {
                this.newsService.addComment(body).subscribe(function (data) {
                    if (data) {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 2000
                        });
                        toast.present();
                        console.log(data);
                        if (data.status == "ok") {
                            _this.comment = "";
                            _this.events.publish('comment:new', '');
                        }
                    }
                });
            }
        }
    };
    DetailPage.prototype.getComments = function (id) {
        var _this = this;
        this.comments = [];
        this.newsService.comments(id).subscribe(function (data) {
            var news_comments = new Array();
            data.forEach(function (comment) {
                news_comments.push({
                    id: comment.id,
                    comentario: comment.comentario,
                    usuario: comment.usuario,
                    date: comment.date,
                    subcomentarios: comment.subcomentarios
                });
            });
            _this.comments = news_comments;
        });
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/detail/detail.html"*/'<ion-header>\n\n  <ion-navbar id="my-navbar">\n     <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title style="text-align: center">{{noticia.title}}</ion-title>\n    <ion-buttons right style="min-width: 44px">\n      <!--<button ion-button icon-only (tap)="addFav()"><ion-icon name="star"></ion-icon></button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-card>\n\n      <ion-item style="text-align:justify">\n          <div>\n              <span style="font-weight:bold;color:#ff4286">{{noticia.tags}}</span> | <time style="color:#979797">{{noticia.date}}</time> \n          </div>\n\n        <h1 style="font-weight:bold">{{noticia.title}}</h1>\n        \n            \n      </ion-item>\n          <!-- <img src="../assets/img/cover.png" /> -->\n          <img [src]=noticia.cover/>\n      <ion-card-content>\n        <div [innerHTML]="noticia.body" style="text-aling:justify" style="text-align: justify;"></div>\n        <legend></legend>\n        <div>\n          <h3 style="font-weight:bold;color:#979797;display:inline">Autor: {{noticia.autor}}</h3>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <ion-list [hidden]="userData.user.userdata.admin == 2 ">\n    <ion-item> \n      <ion-label floating>Comentar</ion-label>\n      <ion-input type="text" [(ngModel)]="comment"></ion-input>\n    </ion-item>\n    <ion-item> \n      <ion-buttons>\n          <button ion-button royal block (tap)="addComment()">\n            <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n            Comentar\n          </button>\n      </ion-buttons> \n    </ion-item>\n  </ion-list>\n  <ion-list>  \n    <ion-list-header>Comentarios</ion-list-header>\n    <ion-item *ngIf="comments.length == 0">\n      No hay comentarios\n    </ion-item>\n    <ion-item *ngFor="let c of comments">\n      <ion-row>\n        <ion-col>\n          <ion-item>      \n            <ion-avatar item-start>\n                <img src="assets/img/user.jpg">\n            </ion-avatar>\n            <h2 *ngIf="c.usuario == user_name">Yo</h2>\n            <h2 *ngIf="c.usuario != user_name">{{c.usuario}}</h2>\n            <p style="white-space: initial">{{c.comentario}}</p>\n            <ion-note>\n              {{c.date | date:\'medium\' }}\n              <!-- {{c | JSON}} -->\n            </ion-note>\n          </ion-item>\n          <ion-row style="padding-left:2em">\n            <ion-col>\n              <ion-item *ngFor="let sub_comment of c.subcomentarios">\n                  <ion-avatar item-start>\n                    <img src="assets/img/user.jpg">\n                  </ion-avatar>\n                  <h2 *ngIf="sub_comment.username == user_name">Yo</h2>\n                  <h2 *ngIf="sub_comment.username != user_name">{{sub_comment.username}}</h2>\n                  <p style="white-space: initial">{{sub_comment.contenido}}</p>\n                  <ion-note>\n                    {{sub_comment.date | date:\'medium\' }}\n                  </ion-note>\n                  \n                </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WysiwygPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_windowref__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fontsize_fontsize__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__font_family_font_family__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__paragraph_format_paragraph_format__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__align_format_align_format__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rezise_image_rezise_image__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__link_link__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_video__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__categories_categories__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sections_add_sections_add__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//plugins





var WysiwygPage = (function () {
    function WysiwygPage(windowRef, newsService, actionSheetCtrl, modalCtrl, navCtrl, popoverCtrl, loadingCtrl, toastCtrl, navParams, sanitizer, camera, transfer, _zone, file, keyboard, platform) {
        var _this = this;
        this.newsService = newsService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.camera = camera;
        this.transfer = transfer;
        this._zone = _zone;
        this.file = file;
        this.keyboard = keyboard;
        this.imageChosen = 0;
        this.notice_id = undefined;
        this.change_cover = false;
        platform.ready().then(function () {
            _this._window = windowRef.nativeWindow;
            _this.editor = document.getElementById('editor');
            _this.keyboard.show();
            _this.cover_view = '';
            _this.notice_id = _this.navParams.get("id");
            if (_this.notice_id != undefined) {
                _this.notice = {
                    title: '',
                    body: '',
                    categories: [],
                    sections: [],
                    privileges: [],
                    publicationDate: new Date(),
                    cover: ''
                };
                _this.newsService.get(_this.notice_id).subscribe(function (data) {
                    if (data) {
                        console.log(data.publicationDate);
                        _this.notice_id = data.id;
                        _this.notice.title = data.title;
                        _this.notice.sections = [{
                                title: data.seccion,
                                checked: true
                            }];
                        _this.notice.publicationDate = data.publicationDate;
                        _this.notice.body = data.body.replace("covers/", "covers%2F").replace("magueitoramp;", "&");
                        _this.notice.cover = _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data.cover.replace("mague1", "%252F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F');
                        document.getElementById("editor").innerHTML = data.body.replace("covers/", "covers%2F").replace("magueitoramp;", "&");
                        // console.log(data)
                        _this.notice.privileges = data.privilegios.split(",");
                        var tags = data.tags.split(",");
                        for (var index = 0; index < tags.length; index++) {
                            _this.notice.categories.push({
                                title: tags[index].trim(),
                                checked: true
                            });
                        }
                        _this.cover_view = _this.notice.cover;
                        _this.imageChosen = 1;
                    }
                });
            }
            else {
                _this.notice = {
                    title: '',
                    body: '',
                    categories: [{ "title": "Huelva", checked: true }],
                    sections: [{ "title": "Noticias", checked: true }],
                    privileges: ["1", "3"],
                    publicationDate: new Date(),
                    cover: ''
                };
            }
        });
    }
    WysiwygPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad WysiwygPage');
        document.getElementById("editor").focus();
    };
    WysiwygPage.prototype.bold = function (command) {
        document.execCommand(command, false, null);
    };
    WysiwygPage.prototype.link = function () {
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__link_link__["a" /* LinkPage */]);
        var selectedElement = this._window.getSelection();
        var first = this._window.getSelection().anchorOffset;
        var range;
        // alert(typeof this._window.getSelection().getRangeAt(0))
        if (this._window.getSelection().getRangeAt(0)) {
            range = this._window.getSelection().getRangeAt(0);
            var text_1 = this._window.getSelection().toString();
            // alert(text)
            var ev = {
                target: {
                    getBoundingClientRect: this.toPosition('link')
                }
            };
            popover.present();
            popover.onDidDismiss(function (link) {
                if (link.length > 0) {
                    range.deleteContents();
                    var element = document.createElement("a");
                    element.href = link;
                    element.innerHTML = text_1;
                    // alert(element.toString())
                    range.insertNode(element);
                }
            });
        }
    };
    WysiwygPage.prototype.insertVideo = function () {
        var self = this;
        //this.keyboard.close()
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__video_video__["a" /* VideoPage */]);
        var selectedElement = this._window.getSelection();
        var first = this._window.getSelection().anchorOffset;
        var range;
        // alert(typeof this._window.getSelection().getRangeAt(0))
        if (this._window.getSelection().getRangeAt(0)) {
            range = this._window.getSelection().getRangeAt(0);
            var text = this._window.getSelection().toString();
            // alert(text)
            var ev = {
                target: {
                    getBoundingClientRect: this.toPosition('insertVideo')
                }
            };
            popover.present();
            popover.onDidDismiss(function (link) {
                if (link.length > 0) {
                    range.deleteContents();
                    var element = document.createElement("iframe");
                    element.src = link;
                    element["frameborder"] = 0;
                    element["allowfullscreen"] = true;
                    // element.innerHTML = text;
                    // alert(element.toString())
                    range.insertNode(element);
                }
            });
        }
    };
    WysiwygPage.prototype.fontSizePopover = function () {
        var _this = this;
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__fontsize_fontsize__["a" /* FontsizePage */]);
        var selectedElement = this._window.getSelection();
        var range;
        var ev = {
            target: {
                getBoundingClientRect: this.toPosition('fontSize')
            }
        };
        popover.present({ ev: ev });
        popover.onDidDismiss(function (data) {
            if (selectedElement.focusNode != null) {
                range = _this._window.getSelection().getRangeAt(0);
                var text = _this._window.getSelection().toString();
                var formatblock = (selectedElement.anchorNode.parentNode.nodeName == "DIV") ? 'p' : (selectedElement.anchorNode.parentNode.nodeName);
                //document.execCommand('formatblock', false, formatblock);
                var element = document.createElement(formatblock);
                element.innerText = text;
                //let selectedElementEdit = selectedElement.focusNode.parentNode;
                element['style'].fontSize = data + 'px';
                range.deleteContents();
                range.insertNode(element);
            }
        });
    };
    WysiwygPage.prototype.fontFamilyPopover = function () {
        var _this = this;
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__font_family_font_family__["a" /* FontFamilyPage */]);
        var selectedElement = this._window.getSelection();
        var range;
        var ev = {
            target: {
                getBoundingClientRect: this.toPosition('fontFamily')
            }
        };
        popover.present();
        popover.onDidDismiss(function (data) {
            if (_this._window.getSelection().focusNode != null) {
                if (selectedElement.focusNode != null) {
                    range = _this._window.getSelection().getRangeAt(0);
                    var formatblock = (selectedElement.anchorNode.parentNode.nodeName == "DIV") ? 'p' : (selectedElement.anchorNode.parentNode.nodeName);
                    var element = selectedElement;
                    //element.innerHTML = selectedElement.anchorNode.parentElement.innerHTML
                    //let selectedElementEdit = selectedElement.focusNode.parentNode;
                    element.anchorNode.parentNode['style'].fontFamily = data;
                    //range.deleteContents()
                    //range.insertNode(element.anchorNode)
                }
                //document.execCommand('formatblock', false, formatblock);
                //let element = document.createElement(formatblock)
            }
        });
    };
    WysiwygPage.prototype.paragraphFormatPopover = function () {
        var _this = this;
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__paragraph_format_paragraph_format__["a" /* ParagraphFormatPage */]);
        var selectedElement = this._window.getSelection();
        var range;
        var ev = {
            target: {
                getBoundingClientRect: this.toPosition('paragraphFormat')
            }
        };
        popover.present({ ev: ev });
        popover.onDidDismiss(function (data) {
            if (selectedElement.focusNode != null) {
                //document.execCommand('formatblock', false, data);
                if (selectedElement.focusNode != null) {
                    range = _this._window.getSelection().getRangeAt(0);
                    var formatblock = (selectedElement.anchorNode.parentNode.nodeName == "DIV") ? 'p' : (selectedElement.anchorNode.parentNode.nodeName);
                    var element = selectedElement;
                    //element.innerHTML = selectedElement.anchorNode.parentElement.innerHTML
                    //let selectedElementEdit = selectedElement.focusNode.parentNode;
                    if (data == "H1") {
                        element.anchorNode.parentNode['style']["font-size"] = "2em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "H2") {
                        element.anchorNode.parentNode['style']["font-size"] = "1.5em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "H3") {
                        element.anchorNode.parentNode['style']["font-size"] = "1.17em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "H4") {
                        element.anchorNode.parentNode['style']["font-size"] = "1em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "H5") {
                        element.anchorNode.parentNode['style']["font-size"] = "0.83em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "H6") {
                        element.anchorNode.parentNode['style']["font-size"] = "0.67em";
                        element.anchorNode.parentNode['style']["font-weight"] = "bold";
                    }
                    else if (data == "pre") {
                        element.anchorNode.parentNode['style']["white-space"] = "pre";
                        element.anchorNode.parentNode['style']["font-family"] = "monospace";
                        element.anchorNode.parentNode['style']["font-weight"] = "normal";
                    }
                    else {
                        element.anchorNode.parentNode['style']["white-space"] = "";
                        element.anchorNode.parentNode['style']["font-family"] = "";
                        element.anchorNode.parentNode['style']["font-size"] = "1em";
                        element.anchorNode.parentNode['style']["font-weight"] = "normal";
                    }
                    //range.deleteContents()
                    //range.insertNode(element.anchorNode)
                }
            }
        });
    };
    WysiwygPage.prototype.alignPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__align_format_align_format__["a" /* AlignFormatPage */]);
        var ev = {
            target: {
                getBoundingClientRect: this.toPosition('align')
            }
        };
        popover.present();
        var selectedElement = this._window.getSelection();
        popover.onDidDismiss(function (align) {
            if (selectedElement.focusNode != null) {
                // let formatblock = (selectedElement.anchorNode.parentNode.nodeName == "DIV")?'p':(selectedElement.anchorNode.parentNode.nodeName);
                // document.execCommand('formatblock', false, formatblock);
                var selectedElementEdit = selectedElement.focusNode.parentNode;
                selectedElementEdit['style'].textAlign = align;
            }
        });
    };
    WysiwygPage.prototype.align = function (align) {
        var selectedElement = this._window.getSelection();
        // console.log(selectedElement.anchorNode.parentNode)
        // a.anchorNode.parentNode.innerText
        if (selectedElement.anchorNode.parentNode.nodeName == "SPAN") {
            var oldElement = void 0;
            oldElement = selectedElement.anchorNode.parentElement;
            oldElement.replaceWith(oldElement.innerText);
        }
        ;
        var selectedElementEdit = selectedElement.focusNode.parentNode;
        selectedElementEdit['style'].textAlign = align;
        // document.execCommand('formatblock', false, align)
    };
    WysiwygPage.prototype.setCategories = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__categories_categories__["a" /* CategoriesPage */], {
            categories: this.notice.categories
        });
        modal.onDidDismiss(function (categories) {
            _this.notice.categories = categories;
        });
        modal.present();
    };
    WysiwygPage.prototype.setSections = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__sections_add_sections_add__["a" /* SectionsAddPage */], {
            sections: this.notice.sections
        });
        modal.onDidDismiss(function (sections) {
            console.log("Seccion resultado:", sections);
            _this.notice.sections = sections;
        });
        modal.present();
    };
    WysiwygPage.prototype.getImage = function () {
        // const options: CameraOptions = {
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        this.keyboard.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__rezise_image_rezise_image__["a" /* ReziseImagePage */]);
        var selectedElement = this._window.getSelection();
        var first = this._window.getSelection().anchorOffset;
        var range = undefined;
        if (this._window.getSelection().getRangeAt(0)) {
            range = this._window.getSelection().getRangeAt(0);
            var element = document.createElement("img");
            // element.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
            // range.insertNode(element)
            modal.onDidDismiss(function (img) {
                if (img != null && img.length > 0) {
                    var storageRef = __WEBPACK_IMPORTED_MODULE_17_firebase___default.a.storage().ref();
                    var filename = Math.floor(Date.now() / 1000);
                    var imageRef = storageRef.child("covers/" + filename + ".jpg");
                    var base64 = "data:image/jpeg;base64," + img;
                    imageRef.putString(base64, __WEBPACK_IMPORTED_MODULE_17_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
                        var image_url = snapshot.downloadURL;
                        var image_url2 = image_url.split("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers")[1];
                        image_url2 = image_url2.replace("%252F", "mague1").replace("?alt=", "mague2").replace("&token=", "mague3");
                        var element = document.createElement("img");
                        element.setAttribute("src", image_url);
                        range.insertNode(element);
                    }, function (error) {
                        console.log("Errorcito: ", error);
                    });
                }
            });
            modal.present();
        }
    };
    WysiwygPage.prototype.insertOrderedList = function () {
        document.execCommand("insertOrderedList", false, null);
    };
    WysiwygPage.prototype.insertUnorderedList = function () {
        document.execCommand("insertUnorderedList", false, null);
    };
    WysiwygPage.prototype.indent = function () {
        document.execCommand("indent", false, null);
    };
    WysiwygPage.prototype.outdent = function () {
        document.execCommand("outdent", false, null);
    };
    WysiwygPage.prototype.redo = function () {
        document.execCommand("redo", false, null);
    };
    WysiwygPage.prototype.undo = function () {
        document.execCommand("undo", false, null);
    };
    WysiwygPage.prototype.strikeThrough = function () {
        document.execCommand("strikeThrough", false, null);
    };
    //utils
    WysiwygPage.prototype.toPosition = function (element) {
        return function () {
            return {
                top: document.getElementById('' + element).getBoundingClientRect().top,
                left: document.getElementById('' + element).getBoundingClientRect().left
            };
        };
    };
    WysiwygPage.prototype.add = function () {
        // this.notice.body = document.getElementById("editor").innerHTML
        var _this = this;
        // console.log(body)
        var ulti_categories = [];
        var _loop_1 = function () {
            ulti_categories.push(this_1.notice.categories[index].title);
            if (index == (this_1.notice.categories.length - 1)) {
                var final_notice = void 0;
                var body = void 0;
                final_notice = {
                    title: this_1.notice.title,
                    categories: ulti_categories,
                    section: this_1.notice.sections[0].title,
                    privileges: this_1.notice.privileges,
                    cover: this_1.notice.cover,
                    update: (this_1.notice_id != undefined) ? true : false,
                    publicationDate: this_1.notice.publicationDate,
                    id_notice: (this_1.notice_id != undefined) ? this_1.notice_id : ''
                };
                body = document.getElementById("editor").innerHTML.replace("&", "magueitor");
                var loader_1 = this_1.loadingCtrl.create({
                    content: "Publicando noticia por favor espere"
                });
                loader_1.present();
                this_1.newsService.add(this_1.sanitizer.bypassSecurityTrustHtml('data=' + JSON.stringify(final_notice) + "&body=" + body)['changingThisBreaksApplicationSecurity']).subscribe(function (data) {
                    // console.log(JSON.stringify(data))
                    if (data.success) {
                        _this.notice = {
                            title: '',
                            body: '',
                            categories: [],
                            sections: [],
                            cover: '',
                            publicationDate: null,
                            privileges: []
                        };
                        document.getElementById("editor").innerHTML = '';
                        loader_1.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: data.success,
                            duration: 2000
                        });
                        toast.present();
                        _this.navCtrl.pop();
                    }
                    else if (data.error) {
                        loader_1.dismiss();
                    }
                }, function (error) {
                    console.log(error);
                    loader_1.dismiss();
                });
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.notice.categories.length; index++) {
            _loop_1();
        }
    };
    WysiwygPage.prototype.getContent = function (event) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        this.notice.body = this.sanitizer.bypassSecurityTrustHtml(event.target.innerHTML)['changingThisBreaksApplicationSecurity'];
        // this.notice.body = this.sanitizer.bypassSecurityTrustHtml(event.target.innerHTML.replace(/[&<>"']/g, function(m) { return map[m]; }))['changingThisBreaksApplicationSecurity']
        // console.log(this.notice.body)
    };
    WysiwygPage.prototype.chooseImageCover = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imgUrl) {
            _this.change_cover = true;
            _this.cover_view = "data:image/jpeg;base64," + imgUrl;
            _this.cover_view = _this.sanitizer.bypassSecurityTrustUrl(_this.cover_view);
            _this.base64Image = "data:image/jpeg;base64," + imgUrl;
            _this.notice.cover = imgUrl;
            _this.imageChosen = 1;
            /*this.file.copyFile(sourceDirectory, sourceFileName, cordova.file.externalApplicationStorageDirectory, sourceFileName).then((result: any) => {
              this._zone.runOutsideAngular(() => {
                this._zone.run(() => {
                  this.imagePath = imgUrl;
                  // alert(this.imagePath)
                });
              })
      
              this.imageChosen = 1;
              this.imageNewPath = result.nativeURL;
              // alert(JSON.stringify(result))
            }, (err) => {
              alert(JSON.stringify(err));
            })*/
        }, function (err) {
            //alert(JSON.stringify(err))
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Elija una imagen',
            buttons: [
                {
                    text: 'Galeria',
                    icon: 'albums',
                    handler: function () {
                        _this.actionHandler(1);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        //actionSheet.present();
    };
    WysiwygPage.prototype.actionHandler = function (selection) {
        var options;
        if (selection == 1) {
            console.log("Opcion 1");
            options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: false,
                encodingType: this.camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: false
            };
        }
        else {
            options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: this.camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: false
            };
        }
        //document.getElementById("title").focus()
        setTimeout(function () {
            var _this = this;
            this.camera.getPicture(options).then(function (imgUrl) {
                _this.change_cover = true;
                _this.cover_view = "data:image/jpeg;base64," + imgUrl;
                _this.cover_view = _this.sanitizer.bypassSecurityTrustUrl(_this.cover_view);
                _this.base64Image = "data:image/jpeg;base64," + imgUrl;
                _this.notice.cover = imgUrl;
                _this.imageChosen = 1;
                /*this.file.copyFile(sourceDirectory, sourceFileName, cordova.file.externalApplicationStorageDirectory, sourceFileName).then((result: any) => {
                  this._zone.runOutsideAngular(() => {
                    this._zone.run(() => {
                      this.imagePath = imgUrl;
                      // alert(this.imagePath)
                    });
                  })
          
                  this.imageChosen = 1;
                  this.imageNewPath = result.nativeURL;
                  // alert(JSON.stringify(result))
                }, (err) => {
                  alert(JSON.stringify(err));
                })*/
            }, function (err) {
                //alert(JSON.stringify(err))
            });
        }, 0);
    };
    WysiwygPage.prototype.upload = function () {
        var _this = this;
        if (this.notice.title.length < 1) {
            var popover = this.toastCtrl.create({
                message: "Titulo requerido",
                duration: 3000
            });
            popover.present();
            return;
        }
        if (this.notice.cover.length < 1) {
            var popover = this.toastCtrl.create({
                message: "Imagen de portada requerida",
                duration: 3000
            });
            popover.present();
            return;
        }
        if (document.getElementById("editor").innerHTML.trim().length < 1) {
            var popover = this.toastCtrl.create({
                message: "Contenido requerido",
                duration: 3000
            });
            popover.present();
            return;
        }
        if (this.notice.categories.length < 1) {
            var popover = this.toastCtrl.create({
                message: "Al menos una categoria requerida",
                duration: 3000
            });
            popover.present();
            return;
        }
        if (this.notice.privileges.length < 1) {
            var popover = this.toastCtrl.create({
                message: "Al menos tipo de usuario requerido",
                duration: 3000
            });
            popover.present();
            return;
        }
        // console.log("Paso")
        if (this.change_cover == false) {
            // console.log(this.notice.cover)
            this.notice.cover = this.notice.cover.split("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers")[0];
            this.notice.cover = this.notice.cover.replace("%252F", "mague1").replace("?alt=", "mague2").replace("&token=", "mague3");
            this.add();
        }
        else {
            var storageRef = __WEBPACK_IMPORTED_MODULE_17_firebase___default.a.storage().ref();
            var filename = Math.floor(Date.now() / 1000);
            var imageRef = storageRef.child("covers/" + filename + ".jpg");
            imageRef.putString(this.base64Image, __WEBPACK_IMPORTED_MODULE_17_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
                _this.notice.cover = snapshot.downloadURL;
                _this.notice.cover = _this.notice.cover.split("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers")[1];
                _this.notice.cover = _this.notice.cover.replace("%252F", "mague1").replace("?alt=", "mague2").replace("&token=", "mague3");
                _this.add();
            }, function (error) {
                console.log("Errorcito: ", error);
            });
        }
    };
    return WysiwygPage;
}());
WysiwygPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wysiwyg',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/wysiwyg/wysiwyg.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n     <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title style="text-align: center">Interfresa</ion-title>\n    <ion-buttons right style="min-width: 44px">\n      <!-- <button ion-button icon-only (tap)="addFav()"><ion-icon name="star"></ion-icon></button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid id="wysiwyg">\n    <ion-row class="">\n      <ion-item style="padding:0 ">\n        <ion-label floating style="margin-left: 1em;color: black;">Titulo</ion-label>\n        <ion-input type="text" required style="margin-left: 2em" [(ngModel)]="notice.title" id="title"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <button ion-button block icon-only block (tap)="chooseImageCover()" color="dark">\n          <ion-icon name="add"></ion-icon> Imagen de portada\n        </button>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-card>\n        <ion-card-header>\n          <div class="uploadWrap" ngif="imageChosen == 0">\n            <ion-icon name="cloud-upload"></ion-icon>\n          </div>\n          <div class="img-preview" *ngIf="imageChosen == 1">\n            <img [src]="cover_view"/>\n          </div>\n        </ion-card-header>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <button ion-button block icon-only block style="padding: 0 1em" (tap)="setSections()">\n          <i class="fa fa-tags fa-2x" style="margin-right: 1em"></i> Agregar sección\n        </button>\n      </ion-item>\n    </ion-row>\n    <!-- Categorias -->\n    <ion-row>\n      <ion-chip *ngFor="let section of notice.sections">\n        <ion-label>{{section.title}}</ion-label>\n      </ion-chip>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <button ion-button block icon-only block style="padding: 0 1em" (tap)="setCategories()">\n          <i class="fa fa-tags fa-2x" style="margin-right: 1em"></i> Agregar categorias\n        </button>\n      </ion-item>\n    </ion-row>\n    <!-- Categorias -->\n    <ion-row>\n      <ion-chip *ngFor="let category of notice.categories">\n          <ion-label>{{category.title}}</ion-label>\n        </ion-chip>\n    </ion-row>\n    <ion-row class="" id="bar-tools">\n      <ion-buttons>\n        <button ion-button icon-only style="min-width: 4em" (tap)="bold(\'bold\')">\n          <i class="fa fa-bold fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="bold(\'italic\')">\n          <i class="fa fa-italic fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="bold(\'underline\')">\n          <i class="fa fa-underline fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="fontSizePopover()" id="fontSize">\n          <i class="fa fa-text-height fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="fontFamilyPopover()" id="fontFamily">\n          <i class="fa fa-font fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="paragraphFormatPopover()" id="paragraphFormat">\n          <i class="fa fa-paragraph fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="align(\'left\')">\n          <i class="fa fa-align-left fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="align(\'center\')">\n          <i class="fa fa-align-center fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="align(\'right\')">\n          <i class="fa fa-align-right fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="align(\'justify\')">\n          <i class="fa fa-align-justify fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="insertOrderedList()">\n          <i class="fa fa-list-ol fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="insertUnorderedList()">\n          <i class="fa fa-list-ul fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="outdent()">\n          <i class="fa fa-outdent fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="indent()">\n          <i class="fa fa-indent fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="link()" id="link">\n          <i class="fa fa-link fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="getImage()">\n          <i class="fa fa-image fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="insertVideo()" id="insertVideo">\n          <i class="fa fa-video-camera fa-2x" style="color:black"></i>\n        </button>\n        <!-- <button ion-button icon-only style="min-width: 4em" (tap)="undo()">\n          <i class="fa fa-rotate-left fa-2x" style="color:black"></i>\n        </button>\n        <button ion-button icon-only style="min-width: 4em" (tap)="redo()">\n          <i class="fa fa-rotate-right fa-2x" style="color:black"></i>\n        </button> -->\n        <!-- <button ion-button icon-only style="min-width: 4em">\n          <i class="fa fa-code fa-2x" style="color:black"></i>\n        </button> -->\n      </ion-buttons>\n    </ion-row>\n    <ion-row class="">\n      <ion-item style="padding:0 ">\n        <ion-label style="margin-left: 1em">Contenido</ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item style="padding:0 ">\n        <div class="fr-element fr-view" dir="auto" contenteditable="true" aria-disabled="false" spellcheck="true" id="editor" style="width: 100%;height: 40vh;max-height: 40vh" (blur)="getContent($event)">\n        </div>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label>Fecha de publicación</ion-label>\n        <ion-datetime displayFormat="D MMMM YYYY" pickerFormat="D MMMM YYYY" [(ngModel)]="notice.publicationDate"></ion-datetime>\n      </ion-item>          \n    </ion-row>\n    <ion-row>\n      <ion-list style="width: 100%">\n        <ion-item>\n          <ion-label>Quienes pueden verla?</ion-label>\n          <ion-select multiple okText="Aceptar" cancelText="Cancelar" required [(ngModel)]="notice.privileges">\n            <ion-option value="1">Administradores</ion-option>\n            <ion-option value="2">Invitados</ion-option>\n            <ion-option value="3">Usuarios</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <button ion-button block (tap)="upload()">\n    Publicar\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/wysiwyg/wysiwyg.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_windowref__["a" /* WindowRefService */],
        __WEBPACK_IMPORTED_MODULE_5__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], WysiwygPage);

//# sourceMappingURL=wysiwyg.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(events) {
        this.events = events;
        this.userData = undefined;
    }
    UserService.prototype.getIdRegistration = function () {
        return this.idRegistration;
    };
    UserService.prototype.setIdRegistration = function (id) {
        this.idRegistration = id;
    };
    UserService.prototype.addUserData = function (datos) {
        this.userData = datos;
        this.events.publish('user:login');
    };
    UserService.prototype.getData = function () {
        return this.userData;
    };
    UserService.prototype.deleteData = function () {
        return this.userData = {};
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], UserService);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__(50);
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.ip = config.host;
    }
    LoginService.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        var link = this.ip + 'index.php/api/auth';
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.invited = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        var link = this.ip + 'index.php/api/invited';
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LoginService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPermisionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(50);
var UsersPermisionsService = (function () {
    function UsersPermisionsService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.ip = config.host;
        this.userData = this.userService.getData();
    }
    UsersPermisionsService.prototype.all = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/users?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    UsersPermisionsService.prototype.admins = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/admins?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    UsersPermisionsService.prototype.usersMessages = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/usersMessages?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    UsersPermisionsService.prototype.update = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var link = this.ip + 'index.php/api/changePermisions?token=' + this.userData.token;
        //alert(data);
        var data = "data=" + JSON.stringify(body);
        return this.http.post(link, data, options)
            .map(function (res) { return res.json(); });
    };
    return UsersPermisionsService;
}());
UsersPermisionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */]])
], UsersPermisionsService);

//# sourceMappingURL=permisions.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(alertCtrl, toastCtrl, registerService, userService, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.registerService = registerService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            name: '',
            mail: '',
            pwd: '',
            pwdConfirm: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.user.pwd.length < 1 || this.user.pwdConfirm.length < 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Campo requerido',
                subTitle: 'Contraseña requerida',
                buttons: ['Volver']
            });
            alert_1.present();
            return;
        }
        if (this.user.pwd != this.user.pwdConfirm) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Las contraseñas no coinciden intente nuevamente',
                buttons: ['Volver']
            });
            this.user.pwdConfirm = '';
            alert_2.present();
            return;
        }
        var body = 'data=' + JSON.stringify({
            usuario: this.user.name,
            email: this.user.mail,
            nombre: this.user.name,
            contrasena: this.user.pwd,
            contrasena2: this.user.pwdConfirm,
            idRegistration: '' + this.userService.getIdRegistration()
        });
        this.registerService.register(body).subscribe(function (data) {
            if (data.msg == "ok") {
                var toast = _this.toastCtrl.create({
                    message: 'Usuario registrado correctamente',
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else if (data.msg == "error") {
                // console.log(data.data)
                var toast = _this.toastCtrl.create({
                    message: data.data,
                    duration: 2000
                });
                toast.present();
            }
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/register/register.html"*/'<ion-content padding>\n  <div padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n        <img src="assets/img/interfresa.svg"/>\n        <div>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-person" md="md-person" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Usuario</ion-label>\n            <ion-input type="text" [(ngModel)]="user.name" class="input-color"></ion-input>\n          </ion-item>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-person" md="md-person" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Correo electrónico</ion-label>\n            <ion-input type="email" [(ngModel)]="user.mail" class="input-color"></ion-input>\n          </ion-item>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-lock" md="md-lock" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.pwd" class="input-color"></ion-input>\n          </ion-item>\n          <ion-item style="background: transparent;">\n            <ion-icon ios="ios-lock" md="md-lock" item-left primary></ion-icon>\n            <ion-label floating  class="activated" color="accent">Confirmar tu contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.pwdConfirm" class="input-color"></ion-input>\n          </ion-item>\n        </div>\n        <div padding-top>\n          <div align="center" padding-top>\n            <button ion-button large block class="button-interfresa" (click)="register()">Registrarse</button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__services_register__["a" /* RegisterService */],
        __WEBPACK_IMPORTED_MODULE_4__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(50);
var MessagesCommentsService = (function () {
    function MessagesCommentsService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.ip = config.host;
        this.userData = this.userService.getData();
    }
    MessagesCommentsService.prototype.get = function (notice_id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/comments/?token=' + this.userData.token + "&notice_id=" + notice_id;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    MessagesCommentsService.prototype.getSubComments = function (notice_id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/subComments/?token=' + this.userData.token + "&notice_id=" + notice_id;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    return MessagesCommentsService;
}());
MessagesCommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */]])
], MessagesCommentsService);

//# sourceMappingURL=messages-comments.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(50);
var CommentsService = (function () {
    function CommentsService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.ip = config.host;
        this.userData = this.userService.getData();
    }
    CommentsService.prototype.notices = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/notices_list_comments?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.noticesComments = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/notices_comments?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.edit = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var link = this.ip + 'index.php/api/comment_edit?token=' + this.userData.token;
        //alert(data);
        var data = "data=" + JSON.stringify(body);
        return this.http.post(link, data, options)
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.addSub = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        console.log(body);
        var link = this.ip + 'index.php/api/addSubComment?token=' + this.userData.token;
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */]])
], CommentsService);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sections-detail/sections-detail.module": [
		681,
		1
	],
	"../pages/tabs/tabs.module": [
		682,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__(50);
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.ip = config.host;
    }
    RegisterService.prototype.register = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        var link = this.ip + 'index.php/api/register';
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RegisterService);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    // return the global native browser window object
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRefService;
}());
WindowRefService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], WindowRefService);

//# sourceMappingURL=windowref.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontsizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FontsizePage = (function () {
    function FontsizePage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.sizes = [];
        for (var i = 8; i <= 96; i++) {
            if (i <= 12) {
                this.sizes.push(i);
            }
            else {
                i += 1;
                this.sizes.push(i);
            }
        }
    }
    FontsizePage.prototype.ionViewDidLoad = function () {
        var element = document.getElementById("fontsize");
        var parent = element.parentElement;
        var parent2 = parent.parentElement;
        //parent2.parentElement.style['width'] = "92px"
        // parent2.parentElement.style['height'] = "fit-content"
    };
    FontsizePage.prototype.setSize = function (size) {
        this.viewCtrl.dismiss(size);
    };
    return FontsizePage;
}());
FontsizePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-fontsize',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/fontsize/fontsize.html"*/'<ion-content id="fontsize">\n  <ion-list>\n    <ion-list-header>\n    Font Size\n    </ion-list-header>\n    <ion-item *ngFor="let size of sizes" (tap)="setSize(size)">{{size}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/fontsize/fontsize.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], FontsizePage);

//# sourceMappingURL=fontsize.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontFamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FontFamilyPage = (function () {
    function FontFamilyPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.familys = [
            {
                'name': 'Arial',
                'value': 'Arial, Helvetica, sans-serif;'
            }, {
                'name': 'Georgia',
                'value': 'Georgia, serif'
            },
            {
                'name': 'Impact',
                'value': 'Impact, Charcoal, sans-serif'
            },
            {
                'name': 'Monospace',
                'value': 'monospace'
            },
            {
                'name': 'Tahoma',
                'value': 'Tahoma, Geneva, sans-serif'
            },
            {
                'name': 'Times New Roman',
                'value': 'Times New Roman,Times,serif,-webkit-standard'
            },
            {
                'name': 'Verdana',
                'value': 'Verdana, Geneva, sans-serif'
            }
        ];
    }
    FontFamilyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FontFamilyPage');
    };
    FontFamilyPage.prototype.setFamily = function (size) {
        this.viewCtrl.dismiss(size);
    };
    return FontFamilyPage;
}());
FontFamilyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-font-family',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/font-family/font-family.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n    Font Family\n    </ion-list-header>\n    <ion-item *ngFor="let family of familys" (tap)="setFamily(family.value)">{{family.name}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/font-family/font-family.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], FontFamilyPage);

//# sourceMappingURL=font-family.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphFormatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParagraphFormatPage = (function () {
    function ParagraphFormatPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formats = [
            {
                'name': 'Normal',
                'value': 'p'
            },
            {
                'name': 'Titulo 1',
                'value': 'H1'
            },
            {
                'name': 'Titulo 2',
                'value': 'H2'
            },
            {
                'name': 'Titulo 3',
                'value': 'H3'
            },
            {
                'name': 'Titulo 4',
                'value': 'H4'
            },
            {
                'name': 'Titulo 5',
                'value': 'H5'
            },
            {
                'name': 'Titulo 6',
                'value': 'H6'
            },
            {
                'name': 'Codigo',
                'value': 'pre'
            },
        ];
    }
    ParagraphFormatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParagraphFormatPage');
    };
    ParagraphFormatPage.prototype.setFormat = function (format) {
        this.viewCtrl.dismiss(format);
    };
    return ParagraphFormatPage;
}());
ParagraphFormatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paragraph-format',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/paragraph-format/paragraph-format.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n    Paragraph Format\n    </ion-list-header>\n    <ion-item *ngFor="let format of formats" (tap)="setFormat(format.value)">{{format.name}}</ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/paragraph-format/paragraph-format.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ParagraphFormatPage);

//# sourceMappingURL=paragraph-format.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignFormatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlignFormatPage = (function () {
    function AlignFormatPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        //
        // <ion-content id=​"align-format" class=​"content content-md">​…​</ion-content>​
        // element.parentElement
        // <page-align-format>​…​</page-align-format>​
        //
        // <page-align-format>​…​</page-align-format>​
        // parent.parentElement
        // <div class=​"popover-viewport" style=​"opacity:​ 1;​">​…​</div>​
        //
        // <div class=​"popover-viewport" style=​"opacity:​ 1;​">​…​</div>​
        // parent2 = parent.parentElement
        // <div class=​"popover-viewport" style=​"opacity:​ 1;​">​…​</div>​
        // parent2.parentElement
    }
    AlignFormatPage.prototype.ionViewDidLoad = function () {
        var element = document.getElementById("align-format");
        var parent = element.parentElement;
        var parent2 = parent.parentElement;
        parent2.parentElement.style['width'] = "92px";
        parent2.parentElement.style['height'] = "fit-content";
        console.log('ionViewDidLoad AlignFormatPage');
    };
    AlignFormatPage.prototype.setAlign = function (align) {
        this.viewCtrl.dismiss(align);
    };
    return AlignFormatPage;
}());
AlignFormatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-align-format',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/align-format/align-format.html"*/'<ion-content id="align-format">\n  <ion-list>\n    <ion-list-header>\n    Align\n    </ion-list-header>\n    <ion-item (tap)="setAlign(\'left\')"><i class="fa fa-align-left fa-2x" aria-hidden="true"></i></ion-item>\n    <ion-item (tap)="setAlign(\'center\')"><i class="fa fa-align-center fa-2x" aria-hidden="true"></i></ion-item>\n    <ion-item (tap)="setAlign(\'right\')"><i class="fa fa-align-right fa-2x" aria-hidden="true"></i></ion-item>\n    <ion-item (tap)="setAlign(\'justify\')"><i class="fa fa-align-justify fa-2x" aria-hidden="true"></i></ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/align-format/align-format.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AlignFormatPage);

//# sourceMappingURL=align-format.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReziseImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReziseImagePage = (function () {
    function ReziseImagePage(viewCtrl, navCtrl, camera, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.width = '';
        this.height = '';
    }
    ReziseImagePage.prototype.ionViewDidLoad = function () {
        var element = document.querySelector("#rezise-image>.scroll-content");
        element['style']['padding-bottom'] = "0!important";
        // element['style']['position'] = 'absolute'
        // element['style']['top'] = 0
        // element['style']['left'] = 0
        // element['style']['display'] = 'block'
        // element['style']['width'] = '100%'
        // element['style']['height'] = '100%'
        // element['style']['margin'] = 0
        var element2 = document.getElementById("rezise-image");
        var parent = element2.parentElement;
        var parent2 = parent.parentElement;
        parent2.parentElement.style['height'] = "fit-content";
    };
    ReziseImagePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 100,
            targetHeight: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        if (this.width.length > 0) {
            options.targetWidth = parseInt(this.width);
        }
        if (this.height.length > 0) {
            options.targetHeight = parseInt(this.height);
        }
        this.camera.getPicture(options).then(function (img) {
            if (img) {
                _this.base64 = img;
                _this.viewCtrl.dismiss(img);
                // alert(document.getElementById("editor").innerHTML)
            }
        }, function (err) {
            alert(err);
            console.log(err);
        });
    };
    return ReziseImagePage;
}());
ReziseImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rezise-image',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/rezise-image/rezise-image.html"*/'<ion-content id="rezise-image">\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">Ancho</ion-label>\n      <ion-input type="number" placeholder="150" [(ngModel)]="width"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Alto</ion-label>\n      <ion-input type="number" placeholder="150" [(ngModel)]="height"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (tap)="getImage()">Cargar Imagen</button>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/rezise-image/rezise-image.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ReziseImagePage);

//# sourceMappingURL=rezise-image.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkPage = (function () {
    function LinkPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.link = "";
    }
    LinkPage.prototype.ionViewDidLoad = function () {
        var element = document.getElementById("link-popover");
        var parent = element.parentElement;
        var parent2 = parent.parentElement;
        //parent2.parentElement.style['height'] = "fit-content"
    };
    LinkPage.prototype.add = function () {
        this.viewCtrl.dismiss(this.link);
    };
    return LinkPage;
}());
LinkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-link',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/link/link.html"*/'<ion-content id="link-popover">\n    <ion-item style="padding: 0;">\n      <ion-label color="primary" stacked>Link</ion-label>\n      <ion-input type="url" placeholder="www.google.com" [(ngModel)]="link"></ion-input>\n    </ion-item>\n</ion-content>\n<ion-footer>\n    <button ion-button block style="margin:0;margin-top:1em" (tap)="add()">Añadir</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/link/link.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], LinkPage);

//# sourceMappingURL=link.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoPage = (function () {
    function VideoPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.link = "";
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        var element = document.getElementById("video-popover");
        var element2 = document.querySelector("#video-popover>.scroll-content");
        element2['style']['padding-bottom'] = "0!important";
        var parent = element.parentElement;
        var parent2 = parent.parentElement;
        //parent2.parentElement.style['height'] = "fit-content"
    };
    VideoPage.prototype.add = function () {
        this.viewCtrl.dismiss(this.link);
    };
    return VideoPage;
}());
VideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-video',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/video/video.html"*/'<ion-content id="video-popover">\n  <ion-list>\n    <ion-item style="padding: 0;">\n      <ion-label color="primary" stacked>Url del video</ion-label>\n      <ion-input type="url" [(ngModel)]="link"></ion-input>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n<ion-footer>\n    <button ion-button block style="margin:0;margin-top:1em" (tap)="add()">Añadir</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/video/video.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], VideoPage);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, viewCtrl, newsService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.newsService = newsService;
        this.navParams = navParams;
        this.old_categories_value = [];
        this.categories = this.navParams.get("categories");
        this.newsService.categories().subscribe(function (data) {
            // console.log(data)
            for (var index = 0; index < data.length; index++) {
                var el = data[index].nombre;
                // console.log(el)
                if (_this.old_categories_value.indexOf(el.trim()) == -1) {
                    _this.categories.push({
                        title: el.trim(),
                        checked: false
                    });
                    _this.old_categories_value.push(el.trim());
                    // console.log(this.old_categories_value)
                }
            }
        });
        // this.categories = this.categories_value.split(",")
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        // let element = document.querySelector("#categories>.scroll-content")
        // element['style']['padding-bottom'] = "0!important"
        // element['style']['position'] = 'absolute'
        // element['style']['display'] = 'block'
        // element['style']['margin'] = 0
        var element = document.querySelector(".modal-wrapper");
        element['style']['margin'] = 0;
        element['style']['top'] = 0;
        element['style']['left'] = 0;
        element['style']['width'] = '100%';
        element['style']['height'] = '100%';
    };
    CategoriesPage.prototype.getCategories = function () {
        if (this.categories_value.length < 1) {
            return;
        }
        var nuevas = this.categories_value.split(",");
        var nuevas_ok = [];
        for (var index = 0; index < nuevas.length; index++) {
            var el = nuevas[index];
            // console.log(this.old_categories_value.indexOf(el.trim()))
            if (this.old_categories_value.indexOf(el) == -1) {
                nuevas_ok.push(el.trim());
                this.old_categories_value.push(el.trim());
            }
            if (index == nuevas.length - 1) {
                for (var index2 = 0; index2 < nuevas_ok.length; index2++) {
                    this.categories.push({
                        title: nuevas_ok[index2],
                        checked: false
                    });
                }
            }
        }
        this.categories_value = "";
        // this.categories = ;
    };
    CategoriesPage.prototype.updateCategories = function (category) {
        category.checked = (!category.checked) ? true : false;
    };
    CategoriesPage.prototype.add = function () {
        // this.categories = this.categories_value.split(",")
        // console.log(this.categories)
        var categorias = [];
        var categorias_add = [];
        for (var index = 0; index < this.categories.length; index++) {
            var current = this.categories[index];
            if (current.checked == true && categorias_add.indexOf(current.title) == -1) {
                categorias.push(current);
                categorias_add.push(current.title);
            }
            if (index == this.categories.length - 1) {
                // console.log(categorias)
                this.viewCtrl.dismiss(categorias);
            }
        }
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n\n    <ion-title style="text-align: center">Agregar categorias</ion-title>\n    <ion-buttons right style="min-width: 44px">\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content id="categories">\n  <ion-grid>\n    <ion-row>\n      <ion-item style="padding:0 ">\n        <ion-label floating style="margin-left: 1em;color: black;">Ingrese las categorias separadas por coma</ion-label>\n        <ion-input type="text" list="categories_autocomplete" required [(ngModel)]="categories_value" style="margin-left: 2em"></ion-input>\n      </ion-item>\n      <ion-item>\n      <button primary block ion-button (tap)="getCategories()">Agregar</button>\n      </ion-item>\n    </ion-row>\n    <ion-list>\n      <ion-row>\n          <ion-item *ngFor="let category of categories">\n            <ion-label>{{category.title}}</ion-label>\n            <ion-checkbox color="danger" checked="{{category.checked}}" (ionChange)="updateCategories(category)"></ion-checkbox>\n          </ion-item>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <button ion-button block (tap)="add()">\n    Agregar\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionsAddPage = (function () {
    function SectionsAddPage(navCtrl, viewCtrl, newsService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.newsService = newsService;
        this.navParams = navParams;
        this.old_categories_value = [];
        this.categories = [];
        this.category_selected = [];
        this.newsService.sections().subscribe(function (data) {
            // console.log(data)
            for (var index = 0; index < data.length; index++) {
                var el = data[index].nombre;
                // console.log(el)
                if (_this.old_categories_value.indexOf(el.trim()) == -1) {
                    _this.categories.push({
                        title: el.trim(),
                        checked: false
                    });
                    _this.old_categories_value.push(el.trim());
                    // console.log(this.old_categories_value)
                }
            }
        });
        // this.categories = this.categories_value.split(",")
    }
    SectionsAddPage.prototype.ionViewDidLoad = function () {
        // let element = document.querySelector("#categories>.scroll-content")
        // element['style']['padding-bottom'] = "0!important"
        // element['style']['position'] = 'absolute'
        // element['style']['display'] = 'block'
        // element['style']['margin'] = 0
        var element = document.querySelector(".modal-wrapper");
        element['style']['margin'] = 0;
        element['style']['top'] = 0;
        element['style']['left'] = 0;
        element['style']['width'] = '100%';
        element['style']['height'] = '100%';
    };
    SectionsAddPage.prototype.getCategories = function () {
        if (this.categories_value.length < 1) {
            return;
        }
        var nuevas = this.categories_value.split(",");
        var nuevas_ok = [];
        for (var index = 0; index < nuevas.length; index++) {
            var el = nuevas[index];
            // console.log(this.old_categories_value.indexOf(el.trim()))
            if (this.old_categories_value.indexOf(el) == -1) {
                nuevas_ok.push(el.trim());
                this.old_categories_value.push(el.trim());
            }
            if (index == nuevas.length - 1) {
                for (var index2 = 0; index2 < nuevas_ok.length; index2++) {
                    this.categories.push({
                        title: nuevas_ok[index2],
                        checked: false
                    });
                }
            }
        }
        this.categories_value = "";
        // this.categories = ;
    };
    SectionsAddPage.prototype.updateCategories = function (category) {
        console.log(category);
        this.category_selected = [category];
    };
    SectionsAddPage.prototype.add = function () {
        this.viewCtrl.dismiss(this.category_selected);
    };
    return SectionsAddPage;
}());
SectionsAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sections-add',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/sections-add/sections-add.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n\n    <ion-title style="text-align: center">Agregar Sección</ion-title>\n    <ion-buttons right style="min-width: 44px">\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content id="categories">\n  <ion-grid>\n    <ion-row>\n      <ion-item style="padding:0 ">\n        <ion-label floating style="margin-left: 1em;color: black;">Ingrese las sección</ion-label>\n        <ion-input type="text" list="categories_autocomplete" required [(ngModel)]="categories_value" style="margin-left: 2em"></ion-input>\n      </ion-item>\n      <ion-item>\n      <button primary block ion-button (tap)="getCategories()">Agregar</button>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-list radio-group>\n        <ion-item *ngFor="let category of categories">\n          <ion-label>{{category.title}}</ion-label>\n          <ion-radio color="danger" (tap)="updateCategories(category)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <button ion-button block (tap)="add()">\n    Agregar\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/sections-add/sections-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SectionsAddPage);

//# sourceMappingURL=sections-add.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WelcomePage = (function () {
    function WelcomePage(alertCtrl, navCtrl, navParams, platform, loginService, userService, appPreferences) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loginService = loginService;
        this.userService = userService;
        this.appPreferences = appPreferences;
        this.platform.ready().then(function () {
            _this.appPreferences.fetch('user').then(function (res) {
                if ((typeof res) == 'object') {
                    _this.userService.addUserData(res);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            }, function (error) {
            });
        });
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.invited = function () {
        var _this = this;
        var body = 'data=' + JSON.stringify({
            invite: true,
            idRegistration: '' + this.userService.getIdRegistration()
        });
        this.loginService.invited(body).subscribe(function (data) {
            if (data.token) {
                // console.log(data)
                _this.appPreferences.remove('user');
                _this.appPreferences.store("user", data);
                _this.userService.addUserData(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Error al ingresar como invitado',
                    buttons: ['Volver']
                });
                alert_1.present();
                return;
            }
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/welcome/welcome.html"*/'<ion-content padding>\n  <div padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n        <img src="assets/img/interfresa.svg"/>\n        <p class="center-text" padding-top>¡La mejor app para saber todo sobre Interfresa!</p>\n        <div class="border-bottom padding" padding-top></div>\n        <div padding-top>\n          <div align="center" padding-top>\n            <button ion-button large block class="button-interfresa" (click)="login()">Iniciar Sesión</button>\n          </div>\n          <div align="center" padding-top>\n            <button ion-button outline large block color="light" (click)="invited()">Invitado</button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <textarea id="{{elementId}}"></textarea> -->\n  </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__services_login__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_6__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_calendar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_detail__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Servicios

//Pages

var CalendarPage = (function () {
    function CalendarPage(navCtrl, newsService, navParams) {
        this.navCtrl = navCtrl;
        this.newsService = newsService;
        this.navParams = navParams;
        this.date = new Date(Date.now());
        this.row_show_header = false;
        this.colors = {
            red: {
                primary: '#ad2121',
                secondary: '#FAE3E3'
            },
            blue: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
            yellow: {
                primary: '#e3bc08',
                secondary: '#FDF1BA'
            }
        };
        this.days_label = [
            "L", "M", "X", "J", "V", "S", "D"
        ];
        this.view = 'month';
        this.viewDate = new Date();
        this.locale = 'es';
        this.weekStartsOn = __WEBPACK_IMPORTED_MODULE_2_angular_calendar__["b" /* DAYS_OF_WEEK */].MONDAY;
        this.weekendDays = [__WEBPACK_IMPORTED_MODULE_2_angular_calendar__["b" /* DAYS_OF_WEEK */].FRIDAY, __WEBPACK_IMPORTED_MODULE_2_angular_calendar__["b" /* DAYS_OF_WEEK */].SATURDAY];
        this.event = {
            start: this.date,
            title: 'Event!',
            color: this.colors.red
        };
        this.event2 = {
            start: this.date,
            title: "Probando men",
            color: this.colors.red
        };
        this.calEvents = [];
        this.activeDayIsOpen = false;
        var fecha = this.date.toISOString().split("T")[0].split("-");
        this.ano = fecha[0];
        this.mes = fecha[1];
        //alert("Mes: "+this.mes)
        //alert("Año: "+this.ano) 
        this.ionViewDidLoad();
    }
    // beforeMonthViewRender():void{
    //   setTimeout(()=>{
    //     // console.log("beforeMonthViewRender")
    //     let row_header = document.querySelectorAll(".cal-cell-row.cal-header > div")
    //     // console.log(row_header)
    //     for(var i=0;i<row_header.length;i++){
    //       // console.log(row_header[i].innerHTML)
    //       row_header[i].innerHTML =  row_header[i].innerHTML.trim()[0]
    //     }
    //   },100)
    // }
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var getStart = {
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"]
        }[this.view];
        var getEnd = {
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfDay"]
        }[this.view];
        this.events$ = this.newsService.getNewsDate(this.ano, this.mes).map(function (results) {
            console.log(results);
            return results.map(function (notice) {
                //alert("Aqui: "+notice.title)
                //console.log(new Date(notice.date.replace(/-/g, "/")))
                return {
                    title: notice.title,
                    start: new Date(notice.date.replace(/-/g, "/")),
                    color: _this.colors.yellow,
                    meta: {
                        notice: notice
                    }
                };
            });
        });
        this.events$.subscribe(function () {
            console.log("Termino");
        });
    };
    CalendarPage.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarPage.prototype.eventClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_detail__["a" /* DetailPage */], {
            id: event.meta.notice.id
        });
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/calendar/calendar.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n     <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title style="text-align: center">Interfresa</ion-title>\n    <ion-buttons right style="min-width: 44px">\n      <!-- <button ion-button icon-only (tap)="addFav()"><ion-icon name="star"></ion-icon></button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="calendar-comp">\n    <h3>{{ viewDate | calendarDate:(view + \'ViewTitle\'):\'es\'  }}</h3>\n      <!-- <mwl-calendar-month-view [viewDate]="date" [events]="calEvents" [locale]="locale"\n      [weekStartsOn]="weekStartsOn"\n      [weekendDays]="weekendDays"\n      >\n      </mwl-calendar-month-view> -->\n      <div *ngIf="events$ | async; else loading; let events">\n        <div [ngSwitch]="view">\n          <ng-template #headerTemp>\n              <div class="cal-cell-row">\n                <div class="cal-cell cal-past columnHeader" *ngFor="let label of days_label">\n                    {{label}}\n                </div>\n              </div>\n            </ng-template>\n          <mwl-calendar-month-view\n            *ngSwitchCase="\'month\'"\n            [viewDate]="viewDate"\n            [locale]="locale"\n            [events]="events"\n            [weekendDays]="weekendDays"\n            [headerTemplate]="headerTemp"\n            [activeDayIsOpen]="activeDayIsOpen"\n            (dayClicked)="dayClicked($event.day)"\n            (eventClicked)="eventClicked($event.event)">\n          <!-- <mwl-calendar-month-view\n            *ngSwitchCase="\'month\'"\n            [viewDate]="viewDate"\n            [locale]="locale"\n            [events]="events"\n            [weekendDays]="weekendDays"\n            [headerTemplate]="headerTemp"\n            (beforeViewRender)="beforeMonthViewRender()"\n            [activeDayIsOpen]="activeDayIsOpen"\n            (dayClicked)="dayClicked($event.day)"\n            (eventClicked)="eventClicked($event.event)"> -->\n          </mwl-calendar-month-view>\n          <mwl-calendar-week-view\n            *ngSwitchCase="\'week\'"\n            [viewDate]="viewDate"\n            [events]="events"\n            (eventClicked)="eventClicked($event.event)">\n          </mwl-calendar-week-view>\n          <mwl-calendar-day-view\n            *ngSwitchCase="\'day\'"\n            [viewDate]="viewDate"\n            [events]="events"\n            (eventClicked)="eventClicked($event.event)">\n          </mwl-calendar-day-view>\n        </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_permisions__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Providers

var UsersPage = (function () {
    function UsersPage(navCtrl, usersPermisionsService, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.usersPermisionsService = usersPermisionsService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.users = [];
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        this.all();
    };
    UsersPage.prototype.all = function () {
        var _this = this;
        this.users = [];
        this.usersPermisionsService.all().subscribe(function (data) {
            console.log(data);
            if (data.usuarios) {
                data.usuarios.forEach(function (user) {
                    _this.users.push(user);
                });
            }
        });
    };
    UsersPage.prototype.permisos = function (user) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Privilegios',
            buttons: [
                {
                    text: 'Normal',
                    role: 'normal',
                    handler: function () {
                        console.log('Destructive clicked');
                        console.log(user);
                        if (user.admin == 1) {
                            _this.update(user.id, 3);
                        }
                    }
                }, {
                    text: 'Administrador',
                    handler: function () {
                        console.log('Archive clicked');
                        console.log(user);
                        if (user.admin == 3) {
                            _this.update(user.id, 1);
                        }
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UsersPage.prototype.update = function (id, permise) {
        var _this = this;
        console.log(id + "-" + permise);
        this.usersPermisionsService.update({ usuario: id, admin: permise }).subscribe(function (data) {
            if (data) {
                _this.all();
            }
        });
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/users/users.html"*/'<ion-header>\n    <ion-navbar id="my-navbar">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>Administrar usuarios</ion-title>\n        <ion-buttons end>\n\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let user of users">\n      <ion-icon name="people" item-start></ion-icon>\n        {{user.usuario}} - {{user.privilegio}}\n        <button ion-button item-end (click)="permisos(user)">Permisos</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/users/users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_permisions__["a" /* UsersPermisionsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], UsersPage);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_permisions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersChatPage = (function () {
    function UsersChatPage(navCtrl, usersPermisionsService, userService, navParams) {
        this.navCtrl = navCtrl;
        this.usersPermisionsService = usersPermisionsService;
        this.userService = userService;
        this.navParams = navParams;
        this.userData = this.userService.getData();
        this.users = [];
    }
    UsersChatPage.prototype.ionViewDidLoad = function () {
        var privilege = this.userData.user.userdata.admin;
        console.log("Privilegio: ", privilege);
        if (privilege == 3) {
            this.admins();
        }
        else if (privilege == 1) {
            this.usersMessages();
        }
    };
    UsersChatPage.prototype.admins = function () {
        var _this = this;
        this.users = [];
        this.usersPermisionsService.admins().subscribe(function (data) {
            if (data) {
                data.forEach(function (user) {
                    _this.users.push(user);
                });
            }
        });
    };
    UsersChatPage.prototype.usersMessages = function () {
        var _this = this;
        this.users = [];
        this.usersPermisionsService.usersMessages().subscribe(function (data) {
            if (data) {
                data.forEach(function (user) {
                    _this.users.push(user);
                });
            }
        });
    };
    UsersChatPage.prototype.contact = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_message__["a" /* MessagePage */], {
            user: user,
            type: "normal"
        });
    };
    return UsersChatPage;
}());
UsersChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users-chat',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/users-chat/users-chat.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Administradores</ion-title>\n      <ion-buttons end>\n\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list>\n  <ion-item *ngFor="let user of users">\n    <ion-icon name="people" item-start></ion-icon>\n      {{user.usuario}} - {{user.privilegio}}\n      <button ion-button item-end (click)="contact(user)" [hidden]="user.privilegio != \'Administrador\'">Contactar</button>\n      <button ion-button item-end (click)="contact(user)" [hidden]="user.privilegio != \'Usuario\'">Mensajes</button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/users-chat/users-chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_permisions__["a" /* UsersPermisionsService */],
        __WEBPACK_IMPORTED_MODULE_4__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], UsersChatPage);

//# sourceMappingURL=users-chat.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagePage = (function () {
    function MessagePage(navCtrl, messagesService, userService, navParams) {
        this.navCtrl = navCtrl;
        this.messagesService = messagesService;
        this.userService = userService;
        this.navParams = navParams;
        this.chatData = { text: '', user: '', chatId: '' };
        this.admin = this.navParams.get('user');
        console.log(this.admin.id);
        this.user_id = this.userService.getData().user.userdata.id;
        console.log("UserData: ", this.userService.getData().user.userdata.id);
        this.chatData.user = this.user_id + '';
        this.chatBox = "";
        this.messages = [];
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.getMessages();
    };
    MessagePage.prototype.getMessages = function () {
        var _this = this;
        this.messages = [];
        if (this.userService.getData().user.userdata.admin == 3) {
            this.messagesService.get(this.user_id, this.admin.id).subscribe(function (data) {
                if (data) {
                    data.forEach(function (element) {
                        _this.messages.push({
                            // _id:"1",
                            send: element.envio,
                            text: element.content,
                            user: element.usuario,
                            createdAt: new Date(element.fecha)
                        });
                    });
                }
            });
        }
        else if (this.userService.getData().user.userdata.admin == 1) {
            this.messagesService.get(this.admin.id, this.user_id).subscribe(function (data) {
                if (data) {
                    data.forEach(function (element) {
                        _this.messages.push({
                            // _id:"1",
                            send: element.envio,
                            text: element.content,
                            user: element.usuario,
                            createdAt: new Date(element.fecha)
                        });
                    });
                }
            });
        }
    };
    MessagePage.prototype.send = function (message) {
        var _this = this;
        if (this.userService.getData().user.userdata.admin == 3) {
            this.messagesService.add(this.user_id, this.admin.id, message).subscribe(function (data) {
                if (data.status == "ok") {
                    _this.chatBox = "";
                    _this.getMessages();
                }
            });
        }
        if (this.userService.getData().user.userdata.admin == 1) {
            this.messagesService.add(this.admin.id, this.user_id, message).subscribe(function (data) {
                if (data.status == "ok") {
                    _this.chatBox = "";
                    _this.getMessages();
                }
            });
        }
    };
    return MessagePage;
}());
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/message/message.html"*/'<ion-header>\n  <ion-header>\n    <ion-navbar id="my-navbar">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>Mensajes</ion-title>\n    </ion-navbar>\n  </ion-header>\n</ion-header>\n\n\n<ion-content padding style="background-color:#F5F5F5">\n  <ion-list no-lines>\n    <ion-item *ngFor="let message of messages" style=" background-color:rgba(0,0, 0, 0); margin:2px; border-radius: 10px;" text-wrap>\n        <ion-avatar item-left *ngIf="message.send == user_id">\n            <img src="../assets/img/user.jpg">\n        </ion-avatar>\n        <ion-avatar item-right *ngIf="message.send != user_id">\n            <img src="../assets/img/user.jpg">\n        </ion-avatar>\n        <div style="background-color: white; padding: 8px; border-radius: 10px;">\n            <h2 *ngIf="message.send == user_id">Yo</h2>\n            <h2 *ngIf="message.send != user_id">{{message.user}}</h2>\n            <h3>{{message.text}}</h3>\n        </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="background:white"> \n    <ion-input type="text" [(ngModel)]="chatBox" placeholder="Message...">\n      Send\n    </ion-input>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal" (tap)="send(chatBox)" style="color:#488aff">\n        Send\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/message/message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_messages__["a" /* MessagesService */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(50);
var MessagesService = (function () {
    function MessagesService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.ip = config.host;
        this.userData = this.userService.getData();
    }
    MessagesService.prototype.get = function (user_id, admin_id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/messages/?token=' + this.userData.token + "&admin=" + admin_id + "&user=" + user_id;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    MessagesService.prototype.add = function (user_id, admin_id, content) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        var body = 'data=' + JSON.stringify({
            user: user_id,
            admin: admin_id,
            content: content
        });
        var link = this.ip + 'index.php/api/messages_add?token=' + this.userData.token;
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */]])
], MessagesService);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_comments_message_comments__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsChatPage = (function () {
    function CommentsChatPage(navCtrl, commentsService, userService, navParams) {
        this.navCtrl = navCtrl;
        this.commentsService = commentsService;
        this.userService = userService;
        this.navParams = navParams;
        this.userData = this.userService.getData();
        this.comments = [];
    }
    CommentsChatPage.prototype.ionViewDidLoad = function () {
        var privilege = this.userData.user.userdata.admin;
        console.log("Privilegio: ", privilege);
        if (privilege == 3) {
            this.admins();
        }
        else if (privilege == 1) {
            this.usersMessages();
        }
    };
    CommentsChatPage.prototype.admins = function () {
        var _this = this;
        this.comments = [];
        this.commentsService.notices().subscribe(function (data) {
            if (data) {
                data.forEach(function (user) {
                    _this.comments.push(user);
                });
            }
        });
    };
    CommentsChatPage.prototype.usersMessages = function () {
        var _this = this;
        this.comments = [];
        this.commentsService.noticesComments().subscribe(function (data) {
            if (data) {
                data.forEach(function (user) {
                    _this.comments.push(user);
                });
            }
        });
    };
    CommentsChatPage.prototype.comments_list = function (notice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_comments_message_comments__["a" /* MessageCommentsPage */], {
            notice_id: notice.id,
            notice_title: notice.title,
            type: "normal"
        });
    };
    return CommentsChatPage;
}());
CommentsChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comments-chat',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/comments-chat/comments-chat.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Noticias comentadas</ion-title>\n      <ion-buttons end>\n\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list>\n  <ion-item *ngFor="let comment of comments" (tap)="comments_list(comment)">\n    <ion-icon name="people" item-start></ion-icon>\n    <h1>{{comment.title}}</h1>\n    <div>\n        Comentarios <ion-badge primary> {{comment.comments}}</ion-badge>\n    </div>\n    <div>\n      Comentarios vistos <ion-badge>{{comment.comments_viewed}}</ion-badge>\n    </div>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/comments-chat/comments-chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_comments__["a" /* CommentsService */],
        __WEBPACK_IMPORTED_MODULE_4__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], CommentsChatPage);

//# sourceMappingURL=comments-chat.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_comments__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subcomments_subcomments__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//page

var MessageCommentsPage = (function () {
    function MessageCommentsPage(navCtrl, modalCtrl, messagesCommentsService, userService, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.messagesCommentsService = messagesCommentsService;
        this.userService = userService;
        this.navParams = navParams;
        this.comments = [];
        this.notice_id = this.navParams.get("notice_id");
        this.notice_title = this.navParams.get("notice_title");
    }
    MessageCommentsPage.prototype.ionViewDidLoad = function () {
        this.getComments();
    };
    MessageCommentsPage.prototype.getComments = function () {
        var _this = this;
        this.messagesCommentsService.get(this.notice_id).subscribe(function (data) {
            if (data) {
                _this.comments = data;
            }
        });
    };
    MessageCommentsPage.prototype.subComments = function (comment) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__subcomments_subcomments__["a" /* SubcommentsPage */], {
            comment: comment
        });
        // modal.onDidDismiss((categories)=>{
        //   // this.notice.categories = categories
        // });
        modal.present();
    };
    return MessageCommentsPage;
}());
MessageCommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message-comments',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/message-comments/message-comments.html"*/'<ion-header>\n  <ion-header>\n    <ion-navbar id="my-navbar">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>Comentarios</ion-title>\n    </ion-navbar>\n  </ion-header>\n</ion-header>\n\n\n<ion-content padding style="background-color:#F5F5F5">\n  <ion-card *ngIf="comments.length == 0">\n    <ion-card-content>\n      No hay comentarios\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngFor="let c of comments">\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/img/user.jpg">\n            </ion-avatar>\n            <h2>{{c.usuario}}</h2>\n            <p style="white-space: initial">{{c.comentario}}</p>\n            <ion-note>\n              {{c.date | date:\'medium\' }}\n            </ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    <ion-row (tap)="subComments(c)">\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div [hidden]="c.sub_comentarios == 1">{{c.sub_comentarios}} Comentarios</div>\n          <div [hidden]="c.sub_comentarios != 1">{{c.sub_comentarios}} Comentario</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="add-circle"></ion-icon>\n          <div>Comentar</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/message-comments/message-comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__services_messages_comments__["a" /* MessagesCommentsService */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MessageCommentsPage);

//# sourceMappingURL=message-comments.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_comments__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubcommentsPage = (function () {
    function SubcommentsPage(navCtrl, messagesCommentsService, commentsService, viewCtrl, toastCtrl, userService, navParams) {
        this.navCtrl = navCtrl;
        this.messagesCommentsService = messagesCommentsService;
        this.commentsService = commentsService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.comment_id = this.navParams.get("comment").id;
        this.user_id = this.userService.getData().user.userdata.id;
        console.log("mi id: ", this.user_id);
        this.subcomments = [];
        // this.admin = this.navParams.get('user').usuario;
    }
    SubcommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubcommentsPage');
        var element = document.querySelector(".modal-wrapper");
        element['style']['margin'] = 0;
        element['style']['top'] = 0;
        element['style']['left'] = 0;
        element['style']['width'] = '100%';
        element['style']['height'] = '100%';
        this.getComments();
    };
    SubcommentsPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    SubcommentsPage.prototype.send = function (message) {
        var _this = this;
        var privilege = this.userService.getData().user.userdata.admin;
        if (privilege == 1 || privilege == 3) {
            var body = 'data=' + JSON.stringify({
                comentario: this.comment_id,
                contenido: message
            });
            if (message.length > 0) {
                this.commentsService.addSub(body).subscribe(function (data) {
                    if (data) {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 2000
                        });
                        toast.present();
                        console.log(data);
                        if (data.status == "ok") {
                            _this.comment = "";
                            // this.events.publish('comment:new', '')
                        }
                    }
                });
            }
        }
    };
    SubcommentsPage.prototype.getComments = function () {
        var _this = this;
        this.messagesCommentsService.getSubComments(this.comment_id).subscribe(function (data) {
            if (data) {
                _this.subcomments = data;
            }
        });
    };
    return SubcommentsPage;
}());
SubcommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subcomments',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/subcomments/subcomments.html"*/'\n  <ion-header>\n    <ion-navbar id="my-navbar" style="padding:0">\n      <button ion-button style="background:none;box-shadow:none;margin:0;" (tap)="back()">\n          <ion-icon name="arrow-back" style="margin: 0;padding: 0 6px;text-align: left;text-align: start;font-size: 3.4rem;font-weight: normal"></ion-icon>\n        </button>\n      <ion-title style="text-align: center">Comentario</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content id="subcomments">\n  <ion-list no-lines>\n    <ion-item *ngFor="let subcomment of subcomments" style=" background-color:rgba(0,0, 0, 0); margin:2px; border-radius: 10px;"\n      text-wrap>\n      <ion-avatar item-left *ngIf="subcomment.send == user_id">\n        <img src="../assets/img/user.jpg">\n      </ion-avatar>\n      <ion-avatar item-right *ngIf="subcomment.send != user_id">\n        <img src="../assets/img/user.jpg">\n      </ion-avatar>\n      <div style="background-color: white; padding: 8px; border-radius: 10px;">\n        <h2 *ngIf="subcomment.send == user_id">Yo</h2>\n        <h2 *ngIf="subcomment.send != user_id">{{subcomment.user}}</h2>\n        <p>{{subcomment.text}}</p>\n        <ion-note>\n          {{subcomment.date | date:\'medium\' }}\n        </ion-note>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="background:white">\n    <ion-input type="text" [(ngModel)]="comment" placeholder="Comentario...">\n    </ion-input>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal" (tap)="send(comment)" style="color:#488aff">\n            Comentar\n            <ion-icon name="send"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/subcomments/subcomments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_messages_comments__["a" /* MessagesCommentsService */],
        __WEBPACK_IMPORTED_MODULE_3__services_comments__["a" /* CommentsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SubcommentsPage);

//# sourceMappingURL=subcomments.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wysiwyg_wysiwyg__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SectionsPage = (function () {
    function SectionsPage(navCtrl, navParams, newsService, actionSheetCtrl, platform, userService, alertCtrl, toastCtrl, events, menu, sanitizer, 
        // private appPreferences: AppPreferences,
        loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsService = newsService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menu = menu;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.selection = "no_leidas";
        this.id = this.navParams.get("section");
        this.title = this.navParams.get("sectionName");
        console.log(this.id, this.title);
        console.log(this.navParams.data);
        this.userData = this.userService.getData();
        this.noticias = [];
    }
    SectionsPage.prototype.ionViewDidLoad = function () {
        this.getNewsSimple(0, this.id);
    };
    SectionsPage.prototype.getNewsSimple = function (limit, category) {
        var _this = this;
        var vistas = (this.selection == "no_leidas") ? 0 : 1;
        this.newsService.getNewsSimple(limit, category, vistas).subscribe(function (data) {
            // this.loader.dismiss()
            if (data) {
                _this.noticias = undefined;
                _this.noticias = [];
                console.log("Con data", data);
                console.log("Noticias", _this.noticias);
                for (var i = 0; i < data.length; i++) {
                    // console.log(this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers"+data[i].cover.replace("mague1","%2F15").replace("mague2","?alt=").replace("mague3","&token="))['changingThisBreaksApplicationSecurity'].replace('covers/','covers%2F'))
                    _this.noticias.push({
                        id: data[i].id,
                        title: data[i].title,
                        body: data[i].body,
                        cover: _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data[i].cover.replace("mague1", "%2F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F'),
                        autor: data[i].autor,
                        date: data[i].date,
                        tags: data[i].tags
                    });
                }
            }
            else {
                console.log("No data");
                _this.noticias = null;
                _this.noticias = undefined;
                _this.noticias = [];
            }
        });
    };
    SectionsPage.prototype.getNews = function (limit, category, infiniteScroll) {
        var _this = this;
        var vistas = (this.selection == "no_leidas") ? 0 : 1;
        this.loader = this.loadingCtrl.create({
            content: "Obteniendo noticias desde el servidor por favor espere"
        });
        this.loader.present();
        this.newsService.getNews(limit, category, vistas).subscribe(function (data) {
            if (data) {
                if (data.length == 0) {
                    _this.loader.dismiss();
                    infiniteScroll.complete();
                }
                else {
                    _this.loader.dismiss();
                    // "id":,"title","body","date":,"autor","premium","cover"}
                    for (var i = 0; i < data.length; i++) {
                        _this.noticias.push({
                            id: data[i].id,
                            title: data[i].title,
                            body: data[i].body,
                            cover: _this.sanitizer.bypassSecurityTrustUrl("https://firebasestorage.googleapis.com/v0/b/interfresas-8627e.appspot.com/o/covers" + data[i].cover.replace("mague1", "%252F").replace("mague2", "?alt=").replace("mague3", "&token="))['changingThisBreaksApplicationSecurity'].replace('covers/', 'covers%2F'),
                            autor: data[i].autor,
                            date: data[i].date,
                            tags: data[i].tags
                        });
                        if (i == data.length - 1) {
                            infiniteScroll.complete();
                        }
                    }
                }
                // this.userService.addUserData(data.data);
                //alert(JSON.stringify(this.userService.getData()));
            }
            else {
                _this.loader.dismiss();
                infiniteScroll.complete();
            }
        });
    };
    SectionsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Obteniendo noticias desde el servidor por favor espere",
            duration: 3000
        });
        loader.present();
    };
    SectionsPage.prototype.changeTab = function (val) {
        if (val == 0) {
            this.selection = "no_leidas";
            this.noticias = null;
            this.noticias = undefined;
            this.noticias = [];
            this.getNewsSimple(0, this.id);
        }
        else {
            this.selection = "leidas";
            this.noticias = null;
            this.noticias = undefined;
            this.noticias = [];
            this.getNewsSimple(0, this.id);
        }
    };
    SectionsPage.prototype.itemTapped = function (event, noticia) {
        if (this.edit_id == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
                id: noticia.id
            });
        }
    };
    SectionsPage.prototype.refresh = function () {
        this.noticias = [];
        this.getNewsSimple(0, this.id);
    };
    SectionsPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.getNews(this.noticias.length, this.categoria, infiniteScroll);
    };
    SectionsPage.prototype.searchToggle = function () {
        if (this.show_search) {
            this.show_search = false;
        }
        else {
            this.show_search = true;
        }
    };
    SectionsPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.noticias = this.noticias.filter(function (noticia) {
                if (noticia.title.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return noticia;
                }
                else {
                    console.log("No hay coincidencias");
                }
            });
        }
    };
    SectionsPage.prototype.edit = function (id) {
        this.edit_id = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wysiwyg_wysiwyg__["a" /* WysiwygPage */], {
            id: id,
            edit: true
        });
        this.edit_id = undefined;
    };
    SectionsPage.prototype.trash = function (id) {
        var _this = this;
        this.edit_id = id;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Esta seguro de eliminar la noticia?',
            buttons: [
                {
                    text: 'Confirmar',
                    icon: 'trash',
                    handler: function () {
                        _this.newsService.trash(_this.edit_id).subscribe(function (data) {
                            _this.edit_id = undefined;
                            console.log(data);
                            if (data.success == "") {
                                _this.noticias = [];
                                _this.categoria = (_this.navParams.get("id")) ? _this.navParams.get("id") : undefined;
                                _this.getNewsSimple(0, _this.categoria);
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Error al elinar la noticia',
                                    duration: 3000
                                });
                                toast.present();
                            }
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.edit_id = undefined;
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return SectionsPage;
}());
SectionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sections',template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/sections/sections.html"*/'<ion-header>\n  <ion-navbar id="my-navbar">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button style="color:white;font-size: 2em" (click)="searchToggle()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n      <button ion-button style="color:white;font-size: 2em" (click)="refresh()">\n        <ion-icon ios="ios-refresh" md="md-refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="selection" color="light" class="segmentbg" [hidden]="userData.user.userdata.admin == 2 ">\n    <ion-segment-button value="no_leidas" (tap)="changeTab(0)">\n      NO LEIDOS\n    </ion-segment-button>\n    <ion-segment-button value="leidas" (tap)="changeTab(1)">\n      LEIDOS\n    </ion-segment-button>\n\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-tabs>\n      <ion-tab [root]="tab1Root" tabTitle="NO LEIDOS"></ion-tab>\n      <ion-tab [root]="tab2Root" tabTitle="LEIDOS"></ion-tab>\n    </ion-tabs> -->\n  <ion-list [hidden]="noticias.length == 0" [virtualScroll]="noticias" bufferRatio="10" approxItemHeight="120px">\n    <ion-item *virtualItem="let noticia" style="background: none;">\n      <ion-grid>\n        <ion-row style="background: #f7e3e4">\n          <ion-col col-4 (tap)="itemTapped($event,noticia)">\n            <ion-avatar>\n              <img [src]="noticia.cover" />\n              <!-- <ion-img src="../assets/img/cover.png"></ion-img> -->\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8 class="flex">\n            <div (tap)="itemTapped($event,noticia)">\n              <h1>\n                {{noticia.title}}\n              </h1>\n              <p style="color:#ff4286">{{noticia.tags}}</p>\n              <ion-row>\n                <ion-col col-6 class="rose">\n                  {{noticia.autor}}\n                </ion-col>\n                <ion-col col-6 class="rose">\n                  {{noticia.date}}\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- <h2>{{noticia.autor}}</h2>\n              <div>\n              <time>{{noticia.date}}</time>\n              </div> -->\n            <ion-row [hidden]="userData.user.userdata.admin != 1">\n              <ion-col col-6>\n                <button ion-button clear (tap)="edit(noticia.id)">Editar</button>\n              </ion-col>\n              <ion-col col-6>\n                <button ion-button clear (tap)="trash(noticia.id)">Eliminar</button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <div style="background: none;height: 1em"></div>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/pages/sections/sections.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_news__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__services_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SectionsPage);

//# sourceMappingURL=sections.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(431);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(50);
var NewsService = (function () {
    function NewsService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.ip = config.host;
        this.userData = this.userService.getData();
    }
    NewsService.prototype.add = function (data) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'post'
        });
        // let body = data
        var link = this.ip + 'index.php/api/news_add?token=' + this.userData.token;
        console.log("Antes de realizar el envio: ", data);
        return this.http.post(link, data, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.addFav = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        var link = this.ip + 'index.php/api/addFav?token=' + this.userData.token;
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.addComment = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = data;
        var link = this.ip + 'index.php/api/addComment?token=' + this.userData.token;
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.get = function (id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/detail/' + id + '?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.categories = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/categories?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.sections = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/sections?token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.sectionDetail = function (id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/sections?id=' + id + 'token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.comments = function (notice_id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        // this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/comments?notice_id=' + notice_id + '&token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.getNewsSimple = function (limit, category, view) {
        // this.loader = this.loadingCtrl.create({
        //   content:"Obteniendo noticias desde el servidor por favor espere"
        // })
        // this.loader.present();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            method: 'get'
        });
        var link = '';
        if (category != undefined) {
            link = this.ip + 'index.php/api/news?offset=' + limit + '&category=' + category + '&token=' + this.userData.token + "&view=" + view;
        }
        else {
            link = this.ip + 'index.php/api/news?offset=' + limit + '&token=' + this.userData.token + "&view=" + view;
        }
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.getNews = function (limit, category, view) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            method: 'get'
        });
        var link = '';
        if (category != undefined) {
            link = this.ip + 'index.php/api/news?offset=' + limit + '&category=' + category + '&token=' + this.userData.token + "&view=" + view;
        }
        else {
            link = this.ip + 'index.php/api/news?offset=' + limit + '&token=' + this.userData.token + "&view=" + view;
        }
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.getNewsDate = function (ano, mes) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', 'Bearer ' + this.userData.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            method: 'get'
        });
        var link = this.ip + 'index.php/api/news_date?ano=' + ano + '&mes=' + mes + '&token=' + this.userData.token;
        //alert(data);
        return this.http.get(link, options)
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.trash = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = "id_notice=" + id;
        var link = this.ip + 'index.php/api/news_trash?token=' + this.userData.token;
        //alert(data);
        return this.http.post(link, body, options)
            .map(function (res) { return res.json(); });
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* UserService */]])
], NewsService);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_register__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_news__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_permisions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_users_users__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_windowref__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_wysiwyg_wysiwyg__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_fontsize_fontsize__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_font_family_font_family__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_paragraph_format_paragraph_format__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_align_format_align_format__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_rezise_image_rezise_image__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_link_link__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_video_video__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_categories_categories__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_users_chat_users_chat__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_comments_chat_comments_chat__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_subcomments_subcomments__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_message_message__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_message_comments_message_comments__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_sections_sections__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_calendar_calendar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_app_preferences__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular_calendar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_messages__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_messages_comments__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_comments__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_sections_add_sections_add__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_keyboard__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Providers













//Wysiwyg and components















//calendar

//Plugins



//import {Push} from "@ionic-native/push";








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_wysiwyg_wysiwyg__["a" /* WysiwygPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_fontsize_fontsize__["a" /* FontsizePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_font_family_font_family__["a" /* FontFamilyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_paragraph_format_paragraph_format__["a" /* ParagraphFormatPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_align_format_align_format__["a" /* AlignFormatPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_rezise_image_rezise_image__["a" /* ReziseImagePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_link_link__["a" /* LinkPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_users_chat_users_chat__["a" /* UsersChatPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_message_comments_message_comments__["a" /* MessageCommentsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_comments_chat_comments_chat__["a" /* CommentsChatPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_subcomments_subcomments__["a" /* SubcommentsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sections_sections__["a" /* SectionsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_sections_add_sections_add__["a" /* SectionsAddPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: false,
                autoFocusAssist: false,
                platforms: {
                    ios: {
                        backButtonText: ''
                    }
                },
                monthNames: ['Enero', 'Febrero', 'Marzo', "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthShortNames: ['Ene', 'Feb', 'Mar', "Abril", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
                dayNames: ['Domingo', 'Lunes', "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                dayShortNames: ['Dom', 'Lun', "Mar", "Mier", "Jue", "Vie", "Sab"],
            }, {
                links: [
                    { loadChildren: '../pages/sections-detail/sections-detail.module#SectionsDetailPageModule', name: 'SectionsDetailPage', segment: 'sections-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_41_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_wysiwyg_wysiwyg__["a" /* WysiwygPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_fontsize_fontsize__["a" /* FontsizePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_font_family_font_family__["a" /* FontFamilyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_paragraph_format_paragraph_format__["a" /* ParagraphFormatPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_align_format_align_format__["a" /* AlignFormatPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_rezise_image_rezise_image__["a" /* ReziseImagePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_link_link__["a" /* LinkPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_users_chat_users_chat__["a" /* UsersChatPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_message_comments_message_comments__["a" /* MessageCommentsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_comments_chat_comments_chat__["a" /* CommentsChatPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_subcomments_subcomments__["a" /* SubcommentsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sections_sections__["a" /* SectionsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_sections_add_sections_add__["a" /* SectionsAddPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__services_user__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_permisions__["a" /* UsersPermisionsService */],
            __WEBPACK_IMPORTED_MODULE_8__services_register__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_9__services_login__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_10__services_news__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_19__services_windowref__["a" /* WindowRefService */],
            __WEBPACK_IMPORTED_MODULE_42__services_messages__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_44__services_comments__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_43__services_messages_comments__["a" /* MessagesCommentsService */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__["a" /* FileTransfer */],
            //Push,
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_app_preferences__["a" /* AppPreferences */],
            // {provide: Window, useValue: window },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_wysiwyg_wysiwyg__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_users_users__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_users_chat_users_chat__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_comments_chat_comments_chat__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sections_sections__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Push, PushObject, PushOptions } from '@ionic-native/push';



//Pages











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, toastCtrl, events, 
        //public push:Push,
        fcm, appPreferences, userService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.fcm = fcm;
        this.appPreferences = appPreferences;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            _this.initializeApp();
            _this.ionViewDidLoad();
            _this.pages = [];
            var firebaseConfig = {
                apiKey: "AIzaSyDN8MYCqVgBAa5tiUpL1N8VUm4g68GtpCg",
                authDomain: "https://interfresas-8627e.firebaseio.com",
                storageBucket: "interfresas-8627e.appspot.com",
            };
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp(firebaseConfig);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //this.splashScreen.hide();
            _this.pushsetup();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 100);
        });
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        /*const options: PushOptions = {
        
         ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
         },
         windows: {}
        };
        
        const pushObject: PushObject = this.push.init(options);
        
        pushObject.on('notification').subscribe((notification: any) => {
        if (notification.additionalData.foreground) {
          if(notification.title == "Cierre de sesion"){
            this.closeSession()
          }
          let toas = this.toastCtrl.create({
            message:notification.message,
            duration:3000
          })
        }
        });
        
        pushObject.on('registration').subscribe((registration: any) => {
         let idRegistration = registration.registrationId
         this.userService.setIdRegistration(idRegistration)
        });
        
        pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
        */
        this.fcm.subscribeToTopic('marketing');
        this.fcm.getToken().then(function (token) {
            console.log("Id Registration IOS:");
            console.log(token);
            var idRegistration = token;
            _this.userService.setIdRegistration(idRegistration);
        }, function (error) {
            console.log("error");
            if (error) {
                console.log("error: ", error);
            }
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log(token);
        });
    };
    //Eventos
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component, { section: page.id, sectionName: page.nombre });
    };
    MyApp.prototype.closeSession = function () {
        this.appPreferences.store("user", "");
        this.userService.deleteData();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        this.menuCtrl.enable(false, 'menu');
    };
    MyApp.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(false, 'menu');
        this.listenLoginEvents();
    };
    MyApp.prototype.menuClosed = function () {
        this.events.publish('menu:closed', '');
    };
    MyApp.prototype.menuOpened = function () {
        this.events.publish('menu:opened', '');
    };
    MyApp.prototype.listenLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.userData = _this.userService.getData();
            console.log("Datos de usuario: ", _this.userData);
            if (_this.userData.user.userdata.admin == 1) {
                _this.pages = [
                    { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] }
                ];
                _this.userData.user.userdata.sections.forEach(function (section) {
                    _this.pages.push({
                        component: __WEBPACK_IMPORTED_MODULE_17__pages_sections_sections__["a" /* SectionsPage */],
                        title: section.nombre,
                        id: section.id,
                        nombre: section.nombre
                    });
                });
                _this.pages.push({ title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */], id: 0 }, { title: 'Cargar Noticia', component: __WEBPACK_IMPORTED_MODULE_10__pages_wysiwyg_wysiwyg__["a" /* WysiwygPage */], id: 0 }, { title: 'Agregar Usuarios', component: __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */], id: 0 }, { title: 'Comentarios', component: __WEBPACK_IMPORTED_MODULE_16__pages_comments_chat_comments_chat__["a" /* CommentsChatPage */], id: 0 }, { title: 'Soporte', component: __WEBPACK_IMPORTED_MODULE_15__pages_users_chat_users_chat__["a" /* UsersChatPage */], id: 0 }, { title: 'Privilegios de Usuarios', component: __WEBPACK_IMPORTED_MODULE_13__pages_users_users__["a" /* UsersPage */], id: 0 });
            }
            else if (_this.userData.user.userdata.admin == 2) {
                _this.pages = [
                    { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
                    { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */] },
                ];
            }
            else {
                _this.pages = [
                    { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
                    { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */] },
                    { title: 'Contactar con administrador', component: __WEBPACK_IMPORTED_MODULE_15__pages_users_chat_users_chat__["a" /* UsersChatPage */] },
                ];
            }
            _this.menuCtrl.enable(true, 'menu');
        });
        this.events.subscribe('user:signup', function () {
            //this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            //this.enableMenu(false);
            // alert("Cerrando sesion")
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/macdarwinf/Documents/workspace/Interfresas/src/app/app.html"*/'<ion-menu [content]="content" id="menu" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n  <ion-header>\n    <ion-toolbar id="my-toolbar">\n      <ion-item *ngIf="userData" color="trans" no-lines>\n        <ion-avatar item-left>\n          <img src="assets/img/user.jpg">\n        </ion-avatar>\n        <h2>{{userData.user.userdata.nombre}}</h2>\n        <h3>{{userData.user.userdata.email}}</h3>\n        <strong>{{userData.user.userdata.usuario}}</strong>\n      </ion-item>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="shareRecipe()">\n        Compartir <ion-icon name="share"></ion-icon>\n      </button>\n      <button menuClose ion-item (click)="closeSession()">Salir</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/macdarwinf/Documents/workspace/Interfresas/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__["a" /* AppPreferences */],
        __WEBPACK_IMPORTED_MODULE_11__services_user__["a" /* UserService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
	"host": "http://www.app.interfresa.com/"
};

/***/ })

},[414]);
//# sourceMappingURL=main.js.map