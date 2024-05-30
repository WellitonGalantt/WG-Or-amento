import { useState } from 'react';
import { SetStatesBudget, useBudgetContext } from '../../contexts/AppContext';
import './style.css'

type editBudgetProps ={
  index: number | undefined;
  toggleEdit: (i:number | undefined) =>void;
}

function EditBudgetBox({index, toggleEdit}:editBudgetProps){

  if(index === undefined) return;

  const { state , dispatch} = useBudgetContext();
  const { description, value, amount } = state.budgetList[index];

  const [ newDescription, setNewDescription ] = useState<string>(description);
  const [ newValue, setNewValue ] = useState<number>(value);
  const [ newAmount, setNewAmount ] = useState<number>(amount);

  const deletEditBudget = ()=>{

    const duplicateList = state.budgetList;
    duplicateList.splice(index, 1);

    dispatch({
      type: SetStatesBudget.setBudgetList,
      payload: duplicateList,
    })

    toggleEdit(undefined); 
    
  }

  const setEditBudget =()=>{

    if(newDescription.length > 10 && newValue >0 && newAmount > 0){
      
      const duplicateList = state.budgetList.filter((e, i) => i != index );
      duplicateList.splice(index, 0, {description:newDescription, value:newValue, amount:newAmount});
  
      dispatch({
        type: SetStatesBudget.setBudgetList,
        payload: duplicateList
      })
  
      toggleEdit(undefined);  
    }else{
      alert('Algo deu errado, verifique se o orcamento tem mais de 10 cartacteres e o valor e quantidade sao maior que 0.');
    }
  }

  return(
    <>
    <div className='edit-budget'>
        <label htmlFor="info" className='input-budget-info'>
            Digite seu orcamento:
            <textarea 
            rows={3}
            id='info'
            onChange={(e)=>{setNewDescription(e.target.value)}}
            value={newDescription}
            />
          </label>
          
          <label htmlFor="value" className='input-budget-value'>
            Valor un:
            <input 
            id='value' 
            type="number"
            onChange={(e)=>{setNewValue(+e.target.value)}}
            value={newValue}
            />
          </label>

          <label htmlFor="" className='input-budget-qntd'>
            Quantidade:
            <input 
            id='qntd' 
            type="number"
            onChange={(e)=>{setNewAmount(+e.target.value)}}
            value={newAmount}
            />
          </label>

        <button onClick={setEditBudget} className='save-budget-btn'>Salvar</button>
        <button onClick={deletEditBudget} className='delete-budget-btn'>Excluir</button>
      
      </div>
    </>
  )
}
export default EditBudgetBox;