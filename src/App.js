import './App.css';

import { useState, useContext, createContext } from 'react';

import img from './hamburger.png';

const ShoppingCartContext = createContext();
const ShoppingCartContextProvider = ({children}) => {
  const [state, useState] = useState({});

  return (
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  );
}


const MenuList = ({children}) => {
  return (
    <div className="gap-x-2.5 gap-y-16 mb-16" style={{display: "grid", gridTemplateColumns:"auto auto auto auto auto", paddingTop: 50}}>
      {children}
    </div>
  );
}

const MenuBox = ({ name, price }) => {
  const SIZE = 100;

  return (
    <div className="relative shadow-lg" style={{position:"relative", width: 250, height: 200, borderRadius: 10, backgroundColor: "#242424"}}>
      <label className="absolute text-orange text-lg" style={{right: 15, top: 5}}>i</label>
      <div className="absolute flex items-center justify-center" style={{right: "50%", left:"50%", transform: "translateX(-50%)", top: -SIZE/2, width: SIZE, height: SIZE, borderRadius: "50%", backgroundColor: "#242424"}}>
        <img
          src={img}
          alt=""
          style={{
            width: 80, 
            height: 80
          }}
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center gap-y-3" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
        <h1 className="text-slate-200 text-xl text-bold text-center">
          {name}
        </h1>
        <h1 className="text-slate-200 text-md">
          {price} ₺
        </h1>
      </div>

      <button className="bg-orange absolute w-full" style={{bottom: 0, height: 30, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          Ekle
      </button>
    </div>
  );
}


function App() {
  const shoppingCartValue = useContext(ShoppingCartContext);

  return (
    <div className="layout">
      <div className="sidebar sidebar-left">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
        <svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      </div>
      <div className="content">
        <div className="cafe-info">

        </div>
        <div className="flex flex-row justify-between items-center mt-10">
          <button className="flex flex-row justify-center items-center gap-x-2">
            <svg className="text-orange w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h4 className="text-slate-100">En Son</h4>
          </button>

          <button className="flex flex-row justify-center items-center gap-x-2">
            <svg className="text-orange w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            <h4 className="text-slate-400">Popüler</h4>
          </button>

          <button className="flex flex-row justify-center items-center gap-x-2">
            <svg className="text-orange w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
            <h4 className="text-slate-400">Kampanyalar</h4>
          </button>

          <button className="flex flex-row justify-center items-center gap-x-2">
            <svg className="text-orange w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <h4 className="text-slate-400">Yan Ürünler</h4>
          </button>  

          <button className="flex flex-row justify-center items-center gap-x-2">
            <svg className="text-orange w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <h4 className="text-slate-400">Hepsi</h4>
          </button>           
          
        </div>
        <div className="mt-10 flex flex-col gap-y-5 rounded" style={{overflowY: "auto"}}>

          <h1 className="text-2xl text-slate-400">En son sipariş ettikleriniz</h1>
          <MenuList>
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
          </MenuList>

          <h1 className="text-2xl text-slate-400">Lorem ipsum 1</h1>
          <MenuList>
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
          </MenuList>

          <h1 className="text-2xl text-slate-400">Lorem ipsum 2</h1>
          <MenuList>
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
            <MenuBox name="Lorem" price="99,99" />
          </MenuList>
        </div>

      </div>
      <div className="sidebar sidebar-right flex flex-col items-center">
        <div className="flex flex-row justify-evenly items-center shadow-lg w-full" style={{backgroundColor: "#2f2f2f", height: "50px"}}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </div>
        <div className="sidebar-right-body">
          <h1 className="text-bold text-slate-400 text-2xl">Sepetiniz Boş</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
