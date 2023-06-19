import { Button } from "@mui/material"
import { Grid } from "@mui/material"
import { useNavigate } from "react-router"

const Home = () =>{
    const navigation = useNavigate()
    return <Grid container spacing={2} m={4}>
        <Grid xs={12} md={6} sx={{paddingBottom:{xs:'1em'}}}>
            <Button type="button" color="primary" variant="contained" onClick={()=>{navigation('/new_transaction')}}>
                New Transaction
            </Button>
        </Grid>
        <Grid xs={12} md={6}>
        <Button type="button" color="primary" variant="contained" onClick={()=>{navigation('/view_transaction')}}>
            View Transaction
        </Button>
        </Grid>
        </Grid>
}

export default Home