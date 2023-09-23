import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WallpapperLayout from './pages/WallpapperLayout';
import WallpapperPhoto from './pages/WallpapperPhoto';

function App() {
  return (
    <div className="h-full md:flex">
      <Navbar className="sticky top-0 md:left-0 z-10" />
      <div className="h-full">
        <Routes>
          <Route path='/' element={<WallpapperLayout />}>
            <Route path=':id' element={<WallpapperPhoto />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
