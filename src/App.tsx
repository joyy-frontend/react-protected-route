import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/mypage' element={<MyPage />}/>
          <Route path='/404' element={<Error />}/>
          <Route path='/*' element={<Navigate to={'/404'}/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;

