//funcion principal sobre la cual se montan las funciones de primera linea
//importamos funcion primaria itemlistcontainer
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
//importamos plantilla css 
import './App.css'
//importamos funcion primaria navbar
import NavBar from './Components/NavBar/NavBar'

function App() {  

  return (
        
    <div className='App'>
        <NavBar/>
        <ItemListContainer greeting='Bienvenidos a una futura pagina de comercializacion de los whiskies mas deliciosos' />

    </div>
      
  )
}

export default App
