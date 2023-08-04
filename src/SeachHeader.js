import {useState} from 'react';

function SeachHeader({search}) {
    //search appjs den gelen bir props
    //form tetiklendiğinde appjs deki forma değer yolluyorzu
    const [valueInput, setvalue] = useState('')
  const  handleFormSubmit=(event)=>{
    event.preventDefault();
    search(valueInput);
  }
  //bu fonksiyon input içindeki değer değişince useState'i update ediyor
  const  handleChange=(event)=>{
    setvalue(event.target.value);
  }
    return ( 
    <div className='SeachDiv'>
<form onSubmit={handleFormSubmit}>
<label >Ne arıyorsunuz ?</label>
<input value={valueInput} onChange={handleChange}/>
</form>

    </div> );
}

export default SeachHeader ;