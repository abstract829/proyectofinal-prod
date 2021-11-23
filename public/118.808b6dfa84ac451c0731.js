"use strict";(self.webpackChunkproyecto_final=self.webpackChunkproyecto_final||[]).push([[118],{1118:(L,p,c)=>{c.r(p),c.d(p,{ForoModule:()=>w});var g=c(8583),u=c(8663),h=c(2359),o=c(639),C=c(2340),_=c(1841);let f=(()=>{class n{constructor(t){this.http=t,this.url=C.N.url}getForos(){return this.http.get(`${this.url}/foro/get`)}getForoById(t){return this.http.get(`${this.url}/foro/get/${t}`)}getComentariosByForoId(t){return this.http.get(`${this.url}/foro/getcomentarios/${t}`)}addComentario(t){return this.http.post(`${this.url}/foro/addcomentario/`,t)}delComentario(t){return this.http.post(`${this.url}/foro/delcomentario/`,t)}addForo(t){return this.http.post(`${this.url}/foro/addforo/`,t)}delForo(t){return this.http.delete(`${this.url}/foro/delforo/${t}`)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(_.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=c(7556),a=c(665);let b=(()=>{class n{constructor(t){this.router=t}ngOnInit(){}onClickForo(){this.router.navigateByUrl(`/foro/info/${this.foro.id}`)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-foro"]],inputs:{foro:"foro"},decls:6,vars:2,consts:[[1,"card","mb-3",3,"click"],[1,"card-body"],[1,"card-title"],[1,"mt-5"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.NdJ("click",function(){return e.onClickForo()}),o.TgZ(1,"div",1),o.TgZ(2,"h5",2),o._uU(3),o.qZA(),o.TgZ(4,"p",3),o._uU(5),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Oqu(e.foro.title),o.xp6(2),o.hij("Publicado el ",e.foro.fecha,""))},styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.card[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 1fr;grid-gap:5px;width:100%;height:150px;cursor:pointer;background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%)}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{text-align:left}"]}),n})(),Z=(()=>{class n{transform(t,e=0,i=""){return 0===i.length?t.slice(e,e+4):t.filter(Y=>{const N=Y.title.toLowerCase(),B=i.toLowerCase();return N.includes(B)}).slice(e,e+4)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=o.Yjl({name:"paginacionForo",type:n,pure:!0}),n})();function v(n,r){1&n&&(o.TgZ(0,"div",10),o.TgZ(1,"button",11),o._uU(2,"Crear foro"),o.qZA(),o.qZA())}function F(n,r){if(1&n&&(o.TgZ(0,"div"),o._UZ(1,"app-foro",12),o.qZA()),2&n){const t=r.$implicit;o.xp6(1),o.Q6J("foro",t)}}let y=(()=>{class n{constructor(t,e){this.foroService=t,this.authService=e,this.page=0,this.toBuscar=""}get user(){return this.authService.user}ngOnInit(){this.foroService.getForos().subscribe(t=>{this.foros=t.foros})}nextPage(){this.page+4>this.foros.length||(this.page+=4)}backPage(){this.page>0&&(this.page-=4)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(f),o.Y36(d.e))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-principal"]],decls:15,vars:7,consts:[[1,"main"],[1,"buscador"],[1,"input-group"],[1,"input-group-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["class","addforo",4,"ngIf"],[1,"foro"],[4,"ngFor","ngForOf"],[1,"butons"],[1,"btn","btn-primary",3,"click"],[1,"addforo"],["routerLink","/foro/agregar",1,"btn","btn-primary"],[3,"foro"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"span",3),o._uU(4,"Buscar"),o.qZA(),o.TgZ(5,"input",4),o.NdJ("ngModelChange",function(s){return e.toBuscar=s}),o.qZA(),o.qZA(),o.YNc(6,v,3,0,"div",5),o.qZA(),o.TgZ(7,"div",6),o.YNc(8,F,2,1,"div",7),o.ALo(9,"paginacionForo"),o.qZA(),o.TgZ(10,"div",8),o.TgZ(11,"button",9),o.NdJ("click",function(){return e.backPage()}),o._uU(12,"Anterior"),o.qZA(),o.TgZ(13,"button",9),o.NdJ("click",function(){return e.nextPage()}),o._uU(14,"Siguiente"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Q6J("ngModel",e.toBuscar),o.xp6(1),o.Q6J("ngIf",2!=e.user.tipo_user),o.xp6(2),o.Q6J("ngForOf",o.Dn7(9,3,e.foros,e.page,e.toBuscar)))},directives:[a.Fj,a.JJ,a.On,g.O5,g.sg,u.rH,b],pipes:[Z],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.main[_ngcontent-%COMP%]{padding:20px;display:grid;grid-gap:50px;max-width:960px;margin:0 auto 50px}.main[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]{width:100%}.main[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);margin-top:30px}.butons[_ngcontent-%COMP%]{width:100%;text-align:center}.butons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}"]}),n})();var T=c(8239),P=c(8259),l=c.n(P);function O(n,r){if(1&n){const t=o.EpF();o.TgZ(0,"button",4),o.NdJ("click",function(){return o.CHM(t),o.oxw().delComentario()}),o._uU(1,"Borrar"),o.qZA()}}let M=(()=>{class n{constructor(t,e){this.authService=t,this.foroService=e}get logedUser(){return this.authService.user}ngOnInit(){this.authService.getUserById(this.comentario.iduser).subscribe(t=>{this.user=t.user})}delComentario(){console.log(this.comentario),this.foroService.delComentario(this.comentario).subscribe(t=>{t.ok&&window.location.reload()})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d.e),o.Y36(f))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-comentario"]],inputs:{comentario:"comentario"},decls:8,vars:3,consts:[[1,"card","mb-3"],[1,"card-body"],[1,"mt-5"],["class","btn btn-primary mt-5",3,"click",4,"ngIf"],[1,"btn","btn-primary","mt-5",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"p"),o._uU(3),o.qZA(),o.TgZ(4,"p",2),o._uU(5),o.qZA(),o.qZA(),o.TgZ(6,"div"),o.YNc(7,O,2,0,"button",3),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Oqu(e.comentario.comentario),o.xp6(2),o.hij("Comentado por : ",e.user.name,""),o.xp6(2),o.Q6J("ngIf",e.comentario.iduser==e.logedUser.id))},directives:[g.O5],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.card[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 1fr;grid-gap:5px;background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%)}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{text-align:left}.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);float:right;margin-right:10px}"]}),n})();function A(n,r){if(1&n&&o._UZ(0,"img",15),2&n){const t=o.oxw();o.s9C("src",t.user.img,o.LSH)}}function q(n,r){1&n&&o._UZ(0,"img",16)}function x(n,r){if(1&n){const t=o.EpF();o.TgZ(0,"button",17),o.NdJ("click",function(){return o.CHM(t),o.oxw().delForo()}),o._uU(1,"Eliminar foro"),o.qZA()}}function k(n,r){1&n&&o._UZ(0,"app-comentario",18),2&n&&o.Q6J("comentario",r.$implicit)}let U=(()=>{class n{constructor(t,e,i,s){this.route=t,this.foroService=e,this.authService=i,this.router=s,this.toComentar=""}get logedUser(){return this.authService.user}ngOnInit(){this.route.params.subscribe(({id:t})=>{this.foroService.getForoById(t).subscribe(e=>{this.foro=e.foro,this.authService.getUserById(this.foro.creado_por).subscribe(i=>{this.user=i.user}),this.foroService.getComentariosByForoId(this.foro.id).subscribe(i=>{this.comentarios=i.comentarios})})})}addComentario(){this.foroService.addComentario({iduser:this.logedUser.id,idforo:this.foro.id,comentario:this.toComentar}).subscribe(e=>{e.ok&&window.location.reload()})}delForo(){var t=this;return(0,T.Z)(function*(){yield t.foroService.delForo(t.foro.id).subscribe(e=>{e.ok?l().fire("Listo!","Se elimino correctamente el foro!","success"):l().fire("Error!","Hubo un error eliminando el foro!","error")}),setTimeout(()=>{t.router.navigateByUrl("/foro/busqueda")},1e3)})()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u.gz),o.Y36(f),o.Y36(d.e),o.Y36(u.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-foro-info"]],decls:28,vars:10,consts:[[1,"main","mt-3"],[1,"user"],[1,"mb-3"],["alt","",3,"src",4,"ngIf"],["src","/assets/user.jpg","alt","",4,"ngIf"],[1,"mt-4"],[1,"info"],[1,"title"],[1,"desc"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"comentarios"],[3,"comentario",4,"ngFor","ngForOf"],[1,"addcomentario"],["rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","mt-3",3,"click"],["alt","",3,"src"],["src","/assets/user.jpg","alt",""],[1,"btn","btn-primary",3,"click"],[3,"comentario"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h3",2),o._uU(3),o.qZA(),o.YNc(4,A,1,1,"img",3),o.YNc(5,q,1,0,"img",4),o.TgZ(6,"p",5),o._uU(7),o.qZA(),o.qZA(),o.TgZ(8,"div",6),o.TgZ(9,"div",7),o.TgZ(10,"h3"),o._uU(11),o.qZA(),o.qZA(),o.TgZ(12,"div",8),o.TgZ(13,"p"),o._uU(14),o.qZA(),o.qZA(),o.TgZ(15,"p"),o._uU(16),o.qZA(),o.YNc(17,x,2,0,"button",9),o.qZA(),o.TgZ(18,"div",10),o.TgZ(19,"h3"),o._uU(20,"Comentarios"),o.qZA(),o.YNc(21,k,1,1,"app-comentario",11),o.qZA(),o.TgZ(22,"div",12),o.TgZ(23,"h4"),o._uU(24,"Agrega un comentario"),o.qZA(),o.TgZ(25,"textarea",13),o.NdJ("ngModelChange",function(s){return e.toComentar=s}),o.qZA(),o.TgZ(26,"button",14),o.NdJ("click",function(){return e.addComentario()}),o._uU(27,"Comentar"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Oqu(e.user.name),o.xp6(1),o.Q6J("ngIf",e.user.img),o.xp6(1),o.Q6J("ngIf",!e.user.img),o.xp6(2),o.Oqu(e.user.email),o.xp6(4),o.Oqu(e.foro.title),o.xp6(3),o.Oqu(e.foro.desc),o.xp6(2),o.hij("Publicado en ",e.foro.fecha,""),o.xp6(1),o.Q6J("ngIf",e.logedUser.id==e.foro.creado_por),o.xp6(4),o.Q6J("ngForOf",e.comentarios),o.xp6(4),o.Q6J("ngModel",e.toComentar))},directives:[g.O5,g.sg,a.Fj,a.JJ,a.On,M],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.main[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 50px;display:grid;grid-template-columns:1fr 2fr;grid-gap:20px}.main[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{grid-column:2/3;background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);border-radius:5px;padding:30px}.main[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{grid-column:1/2;background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);border-radius:5px;padding:30px;text-align:center}.main[_ngcontent-%COMP%]   .comentarios[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .addcomentario[_ngcontent-%COMP%]{grid-column:1/3}.main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}"]}),n})(),I=(()=>{class n{constructor(t,e,i,s){this.fb=t,this.auth=e,this.foroService=i,this.router=s,this.foroForm=this.fb.group({title:[,a.kI.required],desc:[,a.kI.required]})}get user(){return this.auth.user}ngOnInit(){}onCrear(){const{title:t,desc:e}=this.foroForm.value;this.newForo={title:t,desc:e,creado_por:this.user.id},this.foroForm.valid?this.foroService.addForo(this.newForo).subscribe(s=>{s.ok?(l().fire("Listo!","Se agrego correctamente el foro!","success"),setTimeout(()=>{this.router.navigateByUrl("/foro/busqueda")},1e3)):l().fire("Error!","Error al agregar el foro!","error")}):l().fire("Error!","Complete todos los campos!","error")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a.qu),o.Y36(d.e),o.Y36(f),o.Y36(u.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-add-foro"]],decls:13,vars:1,consts:[[1,"container"],[3,"formGroup"],[1,"title"],["for","title"],["type","text","formControlName","title",1,"form-control"],[1,"desc"],["for","desc"],["rows","5","formControlName","desc",1,"form-control"],[1,"add"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"form",1),o.TgZ(2,"div",2),o.TgZ(3,"label",3),o._uU(4,"Titulo"),o.qZA(),o._UZ(5,"input",4),o.qZA(),o.TgZ(6,"div",5),o.TgZ(7,"label",6),o._uU(8,"Descripcion"),o.qZA(),o._UZ(9,"textarea",7),o.qZA(),o.TgZ(10,"div",8),o.TgZ(11,"button",9),o.NdJ("click",function(){return e.onCrear()}),o._uU(12,"Crear foro"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Q6J("formGroup",e.foroForm))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.container[_ngcontent-%COMP%]{max-width:768px;margin:30px auto;background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);border-radius:5px;padding:20px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:20px}.container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{margin-bottom:10px}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px}"]}),n})(),m=(()=>{class n{constructor(t,e){this.authService=t,this.router=e}get user(){return this.authService.user}canActivate(){return 2!=this.user.tipo_user||(this.router.navigateByUrl("/foro/busqueda"),!1)}canLoad(){return 2!=this.user.tipo_user||(this.router.navigateByUrl("/foro/busqueda"),!1)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(d.e),o.LFG(u.F0))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const J=[{path:"",component:h.C,children:[{path:"busqueda",component:y},{path:"info/:id",component:U},{path:"agregar",component:I,canActivate:[m],canLoad:[m]},{path:"**",redirectTo:"busqueda"}]}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.ez,S,a.u5,a.UX]]}),n})()}}]);