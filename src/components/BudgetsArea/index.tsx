
import { useState } from 'react';
import { BudGetList } from '../../contexts/AppContext';
import { formatCurrencyNumber } from '../../utils/formatCurrency';
import BudGetBox from './BudgetBox';
import './style.css';
import EditBudgetBox from '../EditBudgetBox';

type listBudGetProp ={
  budget: BudGetList[];
  totalValue: number;
}

function BudGetsArea({budget, totalValue}:listBudGetProp){

  const totalValueFormated = formatCurrencyNumber(totalValue, 'BRL');

  const [ edit, setOpenEdit ] = useState<boolean>(false);
  const [ editIndex, setEditIndex ] = useState<number | undefined>(undefined);

  const toggleEdit = (i:number|undefined)=>{
    setOpenEdit(!edit);
    setEditIndex(i);
  }

  return(
    <>
        
    <div className='budget-todo-container'>

    {edit &&
      <div className='edit-budget-box'>
        <EditBudgetBox toggleEdit={toggleEdit} index={editIndex} />
      </div>
    }

      <div className='info-title-box'>

        <p className='title-info-budget'>Orçamentos</p>
        <hr/>
        <p className='title-info-qntd'>Quantidade</p>
        <hr/>
        <p className='title-info-price'>Preço Un</p>

      </div>      

      {budget.length > 0 &&
        budget.map((e, index)=><BudGetBox key={index} toggleEdit={toggleEdit} index={index} budgetData={e}/>)
      }

      <div className='info-sobtotal-box'>

        <p className='title-info-subtotal'>Subtotal:</p>
        <p className='subtotal-info-price'>{totalValueFormated}</p>

      </div>

    </div>
    </>
  )
}

export default BudGetsArea;