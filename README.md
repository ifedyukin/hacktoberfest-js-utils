# Hacktoberfest 2018 JS Utils

The point of this repository to build a suite of javascript methods by the time [hacktoberfest](https://hacktoberfest.digitalocean.com/) ends! Let's get some T-shirts!    
[Original repo](https://github.com/rgehan/hacktoberfest-2k18-katas) by [@rgehan](https://github.com/rgehan).

## Installation

You first need to fork the repository, then clone it, go in the directory and run:

```bash
# Install the dependencies
yarn
```

## How to participate

1. Find an issue that is **not assigned** yet
2. Implement it so that it passes all the tests (use `yarn test src/[methodName].test.js` to run the tests)
3. Add a skeleton of a new method along with new test suit for it
4. Now we have fixed a method, written the skeleton of a new one, and a test suit to accompany it, so we can push our changes and open a **pull request**. 
5. Create an issue for your new feature

## Rules

- Each PR should contain **3 files**: implementation of the method you've been assigned to, a skeleton of a new one for someone else to work on and a test suit for it.
- Make sure your implementation passes the previous tests before opening a Pull Request.
- Do not use any npm functions or javascript built-in methods.

### Project Structure
All methods will live in the `src` directory. They should be written as [methodName].js.

All tests will live in the `test` directory. A test file should be formatted `[methodName].test.js` to reflect what method is being tested.

### A skeleton of new method
```javascript
export default () => {
  // TO IMPLEMENT IN ANOTHER PR
};
```

### Test suit example
```javascript
import abs from '../src/abs';

describe('abs', () => {
  test('absolute of 0 to equal 0', () => {
    expect(abs(0)).toBe(0);
  });

  test('absolute of 1 to equal 1', () => {
    expect(abs(1)).toBe(1);
  });

  test('absolute of -1 to equal 1', () => {
    expect(abs(-1)).toBe(1);
  });
});
```
