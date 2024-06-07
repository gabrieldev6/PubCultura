import { createBrowserRouter } from "react-router-dom";

import Form from "./pages/form";
import ListSupplier from "./pages/list";
import EditSupplier from "./pages/edit";
import App from "./App" ;
const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    children: [
        {

            path: "/listSupplier",
            element: <ListSupplier/>
           },
           {
            path: "/editSupplier",
            element: <EditSupplier/>
           },
           {
            path: "/createSupplier",
            element: <Form/>
           }

    ]

   }
   

])


export default router