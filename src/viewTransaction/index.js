import axios from "axios"
import { useEffect, useState } from "react"
import DataTable from "../components/table"
import { URL } from "../endpoints"

const ViewTransaction = ()=>{
    const [transaction,setTransaction]=useState([])
    const columns = [
        { field: 'name', headerName: 'Customer Name', width: 300 },
        { field: 'amount', headerName: 'Transfer amount', width: 150 },
        { field: 'currency', headerName: 'Transfer currency', width: 150 },
        {
          field: 'reference',
          headerName: 'Reference',
          type: 'number',
          width: 300,
          sortable: false
        }
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    useEffect(()=>{
        async function fetchTransaction(){
          const id = localStorage.getItem('id')
          const response = await axios.get(URL)
          response.data.forEach((res) => {
            if(res[id]){
                const data = res[id].map((key,index)=>{
                    return {id:index+1,name:key.customerName,amount:key.amount,currency:key.currency,reference:key.reference}
                })
              setTransaction([...data])
            }
          })
        }
        fetchTransaction()
      },[])
    return<DataTable columns={columns} rows={transaction}/>
}

export default ViewTransaction