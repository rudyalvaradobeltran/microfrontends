import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import SafeComponent from './SafeComponent'
import Header from 'home/Header'
import Footer from 'home/Footer'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header data={{ text: 'Header from PDP' }} />
    </SafeComponent>
      <div className="my-10 ">
        PDP page content
      </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
