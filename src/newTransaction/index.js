import {
    Button,
    Divider,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { InputRow } from "./inputRow";
  import axios from 'axios';
import { URL } from "../endpoints";
import { useNavigate } from "react-router";

  const Questions = ({data}) => {
    const [transaction,setTransaction]=useState({})
    const navigation = useNavigate()
    const rightNow = new Date();
    const res = rightNow.toISOString().slice(0,10).replace(/-/g,"")
    const [inputFields, setInputFields] = useState([
      {
        reference:`CUS${res}${Math.floor(1000 + Math.random() * 9000)}`,
        customerNumber: "",
            customerName: "",
            customerAddress: "",
            customerPhone: "",
            amount: "",
            currency: "AED",
            beneficiaryBank:"",
            beneficiaryAccountNumber:"",
            paymentDetails:"",
            cardDetails:"",
            region:"Port Louis"
      },
    ]);
  
  useEffect(()=>{
    async function fetchTransaction(){
      const id = localStorage.getItem('id')
      const response = await axios.get(URL)
      response.data.forEach((res) => {
        if(res[id]){
          setTransaction({...res})
        }
      })
    }
    fetchTransaction()
  },[])

    const handleSubmit = async (e) => {
      const id = localStorage.getItem('id')
      let res;
      e.preventDefault();

      if(Object.keys(transaction).length){
        res = await axios.put(`${URL}/${transaction._id}`,{[id]:[...inputFields,...transaction[id]]})
      }else{
       res = await axios.post(URL,{[id]:inputFields})
      }
      if(res.status === 200 || res.status === 201){
        alert("successfully stored")
        navigation('/home')
      }
    };

    const handleChange = (event, index) => {
      const values = [...inputFields];
      if(event.target.name === "beneficiaryBank" || event.target.name === "paymentDetails"){
        values[index][event.target.name] = event.target.value.replace(/[^a-z]/gi, '')
      }else{
      values[index][event.target.name] = event.target.value;
      }
  
      setInputFields(values);
    };
  
    // adds new input
    const handleAdd = () => {
      setInputFields([
        ...inputFields,
        {
            reference:`CUS${res}${Math.floor(1000 + Math.random() * 9000)}`,
            customerNumber: "",
            customerName: "",
            customerAddress: "",
            customerPhone: "",
            amount: "",
            currency: "AED",
            beneficiaryBank:"",
            beneficiaryAccountNumber:"",
            paymentDetails:"",
            cardDetails:"",
            region:"Port Louis"
        },
      ]);
    };
  
    // removes input
    const handleRemove = (index) => {
      if (inputFields.length !== 1) {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
      }
    };
  
    const handleReset = ()=>{
        setInputFields([
            {
                reference:`CUS${res}${Math.floor(1000 + Math.random() * 9000)}`,
                customerNumber: "",
                    customerName: "",
                    customerAddress: "",
                    customerPhone: "",
                    amount: "",
                    currency: "AED",
                    beneficiaryBank:"",
                    beneficiaryAccountNumber:"",
                    paymentDetails:"",
                    cardDetails:"",
                    region:"Port Louis"
              }
        ])
    }

    return (
      <>
          <form onSubmit={handleSubmit}>

              {inputFields.map((item, index) => (
                <div key={index}>
                  <InputRow
                    inputFields={inputFields}
                    index={index}
                    item={item}
                    handleChange={handleChange}
                    handleRemove={handleRemove}
                    handleAdd={handleAdd}
                    data={data}
                    setInputFields={setInputFields}
                  />
                  <Divider style={{ marginBottom: 10 }} />
                </div>
              ))}
              <Button onClick={handleReset}>reset</Button>
              <Button type="submit" color="primary" variant="contained" disableElevation>
                Submit
              </Button>
          </form>
      </>
    );
  };
  
  export default Questions;
  