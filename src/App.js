import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal';


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/details' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/default' element={<Default/>} />
          <Route path='/' element={<ProductList/>} />
        </Routes> 
        <Modal></Modal>
      </>
    )
  }
}
