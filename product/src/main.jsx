import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider} from "./Components/Context.API/ProductContext.jsx";
import ProductView from "./Components/view/productView.jsx";


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProductProvider>
          <ProductView/>
          <App />



      </ProductProvider>



  </React.StrictMode>,
)
