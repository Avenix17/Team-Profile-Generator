// using Manager
const Manager = require('../lib/Manager');

// creates manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Maethows', 14, 'psumwun@gmail.com', 111);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role of employee', () => {
    const manager = new Manager('Maethows', 14, 'psumwun@gmail.com', 111);

    expect(manager.getRole()).toEqual("Manager");
}); 