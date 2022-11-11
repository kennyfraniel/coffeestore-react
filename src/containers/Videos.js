import { useState ,useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {data} from '../utils/data'
import { customFetch } from '../utils/customFetch'
import { useParams } from 'react-router-dom'

const Videos = () => {
  const [datos, setDatos] = useState ([]);
  const {idCategory} = useParams ();

  const deleteProducto = (id) => {
    let nuevosDatos = datos.filter(item => item.id != id)
    setDatos(nuevosDatos)
  }

useEffect (() => {
  if (idCategory == undefined) {
    customFetch(2000, data)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
   } else {
    customFetch(2000, data.filter(item => item.categoryId == idCategory ))
    .then(response => setDatos(response))
    .catch(err => console.log(err))
   }
  }, [idCategory])

  return (
    <>
    {
      datos.map(item => (
        <ItemListContainer
        key={item.id}
        title={item.title}
        precio={item.precio}
        description={item.description}
        thumbnails={item.thumbnails}
        deleteProducto={() => deleteProducto(item.id)}
        />
      ))
    }
    
  </>
  )
}

export default Videos