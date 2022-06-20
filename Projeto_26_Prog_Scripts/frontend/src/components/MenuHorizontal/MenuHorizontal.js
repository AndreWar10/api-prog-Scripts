import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './MenuHorizontal.css'

function MenuHorizontal() {
    const navigate = useNavigate()
    const location = useLocation()
    return (    
        
        <div className='menuHorizontal'>
            
            <button type="button" onClick={()=>navigate('/')} class="new" >Início</button>
            <button type="button" class="new" onClick={()=>navigate('/engenheiros')} >Engenheiros</button>
            <button type="button" onClick={()=>navigate('/obras')} class="new" >Obras</button>

        </div>


    )
}

export default MenuHorizontal
