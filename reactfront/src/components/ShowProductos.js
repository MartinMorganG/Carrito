import '../customcss/estilos.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

export const ShowProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect ( ()=> {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
        const response = await axios.get(`${endpoint}/productos`)
        setProductos(response.data)
    }

    const deleteProducto = async (id) => {
       await axios.delete(`${endpoint}/producto/${id}`)
       getAllProductos()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Img</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map( (producto) => (
                    <tr key={producto.id}>
                        <td> {producto.nombre} </td>
                        <td> {producto.precio} </td>
                        <td> {producto.categoria} </td>
                        <td> {producto.img} </td>
                        <td>
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=> deleteProducto(producto.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>

        <div>
            <h1>Hombre</h1>
        {productos.map((producto) => {
            if (producto.categoria=== "hombre") {
                return <>
                    <div class="card box1">
                        <div class="card-header box1">
                        {producto.nombre}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{producto.img}</li>
                            <li class="list-group-item">{producto.nombre}</li>
                            <li class="list-group-item"> {producto.precio}</li>
                            <li class="list-group-item">{producto.categoria}</li>
                            <li class="list-group-item">
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=> deleteProducto(producto.id)} className='btn btn-danger'>Eliminar</button>
                            </li>
                        </ul>
                        </div>
                </>
            }
        })
         }
        <h1>Mujer</h1>
        {productos.map((producto) => {
            if (producto.categoria=== "mujer") {
                return <>
                    <div class="card box1">
                        <div class="card-header box1">
                        {producto.nombre}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">{producto.nombre}</li>
                            <li class="list-group-item"> {producto.precio}</li>
                            <li class="list-group-item">{producto.categoria}</li>
                            <li class="list-group-item">
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=> deleteProducto(producto.id)} className='btn btn-danger'>Eliminar</button>
                            </li>
                        </ul>
                        </div>
                </>
            }
        })
         }

        <h1>Niños</h1>
        {productos.map((producto) => {
            if (producto.categoria=== "niños") {
                return <>
                    <div class="card box1">
                        <div class="card-header box1">
                        {producto.nombre}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">{producto.nombre}</li>
                            <li class="list-group-item"> {producto.precio}</li>
                            <li class="list-group-item">{producto.categoria}</li>
                            <li class="list-group-item">
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=> deleteProducto(producto.id)} className='btn btn-danger'>Eliminar</button>
                            </li>
                        </ul>
                        </div>
                </>
            }
        })
         }
        
        </div>
    </div>
  )
}

export default ShowProductos