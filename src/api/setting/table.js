const table = [
    { name: "ACCESS", value: "3", category: "ERP", description: "[ 1 - 7 ] Required Privilege to access the ERP" },
    { name: "BOOKING", value: "SCHEDULE", category: "BOOKING", description: "[ OFFLINE | DUMMY | SCHEDULE ] Mode of PMT Booking online" },
    { name: "ERP", value: "LIVE", category: "ERP", description: "[ OFFLINE | TESTING | LIVE ] Administrative shutdown of ERP" },
    { name: "BOOKING_FARE", value: "FARE1", category: "BOOKING", description: "[ FARE1 | FARE2 ] Online Booking Fare based on Bus Class" },
    { name: "BOOKING_DISCOUNT", value: "0", category: "BOOKING", description: "[ 0 - 50 ] Percentage Discount for Online Booking " },
    { name: "TAX", value: "2", category: "BOOKING", description: "[ 0 - 100 ] Percentage Tax-rate" },
    { name: "PAYE", value: "2", category: "SALARY", description: "Pay As You Earn Tax Percentage deductible" },
    { name: "FUEL_COST", value: "210", category: "OPERATIONS", description: "Fuel Cost Per Litres in Naira" },
];

export default table;
