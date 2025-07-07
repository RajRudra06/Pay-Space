interface bank{
    id:string,
    name:string,
    urlName:string,
    logo:string,
    color:string,
    bgColor:string,
    borderColor:string,
    textColor:string
}

export const banks:bank[] = [
    {
    id: 'icici',
    name: 'ICICI',
    urlName:'ICICI',
    logo: '🏦',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    borderColor: 'border-orange-200 hover:border-orange-400',
    textColor: 'text-orange-700'
    },
    {
    id: 'sbi',
    name: 'State Bank of India',
    urlName:'SBI',
    logo: '🏛️',
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200 hover:border-blue-400',
    textColor: 'text-blue-700'
    },
    {
    id: 'hdfc',
    name: 'HDFC',
    urlName:'HDFC',
    logo: '🏢',
    color: 'from-red-600 to-red-800',
    bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
    borderColor: 'border-red-200 hover:border-red-400',
    textColor: 'text-red-700'
    },
    {
    id: 'ubi',
    name: 'United Bank of India',
    urlName:'UBI',
    logo: '🏪',
    color: 'from-green-600 to-green-800',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200 hover:border-green-400',
    textColor: 'text-green-700'
    }
];