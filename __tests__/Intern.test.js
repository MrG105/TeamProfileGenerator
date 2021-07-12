const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// tests create Intern
// tests getSchool and getRole

describe('Intern', () => {
    describe('test getSchool', () => {
      it('should return the School of the created Intern', () => {
          const testSchool = 'Harvard';
          const intern = new Intern('Gabriel', 1, 'email', testSchool);
          expect(intern.getSchool()).toBe(testSchool);
      })
  })

  describe('test getRole', () => {
      it('should return the role of the created Employee as "Intern"', () => {
          const testRole = 'Intern';
          const intern = new Intern('Jim', 6, 'email@email.com', 'Harvard');
          expect (intern.getRole()).toBe(testRole);
      })
  })
})
