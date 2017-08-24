import React from 'react'
let DisplayMap = (props)=>{
var text=''
    if(props.data){
        //Fetching out Lat And Long from our Yahoo Location Search
        text=`${props.data.item.lat},${props.data.item.long}`
        //Making a  Call to Google to fetch Static Imaged
        return(
            <img width="80%" height="473px" src={`https://maps.googleapis.com/maps/api/staticmap?center=${text}&&markers=color:blue|${text}&zoom=12&size=400x400&key=AIzaSyDWiL9S65Vcrzv2j-sBQsuRrU3x4FPbNGE`} alt=""/>
        )

    }
    else
    return(
        <div>

        </div>
    )
}

export default DisplayMap