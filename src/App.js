import GlobalStyle from './globalStyle';
import Navbar from "./components/Navbar/Navbar";
import Anchor from "./components/Anchor/Anchor";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from 'react-router-dom';
import LiveChat from './components/LiveChat/LiveChat';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LiveChat />
      <Anchor />
      <Navbar />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
