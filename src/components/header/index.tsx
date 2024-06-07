import { Link } from "react-router-dom"
function Header() {

    return (
        <div className="w-full max-w-[1200px] h-20 bg-gray-400 flex items-center justify-between px-10">
            <img src="" alt="" />
            <ul className="flex items-center">
                <li><Link to="/createSupplier"><button className="m-3 font-bold text-white hover:text-gray-800">Cadastrar</button></Link></li>
                <li><Link to="/listSupplier"><button className="m-3 font-bold text-white hover:text-gray-800">  Listar Fonecedores</button></Link></li>
                <li><Link to="/editSupplier"><button className="m-3 font-bold text-white hover:text-gray-800">  Editar</button></Link></li>
            </ul>
            
            
        </div>
    )
}

export default Header