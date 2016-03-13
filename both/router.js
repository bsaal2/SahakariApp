
ApplicationController=RouteController.extend({
	layoutTemplate:'layout'
});

Router.configure({
	controller:'ApplicationController'
});

Router.map(function(){
	this.route('home',{path:'/'});
	this.route('register',{path:'/register'});
});