import { Link } from "react-router-dom";
import {FaTrash, FaEdit} from "react-icons/fa";
import arquivo from "../../assets/listSupplier.json";


function ItemEditSupplier(props: any) {
    const loadJson = async () => {
        const response = await fetch('./assets/listSupplier.json')
        
        if(!response.ok) {
            console.log('falha no carregamento do arquivo')
        }
        
    }
    const saveJson = (data: Array<any>) => {
        console.log(JSON.stringify(data, null, 2))

    }
    const handleEvent = (event: any) => {
        console.log(event)
        console.log(props.index)
        loadJson()
        // remove elemento apartir da lista

    }
    const deleteItem = () => {
        arquivo.splice(props.index, 1)
        saveJson(arquivo)
    }
    return (
        <div className="bg-gray-100 flex items-center border-b-2 border-solid border-gray-300  rounded-sm mx-2 p-2">
            <h5 className="w-48 text-gray-600 font-semibold" >{props.empresa}</h5>
            <p className="w-40 text-gray-600 font-semibold">{props.representante}</p>
            <p className="w-1/5 text-gray-600 font-semibold">{props.cnpjCpf}</p>
            <p className="w-40 text-gray-600 font-semibold">{props.inscricao}</p>
            <p className="w-72 text-gray-600 font-semibold">{props.email}</p>
            <p className="w-32 text-gray-600 font-semibold">{props.telefone}</p>
            <Link to="/createSupplier" state={{index: props.index}}><button onClick={handleEvent}><FaEdit className="w-[20px] h-[20px] ml-4 text-gray-600"/></button></Link>
            <button onClick={deleteItem}><FaTrash className="w-[20px] h-[20px] ml-4 text-gray-600"/></button>
            
        </div>
    )
}

export default ItemEditSupplier