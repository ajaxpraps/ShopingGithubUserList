import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pagination from './components/Pagination';
import TableData from './components/TableData';
import SearchingData from './components/SearchingData';
import ShopingCart from './components/ShopingCart';
import { MyContext } from './MyContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function App() {

const myContext = useContext(MyContext);

  const countValue = useSelector((state)=>state.counter.value);
  return (
    <Router>
      <h1 className="bg-blue-500 text-white p-4 rounded-md">Welcome to React Practice</h1>
      <header className='bg-amber-300'>
        <nav className='flex justify-between py-5'>
          <Link to="/" className='text-2xl'>TableData</Link>
          <Link to="/searching " className='text-2xl'>searching</Link>
          <Link to="/pagination" className='text-2xl'>ReduxCount : {countValue}  pagination</Link>
          <Link to="/shoping" className='text-2xl'>{myContext.count}shoping</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<TableData />} />
        <Route path='/searching' element={<SearchingData />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/shoping' element={<ShopingCart/>} />
      </Routes>
    </Router>
  )
}

export default App
