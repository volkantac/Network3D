'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMap;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * MIT license
 */

/**
 * https://github.com/facebook/immutable-js/blob/master/src/Map.js
 * This is to avoid importing the full `immutable` module for type check
 * @returns `true` if object is an immutable.js Map instance
 */
var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SENTINEL]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pcy1pbW11dGFibGUtbWFwLmpzIl0sIm5hbWVzIjpbImlzTWFwIiwiSVNfTUFQX1NFTlRJTkVMIiwibWF5YmVNYXAiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFZd0JBLEs7QUFaeEI7Ozs7O0FBS0E7Ozs7O0FBS0EsSUFBTUMsa0JBQWtCLHVCQUF4Qjs7QUFFZSxTQUFTRCxLQUFULENBQWVFLFFBQWYsRUFBeUI7QUFDdEMsU0FBT0MsUUFBUUQsWUFBWUEsU0FBU0QsZUFBVCxDQUFwQixDQUFQO0FBQ0QiLCJmaWxlIjoiaXMtaW1tdXRhYmxlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ltbXV0YWJsZS1qcy9ibG9iL21hc3Rlci9zcmMvTWFwLmpzXG4gKiBUaGlzIGlzIHRvIGF2b2lkIGltcG9ydGluZyB0aGUgZnVsbCBgaW1tdXRhYmxlYCBtb2R1bGUgZm9yIHR5cGUgY2hlY2tcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBvYmplY3QgaXMgYW4gaW1tdXRhYmxlLmpzIE1hcCBpbnN0YW5jZVxuICovXG5jb25zdCBJU19NQVBfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9NQVBfX0BAJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNYXAobWF5YmVNYXApIHtcbiAgcmV0dXJuIEJvb2xlYW4obWF5YmVNYXAgJiYgbWF5YmVNYXBbSVNfTUFQX1NFTlRJTkVMXSk7XG59XG4iXX0=