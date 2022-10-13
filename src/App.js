import {useToken} from './hooks/useToken';
import {useAuth} from './hooks/useAuth';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [, delToken] = useToken('');
  const [auth] = useAuth({});

  return (
    <>
      <Header delToken={delToken} auth={auth} />
      <Main />
    </>
  );
}

export default App;
