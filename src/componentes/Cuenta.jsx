
import { useContext } from "react";
import Tabla from "./tabla";
import TablaCuenta from "./TablaCuenta"
import { AccionProductos } from "../acciones/AccionProductos";

function Cuenta() {
  const {cuentas} = useContext(AccionProductos)
  
  return (
    <div>
      <div className="bg-neutral-500 p-4 text-2xl text-white font-mono">
        <h1>Cuenta</h1>
      </div>
      <div>
     <TablaCuenta cuenta={cuentas}/>
      </div>
      <div className="p-2">
        <button className="bg-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300   inset-x-0 bottom-0 border-2 border-pink-500/100">
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Cuenta;
