var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"PlayoutComponent","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"about_me","component":"AboutUsComponent"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AlayoutComponent","children":[{"path":"","redirectTo":"dashbord","pathMatch":"full"},{"path":"dashbord","component":"DashboardComponent"},{"path":"customer","loadChildren":"./customer/customer.module#CustomerModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/customer/customer-routing.module.ts","module":"CustomerRoutingModule","children":[{"path":"","component":"PIndexComponent"},{"path":"edit/:id","component":"PEditComponent"},{"path":"add","component":"PAddComponent"}],"kind":"module"}],"module":"CustomerModule"}]},{"path":"account","loadChildren":"./account/account.module#AccountModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/account/account-routing.module.ts","module":"AccountRoutingModule","children":[{"path":"","component":"AIndexComponent"}],"kind":"module"}],"module":"AccountModule"}]}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent"},{"path":"logout","component":"LogoutComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"**","component":"ErrorComponent"}],"kind":"module"}]}