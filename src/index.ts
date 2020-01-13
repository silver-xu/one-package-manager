import slash from 'slash';

export const usingNPM = (): boolean => {
  const nex = process.env.npm_execpath;
  return Boolean(nex && /node_modules\/npm/.test(slash(nex)));
};

export const validatePackageManager = (settings: any): void => {
  let enforcePackageManager = settings?.onePackageManager?.enforcePackageManager;

  if (!enforcePackageManager || !['yarn', 'npm'].find(value => value === enforcePackageManager.toLowerCase())) {
    enforcePackageManager = 'yarn';
  }

  if (usingNPM()) {
    if (enforcePackageManager === 'yarn') {
      throw new Error('OnePackageManager: Please use Yarn instead');
    }
  } else {
    if (enforcePackageManager === 'npm') {
      throw new Error('OnePackageManager: Please use NPM instead');
    }
  }
};
