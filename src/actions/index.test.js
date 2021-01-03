import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { correctGuess, addGuessWord, actionTypes, getSecretWord } from './';

// this is integration test which tests both action creator and reducer at the same time !!
describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('adds response word to state', async () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());

    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const actions = correctGuess();
    expect(actions).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('addGuessWord', () => {
  test('returns an action with type `GUESS_WORD`', () => {
    const payload = {
      guessedWord: 'agile',
      letterMatchCount: 3,
    };

    const actions = addGuessWord(payload);
    expect(actions).toEqual({
      type: actionTypes.GUESS_WORD,
      payload,
    });
  });
});
