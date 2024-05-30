
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext<ContextBudgetProps | undefined>(undefined);

type childrenProps ={
  children: React.ReactNode
}

export type BudGetList = {
  description: string;
  value: number;
  amount: number;
}

export type PrestadorProps = {
  name: string;
  number: string;
  adress: string;
}

type StateBudGet ={
  budgetList: BudGetList[];
  totalValue: number;
  amountBudget: number;
  prestador: PrestadorProps[];
  contratante: PrestadorProps[];
}

export type ActionBudGetProps ={
  type: SetStatesBudget;
  payload: any;
}

export type ContextBudgetProps={
  state:StateBudGet;
  dispatch: (action: ActionBudGetProps ) => void;
}

export enum SetStatesBudget{
  setBudgetList,
  setTotalValue,
  setAmountBudget,
  setPrestador,
  setContratante
}

const budGetInitialValues:StateBudGet ={
  budgetList: [],
  totalValue: 0,
  amountBudget: 0,
  prestador: [],
  contratante: [],
}

const BudgetReducer = (state:StateBudGet, action:ActionBudGetProps)=>{

  switch(action.type) {
    case SetStatesBudget.setBudgetList:
      return {...state, budgetList: action.payload};
    case SetStatesBudget.setTotalValue:
      return {...state, totalValue: action.payload};
    case SetStatesBudget.setAmountBudget:
      return {...state, amountBudget: action.payload};
    case SetStatesBudget.setPrestador:
      return {...state, prestador: action.payload};
    case SetStatesBudget.setContratante:
      return {...state, contratante: action.payload};
    default:
      return state;
  }
}

export function BudgetProvider({children}:childrenProps){

  const [ state, dispatch ] = useReducer(BudgetReducer, budGetInitialValues);

  return(
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useBudgetContext = ()=>{

  const context = useContext(AppContext);

  if(context === undefined){
    throw new Error('Voce so pode usar o contexto dentro do provider!');
  }

  return context
  
}