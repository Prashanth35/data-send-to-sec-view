sap.ui.controller("main.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf main.view
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf main.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf main.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf main.view
*/
//	onExit: function() {
//
//	}

	gotoview2 : function(){
		debugger;
		/*var one=this.getView().getParent()
		
		var num=this.getView().byId("IDNAME").getValue();
		
		
		
		one.to("idview2",{num1:num})*/
		
         var appREf=this.getView().getParent()
		
		var fname=this.getView().byId("idFname").getValue();
         var lname=this.getView().byId("idLname").getValue();
         var pnum=this.getView().byId("idnumber").getValue();
         var qualification=this.getView().byId("idqlfctn").getValue();
       
         
         
         
         var fullname=[fname + " " + lname]
		
         appREf.to("idview2",{name:fullname,number:pnum,qualification:qualification})
		
		
		
	}
	
	
	
	
});