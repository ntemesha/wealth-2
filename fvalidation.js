function val (enquiryform) {
	var missingFields = false;
	var strFields = "";
	
	if(frm.fname.value==""){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.lname.value==""){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.email.value==""){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.address.value==""){
		missingFields = true;		strFields += "Please enter your First Name\n";
	}
	if(frm.city.selectedIndex==0){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.state.selectedIndex==0){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.postcode.value=="" || isNaN(frm.postcode.value)){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.phone.selectedIndex==0 || isNaN(frm.phone.selectedIndex)){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.service.selectedIndex==0){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.enquiryBox.selectedIndex==0){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	if(frm.fname.value==""){
		missingFields = true;
		strFields += "Please enter your First Name\n";
	}
	
		
	if(missingFields){
		alert("You must provide the following before submitting: \n" +strFields); 
		return false;
	}
	return true;