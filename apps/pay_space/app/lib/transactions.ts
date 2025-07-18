enum txn_status{
    pending,
    success,
    failed
}


enum Txn_channel {
    UPI,
    Wallet,
    Netbanking,
    Card,
    Cheque,
    ChequeDD,
    RTGS,
    NEFT,
}

enum txn_type {
    credit,
    debit
}

export default interface Transaction{
    counterPartyID:string,
    status:string,
    type:string,
    created_At:Date,
    channel:Txn_channel,
    category:string,
    Amount:number
}