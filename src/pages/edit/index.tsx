import {FaTrash, FaEdit} from "react-icons/fa";
import ItemEditSupplier from "../../components/editSupplier";

import arquivo from "../../assets/listSupplier.json"


function EditSupplier() {
    let dados = arquivo
    

    return (
        <div className="w-full">
            <div className="h-[50px] bg-gray-500 text-white flex items-center rounded-t-lg mx-2 mt-2 p-2">
                
                
                <h5 className="font-bold w-48">Empresa</h5>
                <p className="font-bold  w-40">Representante</p>
                <p className="font-bold  w-1/5">CNPJ/CPF</p>
                <p className="font-bold  w-40">Inscrição</p>
                <p className="font-bold  w-72">Email</p>
                <p className="font-bold  w-32">Telefone</p>
                <FaEdit className="w-[20px] h-[20px] ml-4"/>
                <FaTrash className="w-[20px] h-[20px] ml-4"/>
            </div>
            <div>
            {dados.map((dado, index) => (
                <ItemEditSupplier 
                key={index}
                index={index}
                empresa={dado.Company}
                representante={dado.Representative}
                cnpjCpf={dado.CNPJ}
                inscricao={dado["State Registration"]}
                email={dado.Email}
                telefone={dado.Phone}>
                
                </ItemEditSupplier>
            ))}
            </div>
        </div>
    )
}

export default EditSupplier