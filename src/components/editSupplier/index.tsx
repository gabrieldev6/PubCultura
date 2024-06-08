import { Link } from "react-router-dom";
import {FaTrash, FaEdit} from "react-icons/fa";



function ItemEditSupplier(props: any) {
    
    const handleEvent = (event: any) => {
        console.log(event)
        console.log(props.index)
        
        // remove elemento apartir da lista

    }
    const deleteItem = () => {
        
    }
    return (
        <div className="bg-gray-100 flex items-center border-b-2 border-solid border-gray-300  rounded-sm mx-2 p-2">
            <h5 className="w-48 text-gray-600 font-semibold" >{props.company}</h5>
            <p className="w-40 text-gray-600 font-semibold">{props.representative}</p>
            <p className="w-1/5 text-gray-600 font-semibold">{props.cnpj}</p>
            <p className="w-40 text-gray-600 font-semibold">{props.stateRegistration}</p>
            <p className="w-72 text-gray-600 font-semibold">{props.email}</p>
            <p className="w-32 text-gray-600 font-semibold">{props.phone}</p>
            <Link to="/createSupplier" state={{key: props.index}}><button onClick={handleEvent}><FaEdit className="w-[20px] h-[20px] ml-4 text-gray-600"/></button></Link>
            <button onClick={deleteItem}><FaTrash className="w-[20px] h-[20px] ml-4 text-gray-600"/></button>
            
        </div>
    )
}

export default ItemEditSupplier