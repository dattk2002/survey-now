
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ButtonEdit from './components/ButtonEdit';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Content />
      <ButtonEdit />
      <Footer />
    </div>
  );
}

export default App;



