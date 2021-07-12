const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

// tests create Manager
// tests getOfficeNumber and getRole

describe('Manager', () => {
    describe('test getOfficeNumber', () => {
      it('should return the Office Number of the created manager', () => {
          const testOfficeNumber = 9;
          const manager = new Manager('Gabriel', 6, 'email', testOfficeNumber);
          expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
      })
  })

  describe('test getRole', () => {
      it('should return the role of the created Employee as "Manager"', () => {
          const testRole = 'Manager';
          const manager = new Manager('Jim', 6, 'email@email.com', 9);
          expect (manager.getRole()).toBe(testRole);
      })
  })
})
