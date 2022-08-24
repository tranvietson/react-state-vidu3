//import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <Content tieude=" a hot girl guitarist" vitrianh="2" vitritrichdan="1" linkanh="assets/img/01.jpg"/>
      <Content tieude=" one guitar player" vitrianh="1" vitritrichdan="1" linkanh="assets/img/02.jpg" />
      <Content tieude=" a beutiful girl guitar player" vitrianh="2" vitritrichdan="1" linkanh="assets/img/03.jpg" />
      <Footer/>
    </div>
  );
}

export default App;
