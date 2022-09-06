/*
 * HomePageReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

const placeholder = (placeholder = { msg: 'Hello Subapp User' }, action) => {
  switch (action.type) {
    case 'UPDATE_SOMETHING':
      return action.payload;
    default:
      return placeholder;
  }
};
export const reducers = {
  placeholder,
};
