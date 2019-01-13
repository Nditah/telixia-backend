const table = [
    { name: "ACCESS", value: "3", category: "ERP", description: "[ 1 - 7 ] Required Privilege to access the ERP" },
    { name: "BOOKING", value: "SCHEDULE", category: "BOOKING", description: "[ OFFLINE | DUMMY | SCHEDULE ] Mode of PMT Booking online" },
    { name: "ERP", value: "LIVE", category: "ERP", description: "[ OFFLINE | TESTING | LIVE ] Administrative shutdown of ERP" },
    { name: "BOOKING_FARE", value: "FARE1", category: "BOOKING", description: "[ FARE1 | FARE2 ] Online Booking Fare based on Bus Class" },
    { name: "BOOKING_DISCOUNT", value: "0", category: "BOOKING", description: "[ 0 - 50 ] Percentage Discount for Online Booking " },
    { name: "TAX", value: "2", category: "BOOKING", description: "[ 0 - 100 ] Percentage Tax-rate" },
    { name: "PAYE", value: "2", category: "SALARY", description: "Pay As You Earn Tax Percentage deductible" },
    { name: "FUEL_COST", value: "210", category: "OPERATIONS", description: "Fuel Cost Per Litres in Naira" },
    { name: "DTO_INITIAL_DEPOSIT", value: "10", category: "DTO", description: "Percentage of Vehicle Cost (evaluated at current worth) to be paid by Driver for DTO Scheme" },
    { name: "DTO_REPAYMENT_FOR_HIGHWAY", value: "40", category: "DTO", description: "Percentage of revenue withheld by PMT for vehicle repayment for highway routes" },
    { name: "DTO_SERVICE_CHARGE_FOR_HIGHWAY", value: "20", category: "DTO", description: "Percentage of revenue withheld by PMT for Insurance, Tax, Admin duties, and other overhead for highway routes" },
    { name: "DTO_MAINTENANCE_FOR_HIGHWAY", value: "10", category: "DTO", description: "Percentage of revenue withheld by PMT for vehicle regular maintenance for highway routes" },
    { name: "DTO_FUEL_FOR_HIGHWAY", value: "25", category: "DTO", description: "Percentage of revenue given to Driver for vehicle fuel for the trip for highway routes" },
    { name: "DTO_ALLOWANCE_FOR_HIGHWAY", value: "5", category: "DTO", description: "Percentage of revenue given to Driver for his Welfare for highway routes" },
    { name: "DTO_REPAYMENT_FOR_LOCAL", value: "35", category: "DTO", description: "Percentage of revenue withheld by PMT for vehicle repayment for highway routes" },
    { name: "DTO_SERVICE_CHARGE_FOR_LOCAL", value: "20", category: "DTO", description: "Percentage of revenue withheld by PMT for Insurance, Tax, Admin duties, and other overhead for highway routes" },
    { name: "DTO_MAINTENANCE_FOR_LOCAL", value: "15", category: "DTO", description: "Percentage of revenue withheld by PMT for vehicle regular maintenance for highway routes" },
    { name: "DTO_FUEL_FOR_LOCAL", value: "25", category: "DTO", description: "Percentage of revenue given to Driver for vehicle fuel for the trip for highway routes" },
    { name: "DTO_ALLOWANCE_FOR_LOCAL", value: "5", category: "DTO", description: "Percentage of revenue given to Driver for his Welfare for highway routes" },
];

export default table;
