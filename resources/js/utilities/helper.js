import { format } from 'date-fns'


export const printString = (str) => {
    return str
}

export const printPrice = (price) => {
    return '$ '+ price
}

export const printDate = (date) => {
    const myDate = new Date(date)
    const formattedDate = format(myDate, 'MMM dd, yyyy')

    return formattedDate
}