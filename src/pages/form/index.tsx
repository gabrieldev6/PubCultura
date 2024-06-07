import { useState } from 'react'
import {useLocation} from 'react-router-dom'
import { Supplier } from '../../models/supplier'

import {FaExclamationCircle } from "react-icons/fa";


import arquivo from "../../assets/listSupplier.json"
function Form() {
    
    

    const [company, setCompany] = useState('')
    const [representative, setRepresentative] = useState('')
    const [cnpjcpf, setCnpjcpf] = useState('')
    const [enrollment, setEnrollment] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [warning, setWarning] = useState(false)
    
    
    
    const getCompany = (event: any) => {
        setCompany(event.target.value)
        // console.log(company)
    }
    const getRepresentative = (event: any) => {
        setRepresentative(event.target.value)
        // console.log(representative)
    }
    const getCnpj = (event: any) => {
        setCnpjcpf(event.target.value)
        // console.log(cnpjcpf)
    }
    const getEnrollment = (event: any) => {
        setEnrollment(event.target.value)
        // console.log(enrollment)
    }
    const getEmail = (event: any) => {
        setEmail(event.target.value)
        // console.log(email)
    }
    const getTelephone = (event: any) => {
        setTelephone(event.target.value)
        // console.log(telephone)
    }

    const submitSupplier = (event: any) => {
        console.log(event)
        const supplier = Supplier.create(company, representative, cnpjcpf, enrollment, email, telephone)
        console.log(supplier)
        if (typeof supplier === 'string') {
            setWarning(true)
        } else {
            setWarning(false)
        }
        
        // console.log(supplier)
    }
    const getState = () => {
        let {state} = useLocation()

        if(state) {
            let itemSupplier = arquivo[state.index]
            console.log(itemSupplier)
            
        } 
    }
    
    getState()



    return (
        <div className='w-[500px] m-7 flex justify-center'>
            <ul className='w-full'>
                <li className="w-full">
                    <div className="w-full font-sans relative my-4">
                        <input value={company} onChange={getCompany} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Empresa</label>
                    </div>
                </li>
                <li>
                    <div className="font-sans relative my-4">
                        <input onChange={getRepresentative} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Representante</label>
                    </div>
                </li>
                <li>
                    <div className="font-sans  relative my-4">
                        <input onChange={getCnpj} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">CNPJ</label>
                    </div>
                </li>
                <li>
                    <div className="font-sans relative my-4">
                        <input onChange={getEnrollment} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Inscrição Estadual</label>
                    </div>
                </li>

                <li className='flex'>

                    <div className="w-full font-sans max-w-xs relative my-4 pr-5">
                        <input onChange={getEmail} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Email</label>
                    </div>
                    <div className="w-full font-sans max-w-xs relative my-4">
                        <input onChange={getTelephone} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Telefone</label>
                    </div>

                </li>

                <li><button onClick={submitSupplier} className='w-full px-8 py-3 rounded-full bg-blue-500 text-white font-bold  hover:bg-blue-300 hover:shadow-lg active:bg-blue-700 active:transition-none active:shadow-none active:scale-95'>
                    Cadastrar
                </button></li>
                {warning ? <li className='flex items-center p-2'><FaExclamationCircle className='text-red-500 mr-2'/><p className='text-red-500 font-semibold'> Um ou mais campos foi preenchido incorretamente.</p></li> : <li><p></p></li>}


            </ul>




        </div>
    )
}

export default Form