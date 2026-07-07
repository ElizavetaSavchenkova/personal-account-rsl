import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ChatWidget from '../ChatWidget/ChatWidget';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gos-bg">
      <Header />
      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
      <ChatWidget />
    </div>
  );
};

export default Layout;