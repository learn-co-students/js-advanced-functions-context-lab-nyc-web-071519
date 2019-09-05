/* Your Code Here */
function createEmployeeRecord(data){
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(data){
    return data.map(emp => createEmployeeRecord(emp))
}

function createTimeInEvent(date){
    let timeInEvents = {type: "TimeIn"};
    const dateAndTime = date.split(" ")
    timeInEvents.hour = parseInt(dateAndTime[1])
    timeInEvents.date = dateAndTime[0]
    this.timeInEvents.push(timeInEvents)
    return this
}
function createTimeOutEvent(date){
    let timeOutEvents = {type: "TimeOut"};
    const dateAndTime = date.split(" ")
    timeOutEvents.hour = parseInt(dateAndTime[1])
    timeOutEvents.date = dateAndTime[0]
    this.timeOutEvents.push(timeOutEvents)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut-timeIn)/100;
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this,date)
}

function createEmployeeRecords(arr){
    return arr.map(emp => createEmployeeRecord(emp))
}

function calculatePayroll(employees){
    const allWages = employees.map(emp => allWagesFor.call(emp))
    return allWages.reduce(function(total,cv){
        total = parseInt(total) + parseInt(cv)
        return total
    }, 0)
}

function findEmployeebyFirstName(srcArray, firstName){
    return srcArray.find(emp => emp.firstName === firstName)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}