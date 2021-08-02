import { makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



const usestyle = makeStyles((theme)=>({

    search: {
        borderRadius:2,
        backgroundColor:'white',
        marginLeft:10,
        width:'38%',
        display:'flex',
        
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        color:'blue',
        display: 'flex',
        
    },
    inputRoot:{
        fontSize:"unset",
        width:'100%'
    },
    inputInput:{
        paddingLeft:20
    }

}));


const Searchbar = () =>{
const classes = usestyle()

    return(
        <div className={classes.search}>
        
        <InputBase
          placeholder="Search Items Here... "
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    )
}
export default Searchbar;