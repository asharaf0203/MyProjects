import { SimpleSearchResult } from '../models/SimpleSearchResult';

export let dataSource: SimpleSearchResult[] = [
    {
        CrawfordRef: 'SU4788', Policyholder: 'Quintilianus Kedzierski', PolicyholderPostcode: 'LN13 0NT',
        LossPostcode: 'LN13 0NT', LossDate: new Date(2017, 7, 11), InstructionDate: new Date(2017, 11, 5), PerilDescription: 'Theft', Status: 'Open',
        Client: 'Wallmart', Insurer: 'Cobra AXA'
    },
    {
        CrawfordRef: 'SU752344', Policyholder: 'Albertus Mac-Ghabhann', PolicyholderPostcode: 'AB13 0JT',
        LossPostcode: 'AB13 0JT', LossDate: new Date(2017, 10, 15), InstructionDate: new Date(2017, 11, 25), PerilDescription: 'Fire', Status: 'Cancelled',
        Client: 'Zurich Municipal Insurance', Insurer: 'Capital Insurance Brokers'
    },
    {
        CrawfordRef: 'SU764295', Policyholder: 'Patricius De Wit', PolicyholderPostcode: 'CB23 1NB',
        LossPostcode: 'CB23 1NB', LossDate: new Date(2017, 12, 20), InstructionDate: new Date(2017, 12, 5), PerilDescription: 'Theft', Status: 'Open',
        Client: 'Coca-Cola Enterprises Inc', Insurer: null
    },
    {
        CrawfordRef: 'SU9657864', Policyholder: 'Nadeem Steube', PolicyholderPostcode: 'G90 8AR',
        LossPostcode: 'G90 8AR', LossDate: new Date(2017, 2, 22), InstructionDate: new Date(2017, 6, 4), PerilDescription: 'Public Liability (Injury)', Status: 'Open',
        Client: 'Wallmart', Insurer: 'Velocity Claims Management Ltd'
    },
    {
        CrawfordRef: 'SU76852', Policyholder: 'Elena Dubhain', PolicyholderPostcode: null,
        LossPostcode: 'LL738NY', LossDate: new Date(2017, 12, 6), InstructionDate: new Date(2017, 8, 19), PerilDescription: 'Public Liability (Injury)', Status: 'Cancelled',
        Client: 'Domino\'s Pizza Group Limited', Insurer: 'Aviva Insurance'
    },
    {
        CrawfordRef: 'SU48765', Policyholder: 'Gobind Noyer', PolicyholderPostcode: 'RH10 9BD',
        LossPostcode: 'LL738NY', LossDate: new Date(2017, 6, 1), InstructionDate: new Date(2017, 2, 6), PerilDescription: 'Consequential Loss', Status: 'Open',
        Client: 'JD Sports', Insurer: 'Heineken UK Ltd'
    },
    {
        CrawfordRef: 'SU967542', Policyholder: 'Tino Statham', PolicyholderPostcode: 'WR15 8FA',
        LossPostcode: 'KT19 0HG', LossDate: new Date(2017, 7, 30), InstructionDate: new Date(2017, 4, 30), PerilDescription: 'Recovery', Status: 'Closed',
        Client: 'W H Smith', Insurer: 'Walsall Council'
    },
    {
        CrawfordRef: 'SU453765', Policyholder: 'Oighrig Wang', PolicyholderPostcode: 'SM3 9PE',
        LossPostcode: 'SA64 0AZ', LossDate: new Date(2017, 2, 29), InstructionDate: new Date(2017, 1, 19), PerilDescription: 'Public Liability (Injury)', Status: 'Cancelled',
        Client: 'Alcatel', Insurer: 'Sony Ericsson Mobile Comm'
    },
    {
        CrawfordRef: 'SU876595', Policyholder: 'Ayanda Bell', PolicyholderPostcode: 'SO24 9SR',
        LossPostcode: 'KT24 6EW', LossDate: new Date(2017, 1, 30), InstructionDate: new Date(2017, 2, 25), PerilDescription: 'Theft', Status: 'Closed',
        Client: 'Nestle Holdings (UK) Ltd', Insurer: 'W H Smith'
    },
    {
        CrawfordRef: 'SU97654', Policyholder: 'Inanna Albricci', PolicyholderPostcode: 'DG10 9BQ',
        LossPostcode: 'EH33 2PJ', LossDate: new Date(2017, 3, 23), InstructionDate: new Date(2017, 7, 26), PerilDescription: 'Accidental Damage', Status: 'Repudiated',
        Client: 'Woolworths Group', Insurer: 'IKEA'
    },
    {
        CrawfordRef: 'SU693421', Policyholder: 'Wangui Emmet', PolicyholderPostcode: 'SA34 0EH',
        LossPostcode: 'TN8 5HH', LossDate: new Date(2017, 11, 30), InstructionDate: new Date(2017, 11, 6), PerilDescription: 'Theft', Status: 'Closed',
        Client: 'J D Wetherspoon Plc', Insurer: 'Zurich Services A.I.E.'
    },
    {
        CrawfordRef: 'SU85743', Policyholder: 'Arzu Opeyemi', PolicyholderPostcode: 'CV10 7PX',
        LossPostcode: 'KA2 9DX', LossDate: new Date(2017, 11, 5), InstructionDate: new Date(2017, 11, 3), PerilDescription: 'Storm', Status: 'Repudiated',
        Client: 'Next Plc', Insurer: 'Churchill Insurance'
    },
    {
        CrawfordRef: 'SU23156', Policyholder: 'Elna Herlocker', PolicyholderPostcode: 'L8 7NZ',
        LossPostcode: 'NR20 5LZ', LossDate: new Date(2017, 11, 3), InstructionDate: new Date(2017, 11, 30), PerilDescription: 'Accidental Damage', Status: 'Closed',
        Client: 'Sports Direct International', Insurer: 'Total UK Limited'
    },
    {
        CrawfordRef: 'SU48655', Policyholder: 'Dagny Strawn', PolicyholderPostcode: 'EX2 4RA',
        LossPostcode: 'AB51 4FS', LossDate: new Date(2017, 5, 30), InstructionDate: new Date(2017, 7, 27), PerilDescription: 'Products Liability', Status: 'Closed',
        Client: 'AXA CAR and PLANT', Insurer: 'Ace LLoyds'
    },
    {
        CrawfordRef: 'SU569654', Policyholder: 'Carlota Prendes', PolicyholderPostcode: 'LL67 0DP',
        LossPostcode: 'LL67 0DP', LossDate: new Date(2017, 4, 10), InstructionDate: new Date(2017, 6, 7), PerilDescription: 'Theft', Status: 'Open',
        Client: 'AXA Funds - Direct with AXA UK', Insurer: 'UPS International Insurance Lt'
    },
    {
        CrawfordRef: 'SU87564', Policyholder: 'Eldon Bambeck', PolicyholderPostcode: 'LN11 0BS',
        LossPostcode: 'WF5 8PA', LossDate: new Date(2017, 7, 7), InstructionDate: new Date(2017, 8, 9), PerilDescription: 'Fire', Status: 'Open',
        Client: 'Debenhams Retail Plc', Insurer: 'British Sugar'
    },
    {
        CrawfordRef: 'SU123654', Policyholder: 'Joan Mazion', PolicyholderPostcode: 'PL29 3SA',
        LossPostcode: 'PL29 3SA', LossDate: new Date(2017, 10, 1), InstructionDate: new Date(2017, 8, 10), PerilDescription: 'Products Liability', Status: 'Open',
        Client: 'AXA CAR', Insurer: 'Groupama Insurances'
    },
    {
        CrawfordRef: 'SU75646', Policyholder: 'Ema Rauer', PolicyholderPostcode: 'HU9 1BE',
        LossPostcode: 'HU9 1BE', LossDate: new Date(2017, 4, 6), InstructionDate: new Date(2017, 4, 19), PerilDescription: 'Employers Liability', Status: 'Cancelled',
        Client: 'B&Q Plc', Insurer: 'S.A Axa Belgium N.V'
    },
    {
        CrawfordRef: 'SU87596', Policyholder: 'Tamala Lindon', PolicyholderPostcode: 'SN99 8AU',
        LossPostcode: 'S12 3HJ', LossDate: new Date(2017, 11, 1), InstructionDate: new Date(2017, 1, 1), PerilDescription: 'Employers Liability', Status: 'Cancelled',
        Client: 'Kwik Fit', Insurer: 'Morrison Construction Ltd'
    },
    {
        CrawfordRef: 'SU64562', Policyholder: 'Ria Frie', PolicyholderPostcode: 'HD4 5EN',
        LossPostcode: 'MK10 0AX', LossDate: new Date(2017, 8, 10), InstructionDate: new Date(2017, 10, 1), PerilDescription: 'Products Liability', Status: 'Unknown',
        Client: 'Standard Life', Insurer: 'UK General'
    },
    {
        CrawfordRef: 'SU05212', Policyholder: 'Frances Cunard', PolicyholderPostcode: 'PA10 2NF',
        LossPostcode: 'WD4 9NE', LossDate: new Date(2017, 2, 4), InstructionDate: new Date(2017, 7, 10), PerilDescription: 'Fire', Status: 'Cancelled',
        Client: 'Greggs Plc', Insurer: 'Zurich Insurance Company Ltd (Singapore branch)'
    },
    {
        CrawfordRef: 'SU12213', Policyholder: 'Ross Landefeld', PolicyholderPostcode: 'NR30 4LU',
        LossPostcode: 'L5 5EB', LossDate: new Date(2017, 11, 1), InstructionDate: new Date(2017, 12, 1), PerilDescription: 'Fire', Status: 'Unknown',
        Client: 'ITV Plc', Insurer: 'AXA General Insurance Hong Kong Limited'
    },
];
