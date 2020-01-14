import { usingNPM, validatePackageManager } from '.';

describe('index', () => {
  describe('usingNPM', () => {
    it('when invoking command with npm path should return true', () => {
      process.env.npm_execpath = '/node_modules/npm';
      expect(usingNPM()).toEqual(true);
    });

    it('when invoking command with yarn path should return false', () => {
      process.env.npm_execpath = '/node_modules/yarn';
      expect(usingNPM()).toEqual(false);
    });
  });

  describe('validatePackageManager', () => {
    it('when invoking commad with npm and enforcePackageManager set to yarn should throw Error', () => {
      process.env.npm_execpath = '/node_modules/npm';
      expect(() => validatePackageManager('yarn')).toThrow(new Error('Please use Yarn instead'));
    });

    it('when invoking commad with npm and enforcePackageManager set to npm should not throw Error', () => {
      process.env.npm_execpath = '/node_modules/npm';
      expect(() => validatePackageManager('npm')).not.toThrow(new Error('Please use Yarn instead'));
    });

    it('when invoking commad with yarn and enforcePackageManager set to npm should throw Error', () => {
      process.env.npm_execpath = '/node_modules/yarn';
      expect(() => validatePackageManager('npm')).toThrow(new Error('Please use NPM instead'));
    });

    it('when invoking commad with yarn and enforcePackageManager set to yarn should not throw Error', () => {
      process.env.npm_execpath = '/node_modules/yarn';
      expect(() => validatePackageManager('yarn')).not.toThrow(new Error('Please use NPM instead'));
    });
  });
});
