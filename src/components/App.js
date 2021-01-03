import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from '../components/Input';

const App = () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Input />
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
