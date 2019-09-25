import logo from "../images/logo_careerfoundry.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d' // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019'

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '11.69%',
    APRRange60: '12.71%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'PROGRAM NAME',
            APR36: 'XX.XX%',
            financeCharge36: '$X,XXX.XX',
            IOPayment36: '$XX.XX',
            FullMonthlyPayment36: '$XXX.XX',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            IOPayment60: '$XX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: 'X' // program length in months
        }
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'the UX Design Plus program',
            APR36: '11.69%',
            financeCharge36: '$1,885.04',
            FullMonthlyPayment36: '$327.04',
            APR60: '12.71%',
            financeCharge60: '$3,528.52',
            FullMonthlyPayment60: '$223.81',
            LoanExampleAmt: '$9,900',
            LoanExampleOFeeAmt: '$396',
            LoanExampleAmtPlusOFee: '$10,296'
        },
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'the UX Design Certification program',
            APR36: '11.69%',
            financeCharge36: '$1,313.81',
            FullMonthlyPayment36: '$228.16',
            APR60: '12.71%',
            financeCharge60: '$2,459.27',
            FullMonthlyPayment60: '$155.99',
            LoanExampleAmt: '$6,900',
            LoanExampleOFeeAmt: '$276',
            LoanExampleAmtPlusOFee: '$7,176'
        },
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'the UI Design and Web Development programs',
            APR36: '11.69%',
            financeCharge36: '$952.04',
            FullMonthlyPayment36: '$165.33',
            APR60: '12.71%',
            financeCharge60: '$1,782.08',
            FullMonthlyPayment60: '$113.03',
            LoanExampleAmt: '$5,000',
            LoanExampleOFeeAmt: '$200',
            LoanExampleAmtPlusOFee: '$5,200'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: false, // true if at least one program has cost of living included
    costOfLivingPrograms: '', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: false, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: false, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: false, // true if at least one program is remote/online
    schoolHQState: 'MI',
    origFee: 0.04,

    // interest payment FAQ info
    exampleLoanAmount: '$10,000',
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: 'XX.XX - XX.XX%',
    APR60: 'XX.XX - XX.XX%',
    IOPayment36: '$77.91',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "CareerFoundry's UX Design PLUS program",
            maxAmount: "$9,900",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "CareerFoundry's UX Design Certification program",
            maxAmount: "$6,900",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "CareerFoundry's Web Development program",
            maxAmount: "$5,500",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "CareerFoundry's UI Design program",
            maxAmount: "$5,000",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "CareerFoundry"

export const schoolURL = 'https://careerfoundry.com/' // update with url of school's website

export const skfURL = 'https://careerfoundry.skills.fund/' // update with Skills Fund url

export const headline = "Learn to Code at CareerFoundry" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} designs its UX, UI, and Web Development programs to help students build a foundation for a career in software development. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the UX Design PLUS, UX Design Certification, Web Development, and UI Design programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'careerfoundry_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "a4d28386-e87c-43b6-8786-8d6334928efd" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_careerfoundry_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 9900
export const placeholder = '$9,900'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "UX Design PLUS",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCFUXP18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 9900,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 11.69,
              apr60: 12.71
            }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 9900,
              loanTerm36: true,
              loanTerm60: true,
              '0': null,
              '1': {
                apr36: 11.69,
                apr60: 12.71
              }
            }
          }
        ]
    },
    {
        name: "UX Design Certification",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCFUXC18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6900,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 11.69,
              apr60: 12.71
            }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 6900,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                  apr36: 11.69,
                  apr60: 12.71
                }
              }
            }
          ]
    },
    {
        name: "Web Development",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCFWD18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 5500,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 11.69,
              apr60: 12.71
            }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 5500,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                  apr36: 11.69,
                  apr60: 12.71
                }
              }
            }
          ]
    },
    {
        name: "UI Design",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCFUID18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 5000,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 11.69,
              apr60: 12.71
            }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 5000,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                  apr36: 11.69,
                  apr60: 12.71
                }
              }
            }
          ]
    },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $9,900 for UX Design PLUS tuition, up to $6,900 for UX Design Certification tuition, up to $5,500 for Web Development tuition, and up to $5,000 for UI Design tuition."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>

