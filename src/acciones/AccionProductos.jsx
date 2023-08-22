import { createContext, useEffect, useState } from "react";
import {cuentas as data} from '../data/cuentas'

export const AccionProductos = createContext();

export function AccionProductosProvider(props) {
    const [cuentas, setCuentas] = useState([]);

    function crearCuenta(cuenta) {
        console.log(cuenta)
        setCuentas([
            ...cuentas,
            {
                id: cuentas.length,
                cant: cuenta.cant,
                producto: cuenta.producto,
                precio: cuenta.precio,
            },
        ]);
    } 

    function eliminarCuenta(id) {
        setCuentas(cuentas.filter((item) => item.id !== id));
      }
      const calcularTotal = () => {
        return cuentas.reduce(
          (accumulador, cuen) =>
            accumulador + cuen.precio * cuen.cant,
          0
        );
      }
    
      useEffect(() => {
        setCuentas(data);
      }, []);

      console.log(cuentas)
      
    return (
        <AccionProductos.Provider value={{
            cuentas,
            crearCuenta, 
            eliminarCuenta,
            calcularTotal,
        }}>{props.children}
        </AccionProductos.Provider>
    )
}