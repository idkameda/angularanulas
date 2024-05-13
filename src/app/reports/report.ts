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
export interface IMonthReport {
    Table: Table[];
    Table1: Table1[];
    Table2: Table2[];
    Table3: Table3[];
}
export interface Table {
    TranDate: string,
    BankDesc: string,
    BankDesc2: string,
    MyDesc: string,
    AmtDeducted: number,
    PaidUsing: string,
    IsInvestment: number,
    AddedOn: string,
    FYYear: number,
    RecId: string
}
export interface Table1 {
    TranDate: string,
    BankDesc: string,
    BankDesc2: string,
    MyDesc: string,
    AmtDeducted: number,
    PaidUsing: string,
    IsInvestment: number,
    AddedOn: string,
    FYYear: number,
    RecId: string
}
export interface Table2 {
    FillingDate: string,
    BankDesc: string,
    MyDesc: string,
    MyLocation: string,
    TotalPaid: number,
    PaidUsing: string,
    TotalLitre: number,
    PerLitre: number,
    AddedOn: string,
    KMDriven: number,
    RecId: string
}
export interface Table3 {
    FillingDate: string,
    BankDesc: string,
    MyDesc: string,
    MyLocation: string,
    TotalPaid: number,
    PaidUsing: string,
    TotalLitre: number,
    PerLitre: number,
    AddedOn: string,
    KMDriven: number,
    RecId: string
}