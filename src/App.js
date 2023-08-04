import logo from './logo.svg';
import './App.css';
import SeachHeader from './SeachHeader';
// export ettiğin isimle import etmen lazım
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';


function App() {

  const [images, setImages] = useState([])  
  const handleSubmit= async(term)=>{
      //handle submit tetiklendiğinde içindeki değeri yazdık
    const result=await searchImages(term);
    setImages(result);
     };
  return (
    <div className="App">
 <SeachHeader  search={handleSubmit}/>
<ImageList imagesplaceHolder={images}/>
    </div>
  );
}

export default App;
