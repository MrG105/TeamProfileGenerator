const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// tests creates Engineer
// tests getGithub and getRole

describe('Engineer', () => {
    describe('test getGithub', () => {
      it('should return the Github of the created Engineer', () => {
          const testGithub = 'MrG105';
          const engineer = new Engineer('Gabriel', 1, 'email', testGithub);
          expect(engineer.getGithub()).toBe(testGithub);
      })
  })

  describe('test getRole', () => {
      it('should return the role of the created Employee as "Engineer"', () => {
          const testRole = 'Engineer';
          const engineer = new Engineer('Jim', 6, 'email@email.com', 'github');
          expect (engineer.getRole()).toBe(testRole);
      })
  })
})
