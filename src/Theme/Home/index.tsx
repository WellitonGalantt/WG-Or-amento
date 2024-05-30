import Header from '../../components/Header';
import './style.css'

type ChildrenProps ={
  children: React.ReactNode
}

function ThemeHome({children}:ChildrenProps){
  return(
    <>
      <div className='home-container-todo'>
        <Header />
        <div className="container-pages-contents">
          {children}
        </div>

      </div>
    </>
  )
}

export default ThemeHome;