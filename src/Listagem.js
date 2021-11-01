import React, {useState, useEffect} from "react";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";

const Listagem = () => {
  const [carros, setCarros] = useState([]);

  const getCarros = async () => {
    const lista = await Conecta.get("carros");
//    console.log(lista.data);
    setCarros(lista.data);
  };

  // define o método que será executado após renderizar o componente
  useEffect(() => {
    getCarros();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {carros.map((carro, index) => (
          <ItemLista
            foto={carro.foto}
            modelo={carro.modelo}
            marca={carro.marca}
            preco={carro.preco}
            ano={carro.ano}
            key={carro.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Listagem;