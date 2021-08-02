import { Box, Dialog, DialogContent } from "@material-ui/core";



const Login = ({open,setOpen}) =>{

    const handleClose = () =>{
        setOpen(false);
    }

 return(
     <Box>
         <Dialog open={open} onClose={handleClose}>
             <DialogContent>
                 <p>noman ali</p>
             </DialogContent>
         </Dialog>
     </Box>
 )
}
export default Login;