"use strict";(self.webpackChunkproyecto_final=self.webpackChunkproyecto_final||[]).push([[119],{7119:(A,d,l)=>{l.r(d),l.d(d,{AuthModule:()=>_});var p=l(8583),g=l(8663),h=l(8259),m=l.n(h),t=l(639),o=l(665),f=l(7556);const Z=[{path:"",children:[{path:"login",component:(()=>{class e{constructor(n,r,i){this.fb=n,this.auth=r,this.router=i,this.miForm=this.fb.group({email:["jose@email.com"],password:[]})}ngOnInit(){}onLogin(n){n.preventDefault();const{email:r,password:i}=this.miForm.value;this.auth.verifyEmail(r).subscribe(a=>{var u;a.ok?(null===(u=a.user)||void 0===u?void 0:u.password)==i?(this.auth.user=a.user,localStorage.setItem("token",a.token),this.router.navigateByUrl("/ofertas")):m().fire("Error!","Password incorrecta!","error"):m().fire("Error!","El correo no existe!","error")})}toRegister(){this.router.navigateByUrl("/auth/register")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(f.e),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:19,vars:1,consts:[[1,"container","auth"],[1,"to"],["routerLink","/auth/login","routerLinkActive","active",1,"log"],["routerLink","/auth/register","routerLinkActive","active",1,"reg"],[3,"formGroup","submit"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","formControlName","email","placeholder","email@example.com",1,"form-control"],["for","password",1,"form-label"],["type","password","formControlName","password",1,"form-control"],[1,"butons"],["type","submit",1,"btn","btn-primary","btn-auth",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3," Iniciar sesion "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Registrarme "),t.qZA(),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"form",4),t.NdJ("submit",function(a){return r.onLogin(a)}),t.TgZ(8,"div",5),t.TgZ(9,"label",6),t._uU(10,"Email address"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"div",5),t.TgZ(13,"label",8),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",10),t.TgZ(17,"button",11),t.NdJ("click",function(a){return r.onLogin(a)}),t._uU(18,"Iniciar sesion"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("formGroup",r.miForm))},directives:[g.rH,g.Od,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.auth[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);color:#fff;max-width:500px;margin-top:10%;padding:20px;border-radius:5px}.auth[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{float:right}.auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;justify-items:center;margin-bottom:20px}.auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%], .auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .reg[_ngcontent-%COMP%]{cursor:pointer;padding:5px}.auth[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);color:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);border-radius:5px}.auth[_ngcontent-%COMP%]   .btn-auth[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);color:#000}"]}),e})()},{path:"register",component:(()=>{class e{constructor(n,r,i){this.fb=n,this.auth=r,this.router=i,this.miForm=this.fb.group({name:[,o.kI.required],email:[,[o.kI.required,o.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],tipo_user:[,o.kI.required],password:[,[o.kI.required,o.kI.minLength(6)]]})}ngOnInit(){}onRegister(n){n.preventDefault();const{email:r,tipo_user:i,name:a,password:u}=this.miForm.value;this.auth.verifyEmail(r).subscribe(C=>{C.ok?m().fire("Error!","El email ya esta registrado!","error"):this.miForm.valid?(this.user={name:a,email:r,tipo_user:i,password:u},this.auth.crearUsuario(this.user).subscribe(c=>{c.ok?(this.auth.user=c.user,localStorage.setItem("token",c.token),this.router.navigateByUrl("/ofertas/busqueda")):console.log(c)})):m().fire("Error!","Debe completar todos los campos!","error")})}validar(n){var r;const i=document.querySelector(`.${n}_error`);(null===(r=this.miForm.get(n))||void 0===r?void 0:r.valid)?null==i||i.classList.add("hide"):null==i||i.classList.remove("hide")}toLogIn(){this.router.navigateByUrl("/auth/login")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(f.e),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:39,vars:1,consts:[[1,"container","auth"],[1,"to"],["routerLink","/auth/login","routerLinkActive","active",1,"log"],["routerLink","/auth/register","routerLinkActive","active",1,"reg"],[3,"formGroup","submit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name",1,"form-control"],["for","email",1,"form-label"],["type","email","formControlName","email",1,"form-control",3,"change"],[1,"email_error","hide",2,"color","yellow"],[1,"email_existe","hide",2,"color","yellow"],["for","perfil",1,"form-label"],["formControlName","tipo_user",1,"form-select"],["value","1"],["value","2"],["value","3"],["for","password",1,"form-label"],["type","password","formControlName","password",1,"form-control",3,"change"],[1,"password_error","hide",2,"color","yellow"],[1,"butons"],["type","submit",1,"btn","btn-primary","btn-auth"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3," Iniciar sesion "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Registrarme "),t.qZA(),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"form",4),t.NdJ("submit",function(a){return r.onRegister(a)}),t.TgZ(8,"div",5),t.TgZ(9,"label",6),t._uU(10,"* Full Name"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"div",5),t.TgZ(13,"label",8),t._uU(14,"* Email address"),t.qZA(),t.TgZ(15,"input",9),t.NdJ("change",function(){return r.validar("email")}),t.qZA(),t.TgZ(16,"small",10),t._uU(17,"El email no es valido"),t.qZA(),t.TgZ(18,"small",11),t._uU(19,"El email ya esta registrado"),t.qZA(),t.qZA(),t.TgZ(20,"div",5),t.TgZ(21,"label",12),t._uU(22,"* Tipo Perfil"),t.qZA(),t.TgZ(23,"select",13),t.TgZ(24,"option",14),t._uU(25,"Egresado"),t.qZA(),t.TgZ(26,"option",15),t._uU(27,"Empresario"),t.qZA(),t.TgZ(28,"option",16),t._uU(29,"Estudiante"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",5),t.TgZ(31,"label",17),t._uU(32,"* Password"),t.qZA(),t.TgZ(33,"input",18),t.NdJ("change",function(){return r.validar("password")}),t.qZA(),t.TgZ(34,"small",19),t._uU(35,"Debe contener al menos 6 digitos"),t.qZA(),t.qZA(),t.TgZ(36,"div",20),t.TgZ(37,"button",21),t._uU(38,"Registrarme"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("formGroup",r.miForm))},directives:[g.rH,g.Od,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.EJ,o.YN,o.Kr],styles:["body[_ngcontent-%COMP%]{margin:0 auto;font-family:Helvetica;font-weight:500}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%)}.auth[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);color:#fff;max-width:500px;margin-top:10%;padding:20px;border-radius:5px}.auth[_ngcontent-%COMP%]   .btn-auth[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);color:#000}.auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;justify-items:center;margin-bottom:20px}.auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%], .auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .reg[_ngcontent-%COMP%]{cursor:pointer;padding:5px}.auth[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:linear-gradient(90deg,#020024 0%,#4f77fa 0%,#5964f1 50%,rgba(51,103,244,.9444152661) 100%);color:linear-gradient(90deg,#020024 0%,#f0f0f0 0%,#e4e1e1 50%,rgba(236,236,236,.9444152661) 100%);border-radius:5px}.auth[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{float:right}"]}),e})()},{path:"**",redirectTo:"login"}]}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Z)],g.Bz]}),e})();var b=l(1841);let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,v,o.UX,b.JF]]}),e})()}}]);