import './style.css';
import { useBudgetContext, SetStatesBudget } from '../../contexts/AppContext';
import { useEffect, useState } from 'react';

function CreateBudget(){

  const [ budget, setBudget ] = useState<string>('');
  const [ price, setPrice ] = useState<number>(0);
  const [ qntd, setqntd ] = useState<number>(0);

  const { state, dispatch } = useBudgetContext();

  const setBudGetList = ()=>{

    if(budget.length > 10 && price > 0 && qntd > 0 ){

      dispatch({
        type: SetStatesBudget.setBudgetList,
        payload: [...state.budgetList, {
          description:budget,
          value:price,
          amount:qntd,
        }]
      })

      setBudget('');
      setPrice(0);
      setqntd(0);
        
      /* dispatch({
        type: SetStatesBudget.setTotalValue,
        payload: (qntd*price) + state.totalValue
      })  */

    }else{
      if(budget.length < 10){
        alert('Orcanmento deve ter no minimo 10 caracteres');
      }
      if(price === 0){
        alert('O valor do item nao pode ser igual a 0');
      }
      if(qntd === 0){
        alert('O quantidade do item nao pode ser igual a 0');
      }
    }
  };

  useEffect(()=>{
      const totalValue = state.budgetList.map(e => e.value * e.amount).reduce((acc, vat) => acc + vat , 0);
        
      dispatch({
        type: SetStatesBudget.setTotalValue,
        payload: totalValue
      });
  },[state.budgetList]);

  return(
    <>
    <div className='add-budget-box-todo'>
      
        <label htmlFor="info" className='input-budget-info'>
          Digite seu orcamento:
          <textarea 
          rows={3}
          id='info' 
          onChange={(e)=>{setBudget(e.target.value)}} 
          minLength={10}
          value={budget}/>
        </label>
        
        <label htmlFor="value" className='input-budget-value'>
          Valor un:
          <input 
          id='value' type="number" 
          onChange={(e)=>{setPrice(+e.target.value)}}
          value={price}/>
        </label>

        <label htmlFor="" className='input-budget-qntd'>
          Quantidade:
          <input 
          id='qntd' type="number" 
          onChange={(e)=>{setqntd(+e.target.value)}} 
          value={qntd}/>
        </label>

        <button onClick={setBudGetList} className='create-budget-btn'>Criar</button>
      
    </div>
    </>
  )
}

export default CreateBudget;