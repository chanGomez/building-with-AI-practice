import React from 'react'
import Reviews from './Reviews'
import AddReview from './AddReview'
import Footer from './Footer'
import Page from './Page'
import Header from './Header'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router>
      <Header/>
        <Page />
        <Footer />
    </Router>
  )
}

export default App
