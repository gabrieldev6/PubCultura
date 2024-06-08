import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Supplier } from '../../models/supplier'

import { FaExclamationCircle } from "react-icons/fa";



import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore';
import appFireBase from "../../server/config";

function Form() {

    const [company, setCompany] = useState('')
    const [representative, setRepresentative] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [stateRegistration, setStateRegistration] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [warning, setWarning] = useState(false)
    let {state} = useLocation()
    console.log('props form')
    console.log(state.key)
    
    useEffect(() => {

        const fetchSupplier = async () => {
            
            const db = getFirestore(appFireBase);
            const userCollectionRef = doc(db, 'Suppliers', state.key)
            

            const docSnap = await getDoc(userCollectionRef);
            

            if (docSnap.exists()) {
                const {company, representative, cnpj, stateRegistration, email, phone} = docSnap.data()
                setCompany(company)
                setRepresentative(representative)
                setCnpj(cnpj)
                setStateRegistration(stateRegistration)
                setEmail(email)
                setPhone(phone)
            } else {
                console.log("sem documento")
            }

            // console.log("algo deu errado")

        }
        fetchSupplier()
    })


    const getCompany = (event: any) => {
        setCompany(event.target.value)
        // console.log(company)
    }
    const getRepresentative = (event: any) => {
        setRepresentative(event.target.value)
        // console.log(representative)
    }
    const getCnpj = (event: any) => {
        setCnpj(event.target.value)
        // console.log(cnpjcpf)
    }
    const getEnrollment = (event: any) => {
        setStateRegistration(event.target.value)
        // console.log(enrollment)
    }
    const getEmail = (event: any) => {
        setEmail(event.target.value)
        // console.log(email)
    }
    const getTelephone = (event: any) => {
        setPhone(event.target.value)
        // console.log(telephone)
    }

    const submitSupplier = async () => {
        // validacao dos valores
        const supplier = Supplier.create(null, company, representative, cnpj, stateRegistration, email, phone,)


        // passando as credenciais
        const db = getFirestore(appFireBase);

        // referenciando tabela
        const userCollectionRef = collection(db, 'Suppliers');

        // add ao banco de dados

        if (!supplier) {
            setWarning(true)

        } else {

            // cria novo valor
            const reciver = await addDoc(userCollectionRef, {
                company, representative, cnpj, stateRegistration, email, phone
            })
            console.log(reciver)
            setWarning(false)
        }


    }
    // const getState = () => {
    //     let { state } = useLocation()

    //     if (state) {
    //         let itemSupplier = arquivo[state.index]
    //         // console.log(itemSupplier)

    //     }
    // }

    // getState()



    return (
        <div className='w-[500px] m-7 flex justify-center'>
            <ul className='w-full'>
                <li className="w-full">
                    <div className="w-full font-sans relative my-4">
                        <input onChange={getCompany} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" autoComplete="off" />
                        <label className='absolute left-0 p-3 text-base text-gray-600  translate-y-[-17px] scale-90 ml-5 px-3 py-1 bg-gray-100 rounded-2xl ' htmlFor="name">Empresa</label>
                    </div>
                </li>
                <li>
                    <div className="font-sans relative my-4">
                        <input  onChange={getRepresentative} className='w-full p-3 text-base border-2 border-gray-400 rounded-2xl bg-black bg-opacity-10 outline-none transition focus:border-gray-200 peer' type="text" required={true} autoComplete="off" />
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
                {warning ? <li className='flex items-center p-2'><FaExclamationCircle className='text-red-500 mr-2' /><p className='text-red-500 font-semibold'> Um ou mais campos foram preenchidos de forma incorreta.</p></li> : <li><p></p></li>}


            </ul>




        </div>
    )
}

export default Form