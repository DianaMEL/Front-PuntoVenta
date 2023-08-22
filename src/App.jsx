import Navbar from "./componentes/Navbar";
import Vista from "./componentes/Vista";
import Footer from "./componentes/Footer";
import Cuenta from "./componentes/cuenta";


function App() {
  return (
    <div >
      <div className="border-4 border-pink-500/75 ">
        <Navbar/>
      </div>
      <div className=" flex  divide-x">
        <div className="w-3/4 text-center border-2 border-x-pink-500/100">
          <Vista/>
        </div>
        <div className="w-1/4 text-center border-2 border-x-pink-500/100 ">
          <Cuenta />
        </div>
      </div>
      <div className="border-4 border-pink-500/100">
        <Footer />
      </div>
    </div>
  );
}
export default App;
