import React from 'react'
import './nav.scss'
import {NavLink} from 'react-router-dom'



export const Nav = () =>{

    return(

        <div className = 'navWrapper'>
            <div className = 'nav'>
                <div className = 'navHead'>
                    <i className = 'fa fa-times'/>
                </div>

                <div className = 'navBar'>
                    <ul>
                        <li><NavLink to = '/'>Главная</NavLink></li>
                    </ul>
                
                
                </div>
            
            </div>

            <div className = 'navArrow'>
                <i className = 'fa fa-arrow-right'/>
            
            </div>

        </div>
    )
}