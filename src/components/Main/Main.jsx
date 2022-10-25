import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import Greetings from './Greetings';
import IncorrectRoute from './IncorrectRoute';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Greetings />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>} />
        </Route>
        <Route path='*' element={<IncorrectRoute />} />
      </Routes>
    </Layout>
  </main>
);
