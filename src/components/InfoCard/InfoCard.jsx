import React, { useState } from 'react'
import"./InfoCard.css"
import ProfileModal from '../../components/ProfileModals/ProfileModals'

import {UilPen} from '@iconscout/react-unicons'

const InfoCard = ()=>{
    
    const[modalOpened,setModalOpened] = useState(false)
    return(
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your info</h4>
                <div> <UilPen  
                width='2rem'
                 height="1.2rem"
                  onClick={()=>setModalOpened(true)}/>
                <ProfileModal 
                 modalOpened={modalOpened}
                 setModalOpened={setModalOpened}/>
                </div>
                
            </div>

            <div className="Info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationships</span>
            </div>

            <div className="Info">
                <span>
                    <b>Lives </b>
                </span>
                <span>In USA</span>
            </div>


            <div className="Info">
                <span>
                    <b>Words 

                    </b>
                </span>
                <span>Very Beautiful</span>
            </div>
            <button className="button logout-button">Logout</button>
        </div>
    )
}


export default InfoCard