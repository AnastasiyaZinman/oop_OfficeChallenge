//write your code here to make the tests pass
class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
    work(office) {
        console.log("Employee, work", office.documents);
        for (let i = 0; i < 10; i++) {
            var newDoc = new Document(this.name);
            console.log(i);
            console.log(office.documents);
            office.documents.push(newDoc)
            
        }
    }
}
class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    hireEmployee(name) {
        //pushes a new employee to the employees array
        var employee = new Employee(name);
        this.employees.push(employee);
    }
    askEmployeesToWork(office) {
        console.log(this.employees.length);
        for(let i=0; i < this.employees.length; i++){
            console.log(this.employees[i])
           this.employees[i].work(office);
        }
        
        // Employee.work(office);
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
   clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];//new Cleaner(name);
    }
    hireCleaner(name) {
        //push a new cleaner to the cleaners array
        var cleaner = new Cleaner (name);
        this.cleaners.push(cleaner);
    }
    hireManager(name) {
        //push to  Office.managers
        var manager = new Manager(name);
        this.managers.push(manager);
    }
    startWorkDay() {
        for(let i=0;i<this.managers.length;i++){
        console.log("manager",this.managers);
        this.managers[i].askEmployeesToWork(this);
        }
    }
}
