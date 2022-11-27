import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/producto'

const CreateProductos = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, precio: precio, categoria: categoria, img: img})
        navigate('/')
    }

  return (
    <div>
        <h3>Crear Producto</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input
                    value={precio}
                    onChange={ (e)=> setPrecio(e.target.value)}
                    type="number"
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Categoria</label>
                {/* <input
                    value={categoria}
                    onChange={ (e)=> setCategoria(e.target.value)}
                    type="text"
                    className='form-control'
                /> */}
                <select 
                    class="form-select" 
                    aria-label="Default select example"
                    value={categoria}
                    type="text"
                    className='form-control'
                    onChange={ (e)=> setCategoria(e.target.value)}
                    >
                <option selected>Seleccionar</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="niños">Niños</option>
                </select>
            </div>

            <div className='mb-3'>
                <label className='form-label' >Img</label>
                <input
                    value={img}
                    onChange={ (e)=> setImg(e.target.value)}
                    type="file"
                    className='form-control'
                    accept='image/'
                    formEncType='multipart/form-data'
                    name='file'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default CreateProductos