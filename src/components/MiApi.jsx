import {useState, useEffect} from "react";


const MiApi = () => {

    const [state, setState] = useState([]);

    const llamarApi = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setState(data)
    };
    
    useEffect (() => {
    llamarApi();
    }, []);


return (

    <div>
        <input type="text" placeholder="filtra tu frase en latin"/>
    <ul>
        {state.map((elemento) => {
            return <li key={elemento.id}>{elemento.id}-{elemento.title}</li>;
        })}
    </ul>
    </div>
);

};

export default MiApi;