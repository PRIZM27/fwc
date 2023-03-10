import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

// need images
// map images to a box/div holding the image, person's name and title

import rriley from '../../assets/images/staff/rashonda.jpeg';
// import cadams from '../../assets/images/staff/cala-resized.jpeg'

// const images = [rriley, cadams]

//  import rriley from '../../../public/rriley-cropped.jpeg'
// const staffImagesArr = [rriley, cadams];

// const staffCards = staff?.map(s => {
//      return (
//      <Card
//       key={s.name}
//       sx={{
//         width: '25rem',
//         height: '30rem',
//         display: 'flex',
//         flexDirection:'column',
//         alignItems: 'center',
//         paddingTop: '2rem',
//         cursor: 'pointer'
//       }}

//       >
//         <CardMedia
//           sx={{
//             width: '15rem',
//             height: '15rem',
//             borderRadius:'50%'}
//           }
//           image={s.image}
//         />
//         <CardContent>
//           <Typography variant='h4' textAlign={'center'}>
//             {s.title}
//           </Typography>
//           <Typography variant='body1' textAlign={'center'}>
//             {s.licenses.join(', ')}
//           </Typography>
//         </CardContent>
//       </Card>
//      )
//   }
// );

const Ribbon = (props) => {
  const { staff } = props;

  const staffCards = staff.map((s, i) => {
    return (
      <Card
        className={'staff__card'}
        onClick={(e) => props.onHandleChangePerson(e, i)}
        key={i}
        elevation={0}
        sx={{
          width: '20rem',
          height: '25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          cursor: 'pointer',
          backgroundColor: 'transparent',

        }}
      >
        <CardMedia
          sx={{
            width: '15rem',
            height: '15rem',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(110%)',
            },
          }}
          image={s.cardImage}
        />
        <CardContent>
          <Typography variant="h4" textAlign={'center'}>
            {s.name}
          </Typography>
          <Typography variant="body1" textAlign={'center'}>
            {s.licenses.join(', ')}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <Box
      sx={{
        width: '100%',
        // height: '250px',
        height: '25%',

        paddingLeft: '2rem',
        paddingRight: '2rem',
        zIndex: 10,
        position: 'fixed',
        top: '72rem',
        display: 'flex',
        justifyContent: 'center',
        columnGap: '3rem',
        backgroundColor: 'rgba(246, 246, 246, 0.1)',
        backdropFilter: 'blur(20px);',
      }}
    >
      {staffCards}
    </Box>
  );
};

export default Ribbon;
