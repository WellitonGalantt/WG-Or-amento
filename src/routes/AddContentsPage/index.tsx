import './style.css'

import ThemeHome from '../../Theme/Home/index.tsx'
import InputsInfos from '../../components/InputsInfos/index.tsx';
import CreateBudget from '../../components/CreateBudGet/index.tsx';
import BudGetsArea from '../../components/BudgetsArea/index.tsx';

import { useBudgetContext } from '../../contexts/AppContext.tsx';

function AddContentsPage(){

  const { state } = useBudgetContext();

  const printBudget = ()=>{
    const contratante = state.contratante[0];
    const prestador = state.prestador[0];
    
    if(contratante.name.length < 5 || prestador.name.length < 5 || contratante.adress.length < 5 || prestador.adress.length < 5 || contratante.number.length > 12 || prestador.number.length > 12){
      alert('Ops! Verifique os dados do contratante e do prestador')
      return
    }

    if(state.budgetList.length ===0){
      alert('Crie um orçamneto primeiro para poder prosseguir!');
      return
    }

    window.print();

  }
  
  return(
    <ThemeHome >
      <div className="add-budget-more-infos-box">
        
        <InputsInfos
        nameTitle='prestador'
        />

        <hr/>

        <InputsInfos
        nameTitle='contratante'
        />

      </div>
      
      <hr/>

      <h1 className='title-budget-list'>Especifique seu orçamento.</h1>
      <h1 className='title-budget-list print'>Orçamentos</h1>

      <CreateBudget/>

      <hr/>

      <BudGetsArea 
      budget={state.budgetList}
      totalValue={state.totalValue}
      />

    <div className="resume-btn-box">
      <button onClick={printBudget} className='resume-budget-btn'>Resumo do orçamento</button>
    </div>
      
    </ThemeHome>
  )
}

export default AddContentsPage;