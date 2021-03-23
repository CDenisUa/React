import './Layout.scss';
import { Nav } from '../nav/Nav';
import {Mask} from '../mask/Mask'




export const Layout = () =>{

    return(

        <div className="layout">
               <Nav/>
               <Mask/> 



            <div className = 'container'>
            </div>

        </div>
    )
}