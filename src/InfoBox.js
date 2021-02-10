import React from 'react';
import { Card, CardContent, Typography } 
from "@material-ui/core";
import './Infobox.css';


function infoBox({title,cases,total,isRed,active,...props}) {
    return (
        <div>
            <Card onClick={props.onClick} 
            className={`infoBox ${active && "infoBox--selected"} ${
                isRed && "infoBox--red"
              }`}>
            <CardContent className="infoBox__title">
             <Typography color="textSecondary">

               {title}

             </Typography >
             <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
             <Typography color="textSecondary">

{total} Total

</Typography >
           
             

            </CardContent>


            </Card>
            
        </div>
    )
}

export default infoBox
