const helloWorld = require('./helloWorld');

describe('helloWorld', () => {
  test('First test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(helloWorld()).toBe('');
  });
  
  test.skip('Second test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(helloWorld()).toBe('');
  });
});
