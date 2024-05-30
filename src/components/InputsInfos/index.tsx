import { useEffect, useState } from 'react';
import './style.css';
import { SetStatesBudget, useBudgetContext } from '../../contexts/AppContext';


type InputProps = {
  nameTitle: string;
}

function InputsInfos({nameTitle}:InputProps){

  const { dispatch } = useBudgetContext();

  const [ name, setName ] = useState<string>('');
  const [ number, setNumber ] = useState<string>('');
  const [ adress, setAdress ] = useState<string>('');

  useEffect(()=>{
    if(nameTitle === 'prestador'){
      dispatch({
        type: SetStatesBudget.setPrestador,
        payload: [{name:name, number:number, adress:adress}]
      })
    }

    if(nameTitle === 'contratante'){
      dispatch({
        type: SetStatesBudget.setContratante,
        payload: [{name:name, number:number, adress:adress}]
      })
    }

  },[name, number, adress]);

  return(
    <>
      <div className="provider-service-infos-box">
        <label>
          Nome do {nameTitle}:
          <p className='name-print'>{name}</p>
          <input
          type="text"
          placeholder="Digite o nome do prestador aqui" 
          onChange={(e)=>{setName(e.target.value)}}
          value={name}      
          required />
        </label>

        <label>
          Numero do {nameTitle}:
          <p className='number-print'>{number}</p>
          <input type="number" 
          placeholder="Digite o numero do prestador aqui" 
          onChange={(e)=>{setNumber(e.target.value)}}
          value={number}                                  
          required />
        </label>

        <label>
          Endereço do {nameTitle}:
          <p className='adress-print'>{adress}</p>
          <input type="text" 
          placeholder="Digite o endereco do prestador aqui"
          onChange={(e)=>{setAdress(e.target.value)}}
          value={adress} 
          required />
        </label>
      </div>
    </>
  )
}

export default InputsInfos;