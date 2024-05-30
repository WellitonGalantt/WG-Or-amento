import { FaPencilAlt  } from "react-icons/fa";

import './style.css'
import { BudGetList } from "../../../contexts/AppContext";
import { formatCurrencyNumber } from "../../../utils/formatCurrency";

type dataBgProps ={
  budgetData:BudGetList;
  index:number;
  toggleEdit: (i:number)=> void;
}

function BudGetBox({toggleEdit, index, budgetData}:dataBgProps){

  const { amount, description, value } = budgetData;
  
  const formatedValue = formatCurrencyNumber(value, 'BRL');
  return(
    <>
    <div className="bud-get-item-info">
      <p className="content-budget-item">{description}</p>
      <p className="qntd-budget-item">{amount}</p>
      <p className="price-budget-item">{formatedValue}</p>
      <button onClick={()=>{toggleEdit(index)}}><FaPencilAlt /></button>

    </div>
    </>
  )
}

export default BudGetBox;