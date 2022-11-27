import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/producto/'

const EditProducto = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            img: img
        })
        navigate('/')
    }

    useEffect( () => {
        const getProductoById = async () =>{
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setPrecio(response.data.precio)
            setCategoria(response.data.categoria)
            setImg(response.data.img)
        }
        getProductoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
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
                <input
                    value={categoria}
                    onChange={ (e)=> setCategoria(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Img</label>
                <input
                    value={img}
                    onChange={ (e)=> setImg(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default EditProducto