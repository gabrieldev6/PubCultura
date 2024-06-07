function ItemSupplier(props: any) {

    return (
        <div className="bg-gray-100 flex items-center border-b-2 border-solid border-gray-300  rounded-sm mx-2 p-2">
            
            <h5 className="w-48 text-gray-600 font-semibold" >{props.empresa}</h5>
            <p className="w-40 text-gray-600 font-semibold">{props.representante}</p>
            <p className="w-1/5 text-gray-600 font-semibold">{props.cnpjCpf}</p>
            <p className="w-40 text-gray-600 font-semibold">{props.inscricao}</p>
            <p className="w-72 text-gray-600 font-semibold">{props.email}</p>
            <p className="w-32 text-gray-600 font-semibold">{props.telefone}</p>
        </div>
    )
}

export default ItemSupplier