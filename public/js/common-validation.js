
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

// Using custom test method ifsc code validation
const IFSC_CODE_REGEX                     =   "^[A-Z]{4}0[A-Z0-9]{6}$";
const REQUIRED_ERROR_MESSAGE              =   "Required Field";
const IFSC_INVALID_FORMAT_ERROR_MESSAGE   =   "Invalid ifsc code.";

function isValidIfsc(message) {
  return this.test("isValidIfsc", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }

    if (!value.match(IFSC_CODE_REGEX)) {
      return createError({
        path,
        message: message ?? IFSC_INVALID_FORMAT_ERROR_MESSAGE
      });
    }
    return true;
  });
}

// Using custom test method aadhaar validation
const AADHAAR_CARD_REGEX                    =   /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
const AADHAAR_INVALID_FORMAT_ERROR_MESSAGE  =   "Invalid aadhaar card.";

function isValidAadhaar(message) {
  return this.test("isValidAadhaar", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }

    if (!value.match(AADHAAR_CARD_REGEX)) {
      return createError({
        path,
        message: message ?? AADHAAR_INVALID_FORMAT_ERROR_MESSAGE
      });
    }
    return true;
  });
}

// Using custom test method pancard validation
const PANCARD_NAME_REGEX                    =   '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}';
const PANCARD_TOO_SMALL_ERROR_MESSAGE       =   "Pancard must be 10 character.";
const PANCARD_INVALID_FORMAT_ERROR_MESSAGE  =   "Invalid Pancard.";
// Using custom test method
function isValidPancard(message) {
  return this.test("isValidPancard", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }

    if (value.length < 10) {
      return createError({ path, message: message ?? TOO_SMALL_ERROR_MESSAGE });
    }

    if (!value.match(PANCARD_NAME_REGEX)) {
      return createError({
        path,
        message: message ?? PANCARD_INVALID_FORMAT_ERROR_MESSAGE
      });
    }

    return true;
  });
}

// Using custom test method email validation
const EMAIL_NAME_REGEX                    =   /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const EMAIL_INVALID_FORMAT_ERROR_MESSAGE  =   "Invalid email address";

function isValidEmail(message) {
  return this.test("isValidEmail", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }

    if (!value.match(EMAIL_NAME_REGEX)) {
      return createError({
        path,
        message: message ?? EMAIL_INVALID_FORMAT_ERROR_MESSAGE
      });
    }
    return true;
  });
}

Yup.addMethod(Yup.mixed, "isValidPancard",  isValidPancard);
Yup.addMethod(Yup.mixed, "isValidEmail",    isValidEmail);
Yup.addMethod(Yup.mixed, "isValidAadhaar",  isValidAadhaar);
Yup.addMethod(Yup.mixed, "isValidIfsc",     isValidIfsc);
