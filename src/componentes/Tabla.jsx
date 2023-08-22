import { FiTrash2 } from "react-icons/fi";

function Tabla() {
  const data = [
    { id: 1, N: 1, producto: "Aguas", precio: 36 },
    { id: 2, N: 2, producto: "Nieves", precio: 100 },
    { id: 3, N: 5, producto: "Paletas", precio: 75 },
  ];
  const total = 211.0;

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
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-3 whitespace-nowrap">{item.N}</td>
                <td className="px-6 py-3 whitespace-nowrap">{item.producto}</td>
                <td className="px-6 py-3 whitespace-nowrap">{item.precio}</td>
                <td className="whitespace-nowrap px-2 py-4">
                  <button className="text-red-600 hover:text-pink-500" >
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
        <h1 className="text-red-600 p-5 font-bold ">{total}</h1>
      </div>
    </div>
  );
}

export default Tabla;
