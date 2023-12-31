import Producto from "@/components/Producto";
import Productos from ".";

export default function NuevoProducto() {
    return <>
    <div className="sm:flex sm:items-center sm:justify-between py-2">
      <div className="text-center sm:text-left">     
        <p className="mt-1.5 text-sm text-gray-900">Sube un nuevo producto</p>
      </div>
      
    </div>
    
    <hr class="h-px border-0 bg-gray-300" />
    <div className="my-10">
        <Producto />
    </div>
    </>
}