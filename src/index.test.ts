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
      expect(() =>
        validatePackageManager({
          onePackageManager: {
            enforcePackageManager: 'yarn',
          },
        }),
      ).toThrow(new Error('OnePackageManager: Please use Yarn instead'));
    });

    it('when invoking commad with npm and no setting should default to use yarn and throw Error', () => {
      process.env.npm_execpath = '/node_modules/npm';
      expect(() => validatePackageManager(undefined)).toThrow(new Error('OnePackageManager: Please use Yarn instead'));
    });

    it('when invoking commad with npm and enforcePackageManager setting should default to use yarn and throw Error', () => {
      process.env.npm_execpath = '/node_modules/npm';
      expect(() => validatePackageManager({})).toThrow(new Error('OnePackageManager: Please use Yarn instead'));
    });

    it('when invoking commad with yarn and enforcePackageManager set to npm should throw Error', () => {
      process.env.npm_execpath = '/node_modules/yarn';
      expect(() =>
        validatePackageManager({
          onePackageManager: {
            enforcePackageManager: 'npm',
          },
        }),
      ).toThrow(new Error('OnePackageManager: Please use NPM instead'));
    });
  });
});
