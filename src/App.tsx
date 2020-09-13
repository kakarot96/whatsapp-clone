import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App() {
  return (
    <div className="App" style={{height:'100vh',overflow:'hidden'}}>
      <RecoilRoot>
      <Dashboard/>
      </RecoilRoot>
    </div>
  );
}

export default App;
