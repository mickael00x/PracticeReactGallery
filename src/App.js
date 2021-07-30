import React, { useState } from 'react';
import Images from './comps/Images';
import Modal from './comps/Modal';
import UploadForm from './comps/UploadForm';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <UploadForm />     
      <Images setSelectedImg={setSelectedImg}/> 
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
