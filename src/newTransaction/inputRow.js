import { Grid, IconButton, InputLabel, NativeSelect, TextField } from "@mui/material";

export const InputRow = ({
  index,
  item,
  handleChange,
  handleRemove,
  handleAdd,
  inputFields,
  data,
  setInputFields
}) => {
    const handleCustomerData=(customerId,i)=>{
        const index = data.findIndex((e)=>e.id === customerId)
        const values = [...inputFields];
        if(index === -1){
            alert("Enter a valid customer number")
            values[i]['customerNumber'] = '';
            values[i]['customerName']='';
            values[i]['customerAddress']=''
            values[i]['customerPhone']=''
        }else{
            values[i]['customerName']=data[index].name
            values[i]['customerAddress']=data[index].address
            values[i]['customerPhone']=data[index].phone
        }
        setInputFields(values);
    }
  return (
    <>
      <h3>{`Transaction ${index + 1}`}</h3>
      <Grid container spacing={2} sx={{margin:'1em',padding:'1em'}}>
      <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
          disabled
            name="reference"
            required
            fullWidth
            label="Reference"
            onChange={(event) => handleChange(event, index)}
            value={item.reference}
          />
      </Grid>
      <Grid xs={12} md={4} sx={{padding:'1em'}}> 
          <TextField
            name="customerNumber"
            required
            fullWidth
            label="Customer Number"
            onChange={(event) => handleChange(event, index)}
            value={item.customerNumber}
            onBlur={()=>{handleCustomerData(item.customerNumber,index)}}
          />
      </Grid>
      <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
          disabled
            name="customerName"
            required
            fullWidth
            label="Customer Name"
            onChange={(event) => handleChange(event, index)}
            value={item.customerName}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
          disabled
            name="customerAddress"
            required
            fullWidth
            label="Customer Address"
            onChange={(event) => handleChange(event, index)}
            value={item.customerAddress}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            disabled
            name="customerPhone"
            required
            fullWidth
            label="customer Phone"
            onChange={(event) => handleChange(event, index)}
            value={item.customerPhone}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            inputProps={{min:1}}
            type="number"
            name="amount"
            required
            fullWidth
            label="Amount"
            onChange={(event) => handleChange(event, index)}
            value={item.amount}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <NativeSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="currency"
            fullWidth
            value={item.currency}
            // label="Currency"
            onChange={(event) => handleChange(event, index)}
           >
                <option value={"AED"}>AED</option>
                <option value={"EUR"}>EUR</option>
                <option value={"CHF"}>CHF</option>
                <option value={"MUR"}>MUR</option>
                <option value={"USD"}>USD</option>
         </NativeSelect>
         </Grid>
         <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            name="beneficiaryBank"
            required
            fullWidth
            label="Beneficiary Bank"
            onChange={(event) => handleChange(event, index)}
            value={item.beneficiaryBank}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            name="beneficiaryAccountNumber"
            required
            fullWidth
            label="Beneficiary Account Number"
            onChange={(event) => handleChange(event, index)}
            value={item.beneficiaryAccountNumber}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            name="paymentDetails"
            required
            fullWidth
            label="Payment Details"
            onChange={(event) => handleChange(event, index)}
            value={item.paymentDetails}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
          <TextField
            name="cardDetails"
            required
            fullWidth
            label="Card Details"
            onChange={(event) => handleChange(event, index)}
            value={item.cardDetails}
          />
        </Grid>
        <Grid xs={12} md={4} sx={{padding:'1em'}}>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <NativeSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="region"
            value={item.region}
            fullWidth
            onChange={(event) => handleChange(event, index)}
           >
                <option value={"Port Louis"}>Port Louis</option>
                <option value={"Curepipe"}>Curepipe</option>
                <option value={"Vacoas"}>Vacoas</option>
                <option value={"Port Mathurin"}>Port Mathurin</option>
         </NativeSelect>
         </Grid>
      </Grid>
      <div>
        <IconButton onClick={handleRemove}>-</IconButton>
        <IconButton onClick={handleAdd}>+</IconButton>
      </div>
    </>
  );
};
