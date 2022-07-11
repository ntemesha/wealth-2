// initialization of error message
var gErrorMsg = "";

function validate() {
	"use strict";
	var isAllOK = false;
	gErrorMsg = "";
	var nameOK = chkName();
	var lnameOK = chkLname();
	var emailOK = chkEmail();
	var addressOK = chkAddress();
	var cityOK = chkCity();
	var stateOK = chkState();
	var phoneOK = chkPhone();
	var serviceOK = chkService();

	if (nameOK & lnameOK & emailOK & addressOK & cityOK & stateOK & phoneOK & serviceOK) {
		isAllOK = true;
	}
	else {
		alert(gErrorMsg);
		gErrorMsg = "";
		isAllOK = false;
	}
	return isAllOK;
}

function chkName() {
	// getting value from the form
	var pname = document.getElementById("fname").value;
	var pattern = /^[a-zA-Z ]+$/
	var nameOk = true

	// checking if the name is empty
	if ((pname.length == 0)) {
		gErrorMsg = gErrorMsg + "Your name cannot be blank\n"
		nameOk = false;
	}
	else {
		if (!pattern.test(pname)) {
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			nameOk = false;
		}
	}
	return nameOk;
}

function chkLname() {
	var pname = document.getElementById("lname").value;
	var pattern = /^[a-zA-Z ]+$/
	var lnameOk = true;
	if ((pname.length == 0)) {
		gErrorMsg = gErrorMsg + "Your Last Name cannot be blank\n"
		lnameOk = false;
	}
	else {
		if (!pattern.test(pname)) {
			gErrorMsg = gErrorMsg + "Your Last Name must only contain alpha characters\n"
			lnameOk = false;
		}
	}
	return lnameOk;

}

function chkEmail() {
	var pemail = document.getElementById("email");
	var result = false;
	var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-za-zA-Z0-9.-]{1,4}$/;
	if (pattern.test(pemail.value)) {
		result = true;
	}
	else { //braces a good idea even if not strictly needed for single statement
		result = false;
		gErrorMsg = gErrorMsg + "Please enter a valid email address (check “@”)\n"
	}
	return result;
}

function chkAddress() {
	var paddress = document.getElementById("address");
	var addressOK = false;
	var pattern = /[a-zA-Z0-9._%+-]+$/;
	if (pattern.test(paddress.value)) {
		addressOK = true;
	}
	else { //braces a good idea even if not strictly needed for single statement
		result = false;
		gErrorMsg = gErrorMsg + "Please enter a valid address \n"
	}
	return addressOK;
}

function chkCity() {
	var pcity = document.getElementById("city");
	var cityOK = false;
	var pattern = /[a-zA-Z0-9._%+-]+$/;
	if (pattern.test(pcity.value)) {
		cityOK = true;
	}
	else { //braces a good idea even if not strictly needed for single statement
		result = false;
		gErrorMsg = gErrorMsg + "Please enter a valid city/town \n"
	}
	return cityOK;
}

function chkState() {
	var selected = false;
	var state = document.getElementById("state").value;
	if (state != "none") {
		selected = true;
	}
	else {
		selected = false;
		gErrorMsg = gErrorMsg + "Please selecte the state you are from\n"
	}
	return selected;
}

function chkPhone() {
	var pphone = document.getElementById("phone");
	var phoneOK = false;
	var pattern = /^[0-9]+$/;
	if (pattern.test(pphone.value)) {
		phoneOK = true;
	}
	else { //braces a good idea even if not strictly needed for single statement
		result = false;
		gErrorMsg = gErrorMsg + "Please enter a valid Phone Number \n"
	}
	return phoneOK;
}

function chkService() {
	var selected = false;
	var service = document.getElementById("service").value;
	if (service != "none") {
		selected = true;
	}
	else {
		selected = false;
		gErrorMsg = gErrorMsg + "Please selected the service you wish to enquire about\n"
	}
	return selected;
}


function init() {
	var regForm = document.getElementById("enquiryform");
	regForm.onsubmit = validate;
}

window.onload = init


/*------------------------------------------------ Transfer between pages------------------------------------------------------------------------ */

function storeitem(item_id) {
	sessionStorage.setItem("item_id", item_id);
	window.location.replace("enquiry.html");
}
function displayitem() {
	document.getElementById("sbj").value = "RE: Enquiry on " + sessionStorage.getItem("item_id");
}


function initalise() {
	var formElement = document.getElementById("enquiryform");

	displayitem()

}

window.onload = initalise;



/*------------------------------------------------------------ Transfer within the page------------------------------------------------ */
function myForm() {
	var product = document.getElementById("service").value;
	sessionStorage.product = product;

	return result;
}

//Store individual product page into sessionStorage
function storeProduct(productName) {
	var options = ["STOCKS", "FOREX", "CRYPTO", "COMMODITIES"];

	options.forEach(array);

	function array(value) {
		if (value == productName) {
			sessionStorage.productIndex = options.indexOf(value);
		}
	}
}

//Fill the subject field with the value of product
function storeSub() {
	document.getElementById("service").selectedIndex = sessionStorage.productIndex;

	var product = document.getElementById("service").value;

	sessionStorage.subject = product;
	document.getElementById("sbj").value = sessionStorage.subject;
}

//Storing first optgroup into array

function productlist1() {
	var select = document.getElementById("service");

	var options = ["STOCKS", "FOREX", "CRYPTO", "COMMODITIES"];

	for (var i = 0; i < options.length; i++) {
		var opt = options[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}

//change the value of the session storage according to the new product selected by user

function change() {
	var product = document.getElementById("service").value;
	sessionStorage.product = product;
	document.getElementById("sbj").value = sessionStorage.product;
}


function productlist1() {
	var select = document.getElementById("service");
	// select.classList.add('dropdown-content');
	var options = ["STOCKS", "FOREX", "CRYPTO", "COMMODITIES"];

	for (var i = 0; i < options.length; i++) {
		var opt = options[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}
// Night mode
var icon = document.getElementById("icon");


function change_theme() {
	document.body.classList.toggle("dark-theme");
	// var ifcontained = document.body.classList.contains("dark-theme");
	if (document.body.classList.contains("dark-theme")) {
		icon.src = "images/sun.png";
	}
	else {
		icon.src = "images/moon.png";
	}
}
icon.addEventListener("click", change_theme);

// Go up button 

function goUp(){
	window.scrollTo(0, 0);
}

// Compound interest calculator
function compoundInterest(principal, interest ,nyear,ntime ) {
                 
	principal = document.getElementById("getPrincipalValue").value;
	interest = document.getElementById("getInterestRate").value;
	nyear = document.getElementById("getYear").value;
	ntime = document.getElementById("getTiming").value;               
	 

  var resultCompound  = ( principal* Math.pow((1 + (interest/(ntime*100))), (ntime*nyear)));

	document.getElementById("outputPrincipal").innerHTML = "Principal Enter is " + principal;
	document.getElementById("outputInterest").innerHTML = "Interest Enter is " + interest;
	document.getElementById("outputInterest").innerHTML = "Number of Years Enter " + nyear;
	document.getElementById("outputtime").innerHTML = "Number of time interestpaid per year " + ntime;
	document.getElementById("compounded").innerHTML = "Interest Plus Principal " + resultCompound;
}