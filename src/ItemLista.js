import React from "react";

const ItemLista = (props) => {

  return (
    <div className="card col-sm-3 col-6 mt-2">
      <img className="card-img-top" src={props.foto} alt="Veículo em Destaque" />
      <div className="card-body">
        <h4 className="card-title">
          {props.marca} {props.modelo} ({props.ano})
        </h4>
        <p className="card-text">
          Preço R$: &nbsp;
          {Number(props.preco).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default ItemLista;