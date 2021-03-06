"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SERVER = {
    GOOGLE_API_KEY: "abc",
    MAX_DISTANCE_RADIUS_TO_SEARCH: "1",
    THUMB_WIDTH: 50,
    THUMB_HEIGHT: 50,
    BASE_DELIVERY_FEE: 25,
    COST_PER_KM: 9, // In USD
    DURATION: {
        MIN_60: 60,
        MIN_90: 90,
        MIN_120: 120
    }
};

var DATABASE = {
    BOOKING_ROLE: {
        AMENITIES: "AMENITIES",
        EVENTS: "EVENTS",
        VEHICLES: "VEHICLES",
        EVENT_CATEGORY: "EVENT_CATEGORY",
        BOOKING: "BOOKING",
        PROMOCODE: "PROMOCODE"
    },
    DISCOUNT_TYPE: {
        CONSTANT: "CONSTANT",
        PERCENTAGE: "PERCENTAGE"

    },
    DOCUMENT_TYPE: {
        DRIVER: 0,
        VEHICLE: 1,
        BANK_DETAIL: 2
    },
    FINANCE_PANEL_REQUESTS: {
        TRANSACTIONS: 0,
        DRIVER_PAYMENTS: 1,
        ISSUES: 2,
        REQUEST: 3

    },
    SERVICE_TYPE: {
        RIDE_SHARING: 0,
        RESERVATION: 1,
        DELIVERY: 2,
        TOPUP: 3,
        THINGS_TO_DO: 4,
        AFFILIATE_PARTNERS: 5
    },
    SERVICE_PARAMETER_TYPE: {
        DOCUMENT: 0,
        USER: 1,
        CAR_CATEGORY: 2,
        PAYMENT_METHOD: 3,
        RIDE_SETTINGS: 4,
        COMMISSION: 5,
        PROMOTION_CODE: 6,
        DISTRICTS: 7
    },

    BOOKING_STATUS: {
        SCHEDULED: "SCHEDULED",
        ARRIVED: "ARRIVED",
        PENDING: "PENDING",
        PROCESSING: "PROCESSING",
        INITIATED: "INITIATED",
        ACCEPTED: "ACCEPTED",
        QUEUED: "QUEUED",
        ONGOING: "ONGOING",
        DRIVER_REACHED: "DRIVER_REACHED",
        DRIVER_ASSIGNED: "DRIVER_ASSIGNED",
        NO_SHOW: "NO_SHOW",
        TIMEOUT: "TIMEOUT",
        REJECTED: "REJECTED",
        CANCELLED: "CANCELLED",
        COMPLETED: "COMPLETED",
        DRIVER_CANCELLED: "DRIVER_CANCELLED",
        CUSTOMER_CANCELLED: "CUSTOMER_CANCELLED",
        FAILED: "FAILED",
        STARTED: "STARTED",
        ON_THE_WAY: "ON_THE_WAY",
        DELIVERED: "DELIVERED",
        ENROUTE: "EN-ROUTE"
    },
    OBJECT_STATE: {
        TRUE: "true",
        FALSE: "false"
    },
    STRIPETOKEN: {
        SECERTKEY: "sk_test_cvbbmmmnbv"
    },
    TEMPERATURE_UNIT: {
        CELCIUS: "Cel",
        FAHRENHEIT: "fah"
    },
    CODE_LENGTH: 7,
    CARD_STATUS: {
        ZERO: "0",
        ONE: "1"
    },
    PROFILE_PIC_PREFIX: {
        ORIGINAL: "picture_",
        THUMB: "pictureThumb_"
    },
    CARD_TYPE: {
        VISA: "VISA",
        MASTER: "MASTER"
    },
    LOGO_PREFIX: {
        ORIGINAL: "logo_",
        THUMB: "logoThumb_"
    },

    USER_ROLES: {
        ADMIN: "ADMIN",
        CUSTOMER: "CUSTOMER",
        DRIVER: "DRIVER",
        STAFF: "STAFF"
    },
    ISSUE_PRIORITY: {
        EMERGENCY: "P1",
        HIGH: "P2",
        MEDIUM: "P3",
        LOW: "P4",
        UNKNOWN: "P5"
    },
    FIELD_TYPE: {
        STRING: "STRING",
        DROPDOWN: "DROPDOWN",
        FILE: "FILE",
        DATETIME: "DATETIME",
        LOCATION: "LOCATION",
        SELECTLIST: "SELECTLIST",
        CHECKBOXES: "CHECKBOXES",
        DATE: "DATE",
        TIME: "TIME",
        NUMBER: "NUMBER"
    },
    TEMPLATE_TYPE: {
        HELP: "HELP",
        BANK_DETAILS: "BANK_DETAILS"
    },
    ISSUE_SEVERITY: {
        EMERGENCY: "S1",
        HIGH: "S2",
        MEDIUM: "S3",
        LOW: "S4",
        UNKNOWN: "S5"

    },
    LEGAL: {
        PRIVACY_POLICY: "PRIVACY_POLICY",
        TOC: "TOC",
        COPYRIGHT: "COPYRIGHT",
        SOFTWARE_LICENCE: "SOFTWARE_LICENCE",
        LOCATION_INFORMATION: "LOCATION_INFORMATION"
    },

    FILE_TYPES: {
        LOGO: "LOGO",
        DOCUMENT: "DOCUMENT",
        OTHERS: "OTHERS",
        INSURANCE: "INSURANCE",
        INSURANCE_PLACE: "INSURANCE_PLACE",
        PERMIT: "PERMIT",
        OWNERSHIP: "OWNERSHIP",
        VEHICLE: "VEHICLE"
    },
    TEAMS: ["All_Teams", "Communications", "Design", "Engineering", "Finance and Accounting", "Legal", "Marketing", "Operations", "Product", "University", "Business and Sales"],
    SUB_TEAMS: ["All subteams", "Communication", "Design", "Android", "iOS", "Backend", "Frontend", "Data science", "Engineering", "Technical Programme Manager", "Programme Manager", "Manager", "Accounting", "Procurement", "Tax and Treasury", "Insurance", "Legal", "Local Marketing", "Central Marketing", "People Operations", "Launch", "Product Management", "Marketing", "Business development", "Sales", "Marketing"],
    TEAM: {
        OPERATIONS: "OPERATIONS",
        DEVELOPMENT: "DEVELOPMENT",
        LOGISTICS: "LOGISTICS",
        SALES: "SALES",
        MARKETTING: "MARKETTING"
    },
    SUBTEAMS: {
        DEVELOPMENT: "DEVELOPMENT",
        DESIGN: "DESIGN",
        TESTING: "TESTING",
        GROUNDSTAFF: "GROUNDSTAFF",
        CORPORATE: "GROUNDSTAFF",
        CUSTOMER: "CUSTOMER"
    },
    VEHICLE_TYPE: {
        VAN: "Van",
        MOTORCYCLE: "Motorcycle",
        TRUCK: "Truck",
        CAB: "Cab",
        MED: "Med",
        B_TWENTY: "B20"
    },
    DEVICE_TYPES: {
        IOS: "IOS",
        ANDROID: "ANDROID",
        WEB: "WEB"
    },
    LANGUAGE: {
        EN: "EN",
        ES_MX: "ES_MX"
    },
    PAYMENT_OPTIONS: {
        PAYSTACK: 0,
        STRIPE: 1,
        BRAINTREE: 2,
        PAYPAL: 3,
        GOOGLE_WALLET: 4,
        CASH: 5
    }
};

var swaggerDefaultResponseMessages = [{ code: 200, message: "OK" }, { code: 400, message: "Bad Request" }, { code: 401, message: "Unauthorized" }, { code: 404, message: "Data Not Found" }, { code: 500, message: "Internal Server Error" }];

var SCREEN_TO_SHOW = {
    HOMEPAGE: "HOMEPAGE",
    TRACKING: "TRACKING",
    FEEDBACK: "FEEDBACK"
};

var MASSAGE_TYPES = {
    DEEP_TISSUES: "DEEP_TISSUES",
    REMEDIAL: "REMEDIAL",
    SPORTS: "SPORTS",
    SHIATSU: "SHIATSU",
    SWEDISH: "SWEDISH"
};
var BOOKING_STATUS = {
    PROCESSING: "PROCESSING",
    INITIATED: "INITIATED",
    ACCEPTED: "ACCEPTED",
    NO_SHOW: "NO_SHOW",
    TIMEOUT: "TIMEOUT",
    REJECTED: "REJECTED",
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    THERAPIST_CANCELLED: "THERAPIST_CANCELLED",
    CUSTOMER_CANCELLED: "CUSTOMER_CANCELLED",
    FAILED: "FAILED",
    STARTED: "STARTED",
    ARRIVED: "ARRIVED",
    DELIVERED: "DELIVERED",
    ON_THE_WAY: "ON_THE_WAY"
};
var CARDS = {
    ADDED: {
        statusCode: 201,
        MESSAGE: "Card added successfully.",
        type: "ADDED"
    },
    UPDATED: {
        statusCode: 201,
        MESSAGE: "Card updated successfully.",
        type: "UPDATED"
    },
    DELETED: {
        statusCode: 201,
        MESSAGE: "Card deleted successfully.",
        type: "DELETED"
    }

};

var PUSH_FLAGS = {
    ADD_PATIENT: 1,
    ADD_TREATMENT_PLAN: 2,
    EDIT_TREATMENT_PLAN: 3,
    ALLOCATE_DRIVER_SIMEDIKA: 4,
    DECLINE_DRIVER_SIMEDIKA: 5,
    DRIVER_ACCEPTED_SIMEDIKA: 6,
    DRIVER_STARTED_SIMEDIKA: 7,
    DRIVER_ENROUTE_SIMEDIKA: 8,
    DRIVER_ARRIVED_SIMEDIKA: 9,
    DRIVER_DELIVERED_SIMEDIKA: 10,

    ALLOCATE_DRIVER: 11,
    DECLINE_DRIVER_REX: 12,
    DRIVER_ACCEPTED_REX: 13,
    DRIVER_STARTED_REX: 14,
    DRIVER_ENROUTE_REX: 15,
    DRIVER_ARRIVED_REX: 16,
    DRIVER_DELIVERED_REX: 17,

    BOOKING_REQUEST_SP: 18
};

var DRIVR_PUSH_FLAGS = {
    ADD_PATIENT: 1,
    ADD_TREATMENT_PLAN: 2,
    EDIT_TREATMENT_PLAN: 3,
    ALLOCATE_DRIVER: 4,
    DECLINE_DRIVER: 5,
    DRIVER_ACCEPTED: 6,
    DRIVER_STARTED: 7,
    DRIVER_ENROUTE: 8,
    DRIVER_ARRIVED: 9,
    DRIVER_ONGOING: 10,
    DRIVER_DELIVERED: 11,
    DRIVER_NO_SHOW: 12,
    BOOKING_REQUEST: 13
};

exports.SERVER = SERVER;
exports.DATABASE = DATABASE;
exports.SCREEN_TO_SHOW = SCREEN_TO_SHOW;
exports.swaggerDefaultResponseMessages = swaggerDefaultResponseMessages;
exports.MASSAGE_TYPES = MASSAGE_TYPES;
exports.BOOKING_STATUS = BOOKING_STATUS;
exports.CARDS = CARDS;
exports.PUSH_FLAGS = PUSH_FLAGS;
exports.DRIVR_PUSH_FLAGS = DRIVR_PUSH_FLAGS;
//# sourceMappingURL=app-constants.js.map