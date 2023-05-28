export function extractDate(fullDate:any){
    var twoDigitMonth = fullDate.getMonth() + "";
    if (twoDigitMonth.length == 1)
        twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length == 1)
        twoDigitDate = "0" + twoDigitDate;
    var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
    return currentDate;
}