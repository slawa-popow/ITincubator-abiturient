
export function stringToDate(date: string): Date {
    const datePars = date.split('/')
    .map(v => {
        return parseInt(v);
    });
    return new Date(datePars[2], datePars[1] - 1, datePars[0]);
}

