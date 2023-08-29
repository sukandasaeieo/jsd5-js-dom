import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>  
  );
}

function Header() {
  return (
    // Code for Header
    // <Header />
    <header>
        <span>Turn on / off</span>
        <p>Current Temperature: 40 degree</p>
      </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <Temperature/>
  );
}

function Temperature() {
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
        {/* <span> &#123;temperature &#125;Oc</span> */}
        <span> {"{temperature} Oc"}</span>
    </div>
  );
}

function Footer() {
  return (
    // Code for Footer
    // <Footer />
    <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
  );
}

export default App;
