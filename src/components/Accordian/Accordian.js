import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BasicAccordian = ({ policies }) => { 

return ( 
<Box sx={{width: '100%'}}>
  {policies.map((p, i) => (
      <Accordion key={`${p.policy}${i}`} sx={{width: '100%'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          height: '8rem'
        }}
      >
        <Typography variant='body1' fontSize='1.6rem' fontWeight='400'>{p.policy}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body2' fontSize='1.4rem' lineHeight={1.8}>
         {p.details}
        </Typography>
      </AccordionDetails>
    </Accordion>
     ))}
     
  </Box>

)


}

export default BasicAccordian