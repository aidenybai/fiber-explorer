// not client code

import { useRef, useState } from 'react';

export function traverse(fiber, selector, ascending) {
  if (!fiber || selector(fiber)) return fiber;

  let child = ascending ? fiber.return : fiber.child;
  while (child) {
    const match = traverse(child, selector, ascending);
    if (match) return match;

    child = ascending ? null : child.sibling;
  }
}

export function useFiber() {
  const fiber = useRef();

  useState(() => {
    const bind = Function.prototype.bind;
    Function.prototype.bind = function (self, maybeFiber) {
      if (self === null && typeof maybeFiber?.type === 'function') {
        fiber.current = maybeFiber;
        Function.prototype.bind = bind;
      }
      return bind.apply(this, arguments);
    };
  });

  return fiber.current;
}
