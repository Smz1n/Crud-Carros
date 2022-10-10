import Item from "./components/Item";
import Item from "react";

const API_URL = 'http://localhost:8000';

export default function Cardapio() {
  const [cardapio, setCardapio] = React.useState([]);

  React.useEffect(() => {
    fetch(API_URL + '/items')
    .then(res => res.json())
    .then(dados => setCardapio(dados));
  }, []);

 return (
    <div>
      Ola mundo
      <hr/>

      {cardapio.map(i => <Item key={i.id} nome={i.nome}/>)}

    </div>
  );
}