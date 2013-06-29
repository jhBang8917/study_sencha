Ext.application({
	launch : function(){
		var formPanel = new Ext.create('Ext.form.Panel',{
			fullscreen:true,
			standardSubmit : false,// ﬁle upload 하기 위한 속성
			items: [{
				xtype: 'ﬁeldset',
				title: '입사지원서',
				instructions: '각 항목을 적어서 인사부에 제출하세요.',
				defaults: {
					required: true,
					labelAlign: 'left',
					items : [{
						xtype: 'textﬁeld',
						name : 'name',
						label: '이름',
						clearIcon: true,
					},
					{
						xtype: 'datepickerﬁeld',
						name : 'birthday',
						label: '생년월일',
					},{
						xtype: 'checkboxﬁeld',
						name : 'mili',
						label: '군필여부',
						value: true
					}, {
						xtype: 'spinnerﬁeld',
						name : 'spinner',
						label: '경력'
					},
					{
						xtype: 'selectﬁeld',
						name : 'mailfamale',
						width: '60%',
						label: '성별',
						valueField:'malefamale',
						displayField:'title',
						store: malefamaleStore,
						xtype: 'emailﬁeld',
						name : 'email',
						label: 'E-메일',
						placeHolder: 'syh@google.com',
						clearIcon: true
					}, {
						xtype: 'urlﬁeld',
						name : 'url',
						id:'url',
						label: '홈페이지',
						placeHolder: 'http://www.hbilab.org',
						clearIcon: true
					}, {
						xtype: 'sliderﬁeld',
						id:'pay',
						name : 'pay',
						value:5000,
						max: 10000,
						min: 0,
						label: '희망연봉
					}
					layout: {
						type : 'hbox',
						pack : 'center'
					},{
						xtype : 
					},{
						
					}
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							
						}
					}]
					]
				}}]
		});
	}
});