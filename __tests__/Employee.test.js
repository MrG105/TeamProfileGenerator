const Employee = require('../lib/Employee');

// creates Employee
// test getName, getId, getEmail, getRole

describe('Employee', () => {
      describe('test getName', () => {
        it('should return the name of the created employee', () => {
            const testName = 'Jim';
            const employee = new Employee(testName, 1, 'email');
            expect(employee.getName()).toBe(testName);
        })
    })

    describe('test getId', () => {
        it('should return the ID of the created employee', () => {
            const testId = 4;
            const employee = new Employee('Jim', testId, 'email');
            expect(employee.getId()).toBe(testId);
        })
    })

    describe('test getEmail', () => {
        it('should return the email of the created employee', () => {
            const testEmail = 'email@email.com';
            const employee = new Employee ('Jim', 20, testEmail);
            expect(employee.getEmail()).toBe(testEmail);
        })
    })

    describe('test getRole', () => {
        it('should return the role of the created employee as "Employee"', () => {
            const testRole = 'Employee';
            const employee = new Employee('Jim', 6, 'email@email.com');
            expect (employee.getRole()).toBe(testRole);
        })
    })
})


