"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyPayment = verifyPayment;

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPayment(payable, transaction_code) {
    var payload = {
        "SECKEY": _constants.FLUTTERWAVE.SECRET_KEY,
        "txref": transaction_code
    };

    //please make sure to change this to production url when you go live
    var options = {
        method: 'POST',
        uri: _constants.FLUTTERWAVE.TEST_VERIFY_URL,
        body: payload,
        headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'application/json'
        },
        json: true // Automatically stringifies the body to JSON
    };

    return (0, _requestPromise2.default)(options).then(function (response) {
        var _response$body$data = response.body.data,
            status = _response$body$data.status,
            chargecode = _response$body$data.chargecode,
            amount = _response$body$data.amount;

        if (status === "successful" && chargecode == "00") {
            if (amount === payable) {
                console.log("Payment successful");
                // Update Invoice Status to Successful
                return true;
            }
            console.log("Invalid Amount " + amount + ", Expecting " + payable + " ");
            return false;
        }
        console.log("Invalid status " + status + ", chargecode " + chargecode + " ");
        return false;
    }).catch(function (err) {
        console.log(err);
        return false;
    });
}
//# sourceMappingURL=verify-payment.js.map