import { useEffect, useState } from "react";

import ItemSupplier from "../../components/itemSupplier";
// import arquivo from "../../assets/listSupplier.json";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import appFireBase from "../../server/config";
import { Supplier } from "../../models/supplier";


function ListSupplier() {
    
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    // passando as credenciais
    const db = getFirestore(appFireBase);
    // referenciando tabela
    const userCollectionRef = collection(db, 'Suppliers');
    
    // recuperação dos dados
    useEffect(()=> {
        const getSuppliers = async () => {
            const data = await getDocs(userCollectionRef);
            let dados = data.docs.map(doc => { 
                const docData = doc.data()
                return {
                    id: doc.id,
                    company: docData.company,
                    representative: docData.representative || '',
                    cnpj: docData.cnpj || '',
                    stateRegistration: docData.stateRegistration || '',
                    email: docData.email || '',
                    phone: docData.phone || ''
                }
                
            }) as Array<Supplier>;
            
            setSuppliers(dados);
        }
        getSuppliers();
    }, []);


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
            {suppliers.map((dado) => (
                <ItemSupplier
                    key={dado.id}
                    company={dado.company}
                    representative={dado.representative}
                    cnpj={dado.cnpj}
                    stateRegistration={dado.stateRegistration}
                    email={dado.email}
                    phone={dado.phone}>

                </ItemSupplier>
            ))}


        </div>
    )
}

export default ListSupplier