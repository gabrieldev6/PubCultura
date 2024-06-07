import ItemSupplier from "../../components/itemSupplier"
import arquivo from "../../assets/listSupplier.json"

function ListSupplier() {
    let dados = arquivo
    // console.log(typeof dados)
    
    return (
        <div className="w-full">
            <div className="h-[50px] bg-gray-500 text-white flex items-center rounded-t-lg mx-2 mt-2 p-2">
                
                <h5 className="font-bold w-48">Empresa</h5>
                <p className="font-bold  w-40">Representante</p>
                <p className="font-bold  w-1/5">CNPJ/CPF</p>
                <p className="font-bold  w-40">Inscrição</p>
                <p className="font-bold  w-72">Email</p>
                <p className="font-bold  w-32">Telefone</p>

            </div>
            {dados.map((dado, index) => (
                <ItemSupplier
                key={index}
                empresa={dado.Company}
                representante={dado.Representative}
                cnpjCpf={dado.CNPJ}
                inscricao={dado["State Registration"]}
                email={dado.Email}
                telefone={dado.Phone}>

            </ItemSupplier>
            ))}
            
            
        </div>
    )
}

export default ListSupplier