/**
 * Silence defaultProps errors from unmaintained components.
 *
 * https://github.com/recharts/recharts/issues/3615#issuecomment-1636923358
 */
const error = console.error;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
