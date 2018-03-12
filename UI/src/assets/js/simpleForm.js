ej.base.enableRipple(true)

    var listObj = new ej.dropdowns.DropDownList({
		placeholder: ' ',
        popupHeight: '200px' 
    });
    listObj.appendTo('#dropdown1');
	var listObj = new ej.dropdowns.DropDownList({
		placeholder: ' ',
        popupHeight: '200px'
    });
    listObj.appendTo('#dropdown2');
	var listObj = new ej.dropdowns.DropDownList({
		placeholder: ' ',
        popupHeight: '200px',
		enabled: false
    });
    listObj.appendTo('#dropdown3');
	
    var numeric = new ej.inputs.NumericTextBox({
        value: 1
    });
    numeric.appendTo('#numeric');
	
	var mask = new ej.inputs.MaskedTextBox({
        mask: '(00000) 00000'
    });
    mask.appendTo('#maskeditPhone');
	
	var mask = new ej.inputs.MaskedTextBox({
        mask: '000 00'
    });
    mask.appendTo('#maskeditPostal');
	
	var comboBoxObj = new ej.dropdowns.ComboBox({
        popupHeight: '230px',
        index: 0,
        placeholder: ''
    });
    comboBoxObj.appendTo('#comboList');
	
	var datepicker = new ej.calendars.DatePicker({
		placeholder: '',
		allowEdit : false,
		onfocusout: function(args) {
				if(args.value !== null){
				  $('#Date-info').css({"display":"none"})
				}
				alert(" previous date is : " + args.prevDate + " \n selected date is : " + args.value);
			},
		dateFormat: "YYYY/MM/DD"
		});
	  datepicker.appendTo('#datepicker');
	 var timepicker = new ej.calendars.TimePicker({
			placeholder: '',
			required:true,
			timeFormat : "h:mmtt"
		})
		timepicker.appendTo('#timepicker');

	 var listObj1 = new ej.dropdowns.MultiSelect({
			placeholder: '',
			mode: 'default'
		});
		listObj1.appendTo('#multiselect');
	
	var checkBoxObj = new ej.buttons.CheckBox({ label: 'Option 1', checked: false });
    checkBoxObj.appendTo('#checked1');
	var checkBoxObj = new ej.buttons.CheckBox({ label: 'Option 2', checked: false });
    checkBoxObj.appendTo('#checked2');
	var checkBoxObj = new ej.buttons.CheckBox({ label: 'Option 3', checked: false });
    checkBoxObj.appendTo('#checked3');
	
	var radioButton = new ej.buttons.RadioButton({  name: 'payment',  value: 'option1', label: 'Option 1', checked: false });
    radioButton.appendTo('#radio1');

    radioButton = new ej.buttons.RadioButton({  name: 'payment',  value: 'option2', label: 'Option 2' });
    radioButton.appendTo('#radio2');

    radioButton = new ej.buttons.RadioButton({  name: 'payment',  value: 'option3', label: 'Option 3' });
    radioButton.appendTo('#radio3');
	
	var buttonFormValidate = new ej.buttons.Button();
    buttonFormValidate.appendTo('#validateSubmit');
	
	/*var options = {
        customPlacement: function(inputElement, errorElement) {
            inputElement.parentElement.appendChild(errorElement);
        }
    };

    var formObj = new ej.inputs.FormValidator('#formId', options);*/
	
	
	var errorSummary = '';
	var htmlObj = '';
	var options = {
		rules: {
			'Textbox': { required: [true, 'Textbox label is required'] },
			'Date': { required: [true, 'Date Field is required'] },
			'timepicker': { required: [true, 'Time Field is required'] }
		},
		/*customPlacement: (inputElement, error) => {
			document.getElementById('error').appendChild(error);
		}*/
		customPlacement: function(inputElement, errorElement) {
			//window.console && console.log( errorElement );
			//window.console && console.log(inputElement.parentElement);
			//errorSummary = errorElement.innerHTML;
			//$('#error').css( "display", "block" );
			//$('#error').append('<li>'+errorSummary+'</li>');
			
			var inputElement = htmlObj = inputElement.parentElement;			
            inputElement.parentElement.appendChild(errorElement);		
			
			//var errorPanelHeight = ($("#error").height());
			//var pageTitleHeight = ($(".page_title").height());
			//var breadcrumbHeight = ($(".bread_crumb").height());
			
			//$(".form-content").css({'margin-top': breadcrumbHeight + pageTitleHeight + (errorPanelHeight-30) +"px" });			
			
			//$(htmlObj).find('#requiredError').html('Required');
        }
	};
	
	/*var options = {
		rules: {
			'Textbox': { required: [true, 'User Name: required'] }
		},
        customPlacement: function(inputElement, errorElement) {
            inputElement.parentElement.appendChild(errorElement);
        }
    };*/

	function alertFunction() {
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
    var formObj = new ej.inputs.FormValidator('#formId', options);
	
	 $('#validateSubmit').click(function(){
      if(formObj.validate()){
       console.log(formObj)
	   alertFunction();
	   $('#error').css( "display", "none" );
	   $(".form-content").css({'margin-top': "160px"});
      }
      else{
        console.log(formObj)
          for(var i=0;i<formObj.errorRules.length;i++){
            var id = $('[name='+formObj.errorRules[i].name+']').attr('id')
            $("label[for='"+id+"']").css({display:"block", color:"#f44336"});
			$('#error').css( "display", "block" );
			$('#error').append('<li>'+formObj.errorRules[i].message+'</li>');
          }
		  
			var errorPanelHeight = ($("#error").height());
			var pageTitleHeight = ($(".page_title").height());
			var breadcrumbHeight = ($(".bread_crumb").height());
			$(".form-content").css({'margin-top': breadcrumbHeight + pageTitleHeight + (errorPanelHeight-60) +"px" });			
      }
    })
	
	
	/*$("input").on("focusout",function(e){
		var regex = new RegExp();
		//regex = $(this).val().trim().test()
		console.log($(this).val().trim()==="", $(this).val());
		if($(this).val().trim()===""){
			$("label[for='"+e.target.id+"']").css({color:"#f44336"});
		}
		else{
			$("label[for='"+e.target.id+"']").css({color:"rgba(0, 0, 0, 0.537)"});
		}
	});
	
$("input").on("keyup",function(e){
  if($(this).val().trim()!==""){
   $("label[for='"+e.target.id+"']").css({color:"rgba(0, 0, 0, 0.537)"});
  }
});*/

 $("input").on("focusout",function(e){
  var regex = new RegExp();
  //regex = $(this).val().trim().test()
  // console.log($(this).val().trim()==="", $(this).val());
    var currentValue = $(this).val().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    currentValue = currentValue.replace(/[_-]/g, " ")
    console.log(currentValue)
  if(currentValue.trim()===""){
   $("label[for='"+e.target.id+"']").css({color:"#f44336"});
  }
  else{
   $("label[for='"+e.target.id+"']").css({color:"rgba(0, 0, 0, 0.537)"});
  }
 });

  $("input").on("keyup",function(e){
    var currentValue = $(this).val().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    currentValue = currentValue.replace(/[_-]/g, " ")
  if(currentValue.trim()!==""){
   $("label[for='"+e.target.id+"']").css({color:"rgba(0, 0, 0, 0.537)"});
  }
 });
	
	
	

