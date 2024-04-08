const throttleKeys = {};

/**
 * @param {string} key
 */
export function getThrottle(key) {
  /**
   * @param {function} callback
   * @param {number} interval
   * @returns {number} - timeout register key
   */
  return (callback, interval = 500) => {
    if (throttleKeys[key]) {
      clearTimeout(throttleKeys[key]);
    }
    throttleKeys[key] = setTimeout(callback, interval);
    return throttleKeys[key];
  };
}
