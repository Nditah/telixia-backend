const table = [
    {
        iso2: "AC", iso3: "", callingCodes: "['+247',]", currencies: "['USD',]", ioc: "SHP", languages: "['eng',]", name: "Ascension Island", status: "reserved",
    },
    {
        iso2: "AD", iso3: "AND", callingCodes: "['+376',]", currencies: "['EUR',]", ioc: "AND", languages: "['cat',]", name: "Andorra", status: "assigned",
    },
    {
        iso2: "AE", iso3: "ARE", callingCodes: "['+971',]", currencies: "['AED',]", ioc: "UAE", languages: "['ara',]", name: "United Arab Emirates", status: "assigned",
    },
    {
        iso2: "AF", iso3: "AFG", callingCodes: "['+93',]", currencies: "['AFN',]", ioc: "AFG", languages: "['pus',]", name: "Afghanistan", status: "assigned",
    },
    {
        iso2: "AG", iso3: "ATG", callingCodes: "['+1 268',]", currencies: "['XCD',]", ioc: "ANT", languages: "['eng',]", name: "Antigua And Barbuda", status: "assigned",
    },
    {
        iso2: "AI", iso3: "AIA", callingCodes: "['+1 264',]", currencies: "['XCD',]", ioc: "", languages: "['eng',]", name: "Anguilla", status: "assigned",
    },
    {
        iso2: "AL", iso3: "ALB", callingCodes: "['+355',]", currencies: "['ALL',]", ioc: "ALB", languages: "['alb',]", name: "Albania", status: "assigned",
    },
    {
        iso2: "AM", iso3: "ARM", callingCodes: "['+374',]", currencies: "['AMD',]", ioc: "ARM", languages: "['arm', 'rus',]", name: "Armenia", status: "assigned",
    },
    {
        iso2: "AO", iso3: "AGO", callingCodes: "['+244',]", currencies: "['AOA',]", ioc: "ANG", languages: "['por',]", name: "Angola", status: "assigned",
    },
    {
        iso2: "AQ", iso3: "ATA", callingCodes: "['+672',]", currencies: "[]", ioc: "", languages: "[]", name: "Antarctica", status: "assigned",
    },
    {
        iso2: "AR", iso3: "ARG", callingCodes: "['+54',]", currencies: "['ARS',]", ioc: "ARG", languages: "['spa',]", name: "Argentina", status: "assigned",
    },
    {
        iso2: "AS", iso3: "ASM", callingCodes: "['+1 684',]", currencies: "['USD',]", ioc: "ASA", languages: "['eng', 'smo',]", name: "American Samoa", status: "assigned",
    },
    {
        iso2: "AT", iso3: "AUT", callingCodes: "['+43',]", currencies: "['EUR',]", ioc: "AUT", languages: "['ger',]", name: "Austria", status: "assigned",
    },
    {
        iso2: "AU", iso3: "AUS", callingCodes: "['+61',]", currencies: "['AUD',]", ioc: "AUS", languages: "['eng',]", name: "Australia", status: "assigned",
    },
    {
        iso2: "AW", iso3: "ABW", callingCodes: "['+297',]", currencies: "['AWG',]", ioc: "ARU", languages: "['dut',]", name: "Aruba", status: "assigned",
    },
    {
        iso2: "AX", iso3: "ALA", callingCodes: "['+358',]", currencies: "['EUR',]", ioc: "", languages: "['swe',]", name: "Åland Islands", status: "assigned",
    },
    {
        iso2: "AZ", iso3: "AZE", callingCodes: "['+994',]", currencies: "['AZN',]", ioc: "AZE", languages: "['aze',]", name: "Azerbaijan", status: "assigned",
    },
    {
        iso2: "BA", iso3: "BIH", callingCodes: "['+387',]", currencies: "['BAM',]", ioc: "BIH", languages: "['bos', 'cre', 'srp',]", name: "Bosnia & Herzegovina", status: "assigned",
    },
    {
        iso2: "BB", iso3: "BRB", callingCodes: "['+1 246',]", currencies: "['BBD',]", ioc: "BAR", languages: "['eng',]", name: "Barbados", status: "assigned",
    },
    {
        iso2: "BD", iso3: "BGD", callingCodes: "['+880',]", currencies: "['BDT',]", ioc: "BAN", languages: "['ben',]", name: "Bangladesh", status: "assigned",
    },
    {
        iso2: "BE", iso3: "BEL", callingCodes: "['+32',]", currencies: "['EUR',]", ioc: "BEL", languages: "['dut', 'fre', 'ger',]", name: "Belgium", status: "assigned",
    },
    {
        iso2: "BF", iso3: "BFA", callingCodes: "['+226',]", currencies: "['XOF',]", ioc: "BUR", languages: "['fre',]", name: "Burkina Faso", status: "assigned",
    },
    {
        iso2: "BG", iso3: "BGR", callingCodes: "['+359',]", currencies: "['BGN',]", ioc: "BUL", languages: "['bul',]", name: "Bulgaria", status: "assigned",
    },
    {
        iso2: "BH", iso3: "BHR", callingCodes: "['+973',]", currencies: "['BHD',]", ioc: "BRN", languages: "['ara',]", name: "Bahrain", status: "assigned",
    },
    {
        iso2: "BI", iso3: "BDI", callingCodes: "['+257',]", currencies: "['BIF',]", ioc: "BDI", languages: "['fre',]", name: "Burundi", status: "assigned",
    },
    {
        iso2: "BJ", iso3: "BEN", callingCodes: "['+229',]", currencies: "['XOF',]", ioc: "BEN", languages: "['fre',]", name: "Benin", status: "assigned",
    },
    {
        iso2: "BL", iso3: "BLM", callingCodes: "['+590',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "Saint Barthélemy", status: "assigned",
    },
    {
        iso2: "BM", iso3: "BMU", callingCodes: "['+1 441',]", currencies: "['BMD',]", ioc: "BER", languages: "['eng',]", name: "Bermuda", status: "assigned",
    },
    {
        iso2: "BN", iso3: "BRN", callingCodes: "['+673',]", currencies: "['BND',]", ioc: "BRU", languages: "['may', 'eng',]", name: "Brunei Darussalam", status: "assigned",
    },
    {
        iso2: "BO", iso3: "BOL", callingCodes: "['+591',]", currencies: "['BOB', 'BOV',]", ioc: "BOL", languages: "['spa', 'aym', 'que',]", name: "Bolivia, Plurinational State Of", status: "assigned",
    },
    {
        iso2: "BQ", iso3: "BES", callingCodes: "['+599',]", currencies: "['USD',]", ioc: "", languages: "['dut',]", name: "Bonaire, Saint Eustatius And Saba", status: "assigned",
    },
    {
        iso2: "BR", iso3: "BRA", callingCodes: "['+55',]", currencies: "['BRL',]", ioc: "BRA", languages: "['por',]", name: "Brazil", status: "assigned",
    },
    {
        iso2: "BS", iso3: "BHS", callingCodes: "['+1 242',]", currencies: "['BSD',]", ioc: "BAH", languages: "['eng',]", name: "Bahamas", status: "assigned",
    },
    {
        iso2: "BT", iso3: "BTN", callingCodes: "['+975',]", currencies: "['INR', 'BTN',]", ioc: "BHU", languages: "['dzo',]", name: "Bhutan", status: "assigned",
    },
    {
        iso2: "BV", iso3: "BVT", callingCodes: "[]", currencies: "['NOK',]", ioc: "", languages: "[]", name: "Bouvet Island", status: "assigned",
    },
    {
        iso2: "BW", iso3: "BWA", callingCodes: "['+267',]", currencies: "['BWP',]", ioc: "BOT", languages: "['eng', 'tsn',]", name: "Botswana", status: "assigned",
    },
    {
        iso2: "BY", iso3: "BLR", callingCodes: "['+375',]", currencies: "['BYR',]", ioc: "BLR", languages: "['bel', 'rus',]", name: "Belarus", status: "assigned",
    },
    {
        iso2: "BZ", iso3: "BLZ", callingCodes: "['+501',]", currencies: "['BZD',]", ioc: "BIZ", languages: "['eng',]", name: "Belize", status: "assigned",
    },
    {
        iso2: "CA", iso3: "CAN", callingCodes: "['+1',]", currencies: "['CAD',]", ioc: "CAN", languages: "['eng', 'fre',]", name: "Canada", status: "assigned",
    },
    {
        iso2: "CC", iso3: "CCK", callingCodes: "['+61',]", currencies: "['AUD',]", ioc: "", languages: "['eng',]", name: "Cocos (Keeling) Islands", status: "assigned",
    },
    {
        iso2: "CD", iso3: "COD", callingCodes: "['+243',]", currencies: "['CDF',]", ioc: "COD", languages: "['fre', 'lin', 'kon', 'swa',]", name: "Democratic Republic Of Congo", status: "assigned",
    },
    {
        iso2: "CF", iso3: "CAF", callingCodes: "['+236',]", currencies: "['XAF',]", ioc: "CAF", languages: "['fre', 'sag',]", name: "Central African Republic", status: "assigned",
    },
    {
        iso2: "CG", iso3: "COG", callingCodes: "['+242',]", currencies: "['XAF',]", ioc: "CGO", languages: "['fre', 'lin',]", name: "Republic Of Congo", status: "assigned",
    },
    {
        iso2: "CH", iso3: "CHE", callingCodes: "['+41',]", currencies: "['CHF', 'CHE', 'CHW',]", ioc: "SUI", languages: "['ger', 'fre', 'ita', 'roh',]", name: "Switzerland", status: "assigned",
    },
    {
        iso2: "CI", iso3: "CIV", callingCodes: "['+225',]", currencies: "['XOF',]", ioc: "CIV", languages: "['fre',]", name: "Cote d'Ivoire", status: "assigned",
    },
    {
        iso2: "CK", iso3: "COK", callingCodes: "['+682',]", currencies: "['NZD',]", ioc: "COK", languages: "['eng', 'mao',]", name: "Cook Islands", status: "assigned",
    },
    {
        iso2: "CL", iso3: "CHL", callingCodes: "['+56',]", currencies: "['CLP', 'CLF',]", ioc: "CHI", languages: "['spa',]", name: "Chile", status: "assigned",
    },
    {
        iso2: "CM", iso3: "CMR", callingCodes: "['+237',]", currencies: "['XAF',]", ioc: "CMR", languages: "['eng', 'fre',]", name: "Cameroon", status: "assigned",
    },
    {
        iso2: "CN", iso3: "CHN", callingCodes: "['+86',]", currencies: "['CNY',]", ioc: "CHN", languages: "['chi',]", name: "China", status: "assigned",
    },
    {
        iso2: "CO", iso3: "COL", callingCodes: "['+57',]", currencies: "['COP', 'COU',]", ioc: "COL", languages: "['spa',]", name: "Colombia", status: "assigned",
    },
    {
        iso2: "CP", iso3: "", callingCodes: "[]", currencies: "['EUR',]", ioc: "", languages: "[]", name: "Clipperton Island", status: "reserved",
    },
    {
        iso2: "CR", iso3: "CRI", callingCodes: "['+506',]", currencies: "['CRC',]", ioc: "CRC", languages: "['spa',]", name: "Costa Rica", status: "assigned",
    },
    {
        iso2: "CU", iso3: "CUB", callingCodes: "['+53',]", currencies: "['CUP', 'CUC',]", ioc: "CUB", languages: "['spa',]", name: "Cuba", status: "assigned",
    },
    {
        iso2: "CV", iso3: "CPV", callingCodes: "['+238',]", currencies: "['CVE',]", ioc: "CPV", languages: "['por',]", name: "Cabo Verde", status: "assigned",
    },
    {
        iso2: "CW", iso3: "CUW", callingCodes: "['+599',]", currencies: "['ANG',]", ioc: "", languages: "['dut',]", name: "Curacao", status: "assigned",
    },
    {
        iso2: "CX", iso3: "CXR", callingCodes: "['+61',]", currencies: "['AUD',]", ioc: "", languages: "['eng',]", name: "Christmas Island", status: "assigned",
    },
    {
        iso2: "CY", iso3: "CYP", callingCodes: "['+357',]", currencies: "['EUR',]", ioc: "CYP", languages: "['gre', 'tur',]", name: "Cyprus", status: "assigned",
    },
    {
        iso2: "CZ", iso3: "CZE", callingCodes: "['+420',]", currencies: "['CZK',]", ioc: "CZE", languages: "['cze',]", name: "Czech Republic", status: "assigned",
    },
    {
        iso2: "DE", iso3: "DEU", callingCodes: "['+49',]", currencies: "['EUR',]", ioc: "GER", languages: "['ger',]", name: "Germany", status: "assigned",
    },
    {
        iso2: "DG", iso3: "", callingCodes: "[]", currencies: "['USD',]", ioc: "", languages: "[]", name: "Diego Garcia", status: "reserved",
    },
    {
        iso2: "DJ", iso3: "DJI", callingCodes: "['+253',]", currencies: "['DJF',]", ioc: "DJI", languages: "['ara', 'fre',]", name: "Djibouti", status: "assigned",
    },
    {
        iso2: "DK", iso3: "DNK", callingCodes: "['+45',]", currencies: "['DKK',]", ioc: "DEN", languages: "['dan',]", name: "Denmark", status: "assigned",
    },
    {
        iso2: "DM", iso3: "DMA", callingCodes: "['+1 767',]", currencies: "['XCD',]", ioc: "DMA", languages: "['eng',]", name: "Dominica", status: "assigned",
    },
    {
        iso2: "DO", iso3: "DOM", callingCodes: "['+1 809', '+1 829', '+1 849',]", currencies: "['DOP',]", ioc: "DOM", languages: "['spa',]", name: "Dominican Republic", status: "assigned",
    },
    {
        iso2: "DZ", iso3: "DZA", callingCodes: "['+213',]", currencies: "['DZD',]", ioc: "ALG", languages: "['ara',]", name: "Algeria", status: "assigned",
    },
    {
        iso2: "EA", iso3: "", callingCodes: "[]", currencies: "['EUR',]", ioc: "", languages: "[]", name: "Ceuta, Mulilla", status: "reserved",
    },
    {
        iso2: "EC", iso3: "ECU", callingCodes: "['+593',]", currencies: "['USD',]", ioc: "ECU", languages: "['spa', 'que',]", name: "Ecuador", status: "assigned",
    },
    {
        iso2: "EE", iso3: "EST", callingCodes: "['+372',]", currencies: "['EUR',]", ioc: "EST", languages: "['est',]", name: "Estonia", status: "assigned",
    },
    {
        iso2: "EG", iso3: "EGY", callingCodes: "['+20',]", currencies: "['EGP',]", ioc: "EGY", languages: "['ara',]", name: "Egypt", status: "assigned",
    },
    {
        iso2: "EH", iso3: "ESH", callingCodes: "['+212',]", currencies: "['MAD',]", ioc: "", languages: "[]", name: "Western Sahara", status: "assigned",
    },
    {
        iso2: "ER", iso3: "ERI", callingCodes: "['+291',]", currencies: "['ERN',]", ioc: "ERI", languages: "['eng', 'ara', 'tir',]", name: "Eritrea", status: "assigned",
    },
    {
        iso2: "ES", iso3: "ESP", callingCodes: "['+34',]", currencies: "['EUR',]", ioc: "ESP", languages: "['spa',]", name: "Spain", status: "assigned",
    },
    {
        iso2: "ET", iso3: "ETH", callingCodes: "['+251',]", currencies: "['ETB',]", ioc: "ETH", languages: "['amh',]", name: "Ethiopia", status: "assigned",
    },
    {
        iso2: "EU", iso3: "", callingCodes: "['+388',]", currencies: "['EUR',]", ioc: "", languages: "[]", name: "European Union", status: "reserved",
    },
    {
        iso2: "FI", iso3: "FIN", callingCodes: "['+358',]", currencies: "['EUR',]", ioc: "FIN", languages: "['fin', 'swe',]", name: "Finland", status: "assigned",
    },
    {
        iso2: "FJ", iso3: "FJI", callingCodes: "['+679',]", currencies: "['FJD',]", ioc: "FIJ", languages: "['eng', 'fij',]", name: "Fiji", status: "assigned",
    },
    {
        iso2: "FK", iso3: "FLK", callingCodes: "['+500',]", currencies: "['FKP',]", ioc: "", languages: "['eng',]", name: "Falkland Islands", status: "assigned",
    },
    {
        iso2: "FM", iso3: "FSM", callingCodes: "['+691',]", currencies: "['USD',]", ioc: "", languages: "['eng',]", name: "Micronesia, Federated States Of", status: "assigned",
    },
    {
        iso2: "FO", iso3: "FRO", callingCodes: "['+298',]", currencies: "['DKK',]", ioc: "FAI", languages: "['fao', 'dan',]", name: "Faroe Islands", status: "assigned",
    },
    {
        iso2: "FR", iso3: "FRA", callingCodes: "['+33',]", currencies: "['EUR',]", ioc: "FRA", languages: "['fre',]", name: "France", status: "assigned",
    },
    {
        iso2: "FX", iso3: "", callingCodes: "['+241',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "France, Metropolitan", status: "reserved",
    },
    {
        iso2: "GA", iso3: "GAB", callingCodes: "['+241',]", currencies: "['XAF',]", ioc: "GAB", languages: "['fre',]", name: "Gabon", status: "assigned",
    },
    {
        iso2: "GB", iso3: "GBR", callingCodes: "['+44',]", currencies: "['GBP',]", ioc: "GBR", languages: "['eng', 'cor', 'gle', 'gla', 'wel',]", name: "United Kingdom", status: "assigned",
    },
    {
        iso2: "GD", iso3: "GRD", callingCodes: "['+473',]", currencies: "['XCD',]", ioc: "GRN", languages: "['eng',]", name: "Grenada", status: "assigned",
    },
    {
        iso2: "GE", iso3: "GEO", callingCodes: "['+995',]", currencies: "['GEL',]", ioc: "GEO", languages: "['geo',]", name: "Georgia", status: "assigned",
    },
    {
        iso2: "GF", iso3: "GUF", callingCodes: "['+594',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "French Guiana", status: "assigned",
    },
    {
        iso2: "GG", iso3: "GGY", callingCodes: "['+44',]", currencies: "['GBP',]", ioc: "GCI", languages: "['fre',]", name: "Guernsey", status: "assigned",
    },
    {
        iso2: "GH", iso3: "GHA", callingCodes: "['+233',]", currencies: "['GHS',]", ioc: "GHA", languages: "['eng',]", name: "Ghana", status: "assigned",
    },
    {
        iso2: "GI", iso3: "GIB", callingCodes: "['+350',]", currencies: "['GIP',]", ioc: "", languages: "['eng',]", name: "Gibraltar", status: "assigned",
    },
    {
        iso2: "GL", iso3: "GRL", callingCodes: "['+299',]", currencies: "['DKK',]", ioc: "", languages: "['kal',]", name: "Greenland", status: "assigned",
    },
    {
        iso2: "GM", iso3: "GMB", callingCodes: "['+220',]", currencies: "['GMD',]", ioc: "GAM", languages: "['eng',]", name: "Gambia", status: "assigned",
    },
    {
        iso2: "GN", iso3: "GIN", callingCodes: "['+224',]", currencies: "['GNF',]", ioc: "GUI", languages: "['fre',]", name: "Guinea", status: "assigned",
    },
    {
        iso2: "GP", iso3: "GLP", callingCodes: "['+590',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "Guadeloupe", status: "assigned",
    },
    {
        iso2: "GQ", iso3: "GNQ", callingCodes: "['+240',]", currencies: "['XAF',]", ioc: "GEQ", languages: "['spa', 'fre', 'por',]", name: "Equatorial Guinea", status: "assigned",
    },
    {
        iso2: "GR", iso3: "GRC", callingCodes: "['+30',]", currencies: "['EUR',]", ioc: "GRE", languages: "['gre',]", name: "Greece", status: "assigned",
    },
    {
        iso2: "GS", iso3: "SGS", callingCodes: "[]", currencies: "['GBP',]", ioc: "", languages: "['eng',]", name: "South Georgia And The South Sandwich Islands", status: "assigned",
    },
    {
        iso2: "GT", iso3: "GTM", callingCodes: "['+502',]", currencies: "['GTQ',]", ioc: "GUA", languages: "['spa',]", name: "Guatemala", status: "assigned",
    },
    {
        iso2: "GU", iso3: "GUM", callingCodes: "['+1 671',]", currencies: "['USD',]", ioc: "GUM", languages: "['eng',]", name: "Guam", status: "assigned",
    },
    {
        iso2: "GW", iso3: "GNB", callingCodes: "['+245',]", currencies: "['XOF',]", ioc: "GBS", languages: "['por',]", name: "Guinea-bissau", status: "assigned",
    },
    {
        iso2: "GY", iso3: "GUY", callingCodes: "['+592',]", currencies: "['GYD',]", ioc: "GUY", languages: "['eng',]", name: "Guyana", status: "assigned",
    },
    {
        iso2: "HK", iso3: "HKG", callingCodes: "['+852',]", currencies: "['HKD',]", ioc: "HKG", languages: "['chi', 'eng',]", name: "Hong Kong", status: "assigned",
    },
    {
        iso2: "HM", iso3: "HMD", callingCodes: "[]", currencies: "['AUD',]", ioc: "", languages: "[]", name: "Heard Island And McDonald Islands", status: "assigned",
    },
    {
        iso2: "HN", iso3: "HND", callingCodes: "['+504',]", currencies: "['HNL',]", ioc: "HON", languages: "['spa',]", name: "Honduras", status: "assigned",
    },
    {
        iso2: "HR", iso3: "HRV", callingCodes: "['+385',]", currencies: "['HRK',]", ioc: "CRO", languages: "['hrv',]", name: "Croatia", status: "assigned",
    },
    {
        iso2: "HT", iso3: "HTI", callingCodes: "['+509',]", currencies: "['HTG', 'USD',]", ioc: "HAI", languages: "['fre', 'hat',]", name: "Haiti", status: "assigned",
    },
    {
        iso2: "HU", iso3: "HUN", callingCodes: "['+36',]", currencies: "['HUF',]", ioc: "HUN", languages: "['hun',]", name: "Hungary", status: "assigned",
    },
    {
        iso2: "IC", iso3: "", callingCodes: "[]", currencies: "['EUR',]", ioc: "", languages: "[]", name: "Canary Islands", status: "reserved",
    },
    {
        iso2: "ID", iso3: "IDN", callingCodes: "['+62',]", currencies: "['IDR',]", ioc: "INA", languages: "['ind',]", name: "Indonesia", status: "assigned",
    },
    {
        iso2: "IE", iso3: "IRL", callingCodes: "['+353',]", currencies: "['EUR',]", ioc: "IRL", languages: "['eng', 'gle',]", name: "Ireland", status: "assigned",
    },
    {
        iso2: "IL", iso3: "ISR", callingCodes: "['+972',]", currencies: "['ILS',]", ioc: "ISR", languages: "['heb', 'ara', 'eng',]", name: "Israel", status: "assigned",
    },
    {
        iso2: "IM", iso3: "IMN", callingCodes: "['+44',]", currencies: "['GBP',]", ioc: "", languages: "['eng', 'glv',]", name: "Isle Of Man", status: "assigned",
    },
    {
        iso2: "IN", iso3: "IND", callingCodes: "['+91',]", currencies: "['INR',]", ioc: "IND", languages: "['eng', 'hin',]", name: "India", status: "assigned",
    },
    {
        iso2: "IO", iso3: "IOT", callingCodes: "['+246',]", currencies: "['USD',]", ioc: "", languages: "['eng',]", name: "British Indian Ocean Territory", status: "assigned",
    },
    {
        iso2: "IQ", iso3: "IRQ", callingCodes: "['+964',]", currencies: "['IQD',]", ioc: "IRQ", languages: "['ara', 'kur',]", name: "Iraq", status: "assigned",
    },
    {
        iso2: "IR", iso3: "IRN", callingCodes: "['+98',]", currencies: "['IRR',]", ioc: "IRI", languages: "['per',]", name: "Iran, Islamic Republic Of", status: "assigned",
    },
    {
        iso2: "IS", iso3: "ISL", callingCodes: "['+354',]", currencies: "['ISK',]", ioc: "ISL", languages: "['ice',]", name: "Iceland", status: "assigned",
    },
    {
        iso2: "IT", iso3: "ITA", callingCodes: "['+39',]", currencies: "['EUR',]", ioc: "ITA", languages: "['ita',]", name: "Italy", status: "assigned",
    },
    {
        iso2: "JE", iso3: "JEY", callingCodes: "['+44',]", currencies: "['GBP',]", ioc: "JCI", languages: "['eng', 'fre',]", name: "Jersey", status: "assigned",
    },
    {
        iso2: "JM", iso3: "JAM", callingCodes: "['+1 876',]", currencies: "['JMD',]", ioc: "JAM", languages: "['eng',]", name: "Jamaica", status: "assigned",
    },
    {
        iso2: "JO", iso3: "JOR", callingCodes: "['+962',]", currencies: "['JOD',]", ioc: "JOR", languages: "['ara',]", name: "Jordan", status: "assigned",
    },
    {
        iso2: "JP", iso3: "JPN", callingCodes: "['+81',]", currencies: "['JPY',]", ioc: "JPN", languages: "['jpn',]", name: "Japan", status: "assigned",
    },
    {
        iso2: "KE", iso3: "KEN", callingCodes: "['+254',]", currencies: "['KES',]", ioc: "KEN", languages: "['eng', 'swa',]", name: "Kenya", status: "assigned",
    },
    {
        iso2: "KG", iso3: "KGZ", callingCodes: "['+996',]", currencies: "['KGS',]", ioc: "KGZ", languages: "['rus',]", name: "Kyrgyzstan", status: "assigned",
    },
    {
        iso2: "KH", iso3: "KHM", callingCodes: "['+855',]", currencies: "['KHR',]", ioc: "CAM", languages: "['khm',]", name: "Cambodia", status: "assigned",
    },
    {
        iso2: "KI", iso3: "KIR", callingCodes: "['+686',]", currencies: "['AUD',]", ioc: "KIR", languages: "['eng',]", name: "Kiribati", status: "assigned",
    },
    {
        iso2: "KM", iso3: "COM", callingCodes: "['+269',]", currencies: "['KMF',]", ioc: "COM", languages: "['ara', 'fre',]", name: "Comoros", status: "assigned",
    },
    {
        iso2: "KN", iso3: "KNA", callingCodes: "['+1 869',]", currencies: "['XCD',]", ioc: "SKN", languages: "['eng',]", name: "Saint Kitts And Nevis", status: "assigned",
    },
    {
        iso2: "KP", iso3: "PRK", callingCodes: "['+850',]", currencies: "['KPW',]", ioc: "PRK", languages: "['kor',]", name: "Korea, Democratic People's Republic Of", status: "assigned",
    },
    {
        iso2: "KR", iso3: "KOR", callingCodes: "['+82',]", currencies: "['KRW',]", ioc: "KOR", languages: "['kor',]", name: "Korea, Republic Of", status: "assigned",
    },
    {
        iso2: "KW", iso3: "KWT", callingCodes: "['+965',]", currencies: "['KWD',]", ioc: "KUW", languages: "['ara',]", name: "Kuwait", status: "assigned",
    },
    {
        iso2: "KY", iso3: "CYM", callingCodes: "['+1 345',]", currencies: "['KYD',]", ioc: "CAY", languages: "['eng',]", name: "Cayman Islands", status: "assigned",
    },
    {
        iso2: "KZ", iso3: "KAZ", callingCodes: "['+7', '+7 6', '+7 7',]", currencies: "['KZT',]", ioc: "KAZ", languages: "['kaz', 'rus',]", name: "Kazakhstan", status: "assigned",
    },
    {
        iso2: "LA", iso3: "LAO", callingCodes: "['+856',]", currencies: "['LAK',]", ioc: "LAO", languages: "['lao',]", name: "Lao People's Democratic Republic", status: "assigned",
    },
    {
        iso2: "LB", iso3: "LBN", callingCodes: "['+961',]", currencies: "['LBP',]", ioc: "LIB", languages: "['ara', 'arm',]", name: "Lebanon", status: "assigned",
    },
    {
        iso2: "LC", iso3: "LCA", callingCodes: "['+1 758',]", currencies: "['XCD',]", ioc: "LCA", languages: "['eng',]", name: "Saint Lucia", status: "assigned",
    },
    {
        iso2: "LI", iso3: "LIE", callingCodes: "['+423',]", currencies: "['CHF',]", ioc: "LIE", languages: "['ger',]", name: "Liechtenstein", status: "assigned",
    },
    {
        iso2: "LK", iso3: "LKA", callingCodes: "['+94',]", currencies: "['LKR',]", ioc: "SRI", languages: "['sin', 'tam',]", name: "Sri Lanka", status: "assigned",
    },
    {
        iso2: "LR", iso3: "LBR", callingCodes: "['+231',]", currencies: "['LRD',]", ioc: "LBR", languages: "['eng',]", name: "Liberia", status: "assigned",
    },
    {
        iso2: "LS", iso3: "LSO", callingCodes: "['+266',]", currencies: "['LSL', 'ZAR',]", ioc: "LES", languages: "['eng', 'sot',]", name: "Lesotho", status: "assigned",
    },
    {
        iso2: "LT", iso3: "LTU", callingCodes: "['+370',]", currencies: "['EUR',]", ioc: "LTU", languages: "['lit',]", name: "Lithuania", status: "assigned",
    },
    {
        iso2: "LU", iso3: "LUX", callingCodes: "['+352',]", currencies: "['EUR',]", ioc: "LUX", languages: "['fre', 'ger', 'ltz',]", name: "Luxembourg", status: "assigned",
    },
    {
        iso2: "LV", iso3: "LVA", callingCodes: "['+371',]", currencies: "['EUR',]", ioc: "LAT", languages: "['lav',]", name: "Latvia", status: "assigned",
    },
    {
        iso2: "LY", iso3: "LBY", callingCodes: "['+218',]", currencies: "['LYD',]", ioc: "LBA", languages: "['ara',]", name: "Libya", status: "assigned",
    },
    {
        iso2: "MA", iso3: "MAR", callingCodes: "['+212',]", currencies: "['MAD',]", ioc: "MAR", languages: "['ara',]", name: "Morocco", status: "assigned",
    },
    {
        iso2: "MC", iso3: "MCO", callingCodes: "['+377',]", currencies: "['EUR',]", ioc: "MON", languages: "['fre',]", name: "Monaco", status: "assigned",
    },
    {
        iso2: "MD", iso3: "MDA", callingCodes: "['+373',]", currencies: "['MDL',]", ioc: "MDA", languages: "['rum',]", name: "Moldova", status: "assigned",
    },
    {
        iso2: "ME", iso3: "MNE", callingCodes: "['+382',]", currencies: "['EUR',]", ioc: "MNE", languages: "['mot',]", name: "Montenegro", status: "assigned",
    },
    {
        iso2: "MF", iso3: "MAF", callingCodes: "['+590',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "Saint Martin", status: "assigned",
    },
    {
        iso2: "MG", iso3: "MDG", callingCodes: "['+261',]", currencies: "['MGA',]", ioc: "MAD", languages: "['fre', 'mlg',]", name: "Madagascar", status: "assigned",
    },
    {
        iso2: "MH", iso3: "MHL", callingCodes: "['+692',]", currencies: "['USD',]", ioc: "MHL", languages: "['eng', 'mah',]", name: "Marshall Islands", status: "assigned",
    },
    {
        iso2: "MK", iso3: "MKD", callingCodes: "['+389',]", currencies: "['MKD',]", ioc: "MKD", languages: "['mac',]", name: "Macedonia, The Former Yugoslav Republic Of", status: "assigned",
    },
    {
        iso2: "ML", iso3: "MLI", callingCodes: "['+223',]", currencies: "['XOF',]", ioc: "MLI", languages: "['fre',]", name: "Mali", status: "assigned",
    },
    {
        iso2: "MM", iso3: "MMR", callingCodes: "['+95',]", currencies: "['MMK',]", ioc: "MYA", languages: "['bur',]", name: "Myanmar", status: "assigned",
    },
    {
        iso2: "MN", iso3: "MNG", callingCodes: "['+976',]", currencies: "['MNT',]", ioc: "MGL", languages: "['mon',]", name: "Mongolia", status: "assigned",
    },
    {
        iso2: "MO", iso3: "MAC", callingCodes: "['+853',]", currencies: "['MOP',]", ioc: "MAC", languages: "['chi', 'por',]", name: "Macao", status: "assigned",
    },
    {
        iso2: "MP", iso3: "MNP", callingCodes: "['+1 670',]", currencies: "['USD',]", ioc: "", languages: "['eng',]", name: "Northern Mariana Islands", status: "assigned",
    },
    {
        iso2: "MQ", iso3: "MTQ", callingCodes: "['+596',]", currencies: "['EUR',]", ioc: "", languages: "[]", name: "Martinique", status: "assigned",
    },
    {
        iso2: "MR", iso3: "MRT", callingCodes: "['+222',]", currencies: "['MRO',]", ioc: "MTN", languages: "['ara', 'fre',]", name: "Mauritania", status: "assigned",
    },
    {
        iso2: "MS", iso3: "MSR", callingCodes: "['+1 664',]", currencies: "['XCD',]", ioc: "", languages: "[]", name: "Montserrat", status: "assigned",
    },
    {
        iso2: "MT", iso3: "MLT", callingCodes: "['+356',]", currencies: "['EUR',]", ioc: "MLT", languages: "['mlt', 'eng',]", name: "Malta", status: "assigned",
    },
    {
        iso2: "MU", iso3: "MUS", callingCodes: "['+230',]", currencies: "['MUR',]", ioc: "MRI", languages: "['eng', 'fre',]", name: "Mauritius", status: "assigned",
    },
    {
        iso2: "MV", iso3: "MDV", callingCodes: "['+960',]", currencies: "['MVR',]", ioc: "MDV", languages: "['div',]", name: "Maldives", status: "assigned",
    },
    {
        iso2: "MW", iso3: "MWI", callingCodes: "['+265',]", currencies: "['MWK',]", ioc: "MAW", languages: "['eng', 'nya',]", name: "Malawi", status: "assigned",
    },
    {
        iso2: "MX", iso3: "MEX", callingCodes: "['+52',]", currencies: "['MXN', 'MXV',]", ioc: "MEX", languages: "['spa',]", name: "Mexico", status: "assigned",
    },
    {
        iso2: "MY", iso3: "MYS", callingCodes: "['+60',]", currencies: "['MYR',]", ioc: "MAS", languages: "['msa', 'eng',]", name: "Malaysia", status: "assigned",
    },
    {
        iso2: "MZ", iso3: "MOZ", callingCodes: "['+258',]", currencies: "['MZN',]", ioc: "MOZ", languages: "['por',]", name: "Mozambique", status: "assigned",
    },
    {
        iso2: "NA", iso3: "NAM", callingCodes: "['+264',]", currencies: "['NAD', 'ZAR',]", ioc: "NAM", languages: "['eng',]", name: "Namibia", status: "assigned",
    },
    {
        iso2: "NC", iso3: "NCL", callingCodes: "['+687',]", currencies: "['XPF',]", ioc: "", languages: "['fre',]", name: "New Caledonia", status: "assigned",
    },
    {
        iso2: "NE", iso3: "NER", callingCodes: "['+227',]", currencies: "['XOF',]", ioc: "NIG", languages: "['fre',]", name: "Niger", status: "assigned",
    },
    {
        iso2: "NF", iso3: "NFK", callingCodes: "['+672',]", currencies: "['AUD',]", ioc: "", languages: "['eng',]", name: "Norfolk Island", status: "assigned",
    },
    {
        iso2: "NG", iso3: "NGA", callingCodes: "['+234',]", currencies: "['NGN',]", ioc: "NGR", languages: "['eng',]", name: "Nigeria", status: "assigned",
    },
    {
        iso2: "NI", iso3: "NIC", callingCodes: "['+505',]", currencies: "['NIO',]", ioc: "NCA", languages: "['spa',]", name: "Nicaragua", status: "assigned",
    },
    {
        iso2: "NL", iso3: "NLD", callingCodes: "['+31',]", currencies: "['EUR',]", ioc: "NED", languages: "['dut',]", name: "Netherlands", status: "assigned",
    },
    {
        iso2: "NO", iso3: "NOR", callingCodes: "['+47',]", currencies: "['NOK',]", ioc: "NOR", languages: "['nor',]", name: "Norway", status: "assigned",
    },
    {
        iso2: "NP", iso3: "NPL", callingCodes: "['+977',]", currencies: "['NPR',]", ioc: "NEP", languages: "['nep',]", name: "Nepal", status: "assigned",
    },
    {
        iso2: "NR", iso3: "NRU", callingCodes: "['+674',]", currencies: "['AUD',]", ioc: "NRU", languages: "['eng', 'nau',]", name: "Nauru", status: "assigned",
    },
    {
        iso2: "NU", iso3: "NIU", callingCodes: "['+683',]", currencies: "['NZD',]", ioc: "", languages: "['eng',]", name: "Niue", status: "assigned",
    },
    {
        iso2: "NZ", iso3: "NZL", callingCodes: "['+64',]", currencies: "['NZD',]", ioc: "NZL", languages: "['eng',]", name: "New Zealand", status: "assigned",
    },
    {
        iso2: "OM", iso3: "OMN", callingCodes: "['+968',]", currencies: "['OMR',]", ioc: "OMA", languages: "['ara',]", name: "Oman", status: "assigned",
    },
    {
        iso2: "PA", iso3: "PAN", callingCodes: "['+507',]", currencies: "['PAB', 'USD',]", ioc: "PAN", languages: "['spa',]", name: "Panama", status: "assigned",
    },
    {
        iso2: "PE", iso3: "PER", callingCodes: "['+51',]", currencies: "['PEN',]", ioc: "PER", languages: "['spa', 'aym', 'que',]", name: "Peru", status: "assigned",
    },
    {
        iso2: "PF", iso3: "PYF", callingCodes: "['+689',]", currencies: "['XPF',]", ioc: "", languages: "['fre',]", name: "French Polynesia", status: "assigned",
    },
    {
        iso2: "PG", iso3: "PNG", callingCodes: "['+675',]", currencies: "['PGK',]", ioc: "PNG", languages: "['eng',]", name: "Papua New Guinea", status: "assigned",
    },
    {
        iso2: "PH", iso3: "PHL", callingCodes: "['+63',]", currencies: "['PHP',]", ioc: "PHI", languages: "['eng',]", name: "Philippines", status: "assigned",
    },
    {
        iso2: "PK", iso3: "PAK", callingCodes: "['+92',]", currencies: "['PKR',]", ioc: "PAK", languages: "['urd', 'eng',]", name: "Pakistan", status: "assigned",
    },
    {
        iso2: "PL", iso3: "POL", callingCodes: "['+48',]", currencies: "['PLN',]", ioc: "POL", languages: "['pol',]", name: "Poland", status: "assigned",
    },
    {
        iso2: "PM", iso3: "SPM", callingCodes: "['+508',]", currencies: "['EUR',]", ioc: "", languages: "['eng',]", name: "Saint Pierre And Miquelon", status: "assigned",
    },
    {
        iso2: "PN", iso3: "PCN", callingCodes: "['+872',]", currencies: "['NZD',]", ioc: "", languages: "['eng',]", name: "Pitcairn", status: "assigned",
    },
    {
        iso2: "PR", iso3: "PRI", callingCodes: "['+1 787', '+1 939',]", currencies: "['USD',]", ioc: "PUR", languages: "['spa', 'eng',]", name: "Puerto Rico", status: "assigned",
    },
    {
        iso2: "PS", iso3: "PSE", callingCodes: "['+970',]", currencies: "['JOD', 'EGP', 'ILS',]", ioc: "PLE", languages: "['ara',]", name: "Palestinian Territory, Occupied", status: "assigned",
    },
    {
        iso2: "PT", iso3: "PRT", callingCodes: "['+351',]", currencies: "['EUR',]", ioc: "POR", languages: "['por',]", name: "Portugal", status: "assigned",
    },
    {
        iso2: "PW", iso3: "PLW", callingCodes: "['+680',]", currencies: "['USD',]", ioc: "PLW", languages: "['eng',]", name: "Palau", status: "assigned",
    },
    {
        iso2: "PY", iso3: "PRY", callingCodes: "['+595',]", currencies: "['PYG',]", ioc: "PAR", languages: "['spa',]", name: "Paraguay", status: "assigned",
    },
    {
        iso2: "QA", iso3: "QAT", callingCodes: "['+974',]", currencies: "['QAR',]", ioc: "QAT", languages: "['ara',]", name: "Qatar", status: "assigned",
    },
    {
        iso2: "RE", iso3: "REU", callingCodes: "['+262',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "Reunion", status: "assigned",
    },
    {
        iso2: "RO", iso3: "ROU", callingCodes: "['+40',]", currencies: "['RON',]", ioc: "ROU", languages: "['rum',]", name: "Romania", status: "assigned",
    },
    {
        iso2: "RS", iso3: "SRB", callingCodes: "['+381',]", currencies: "['RSD',]", ioc: "SRB", languages: "['srp',]", name: "Serbia", status: "assigned",
    },
    {
        iso2: "RU", iso3: "RUS", callingCodes: "['+7', '+7 3', '+7 4', '+7 8',]", currencies: "['RUB',]", ioc: "RUS", languages: "['rus',]", name: "Russian Federation", status: "assigned",
    },
    {
        iso2: "RW", iso3: "RWA", callingCodes: "['+250',]", currencies: "['RWF',]", ioc: "RWA", languages: "['eng', 'fre', 'kin',]", name: "Rwanda", status: "assigned",
    },
    {
        iso2: "SA", iso3: "SAU", callingCodes: "['+966',]", currencies: "['SAR',]", ioc: "KSA", languages: "['ara',]", name: "Saudi Arabia", status: "assigned",
    },
    {
        iso2: "SB", iso3: "SLB", callingCodes: "['+677',]", currencies: "['SBD',]", ioc: "SOL", languages: "['eng',]", name: "Solomon Islands", status: "assigned",
    },
    {
        iso2: "SC", iso3: "SYC", callingCodes: "['+248',]", currencies: "['SCR',]", ioc: "SEY", languages: "['eng', 'fre',]", name: "Seychelles", status: "assigned",
    },
    {
        iso2: "SD", iso3: "SDN", callingCodes: "['+249',]", currencies: "['SDG',]", ioc: "SUD", languages: "['ara', 'eng',]", name: "Sudan", status: "assigned",
    },
    {
        iso2: "SE", iso3: "SWE", callingCodes: "['+46',]", currencies: "['SEK',]", ioc: "SWE", languages: "['swe',]", name: "Sweden", status: "assigned",
    },
    {
        iso2: "SG", iso3: "SGP", callingCodes: "['+65',]", currencies: "['SGD',]", ioc: "SIN", languages: "['eng', 'chi', 'may', 'tam',]", name: "Singapore", status: "assigned",
    },
    {
        iso2: "SH", iso3: "SHN", callingCodes: "['+290',]", currencies: "['SHP',]", ioc: "", languages: "['eng',]", name: "Saint Helena, Ascension And Tristan Da Cunha", status: "assigned",
    },
    {
        iso2: "SI", iso3: "SVN", callingCodes: "['+386',]", currencies: "['EUR',]", ioc: "SLO", languages: "['slv',]", name: "Slovenia", status: "assigned",
    },
    {
        iso2: "SJ", iso3: "SJM", callingCodes: "['+47',]", currencies: "['NOK',]", ioc: "", languages: "[]", name: "Svalbard And Jan Mayen", status: "assigned",
    },
    {
        iso2: "SK", iso3: "SVK", callingCodes: "['+421',]", currencies: "['EUR',]", ioc: "SVK", languages: "['slo',]", name: "Slovakia", status: "assigned",
    },
    {
        iso2: "SL", iso3: "SLE", callingCodes: "['+232',]", currencies: "['SLL',]", ioc: "SLE", languages: "['eng',]", name: "Sierra Leone", status: "assigned",
    },
    {
        iso2: "SM", iso3: "SMR", callingCodes: "['+378',]", currencies: "['EUR',]", ioc: "SMR", languages: "['ita',]", name: "San Marino", status: "assigned",
    },
    {
        iso2: "SN", iso3: "SEN", callingCodes: "['+221',]", currencies: "['XOF',]", ioc: "SEN", languages: "['fre',]", name: "Senegal", status: "assigned",
    },
    {
        iso2: "SO", iso3: "SOM", callingCodes: "['+252',]", currencies: "['SOS',]", ioc: "SOM", languages: "['som',]", name: "Somalia", status: "assigned",
    },
    {
        iso2: "SR", iso3: "SUR", callingCodes: "['+597',]", currencies: "['SRD',]", ioc: "SUR", languages: "['dut',]", name: "Suriname", status: "assigned",
    },
    {
        iso2: "SS", iso3: "SSD", callingCodes: "['+211',]", currencies: "['SSP',]", ioc: "", languages: "['eng',]", name: "South Sudan", status: "assigned",
    },
    {
        iso2: "ST", iso3: "STP", callingCodes: "['+239',]", currencies: "['STD',]", ioc: "STP", languages: "['por',]", name: "São Tomé and Príncipe", status: "assigned",
    },
    {
        iso2: "SU", iso3: "", callingCodes: "[]", currencies: "['RUB',]", ioc: "", languages: "['rus',]", name: "USSR", status: "reserved",
    },
    {
        iso2: "SV", iso3: "SLV", callingCodes: "['+503',]", currencies: "['USD',]", ioc: "ESA", languages: "['spa',]", name: "El Salvador", status: "assigned",
    },
    {
        iso2: "SX", iso3: "SXM", callingCodes: "['+1 721',]", currencies: "['ANG',]", ioc: "", languages: "['dut',]", name: "Sint Maarten", status: "assigned",
    },
    {
        iso2: "SY", iso3: "SYR", callingCodes: "['+963',]", currencies: "['SYP',]", ioc: "SYR", languages: "['ara',]", name: "Syrian Arab Republic", status: "assigned",
    },
    {
        iso2: "SZ", iso3: "SWZ", callingCodes: "['+268',]", currencies: "['SZL',]", ioc: "SWZ", languages: "['eng', 'ssw',]", name: "Swaziland", status: "assigned",
    },
    {
        iso2: "TA", iso3: "", callingCodes: "['+290',]", currencies: "['GBP',]", ioc: "", languages: "[]", name: "Tristan de Cunha", status: "reserved",
    },
    {
        iso2: "TC", iso3: "TCA", callingCodes: "['+1 649',]", currencies: "['USD',]", ioc: "", languages: "['eng',]", name: "Turks And Caicos Islands", status: "assigned",
    },
    {
        iso2: "TD", iso3: "TCD", callingCodes: "['+235',]", currencies: "['XAF',]", ioc: "CHA", languages: "['ara', 'fre',]", name: "Chad", status: "assigned",
    },
    {
        iso2: "TF", iso3: "ATF", callingCodes: "[]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "French Southern Territories", status: "assigned",
    },
    {
        iso2: "TG", iso3: "TGO", callingCodes: "['+228',]", currencies: "['XOF',]", ioc: "TOG", languages: "['fre',]", name: "Togo", status: "assigned",
    },
    {
        iso2: "TH", iso3: "THA", callingCodes: "['+66',]", currencies: "['THB',]", ioc: "THA", languages: "['tha',]", name: "Thailand", status: "assigned",
    },
    {
        iso2: "TJ", iso3: "TJK", callingCodes: "['+992',]", currencies: "['TJS',]", ioc: "TJK", languages: "['tgk', 'rus',]", name: "Tajikistan", status: "assigned",
    },
    {
        iso2: "TK", iso3: "TKL", callingCodes: "['+690',]", currencies: "['NZD',]", ioc: "", languages: "['eng',]", name: "Tokelau", status: "assigned",
    },
    {
        iso2: "TL", iso3: "TLS", callingCodes: "['+670',]", currencies: "['USD',]", ioc: "TLS", languages: "['por',]", name: "East Timor", status: "assigned",
    },
    {
        iso2: "TM", iso3: "TKM", callingCodes: "['+993',]", currencies: "['TMT',]", ioc: "TKM", languages: "['tuk', 'rus',]", name: "Turkmenistan", status: "assigned",
    },
    {
        iso2: "TN", iso3: "TUN", callingCodes: "['+216',]", currencies: "['TND',]", ioc: "TUN", languages: "['ara',]", name: "Tunisia", status: "assigned",
    },
    {
        iso2: "TO", iso3: "TON", callingCodes: "['+676',]", currencies: "['TOP',]", ioc: "TGA", languages: "['eng',]", name: "Tonga", status: "assigned",
    },
    {
        iso2: "TR", iso3: "TUR", callingCodes: "['+90',]", currencies: "['TRY',]", ioc: "TUR", languages: "['tur',]", name: "Turkey", status: "assigned",
    },
    {
        iso2: "TT", iso3: "TTO", callingCodes: "['+1 868',]", currencies: "['TTD',]", ioc: "TRI", languages: "['eng',]", name: "Trinidad And Tobago", status: "assigned",
    },
    {
        iso2: "TV", iso3: "TUV", callingCodes: "['+688',]", currencies: "['AUD',]", ioc: "TUV", languages: "['eng',]", name: "Tuvalu", status: "assigned",
    },
    {
        iso2: "TW", iso3: "TWN", callingCodes: "['+886',]", currencies: "['TWD',]", ioc: "TPE", languages: "['chi',]", name: "Taiwan, Province Of China", status: "assigned",
    },
    {
        iso2: "TZ", iso3: "TZA", callingCodes: "['+255',]", currencies: "['TZS',]", ioc: "TAN", languages: "['swa', 'eng',]", name: "Tanzania, United Republic Of", status: "assigned",
    },
    {
        iso2: "UA", iso3: "UKR", callingCodes: "['+380',]", currencies: "['UAH',]", ioc: "UKR", languages: "['ukr', 'rus',]", name: "Ukraine", status: "assigned",
    },
    {
        iso2: "UG", iso3: "UGA", callingCodes: "['+256',]", currencies: "['UGX',]", ioc: "UGA", languages: "['eng', 'swa',]", name: "Uganda", status: "assigned",
    },
    {
        iso2: "UK", iso3: "", callingCodes: "[]", currencies: "['GBP',]", ioc: "", languages: "['eng', 'cor', 'gle', 'gla', 'wel',]", name: "United Kingdom", status: "reserved",
    },
    {
        iso2: "UM", iso3: "UMI", callingCodes: "['+1',]", currencies: "['USD',]", ioc: "", languages: "['eng',]", name: "United States Minor Outlying Islands", status: "assigned",
    },
    {
        iso2: "US", iso3: "USA", callingCodes: "['+1',]", currencies: "['USD',]", ioc: "USA", languages: "['eng',]", name: "United States", status: "assigned",
    },
    {
        iso2: "UY", iso3: "URY", callingCodes: "['+598',]", currencies: "['UYU', 'UYI',]", ioc: "URU", languages: "['spa',]", name: "Uruguay", status: "assigned",
    },
    {
        iso2: "UZ", iso3: "UZB", callingCodes: "['+998',]", currencies: "['UZS',]", ioc: "UZB", languages: "['uzb', 'rus',]", name: "Uzbekistan", status: "assigned",
    },
    {
        iso2: "VA", iso3: "VAT", callingCodes: "['+379', '+39',]", currencies: "['EUR',]", ioc: "", languages: "['ita',]", name: "Vatican City State", status: "assigned",
    },
    {
        iso2: "VC", iso3: "VCT", callingCodes: "['+1 784',]", currencies: "['XCD',]", ioc: "VIN", languages: "['eng',]", name: "Saint Vincent And The Grenadines", status: "assigned",
    },
    {
        iso2: "VE", iso3: "VEN", callingCodes: "['+58',]", currencies: "['VEF',]", ioc: "VEN", languages: "['spa',]", name: "Venezuela, Bolivarian Republic Of", status: "assigned",
    },
    {
        iso2: "VG", iso3: "VGB", callingCodes: "['+1 284',]", currencies: "['USD',]", ioc: "ISV", languages: "['eng',]", name: "Virgin Islands (British)", status: "assigned",
    },
    {
        iso2: "VI", iso3: "VIR", callingCodes: "['+1 340',]", currencies: "['USD',]", ioc: "ISV", languages: "['eng',]", name: "Virgin Islands (US)", status: "assigned",
    },
    {
        iso2: "VN", iso3: "VNM", callingCodes: "['+84',]", currencies: "['VND',]", ioc: "VIE", languages: "['vie',]", name: "Viet Nam", status: "assigned",
    },
    {
        iso2: "VU", iso3: "VUT", callingCodes: "['+678',]", currencies: "['VUV',]", ioc: "VAN", languages: "['bis', 'eng', 'fre',]", name: "Vanuatu", status: "assigned",
    },
    {
        iso2: "WF", iso3: "WLF", callingCodes: "['+681',]", currencies: "['XPF',]", ioc: "", languages: "['fre',]", name: "Wallis And Futuna", status: "assigned",
    },
    {
        iso2: "WS", iso3: "WSM", callingCodes: "['+685',]", currencies: "['WST',]", ioc: "SAM", languages: "['eng', 'smo',]", name: "Samoa", status: "assigned",
    },
    {
        iso2: "YE", iso3: "YEM", callingCodes: "['+967',]", currencies: "['YER',]", ioc: "YEM", languages: "['ara',]", name: "Yemen", status: "assigned",
    },
    {
        iso2: "YT", iso3: "MYT", callingCodes: "['+262',]", currencies: "['EUR',]", ioc: "", languages: "['fre',]", name: "Mayotte", status: "assigned",
    },
    {
        iso2: "ZA", iso3: "ZAF", callingCodes: "['+27',]", currencies: "['ZAR',]", ioc: "RSA", languages: "['afr', 'eng', 'nbl', 'som', 'tso', 'ven', 'xho', 'zul',]", name: "South Africa", status: "assigned",
    },
    {
        iso2: "ZM", iso3: "ZMB", callingCodes: "['+260',]", currencies: "['ZMW',]", ioc: "ZAM", languages: "['eng',]", name: "Zambia", status: "assigned",
    },
    {
        iso2: "ZW", iso3: "ZWE", callingCodes: "['+263',]", currencies: "['USD', 'ZAR', 'BWP', 'GBP', 'EUR',]", ioc: "ZIM", languages: "['eng', 'sna', 'nde',]", name: "Zimbabwe", status: "assigned",
    },
];

export default table;
