import { shallowEqual, useSelector } from "react-redux";

export const useShallowSelectore = (selector) => {
  return useSelector(selector, shallowEqual);
};
