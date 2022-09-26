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