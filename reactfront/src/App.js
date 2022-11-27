import './customcss/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowProductos from './components/ShowProductos';
import CreateProductos from './components/CreateProductos';
import EditProducto from './components/EditProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProductos/> }/>
          <Route path='/create' element={ <CreateProductos/> }/>
          <Route path='/edit/:id' element={ <EditProducto/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
