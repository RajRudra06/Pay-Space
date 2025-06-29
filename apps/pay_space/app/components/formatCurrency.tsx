import CountUp from 'react-countup'

export default function FormatCurrency({amount, currency, locale}:{amount:number,currency:string,locale:string}) {
    return(
        <CountUp
        end={amount}
        duration={1.0}
        formattingFn={(balance) =>
            new Intl.NumberFormat(locale, {
                style: "currency",
                currency: currency,
                }).format(balance)
}
/>
    )
}

  