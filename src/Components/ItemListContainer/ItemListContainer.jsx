//funcion primaria saludo
import React from 'react' 

const ItemListContainer = ({greeting}) => {

    return (

        <div className='contenedor-bienvenida-principal'>
            <img className='imagen-principal' src="https://www.cocinayvino.com/wp-content/uploads/2017/08/39438399_ml-e1503347647594.jpg" alt="vaso de whisky" />
            <h3 className='texto-bienvenida'>{greeting}</h3>
        </div>
    
    )

}

export default ItemListContainer