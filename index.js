/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function createEmployeeRecord(array) {
  let employeeObject = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employeeObject;
}

function createEmployees(mainArray) {
  return mainArray.map(function(record) {
    return createEmployeeRecord(record);
  });
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let iE = this.timeInEvents.find(function(arg) {
    return arg.date === dateStamp;
  });
  let oE = this.timeOutEvents.find(function(arg) {
    return arg.date === dateStamp;
  });
  return (oE.hour - iE.hour) / 100;
}

function wagesEarnedOnDate(dateStamp) {
  let wage = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
  return parseFloat(wage.toString());
}

function calculatePayroll(array) {
  return array.reduce(function(memo, record) {
    return memo + allWagesFor.call(record);
  }, 0);
}

function createEmployeeRecords(arg) {
  return arg.map(function(row) {
    return createEmployeeRecord(row);
  });
}

function findEmployeebyFirstName(array, firstName) {
  return array.find(arrayElement => arrayElement.firstName === firstName);
}
