import React from 'react';

import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Greeting from './Greeting/Greeting';
import ColorPicker from './ColorPicker/ColorPicker';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import BookList from './BookList/BookList';
import Input from './Input/Input';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Greeting firstName="Damon" />
      <Contact />
      <ColorPicker />
      <VideoPlayer />
      <BookList />
      <Input />
    </div>
  );
}

export default App;
