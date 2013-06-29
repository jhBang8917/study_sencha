Ext.application({
	requires:[
	  	    'Ext.form.Panel',
	  	    'Ext.form.FieldSet',
	  	    'Ext.field.DatePicker',
	  	    'Ext.field.Spinner',
	  	    'Ext.field.Select',
	  	    'Ext.field.Url',
	  	    'Ext.field.Email',
	  	    'Ext.field.Slider',
	  	    'Ext.data.JsonP'
	],
	launch : function(){
		
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월',
		                       '7월','8월','9월','10월','11월','12월'];
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber' , type : 'string'
				},{
					name : 'text' , type : 'string'
				}]
			}
		});
		
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', text : '남'
			},{
				indexNumber : '2', text : '여'
			}]
		});
		//센차 아키텍트에서는 var formPanel 이런식으로 안만들어줌
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					id : 'nameId',//id값부여  Ext.getCmp위해서
					label : '이름',
					clearIcon : true,
					
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					id : 'birthday',
					label : '생연월일',
					value : date,
					dateFormat : 'Y/m/d',
					picker: {
						useTitles : true,
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : [ 'year','month','day']
		            }
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					id : 'mili',
					label : '군필여부',
					checked : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					id : 'career',
					label : '경력',
					minValue : 0,
					maxValue : 100,
					stepValue : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						id : 'gender',
						label : '성별',
						store : genderStore
					},{
						xtype : 'numberfield',
						name : 'age',
						id:'age',
						label : '나이',
						value : 22,
						
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					id:'email',
					label : '이메일',
					placeHolder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					id:'url',
					label : '홈페이지'
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					width : '100%',
					items : [{
						xtype : 'sliderfield',
						label : '희망연봉',
						name : 'pay',
						id:'pay',
						value : 2000,
						maxValue : 10000,
						minValue : 1000,
						increment : 100,
						width : '85%',
						listeners:{  //이벤트 리스너 장착
				    		 	change:function(slider, thumb, newValue, oldValue){
				    		 		Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    		 	},
				    	        drag: function(slider){
				    	        	 	console.log('drag');
				    	        	 	Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        },
				    	        dragend: function(slider, thumb, value){
				    	        		console.log('dragend');
				    	        		//Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        }
				    	 	}
					
					},{
				    	 	xtype:'textfield',
				    	 	id:'result',
				    	 	value:'2000만원',
				    	 	width : '15%',
				    	 	clearIcon : false
					}]
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							//console.log(Ext.ComponentQuery.query('emailfield')[0]);
							var loadValues = formPanel.getValues();
							//console.log("loadValues.name : "+ loadValues.name);
							//console.log("Ext.ComponentQuery.query('textfield')[0] : "+Ext.ComponentQuery.query('textfield')[0].getValue());
                      	    //console.log("Ext.ComponentQuery.query('textfield', formPanel)[0] : "+Ext.ComponentQuery.query('textfield', formPanel)[0].getValue());                              	    
                      	    //console.log("Ext.ComponentQuery.query('#url', formPanel)[0].getValue() : "+Ext.ComponentQuery.query('#url', formPanel)[0].getValue());
							//주석처리된거는 너무길다. 아래방법이
							// id를 이용하여 formPanel에 입력한 값을 저장하는 방법 
                      	    var name = Ext.getCmp('nameId').getValue(); 
                      	    var birthday = Ext.getCmp('birthday').getValue(); 
                      	    var mili = Ext.getCmp('mili').getChecked(); 
                      	    var career = Ext.getCmp('career').getValue(); 
                      	    var gender = Ext.getCmp('gender').getRecord( ).get('text') ; 
                      	    var age = Ext.getCmp('age').getValue(); 
                      	    var email = Ext.getCmp('email').getValue(); 
                      	    var url = Ext.getCmp('url').getValue(); 
                      	    var pay = Ext.getCmp('result').getValue(); 
                      	    
                      	    console.log('name : '+name);
                      	    console.log('birthday : '+birthday);
                      	    console.log('mili : '+mili);
                      	    console.log('career : '+career);
                      	    console.log('gender : '+gender);
                      	    console.log('age : '+age);
                      	    console.log('email : '+email);
                      	    console.log('url : '+url);
                      	    console.log('pay : '+pay);
                      	  
                      	   /* formPanel.submit({//좋은방법이아님???
                      	    		url:'formdata.jsp',
                      	    		method : 'POST',
                      	    		//params: formPanel.getValues(),
                      	    		
                      	    		params : [//query string의 value??-----url에서 protocl://host/path/querystring(ex-id=abc&pwd=22)
                      	    		          {"name":name},{"birthday":birthday},{"mili":mili},
                      	    		          {"career":career},{"gender":gender},{"age":age},
                      	    		          {"email":email},{"url":url},{"pay":pay}
                      	    		],
                      	    		
                      	    		success: function(form, response) {
                      	          alert(response["success"]);
                      	    		},
                      	    		failure: function(form, response) {
                      	          alert(response["failure"]);
                      	    		}
				   	    			
			   	    		 	});*/
                      	    
							/*실제로 알아야 할 것--ajax/jsonp로 통신*/
                      	    //크롬 네트워크 가서 확인해보기-함수로만들어줘서 전송해줌
                      	    Ext.Viewport.mask({xtype:'loadmask',message:'loading...'});//로딩 동그라미
	              			Ext.data.JsonP.request({
	              				url : 'http://hanbit1.cafe24.com/sencha/formdata_jsonp.jsp',
	              				callbackKey : 'callback',//콜백키 값이 다 다를수있기때문에???어떻게만들ㅇ달라고 요청하는것
	              				params : [name,birthday,mili,career,gender,age,email,url,pay], 
	              				success : function(result){
	              					Ext.Viewport.unmask();
	              					if(result.success=="ok"){
	              						alert("정상처리 되었습니다.");
	              					}else if(result.failure == "fail"){
	              						alert("다시 입력해주세요.");
	              					}
	              				},
	              				failure : function(result){
	              					Ext.Viewport.unmask();
	              					alert("failure : "+result);
	              				}
	              				
	              			});
	              			
                      	    
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}]//end fieldset items
			}]//end formPanel items
		});//end formPanel
	}//end launch function
});




