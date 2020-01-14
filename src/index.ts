import slash from 'slash';

export const usingNPM = (): boolean => {
  const nex = process.env.npm_execpath;
  return Boolean(nex && /node_modules\/npm/.test(slash(nex)));
};

export type PackageManager = 'yarn' | 'npm';

export const validatePackageManager = (packageManager: PackageManager): void => {
  if (usingNPM()) {
    if (packageManager === 'yarn') {
      throw new Error('Please use Yarn instead');
    }
  } else {
    if (packageManager === 'npm') {
      throw new Error('Please use NPM instead');
    }
  }
};
