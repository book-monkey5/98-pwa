"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[868],{9868:(M,m,s)=>{s.r(m),s.d(m,{BooksModule:()=>$});var c=s(6895),r=s(8093),o=s(1571),a=s(6384);let f=(()=>{class t{constructor(){this.confirm=new o.vpe}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.lG2({type:t,selectors:[["","bmConfirm",""]],hostBindings:function(n,e){1&n&&o.NdJ("click",function(){return e.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"}}),t})();var g=s(7579),k=s(4482),_=s(5403),b=s(8421),d=s(5032),v=s(8338);let x=(()=>{class t{constructor(n,e,l){this.template=n,this.viewContainer=e,this.authService=l,this.destroy$=new g.x,this.authService.isAuthenticated$.pipe(function h(t){return(0,k.e)((i,n)=>{(0,b.Xf)(t).subscribe((0,_.x)(n,()=>n.complete(),d.Z)),!n.closed&&i.subscribe(n)})}(this.destroy$)).subscribe(u=>{u?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.Rgc),o.Y36(o.s_b),o.Y36(v.e))},t.\u0275dir=o.lG2({type:t,selectors:[["","bmLoggedinOnly",""]]}),t})(),p=(()=>{class t{transform(n){return n?`${n.substring(0,3)}-${n.substring(3)}`:""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=o.Yjl({name:"isbn",type:t,pure:!0}),t})();function B(t,i){if(1&t&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Oqu(n.book.subtitle)}}function C(t,i){if(1&t&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&t){const n=i.$implicit;o.xp6(1),o.hij(" ",n,"")}}function Z(t,i){if(1&t&&(o.TgZ(0,"div")(1,"h4"),o._uU(2,"Published"),o.qZA(),o._uU(3),o.ALo(4,"date"),o.qZA()),2&t){const n=o.oxw(2);o.xp6(3),o.hij(" ",o.xi3(4,1,n.book.published,"longDate")," ")}}function T(t,i){if(1&t&&o._UZ(0,"img",9),2&t){const n=o.oxw(2);o.Q6J("src",n.book.thumbnailUrl,o.LSH)}}const y=function(t){return["/admin/edit",t]};function L(t,i){if(1&t){const n=o.EpF();o.ynx(0),o.TgZ(1,"button",10),o.NdJ("confirm",function(){o.CHM(n);const l=o.oxw(2);return o.KtG(l.removeBook())}),o._uU(2," Remove book "),o.qZA(),o.TgZ(3,"a",11),o._uU(4," Edit book "),o.qZA(),o.BQk()}if(2&t){const n=o.oxw(2);o.xp6(3),o.Q6J("routerLink",o.VKq(1,y,n.book.isbn))}}function A(t,i){if(1&t&&(o.TgZ(0,"div",1)(1,"h2"),o._uU(2),o.qZA(),o.YNc(3,B,2,1,"h3",2),o.TgZ(4,"div",3)(5,"div")(6,"h4"),o._uU(7,"Authors"),o.qZA(),o.YNc(8,C,3,1,"ng-container",4),o.qZA(),o.TgZ(9,"div")(10,"h4"),o._uU(11,"ISBN"),o.qZA(),o._uU(12),o.ALo(13,"isbn"),o.qZA(),o.YNc(14,Z,5,4,"div",2),o.qZA(),o.TgZ(15,"h3"),o._uU(16,"Description"),o.qZA(),o.TgZ(17,"p"),o._uU(18),o.qZA(),o.TgZ(19,"div",5),o.YNc(20,T,1,1,"img",6),o.qZA(),o.TgZ(21,"a",7),o._uU(22,"Back to list"),o.qZA(),o.YNc(23,L,5,3,"ng-container",8),o.qZA()),2&t){const n=o.oxw();o.xp6(2),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(5),o.Q6J("ngForOf",n.book.authors),o.xp6(4),o.hij(" ",o.lcZ(13,7,n.book.isbn)," "),o.xp6(2),o.Q6J("ngIf",n.book.published),o.xp6(4),o.Oqu(n.book.description),o.xp6(2),o.Q6J("ngIf",n.book.thumbnailUrl)}}let I=(()=>{class t{constructor(n,e,l){this.service=n,this.route=e,this.router=l;const u=this.route.snapshot.paramMap.get("isbn");this.service.getSingle(u).subscribe(j=>{this.book=j})}removeBook(){this.book&&this.service.remove(this.book.isbn).subscribe(()=>{this.router.navigateByUrl("/books")})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(a.T),o.Y36(r.gz),o.Y36(r.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-details"]],decls:1,vars:1,consts:[["class","details",4,"ngIf"],[1,"details"],[4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[1,"thumbnails"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(n,e){1&n&&o.YNc(0,A,24,9,"div",0),2&n&&o.Q6J("ngIf",e.book)},dependencies:[c.sg,c.O5,r.yS,f,x,c.uU,p]}),t})();function U(t,i){if(1&t&&o._UZ(0,"img",5),2&t){const n=o.oxw(2);o.Q6J("src",n.book.thumbnailUrl,o.LSH)}}function D(t,i){if(1&t&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Oqu(n.book.subtitle)}}function O(t,i){1&t&&(o.ynx(0),o._uU(1,", "),o.BQk())}function Q(t,i){if(1&t&&(o.ynx(0),o._uU(1),o.YNc(2,O,2,0,"ng-container",0),o.BQk()),2&t){const n=i.$implicit,e=i.last;o.xp6(1),o.hij(" ",n,""),o.xp6(1),o.Q6J("ngIf",!e)}}function Y(t,i){if(1&t&&(o.ynx(0),o.YNc(1,U,1,1,"img",1),o.TgZ(2,"div",2)(3,"h2"),o._uU(4),o.qZA(),o.YNc(5,D,2,1,"h3",0),o.TgZ(6,"div",3),o.YNc(7,Q,3,2,"ng-container",4),o.qZA(),o.TgZ(8,"div"),o._uU(9),o.ALo(10,"isbn"),o.qZA()(),o.BQk()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.book.thumbnailUrl),o.xp6(3),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(2),o.Q6J("ngForOf",n.book.authors),o.xp6(2),o.hij("ISBN ",o.lcZ(10,5,n.book.isbn),"")}}let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],[1,"overview"],[1,"authors"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"]],template:function(n,e){1&n&&o.YNc(0,Y,11,7,"ng-container",0),2&n&&o.Q6J("ngIf",e.book)},dependencies:[c.sg,c.O5,p]}),t})();function F(t,i){if(1&t&&(o.TgZ(0,"li"),o._UZ(1,"bm-book-list-item",4),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.Q6J("book",n)("routerLink",n.isbn)}}function N(t,i){1&t&&(o.TgZ(0,"li"),o._uU(1," No books available. "),o.qZA())}function q(t,i){if(1&t&&(o.TgZ(0,"ul",1),o.YNc(1,F,2,2,"li",2),o.YNc(2,N,2,0,"li",3),o.qZA()),2&t){const n=i.ngIf;o.xp6(1),o.Q6J("ngForOf",n),o.xp6(1),o.Q6J("ngIf",!n.length)}}const w=[{path:"",component:(()=>{class t{constructor(n){this.service=n,this.books$=this.service.getAll()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(a.T))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list"]],decls:2,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book","routerLink"]],template:function(n,e){1&n&&(o.YNc(0,q,3,2,"ul",0),o.ALo(1,"async")),2&n&&o.Q6J("ngIf",o.lcZ(1,1,e.books$))},dependencies:[c.sg,c.O5,r.rH,J,c.Ov]}),t})()},{path:":isbn",component:I}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.Bz.forChild(w),r.Bz]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.ez,S]}),t})()}}]);