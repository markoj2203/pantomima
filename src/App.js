import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
 
function App() {
  return (
    <section className="hero is-fullheight">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </section>
  );
}
 
export default App;