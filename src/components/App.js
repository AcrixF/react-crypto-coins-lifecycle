import React, {Component} from 'react';
import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Coins from "./Coins/Coins";
import Footer from "../shared/components/layout/Footer";

export default class App extends Component {

  render = () =>
      <div className="App">
        <Header title="Crypto Coins Exchange"/>
        <Content>
          <Coins/>
        </Content>
        <Footer/>
      </div>

}