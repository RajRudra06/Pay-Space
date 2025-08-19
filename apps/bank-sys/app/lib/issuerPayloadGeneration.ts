import crypto from "crypto"

export function generateRequestId(): string {
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
    return `REQ_${timestamp}_${randomSuffix}`;
}

export function generateCustomerRef(userId: string): string {
    const CUSTOMER_REF_SECRET = process.env.CUSTOMER_REF_SECRET!;
    const hash = crypto.createHmac('sha256', CUSTOMER_REF_SECRET)
                      .update(userId)
                      .digest('hex')
                      .substring(0, 12)
                      .toUpperCase();
    return `CUST_${hash}`;
}

export function generateAccountRef(accountId:string):string{
    const CUSTOMER_ACCOUNT_REF_SECRET=process.env.CUSTOMER_ACCOUNT_REF_SECRET!;

    const hash = crypto.createHmac('sha256', CUSTOMER_ACCOUNT_REF_SECRET)
                        .update(accountId)
                        .digest('hex')
                        .substring(0, 12)
                        .toUpperCase();
    return `ACCT_${hash}`;
}

