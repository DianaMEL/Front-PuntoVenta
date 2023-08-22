import Paletas from "../img/paletas.png";
import Nieves from "../img/nieves.png";
import Aguas from "../img/aguas.png";
import Malteadas from "../img/malteadas.png";
import Nachos from "../img/nachos.png";

function Vista() {
  return (
    <div className="overflow-x-auto">
      <div className="divide-col-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className=" box-content p-6 border-4 m-[25px] border-pink-500/100">
          <button>
            <img className="" src={Paletas} />
            <h1 className="">Paletas</h1>
          </button>
        </div>
        <div className=" box-content  p-6 border-4 m-[25px] border-pink-500/100">
          <a href="">
            <img className="" src={Nieves} />
            <h1>Nieves</h1>
          </a>
        </div>
        <div className=" box-content  p-6 border-4 m-[25px] border-pink-500/100">
          <a href="">
            <img className="mt-5" src={Aguas} />
            <h1>Aguas</h1>
          </a>
        </div>
        <div className=" box-content  p-6 border-4 m-[25px] border-pink-500/100">
          <a href="">
            <img src={Malteadas} />
            <h1 className="">Malteadas</h1>
          </a>
        </div>
        <div className=" box-content  p-6 border-4 m-[25px] border-pink-500/100">
          <a href="">
            <img className="" src={Nachos} />
            <h1>Nachos</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vista;
