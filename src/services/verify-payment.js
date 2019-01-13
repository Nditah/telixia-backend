import request from "request-promise";
import { FLUTTERWAVE } from "../constants";

export function verifyPayment(payable, transaction_code) {
    const payload = {
        "SECKEY": FLUTTERWAVE.SECRET_KEY,
        "txref": transaction_code,
    };

    //please make sure to change this to production url when you go live
    const options = {
        method: 'POST',
        uri: FLUTTERWAVE.TEST_VERIFY_URL,
        body: payload,
        headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'application/json'
        },
        json: true, // Automatically stringifies the body to JSON
    };

    return request(options)
        .then(function (response) {
            const { status, chargecode, amount } = response.body.data;
            if (status === "successful" && chargecode == "00") {
                if (amount === payable) {
                    console.log("Payment successful");
                    // Update Invoice Status to Successful
                    return true;
                }
                console.log(`Invalid Amount ${amount}, Expecting ${payable} `);
                return false;
            }
            console.log(`Invalid status ${status}, chargecode ${chargecode} `);
            return false;
        })
        .catch(function (err) {
            console.log(err);
            return false;
        });
}
