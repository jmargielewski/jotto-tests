import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type ``CORRECT_GUESS', () => {
    const actions = correctGuess();
    expect(actions).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
