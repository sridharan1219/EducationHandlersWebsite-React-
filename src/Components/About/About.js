import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, colors } from '@mui/material';
import img1 from '../Images/p.jpg'
import '../About/About.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rate from './Rate';
import Navbar from '../NavigationBar/Navbardefault';
import img5 from '../Images/achive.png'
import welcome from '../Images/welcome.png'
import Footer from '../Footer/Footer';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  }));
 
  
export default function About() {
  const navigate= useNavigate();
  const handleclick = () =>{
    navigate("/Signup")
  }
  return (
    <>
    <Navbar/>
    <div className="about-page">
    <fieldset className='broder'>
<img src={welcome} className='wel'></img>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    
<h1 className='heading'>All the skills you need<br></br> in one place</h1></fieldset>

<br></br>
   
   <center>
<h4>We help organizations of all types and sizes prepare for the path ahead — wherever it leads.
  <br></br> Our curated collection of business and technical courses help companies, governments, and 
  <br></br>nonprofits go further by placing learning at the center of their strategies.</h4>

  <button style={{backgroundColor:"black",color:"white"}} className='but'>Learn More</button>
 
</center>



<br></br>
   <img src={img5} height={450} width={1500}></img>
  
   <center>
      <div className='react'>
        <br></br>
        <h3>Join our global community and start learning today!</h3>
        
  <button  onClick={handleclick}  style={{backgroundColor:"black",color:"white"}} className='but'>Join Now</button>
      </div>
      </center>

<h1>The Dream Team Of Education Handlers</h1>
<br></br>
   
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={4}>
        <Grid item xs>
          <Item>
            <Card sx={{ maxWidth: 455 }}className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sree Govind 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CEO of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Item>
        </Grid>

        
        <Grid item xs={4}>
          <Item><Card sx={{ maxWidth: 455 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sridharan
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Instructor of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Card sx={{ maxWidth: 455 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="255"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vimal Raj
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Branch Manager of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Item>
        </Grid>
      </Grid>
    </Box>
<br></br>



<h1>Fequently Asked Questions</h1>
<div className='faq'>

<Accordion style={{backgroundColor:"grey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         What’s the difference between a college and a university?
        </AccordionSummary>
        <AccordionDetails>
        Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:"grey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How do I locate a programe that's right for me?
        </AccordionSummary>
        <AccordionDetails>
        Search by degree level: Undergraduate Programs, Master’s Degree Programs, Doctorate Degree Programs, Teacher Certification Programs, Other Certificate Programs, and Online Programs Search by department
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{backgroundColor:"grey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          What are the differences between the certificates and degrees offered?
        </AccordionSummary>
        <AccordionDetails>
        Bachelor of Science (BS)<br></br>
The BS degree is for those seeking the first college degree typically focusing on an area related to science.Master of Arts (MA)
The MA degree is for those seeking to enhance their research and scholarship in the mastery of specific knowledge and skills in a non-science area of focus.<br></br>
Master of Arts in Teaching (MAT)<br></br>
The MAT degree is for those seeking to obtain teacher certification and master’s degree through an extensive internship experience.<br></br>

        </AccordionDetails>
        
      </Accordion>
<br></br>



<Rate/>

      <br></br>
      
   
      </div>
      
      <Footer/>
    

    
          </div>

        
    </>
    
  );
}