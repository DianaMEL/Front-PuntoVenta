import { useState, useEffect, useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { cuentas as data } from "../data/cuentas";
import { AccionProductos } from "../acciones/AccionProductos";


function TablaCuenta({cuenta}) {
  const [cuentas, setCuentas] = useState([]);
  const {eliminarCuenta} = useContext(AccionProductos)
  const {calcularTotal} = useContext(AccionProductos)

  useEffect(() => {
    setCuentas(data);
  }, []);

 

  

  return (
    <div>
      <div className="flex justify-center mt-8 overflow-x-auto">
        <table className=" text-center text-sm font-light table w-full">
          <thead className="font-medium border-b bg-neutral-50 dark:border-neutral-500 dark:text-neutral-800">
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider dark:text-neutral-800">
                #
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider dark:text-neutral-800">
                Producto
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider dark:text-neutral-800"></th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider dark:text-neutral-800"></th>
            </tr>
          </thead>
          <tbody>
            {cuenta.map((cuen, item) => (
              <tr key={item}>
                <td className="px-6 py-3 whitespace-nowrap">{cuen.cant}</td>
                <td className="px-6 py-3 whitespace-nowrap">{cuen.producto}</td>
                <td className="px-6 py-3 whitespace-nowrap">{cuen.precio}</td>
                <td className="whitespace-nowrap px-2 py-4">
                  <button
                    className="text-red-600 hover:text-pink-500"
                    onClick={() => eliminarCuenta(cuen.id)}
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      <div className="flex flex-row ml-40">
        <h1 className="font-bold p-5 ">Total:</h1>
        <h1 className="text-red-600 p-5 font-bold ">${calcularTotal()}</h1>
      </div>
    </div>
  );
}

export default TablaCuenta;
