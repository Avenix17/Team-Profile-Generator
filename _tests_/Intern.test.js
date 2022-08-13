// using Intern
const Intern = require('../lib/Intern');

// creates intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Ocie', 28, 'ociefab@gmail.com', 'Fab University');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school
test('gets employee school', () => {
    const intern = new Intern('Ocie', 28, 'ociefab@gmail.com', 'Fab University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role
test('gets role of employee', () => {
    const intern = new Intern('Ocie', 28, 'ociefab@gmail.com', 'Fab University');

    expect(intern.getRole()).toEqual("Intern");
}); 