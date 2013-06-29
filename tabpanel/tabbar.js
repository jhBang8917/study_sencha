Ext.application({
	launch : function(){
		var tabPanel = new Ext.create('Ext.TabPanel',{
			fullscreen : true,
			tabBar:{
				docked: 'bottom',
				layout : {
					pack:'center'
				}
			},
			items : [{
				iconCls: 'info',
				title: 'About'
			},{
				iconCls: 'favorites',
				title: 'Favortie',
				badgeText:'2'
			}]
		})
	}
});