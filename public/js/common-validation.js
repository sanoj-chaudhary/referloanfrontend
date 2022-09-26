$('.numberonly').on('keypress change', function (e) {
  var charCode = (e.which) ? e.which : event.keyCode
  if (String.fromCharCode(charCode).match(/[^0-9]/g))
    return false;
});

$('.address').on('keypress change', function (e) {
  var charCode = (e.which) ? e.which : event.keyCode
  if (String.fromCharCode(charCode).match(/[^A-Za-z0-9 ().,-]/g))
    return false;
});
$(document).on('keypress', '.onlyalphabetsspace', function (event) {
  var regex = new RegExp("^[a-zA-Z \s]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(str)) {
    return false;
  }
});

let panregex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
let panmsg = "Invalid pan number";
let emailregex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let emailmsg = "Invalid emai address";
let aadhaarregex=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
let aadhaarmsg = 'Invalid aadhaar number';