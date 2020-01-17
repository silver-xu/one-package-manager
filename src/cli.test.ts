import { start } from './cli';

process.exit = jest.fn() as any;
global.console.log = jest.fn();

describe('cli', () => {
  const nodePath = ['node', '/processChild.js'];

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('when set to use Yarn, should output error when NPM is used', () => {
    process.argv = [...nodePath, '--yarn'];
    process.env.npm_execpath = '/node_modules/npm';
    start();
    expect(global.console.log).toBeCalledTimes(1);
  });

  it('when set to use Yarn, should not output error when Yarn is used', () => {
    process.argv = [...nodePath, '--yarn'];
    process.env.npm_execpath = '/node_modules/yarn';
    start();
    expect(global.console.log).not.toBeCalled();
  });

  it('when set to use NPM, should output error when Yarn is used', () => {
    process.argv = [...nodePath, '--npm'];
    process.env.npm_execpath = '/node_modules/yarn';
    start();
    expect(global.console.log).toBeCalledTimes(1);
  });

  it('when set to use NPM, should not output error when NPM is used', () => {
    process.argv = [...nodePath, '--npm'];
    process.env.npm_execpath = '/node_modules/npm';
    start();
    expect(global.console.log).not.toBeCalled();
  });
});
