import { useState, useReducer, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ModalContact from '../../Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';


import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

import emailjs from '@emailjs/browser';

import contactBgImage from '../../../assets/images/calm-copy-2.jpg';
import contactBgImageSmall from '../../../assets/images/calm-copy-small.jpg';

const theme = createTheme({});

const formReducer = (state, action) => {
  switch (action.type) {
    case 'letters_only_input':
      const regexNumber = /\d/i;
      // regex for at least on arbitrary alphabetic character
      // const regexLetter = /[A-Za-z]/i;
      const regexLetter = /^[A-Za-z]+$/i;
      // regex evaluates the input
      const hasNumber = action.payload.value.trim().match(regexNumber); // will be false if no number
      const hasLetter = action.payload.value.trim().match(regexLetter);
      // console.log(hasLetter)
      // const validity = hasLetter && !hasNumber ? true : false;

      const invalid = !hasLetter || hasNumber ? true : false;

      // console.log(invalid, 'invalid operation')
      return {
        ...state,
        [`${action.payload.name}Invalid`]: invalid,
      };

    // return {
    //   ...state,
    //   [`${action.payload.name}Valid`]: validity,
    // };
    /*
      // ⚠️⚠️⚠️⚠️ DO NOT DELETE! : EVALUATE TO SEE IF YOU CAN ACCOUNT FOR EMPTY STRING WITH THIS CODE ⚠️⚠️⚠️⚠️
      // console.log(`${action.payload.name}Input`)
      // console.log(typeof action.payload.value, 'input value');
      // // regex matching any digit in input string value
      // const  regexNumber = /\d/i;
      // // regex for at least on arbitrary alphabetic character
      // const regexLetter = /[A-Za-z]/i;
      // // regex evaluates the input
      // const hasNumber = action.payload.value.match(regexNumber); // will be false if no number
      // console.log(hasNumber, 'has number')
      // const hasLetter = action.payload.value.match(regexLetter);
      // console.log(hasLetter, 'has letter');
      // // valid if it has a letter and doesn't have a number
      // const valid = hasLetter && !hasNumber;
      // console.log(valid, 'valid operation')
      // const invalid = !hasLetter || hasNumber;

      // console.log(invalid,'invalid operation')

      // console.log(valid, 'validity');
      */

    case 'email_input':
      const emailRegex =
        /^[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)*@[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)+$/i;

      const emailMatch = action.payload.value.trim().match(emailRegex);
      // console.log(emailMatch);

      return {
        ...state,
        emailInvalid: emailMatch ? false : true,
      };

    case 'phone_input':
      const phoneRegex =
        /^[+]?(?=(?:[^\dx]*\d){7})(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/;
      const phoneMatch = action.payload.value.trim().match(phoneRegex);

      return {
        ...state,
        phoneInvalid: phoneMatch ? false : true,
      };
    default:
    // console.log('switch default');
  }
};

const Contact = (props) => {
  const contactForm = useRef();
  const [inputTouched, setInputTouched] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // error state of form elements
  // const [state, dispatchValidate] = useReducer(formReducer, {
  //   firstNameValid: null,
  //   lastNameValid: null,
  //   emailValid: null,
  //   phoneValid: null,
  //   pronounValid: null,
  //   messageValid: null,
  // });

  const [state, dispatchValidate] = useReducer(formReducer, {
    firstNameInvalid: null,
    lastNameInvalid: null,
    emailInvalid: null,
    phoneInvalid: null,
    pronounInvalid: null,
    messageInvalid: null,
  });

  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const invalidValues = Object.values(state);
  // console.log(invalidValues);

  // value for error prop
  // const firstNameValid = inputIsValid && inputTouched;
  // const lastNameValid = inputIsValid && inputTouched;

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      // wait for emailJS to send form details
      await emailjs
        .sendForm(
          'service_64y3lvq',
          'contact_form',
          contactForm.current,
          '52q1pkP1exA2jW9QT'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

        setFormSubmitted(false);
        setShowModal(true);

        // setTimeout(() => { 
        //   setFormSubmitted(false);
        //   setShowModal(true);

        //   setTimeout(() => {
        //     navigate('/');
        //   }, 2500);
        // },2000)

        setTimeout(() => {
          navigate('/');
        }, 3000);
   

    } catch (err) {

      console.log(err);
    }

  

    // emailjs.sendForm(`${process.env.EMAILJS_SERVICE_ID}`, 'contact_form', contactForm.current, `${process.env.EMAILJS_PUBLIC_KEY}`)
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  // const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const closeModal = () => {
    setShowModal(false);
  };

  // if (formSubmitted)
  //   return (
  //     <Stack 

  //     sx={{
  //       maxWidth: '60rem',
  //       minHeight: '25rem',
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)',
  //       // border: '1px solid black',
  //       alignItems: 'center',
  //       rowGap: '3rem'
  //     }}>
  //       <Typography
  //         variant="h1"
  //         fontSize='6rem'
  //         color='secondary'
  //         sx={{
  //           fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
  //         }}
  //       >
  //         Sending Form...
  //       </Typography>
  //       <CircularProgress size={'7rem'} color='secondary' />
  //     </Stack>
     
  //   );

    const Submitting = () => { 
      return (
        <Stack 

        sx={{
          maxWidth: '60rem',
          minHeight: '25rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // border: '1px solid black',
          alignItems: 'center',
          rowGap: '3rem',
          backgroundColor:' #FFFAED',
          borderRadius: '.5rem',
        }}>
          <Typography
            variant="h1"
            fontSize='6rem'
            color='secondary'
            sx={{
              fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
            }}
          >
            Sending Form...
          </Typography>
          <CircularProgress size={'7rem'} color='secondary' />
        </Stack>
      )
    }

  if (showModal) {
    return <ModalContact closeModal={closeModal} isOpen={showModal} />;
  }

  return (
    <Grid
      container
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: mobile
          ? `url(${contactBgImageSmall})`
          : `url(${contactBgImage})`,
        // backgroundSize: 'contain',
      }}
    >
      {formSubmitted && <Submitting />}
    {!formSubmitted && <Grid
        container
        direction="column"
        justifyContent="start"
        // width="65vw"
        // height="70vh"
        width="60%"
        minWidth={mobile ? '90%' : 'auto'}
        // height="70%"
        // className={classes.section__contact}
        // component="section"
        sx={{
          margin: '15rem auto',
          padding: '2rem',
          background:
            'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',
          border: '1px solid black',
          borderRadius: '.5rem',
        }}
      >
        {/* <Grid 
      item 
      className={classes['section__contact--left']} 
      width={'45%'} 
      sx={{
        borderRight:'1px solid black',

        backgroundImage: `url(${paperPlanes})`,
        
      }}>

      </Grid> */}

        <Typography
          textAlign={'left'}
          variant="h2"
          fontWeight={'600'}
          fontSize={'5rem'}
          // width={'100%'}
          // ml={mobile ? 0 :'4rem'}
          mb={mobile ? 0 : '3rem'}
          // mt={'5rem'}
          color="secondary"
          sx={{
            fontSize: mobile ? '3.5rem' : '6rem',
            textTransform: 'uppercase',
            overflow: 'hidden',
          }}
        >
          Contact Us
        </Typography>
        <Box
          component="form"
          id="contact_form"
          ref={contactForm}
          onSubmit={sendEmail}
          action="#"
          autoComplete="off"
          sx={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
            gridAutoRows: mobile ? '9rem' : 'auto',
            rowGap: '2rem',
            // width: '50rem',
            // height: '60rem',
            // border: '1px solid black',
            borderRadius: '.5rem',
            paddingBottom: '4rem',
            div: {
              width: '90%',
            },
          }}
        >
          {/* <TextField type='hidden' name='contact_number' /> */}
          <TextField
            emailjsvariable={'first_name'}
            required
            id="standard-basic"
            name="firstName"
            label="First Name"
            variant="standard"
            helperText="Must have at least 1 character. Letters only."
            fullWidth={mobile ? true : false}
            // error={state.firstNameValid === false && inputTouched}
            error={state.firstNameInvalid && inputTouched}
            onChange={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            onBlur={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
            }}
          />
          <TextField
            required
            id="standard-basic"
            name="lastName"
            label="Last Name"
            variant="standard"
            // error={state.errorLastName}
            helperText="Must have at least 1 character. Letters only"
            error={state.lastNameInvalid && inputTouched}
            onChange={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            onBlur={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
            }}
          />
          <TextField
            emailjsvariable={'user_email'}
            required
            type="email"
            name="email"
            id="standard-basic"
            label="Email"
            variant="standard"
            helperText="Please enter valid email address"
            error={state.emailInvalid && inputTouched}
            onChange={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'email_input',
                payload: e.target,
              });
            }}
            onBlur={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'email_input',
                payload: e.target,
              });
            }}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
            }}
          />
          <TextField
            required
            name="phone"
            id="standard-basic"
            label="Phone"
            variant="standard"
            error={state.phoneInvalid && inputTouched}
            onChange={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'phone_input',
                payload: e.target,
              });
            }}
            onBlur={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'phone_input',
                payload: e.target,
              });
            }}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
            }}
          />
          <TextField
            id="standard-basic"
            name="pronoun"
            label="Preferred Pronouns"
            variant="standard"
            helperText="Must be at least 1 alphabetic character"
            error={state.pronounInvalid && inputTouched}
            onChange={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            onBlur={(e) => {
              setInputTouched(true);
              dispatchValidate({
                type: 'letters_only_input',
                payload: e.target,
              });
            }}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
            }}
          />

          <TextField
            required
            id="outlined-basic"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            helperText="500 character maximum"
            // error={state.errorTextArea}
            sx={{
              '.MuiFormLabel-root, .MuiInputBase-root': {
                fontSize: '2rem',
              },
              // '.MuiInputBase-root': {
              //   height: '15rem',
              // },
              gridColumn: '1 / -1',
            }}
          />

          <Button
            variant="contained"
            type="submit"
            value="Send"
            size={'large'}
            disabled={false}
            sx={{
              '&.MuiButtonBase-root': {
                maxWidth: '30%',
                minWidth: '2rem',
                height: '5rem',
                backgroundColor: 'blue',
                // margin: '0 auto'
                gridColumn: '1 / span 1',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Grid>}
    </Grid>
  );
};

export default Contact;
