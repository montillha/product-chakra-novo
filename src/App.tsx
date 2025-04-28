
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ProductsPage from './components/pages/ProductsPage'
import SingleProductPage from './components/pages/SingleProductPage'

function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsPage/>}/>
        <Route path='/product/:id' element={<SingleProductPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
