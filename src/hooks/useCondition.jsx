"use client";
export const UseCondition = ({ children, isTrue }) => {
  return isTrue ? children : null;
};
