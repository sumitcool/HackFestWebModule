
function Validate () {
	var myemail=email.value;
	var mypassword=pwd.value;
	var pos = myemail.search("[0-9a-zA-Z]+@[a-zA-Z]\.[a-zA-Z]");
	if(pos==-1 || myemail==null || mypassword==null){
		alert("Login Unsucessful");
	}else{
		alert("Login sucessful");
	}
}