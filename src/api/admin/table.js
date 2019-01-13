import bcryptjs from "bcryptjs";
import { GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS,
    SUBSIDIARY, JWT } from "../../constants";

const table = [
    {
        serial: "ABC",
        category: "ABC",
        title: "Mrs",
        surname: "Eve",
        other_name: "Tera",
        gender: GENDER.FEMALE,
        birth_date: new Date(1987, 6, 20),
        marital_status: MARITAL_STATUS.MARRIED,
        country_iso2: "ng",
        state_id: 1,
        county_id: 90,
        email: "admin@peacegroup.ng",
        password: bcryptjs.hashSync("peace", JWT.saltRounds),
        otp: bcryptjs.hashSync("1234", JWT.saltRounds),
        otp_count: 1,
        kin: "Joel",
        kin_phone: "ABC",
        kin_address: "ABC",
        phone_office: "08134836164",
        guarantor1: "ABC",
        guarantor1_phone: "ABC",
        guarantor1_address: "ABC",
        employment_status: EMPLOYMENT_STATUS.ON_DUTY,
        terminal_id: 1,
        superior_id: 1,
        office_id: 1,
        subsidiary: SUBSIDIARY.PMT,
        created_by: 1,
    },
];

export default table;
