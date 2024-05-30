import { Outlet } from 'react-router-dom'
import { BudgetProvider } from './contexts/AppContext'

function App() {

  return (
    <BudgetProvider>
        <Outlet />
    </BudgetProvider>
  )
}

export default App
