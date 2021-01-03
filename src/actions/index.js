import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });
export const addGuessWord = (payload) => ({ type: actionTypes.GUESS_WORD, payload });

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch(addGuessWord({ guessedWord, letterMatchCount }));

  if (secretWord === guessedWord) {
    dispatch(correctGuess());
  }
};

export const getSecretWord = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3030');

  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: response.data,
  });
};
