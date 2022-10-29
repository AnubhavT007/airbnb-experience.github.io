import React from "react";
import "./ThisWeekCard.css"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fotawesome/fontawesome-free/css/all.min.css";




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ThisWeekCard (props){


    var sectionStyle = {
        width: "500px",
        backgroundImage: `url(${props.background})`
      };

    return(
        <>
           

            


            <Card className="weekCard" sx={{ maxWidth: 590 }} style={ sectionStyle }>
                <CardActionArea>
                   
                    <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        Collection
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {props.title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button className="primaryBtn">Show All</button>
                </CardActions>
            </Card>







            

        </>
    )
}

export default ThisWeekCard