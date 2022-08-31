import logger from 'electrode-ui-logger';

/**
 * Helpers & utility methods. Functions here will be packaged into a lib in the future
 */

/**
 * performs deep equality test on 2 objects
 *
 * @param {object} x - first object
 * @param {object} y - second object to compare
 * @return {boolean}
 */
export const objectsDeepEqual = (x, y) => {
  const ok = Object.keys;
  const tx = typeof x;
  const ty = typeof y;

  return x && y && tx === 'object' && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every((key) => objectsDeepEqual(x[key], y[key]))
    : x === y;
};

export const errorHandler = (error, info) => {
  // Below code logs the error and sends batches to api/logger
  logger.log(['error'], { msg: 'Electrode UI logger error', error });
  logger.log(['info'], { msg: 'Electrode UI logger info', info });
};
