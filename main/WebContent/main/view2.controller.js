sap.ui.controller("main.view2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf main.view2
*/
	onInit: function() {
    debugger;
    /*var that=this;
		this.getView().addEventDelegate(
		{
			onBeforeShow : function(evt){
				  debugger;
				var inputvalue=evt.data.num1
				//var inputuvalue2=inputvalue.getValue();
				//alert(inputvalue)
				var idinput=that.getView().byId("IDNAME2")
				idinput.setValue(inputvalue)
			}
			
			
			
		}		
		
		)*/
    var that=this;
	this.getView().addEventDelegate(
	{
		onBeforeShow : function(evt){
			  debugger;
			var fulname=evt.data.name;
			
			var qualifctn=evt.data.qualification;
			
			var phonenumber=evt.data.number;
			
			
			//get the control id's
			var idinput=that.getView().byId("idtxt1");
			
			
			
			var idinput2=that.getView().byId("idtxt2");
			
			var idinput3=that.getView().byId("idtxt3");
			
			
			/////////setting values
			idinput.setText(fulname)
			
			
			idinput2.setText(phonenumber)
			
			idinput3.setText(qualifctn)
			
			
			
		}
		
		
		
	}		
	
	)
    
		
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf main.view2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf main.view2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf main.view2
*/
//	onExit: function() {
//
//	}

});