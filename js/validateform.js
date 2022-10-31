jQuery(window).load(function(){jQuery('.input , .validate').focus(function(){if(jQuery(this).val()==jQuery(this).attr('alt'))
jQuery(this).val('');});jQuery('.input , .validate').blur(function(){if(jQuery(this).val()=='')
jQuery(this).val(jQuery(this).attr('alt'));});});function validateForm(form,submission,fancy)
{retval=true;show=0;confirm_field=0;var original,copy;for(i=0;i<form.elements.length;i++)
{type=form.elements[i].getAttribute('type');var node=form.elements[i].nodeName;if(type=='hidden'||form.elements[i].className.indexOf('validate')<0)
continue;element=form.elements[i];if(element.name.indexOf('cemail')>=0)
{confirm_field=1;original=form.email;copy=form.cemail;}
if(element.name.indexOf('confpassword')>=0)
{confirm_field=1;original=form.password;copy=form.confpassword;}
if(node=='INPUT')
{if(type=='text'||type=='password'||type=='textarea'||type=='file')
{if(!isEmpty(element))
{if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}
if(element.name.indexOf('email')>=0)
{if(!IsEmailValid(element))
{if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}}}
else if(type=="radio"||type=="checkbox")
{checked=false;list=form.elements;for(h=0;h<list.length;h++)
{if(element.name==list[h].name)
{if(list[h].checked)
checked=true;}}
if(!checked)
{if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}}}
else if(node=='SELECT')
{if(element.value==""||element.value=="0"||element.value=="Select"||element.value==null)
{if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}}
else if(node=='TEXTAREA')
{if(!isEmpty(element))
{if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}}}
if(confirm_field==1)
{if(original.value!=copy.value)
{element=copy;if(show==0)
{element.focus();show=1;}
displayError(element);retval=false;}}
if(submission=='ajax'&&retval)
{jQuery("#"+fancy).html('<img src="'+base_url+'images/loading.gif" style="margin-top:5px">').show();jQuery.ajax({url:jQuery(form).attr('action'),type:'post',dataType:'json',data:jQuery(form).serialize(),success:function(data){if(data.message=="success")
{if(data.alertmsg!="no")
{jQuery("#"+fancy).html('');alert(data.alertmsg);}
if(data.msg!="no")
{jQuery("#"+fancy).html(data.msg);}
if(data.url!="no")
{location.href=data.url;}}
else
{jQuery("#"+fancy).html(data.message);}},error:function(data){jQuery("#"+fancy).html('Request Failed.');}});return false;}
else
return retval;}
var show;function Validate(id)
{var retval=true;show=0;jQuery('.error').hide();jQuery('.haserror').removeClass('haserror');elements=jQuery('#'+id).find('.validate');for(i=0;i<elements.length;i++)
{element=elements[i];val=value(element);type=jQuery(element).attr('type');if(type=="radio"||type=="checkbox")
{if(!isChecked(element,id))
retval=showError(element);}
else if(!isEmpty(element))
retval=showError(element);if(element.name.indexOf('email')>=0)
{if(!IsEmailValid(element))
retval=showError(element);}}
return retval;}
function isChecked(element,id)
{var retval=false;type=jQuery(element).attr('type');list=jQuery('#'+id).find('.validate');for(h=0;h<list.length;h++)
{if(element.name==list[h].name)
{if(list[h].checked)
retval=true;}}
return retval;}
function value(element)
{var val;if(jQuery(element).attr('multiple')==true)
{val=jQuery(element).val()||[];val=val.join(", ");}
else
val=jQuery(element).val().toString();return val;}
function showError(element)
{if(show==0)
{jQuery(element).focus();show=1;}
displayError(element);return false;}
function displayError(element)
{if(element.tagName=="SELECT")
{jQuery(element).addClass('haserror');jQuery("#"+element.id+"_title.ddTitle").addClass('haserror');}
else
{jQuery(element).addClass('haserror');}
if(element.tagName=="SELECT")
{jQuery(element).focus(function(){jQuery(element).removeClass('haserror');});jQuery("#"+element.id+"_title.ddTitle").focus(function(){jQuery("#"+element.id+"_title.ddTitle").removeClass('haserror');});jQuery("#"+element.id+"_title.ddTitle").click(function(){jQuery("#"+element.id+"_title.ddTitle").removeClass('haserror');});}
else
{jQuery(element).focus(function(){jQuery(element).removeClass('haserror');});jQuery(element).click(function(){jQuery(element).removeClass('haserror');});}}
function isEmpty(str,name)
{var retval=true;var count=0;if(str.value==""||jQuery(str).attr('alt')==jQuery(str).val())
retval=false;else
{for(k=0;k<str.value.length;k++)
{if(str.value.charAt(k)==" ")
count++;}
if(count==str.value.length)
retval=false;}
return retval;}
function IsEmailValid(str,name)
{var retval=true;var AtSym=str.value.indexOf('@');var Period=str.value.lastIndexOf('.');var Space=str.value.indexOf(' ');var Length=str.value.length-1;var index=str.value.indexOf('@');var substr=str.value.substring(index+1);var index2=substr.indexOf('@');var count=0;if(str.value=="")
retval=false;else
{for(k=0;k<str.value.length;k++)
{if(str.value.charAt(k)==" ")
count++;}
if(count==str.value.length)
retval=false;else if((AtSym<1)||(str.value.charAt(0)=='_')||(str.value.charAt(Length)=="_")||(str.value.indexOf("_")==AtSym+1)||(str.value.charAt(AtSym-1)=="_")||(Period<=AtSym+1)||(Period==Length)||((Space>0)&&(Space!=Length))||(index2!=-1))
{retval=false;}}
return retval;}
function isEmptyVal(str)
{var retval=true;var count=0;if(str==""||str==null)
retval=false;else
{for(k=0;k<str.length;k++)
{if(str.charAt(k)==" ")
count++;}
if(count==str.length)
retval=false;}
return retval;}
function Login(form)
{jQuery(form).find('.alert').html('');jQuery(form).find('fieldset').hide();jQuery(form).find('.loading').show();jQuery.ajax({url:base_uri+'login.php',type:'get',data:jQuery(form).serialize(),success:function(data){if(data==1)
window.location.href=base_uri;else
{jQuery(form).find('.alert').html('<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;"><p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span><strong>Alert:</strong>  '+data+'</p></div>');jQuery(form).find('fieldset').show();jQuery(form).find('.loading').hide();}},error:function(data){jQuery(form).find('.alert').html('<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;"><p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span><strong>Alert:</strong> Request Failed</p></div>');jQuery(form).find('fieldset').show();jQuery(form).find('.loading').hide();}});}