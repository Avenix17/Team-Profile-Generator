// using Engineer
const Engineer = require('../lib/Engineer');

// creates engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Dyloan', 19, 'dyloan.bbfish@gmail.com', 'bluhbluhfish117');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github
test('gets engineer github value', () => {
    const engineer = new Engineer('Dyloan', 19, 'dyloan.bbfish@gmail.com', 'bluhbluhfish117');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role
test('gets role of employee', () => {
    const engineer = new Engineer('Dyloan', 19, 'dyloan.bbfish@gmail.com', 'bluhbluhfish117');

    expect(engineer.getRole()).toEqual("Engineer");
});