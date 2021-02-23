import { useContext, useEffect } from "react"
import { UIContext } from "../context/UIcontext"



export const useHideMenu = ( value )  => {

   const { hideMenu, showMenu } = useContext( UIContext )

   useEffect( () => {

        if ( value ){
            hideMenu();
        }else{
            showMenu();
        } 

   }, [value,  showMenu, hideMenu ] )

}