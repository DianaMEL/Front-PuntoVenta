import { useContext, useState } from "react";
import { AccionProductos } from "../acciones/AccionProductos";
import TablaCuenta from "./TablaCuenta";

function FormularioCuenta() {
  const [cant, setCant] = useState("");
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const { crearCuenta } = useContext(AccionProductos);

  const handleSubmit = (e) => {
    e.preventDefault();
    crearCuenta({
      cant,
      producto,
      precio,
    });
    setCant("");
    setProducto("");
    setPrecio("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Cuenta</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cantidad
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            value={cant}
            onChange={(e) => setCant(e.target.value)}
            type="Number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Producto
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="Number"
            required
          />
        </div>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default FormularioCuenta;
