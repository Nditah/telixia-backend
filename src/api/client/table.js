import bcryptjs from "bcryptjs";
import { GENDER, JWT } from "../../constants";

const table = [
    {
        client_type: "INDIVIDUAL",
        surname: "Jave",
        other_name: "Scott",
        gender: GENDER.FEMALE,
        birth_date: new Date(1987, 6, 20),
        phone: "08134836164",
        email: "client@peacegroup.ng",
        password: bcryptjs.hashSync("peace", JWT.saltRounds),
        otp: bcryptjs.hashSync("1234", JWT.saltRounds),
        otp_count: 1,
        country_iso2: "ng",
        contact_person: "Adam",
        contact_person_phone: "0802737300",
        created_by: 1,
    },
];

export default table;
