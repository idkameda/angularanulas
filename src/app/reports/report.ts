<<<<<<< HEAD
// export interface IReport {
//     MonthExp: number,
//     MonthNm: string,
//     YearExp: number,
//     TotalExpense: number,
//     Expense: number,
//     Investment: number,
//     PetrolExpense: number,
//     DieselExpense: number,
    
//     ATMWithdrawal: number,
//     SBI_SB_ATM: number,
//     SBI_NRE_ATM: number,
//     HDFC_ATM: number,
//     CANARA_RES_ATM: number
// }

export interface IReport {
    Table: Table[];
    Table1: Table1[];
}

// export interface IReportConslidated {
//     Investment: number,
//     Petrol: number,
//     Diesel: number
// }

export interface Table1 {
    Investment: number,
    Petrol: number,
    Diesel: number,
    ATMWithdrawal: number,
    Monthly_AVG: number,
    TotalExpense: number,
    GrandTotal: number,
    TotalIncome: number,
    TotalSaved: number,
    TotAvgSaved: number,
    InHandSaved: number,
    GasSubsidy: number,
    CCPending: number,
    TotalInvestment: number
}
export interface Table {
=======
export interface IReport {
>>>>>>> 627e71c (25Aug23 commit with month report)
    MonthExp: number,
    MonthNm: string,
    YearExp: number,
    TotalExpense: number,
    Expense: number,
    Investment: number,
    PetrolExpense: number,
    DieselExpense: number,
    
    ATMWithdrawal: number,
    SBI_SB_ATM: number,
    SBI_NRE_ATM: number,
    HDFC_ATM: number,
    CANARA_RES_ATM: number
}
<<<<<<< HEAD
export interface IMonthReport {
    TranDate: string,
    BankDesc: string,
    BankDesc2: string,
    MyDesc: string,
    AmtDeducted: number,
    PaidUsing: string,
    IsInvestment: number,
    AddedOn: string,
    FYYear: number
=======

export interface IMonthReport {
    MonthExp: number,
    MonthNm: string,
    YearExp: number,
    TotalExpense: number,
    Expense: number,
    Investment: number,
    PetrolExpense: number,
    DieselExpense: number,
    
    ATMWithdrawal: number,
    SBI_SB_ATM: number,
    SBI_NRE_ATM: number,
    HDFC_ATM: number,
    CANARA_RES_ATM: number
>>>>>>> 627e71c (25Aug23 commit with month report)
}