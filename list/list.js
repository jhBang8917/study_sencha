Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		Ext.define('company',{
			extend : 'Ext.data.Model',
			config: {
				fields : ['grade','ban','name']
			}
		});//모델 정의
		
		var companyStore = Ext.create('Ext.data.Store',{
			model : 'company',
			sorters : 'grade',
			data: [{//보통은 서버에있음
				grade : '1',ban: '1', name: '홍길동1'
			},{
				grade : '2',ban: '3', name: '홍길동2'
			},{
				grade : '1',ban: '1', name: '홍길동4'
			},{
				grade : '4',ban: '1', name: '홍길동5'
			},{
				grade : '3',ban: '2', name: '홍길동6'
			},{
				grade : '4',ban: '3', name: '홍길동7'
			}],
			grouper : {
				groupFn : function(record){
					return record.get('grade')[0]+'학년';
				}
			}
		})
		
		var rootPanel = new Ext.create('Ext.Panel',{//new 빼도됨
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [{
				xtype : 'list',
				flex : 1,
				store : companyStore,//데이터를 저장한 곳
				itemTpl:'{grade}학년 {ban}반  이름: {name}',//store에 저장된 데이터를 표현하는 방법
				grouped:true,
				indexBar: true,
				onItemDisclosure:true,
				listeners:{
					//itemtap: function( this, index, target, record, e, eOpts )연관배열안에서는 this(list) 못씀
					itemtap: function( datalist, index, target, record, e, eOpts ){
						Ext.Msg.alert('Title',record.get('grade')+'학년 '+record.get('ban')+'반 '+record.get('name'));//api보고하면된다
					}
				}
			}]
		
		});
		
	}//launch
});