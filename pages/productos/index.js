import Link from "next/link";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import axios from "axios";

const formatPrice = (price) => {
  return price.toString().replace(/\8(?=(\d{3})+(?!\d))/g, ",");
}

export default function Productos() {

  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('/api/productos').then(res => {
      setProducts(res.data);
      setLoading(false);

    })
  }, [])


  return <>
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Todos los productos</h1>

            <p className="mt-1.5 text-sm text-gray-900">Sube un nuevo producto</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              href={'/productos/nuevo'}>
              <span className="text-sm font-medium"> Crear Producto </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </header>
    <hr class="my-1 h-px border-0 bg-gray-300" />
    <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
      {productos.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (

        <div class="">
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nombre</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Descripción</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Precio</th>                
                <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
              </tr>
            </thead>

            {productos.map((productos, index) => (             

            <tbody class="divide-y divide-gray-100 border-t border-gray-100 key={productos._id}">
              <tr>
                <th class="px-6 py-4 font-medium text-gray-900">{index + 1}</th>                
                <td class="px-6 py-4">{productos.title}</td>
                <td class="px-6 py-4 truncate">{productos.description}</td>
                <td class="px-6 py-4">
                  {formatPrice(productos.price)}
                </td>
                <td class="flex justify-end gap-4 px-6 py-4 font-medium">
                  <Link href={'/productos/delete/'+ productos._id} className="text-red-500">Eliminar</Link>
                  <Link href={'/productos/edit/'+ productos._id} class="text-primary-700" className="text-blue-500">Editar</Link>
                  </td>
              </tr>
              
            </tbody>
            ))}
          </table>
        </div>
      )
      }
    </div>
  </>
}