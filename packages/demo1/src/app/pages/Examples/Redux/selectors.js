/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';

export const getInfo = createSelector(
  (state) => state.placeholder,
  (placeholder) => placeholder
);
