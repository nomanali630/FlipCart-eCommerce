
import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme , ThemeProvider} from "@material-ui/core/styles";

const Templatecontext = createContext(null);

export const TemplateProvider = ({children}) =>{
    const theme = createTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset',
                }
            },
            MuiDialogContent:{
                root:{
                    padding: 0,
                    '&:first-child':{
                        paddingTop: 0,
                    }
                }
            }
        }
    })

    return(
        <Templatecontext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}

            </ThemeProvider>
        </Templatecontext.Provider>
    )
}