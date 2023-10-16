
import './App.css';
import Header from './components/Header';
import ContentFirst from './components/ContentFirst';
import Footer from './components/Footer';
import ButtonEdit from './components/ButtonEdit';
import CssBaseline from '@mui/material/CssBaseline';
import Background from './components/Background';
import ContentSecond from './components/ContentSecond';

import { Divider } from 'antd';
import ContentReward from './components/ContentReward';
import ContentDownload from './components/ContentDownload';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <p className='div-title'>Kiếm tiền đơn giản chỉ với các bước</p>
      <ContentFirst />
      <Divider />
      <p className='div-title'>Dễ dàng tìm kiếm đối tượng khảo sát</p>
      <ContentSecond />
      <Divider />
      <p className='div-title'>Phần thưởng hấp dẫn</p>
      <ContentReward />
      <Divider />
      <ContentDownload />
      <Footer />
    </div>
  );
}

export default App;



