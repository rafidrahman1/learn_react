/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (open.indexOf(last) !== close.indexOf(s[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;

};