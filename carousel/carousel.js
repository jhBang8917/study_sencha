Ext.application({
	launch : function(){
		var carousel = new Ext.create('Ext.Carousel',{
			flex:1,
			ui : 'light',
			indicator : true,
			direction : 'horizontal',
			items:[{
				xtype: 'panel',
				html:'<img src="../images/s1.png" width="200"/><br/>직급:사원<br/>이름:아무개'
			},{
				xtype: 'panel',
				html:'<img src="../images/s2.png" width="200"/><br/>직급:사원<br/>이름:아무개'
			},{
				xtype: 'panel',
				html:'<img src="../images/s3.png" width="200"/><br/>직급:사원<br/>이름:아무개'
			}]
		});
		var panel = new Ext.create('Ext.Panel',{
			layout : {
				
				type: 'vbox',
				align : 'stretch',
				pack: 'center'
			},
			items:[carousel]
		});
		Ext.Viewport.add(panel);
	}
});