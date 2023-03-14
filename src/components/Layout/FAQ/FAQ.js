import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Link from '@mui/material/Link';


import Typography from '@mui/material/Typography';

import BasicAccordian from '../../Accordian/Accordian';
import FAQCard from '../../../components/Cards/FAQCard/FAQCard';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';


const ContentStack = styled(Stack)(({ theme }) => ({
  direction:"column",
  alignItems:"center",
  width: '75%',
  height: 'min-content',
  border: '1px solid black',
  borderRadius: '.5rem',
  backgroundColor: '#FFFCF9',
  // background: 'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',

  [theme.breakpoints.up('md')]: {
    width: '120rem',
   },
   [theme.breakpoints.down('md')]:{ 
    width: '95%'
   }
}));



const ContentHeading = styled(Typography)(({ theme }) => ({
  width:"100%",
  // variant:"h3",
  fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',

  fontSize:'5rem',
  fontWeight: 600,
  textAlign:"center",
  height: 'min-content',
  // backgroundColor: '#FDC600',
  // backgroundColor: '#FDC600',
  // background: 'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',
  color: '#FA8072',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: { 
    fontSize: '4rem',
  }
}));


const ResourceBox = styled(Stack)(({ theme }) => ({
  width: '90%',
  height: '55rem',
  backgroundColor: '#fff',
  borderRadius: '.5rem',
  rowGap: '1rem',
  padding: '1rem',
  [theme.breakpoints.up('md')]: { 
    height: '30rem'
  }
}));

const ResourceBoxSet = ({ resource }) => {
  return (
    <ResourceBox direction="column" sx={{}}>
      <Stack direction="row" alignItems="center" columnGap="2rem">
        {/* {resource.icon} */}
        <Link>
        <Typography fontSize="1.8rem" fontWeight="600">
         {resource.name}
        </Typography>
        </Link>
      
      </Stack>
      {/* <Typography fontSize="1.2rem">{resource.details}</Typography> */}
    </ResourceBox>
  );
};


const theme = createTheme({});

const faqs = [
  {
    question: `Do you offer in person sessions?`,
    answer: `At this time, all services are conducted via a secure HIPAA-compliant platform for telehealth sessions.`,
  },
  {
    question: `How long do sessions last?`,
    answer: `Individual sessions are typically scheduled for 53 minutes. However, clients may speak with their provider if they have a request for longer sessions.`,
  },
  {
    question: `What is your Cancellation Policy? `,
    answer: `The cancellation policy requires 48 hours of advance notice. Appointments canceled with less notice will incur $50 charge to the card on file.`,
  },
  {
    question: `How do I get started?`,
    answer: `Complete our contact form to get scheduled for a  Free 15min consultation. Here we will walk you through the next steps and allow you to discuss your therapy goals.`,
  },
  {
    question: `Do you accept insurance?`,
    answer: `Fortitude Wellness Collective, LLC is not currently paneled with insurance companies. However, we can offer you what is known as a super bill. A super bill is a detailed invoice that you may submit to your insurance company for potential reimbursement for out-of-network services. You can learn more about pricing by visiting our 'biling' page. `,
  },
  {
    question: `What is a superbill??`,
    answer: `A superbill is an itemized invoice that details the services you received for treatment. When your mental health counselor is not an “in-network” provider with your health insurance, they use this form. This form documents your treatment and can be used by you to create a claim for reimbursement. Our practice will provide this for you. `,
  },
  {
    question: `What can I expect during first session?`,
    answer: `You and your therapist will establish rapport and set expectations for the session. The therapist will ask primarys about your reasons for seeking therapy, your current concerns, past experiences, and background information. You will discuss your goals for therapy and what you hope to achieve through the process. The therapist will explain their therapeutic approaches, such as cognitive-behavioral therapy or psychodynamic therapy.`,
  },
  {
    question: `Can I do telehealth therapy outside of DC/VA area??`,
    answer: `No, unfortunately. At this time our clinicians are only licensed in DC & Virginia and cannot provide online therapy to clients who live outside of these areas. `,
  },
];

const policies = [
  {
    policy: 'Good Faith Estimate',
    details: `

    Effective January 1, 2022, a ruling went into effect called the “No Surprises Act,” which requires mental health practitioners to provide a “Good Faith Estimate” (GFE) about out-of-network care to any patient who is uninsured or who is insured but does not plan to use their insurance benefits to pay for health care items and/or services.   The Good Faith Estimate works to show the cost of items and services that are reasonably expected for your mental health care needs.  The estimate is based on information known at the time the estimate was created.  The Good Faith Estimate does not include any unknown or unexpected costs that may arise during treatment. You are entitled to receive this “Good Faith Estimate” of what the charges could be for psychotherapy services provided to you. While it is not possible for a psychotherapist to know, in advance, how many psychotherapy sessions may be necessary or appropriate for a given person upon the initiation of psychotherapy, this form provides an estimate of the cost of services provided. Your total cost of services will depend upon the number of psychotherapy sessions you attend, your individual circumstances, and the type and amount of services that are provided to you. This estimate is not a contract and does not obligate you to obtain any services from the provider listed, nor does it include any services rendered to you that are not identified here.   
    
    This Good Faith Estimate is not intended to serve as a recommendation for treatment or a prediction that you may need to attend a specified number of psychotherapy visits. The number of visits that are appropriate in your case, and the estimated cost for those services, depends on your needs and what you agree to in consultation with your therapist.  You are entitled to disagree with any recommendations made to you concerning your treatment and you may discontinue treatment at any time.  
    
    If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Make sure to save a copy or picture of your Good Faith Estimate. For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises or call 1-800-985-3059.
    `,
  },
  {
    policy: 'Informed Consent',
    details: `

The therapeutic relationship is unique in that it is a highly personal and at the same time, a contractual agreement. Given this, it is important to reach a clear understanding of how the relationship will work, and what you and your provider can expect. This consent will provide a clear framework for work together. Please read and indicate that you have reviewed this information and agree to it by filling in the checkbox at the end of this document. The Therapeutic Process You have taken a very positive step by deciding to seek therapy. The outcome of your treatment depends largely on your willingness to engage in this process, which may, at times, result in considerable discomfort. Remembering unpleasant events and becoming aware of feelings attached to those events can bring on strong feelings of anger, depression, anxiety, etc. There are no miracle cures. We cannot promise that your behavior or circumstance will change. We can promise to support you and do our best to understand you and your repeating patterns, as well as to help you clarify what it is that you want for yourself. Confidentiality in the session, content, and all relevant materials to the client’s treatment will be held confidential unless the client requests in writing to have all or portions of such content released to a specifically named person/persons. Limitations of such client-held privilege of confidentiality exist and are itemized below:       

-If a client threatens or attempts to commit suicide or otherwise conducts themselves in a manner in which there is a substantial risk of incurring serious bodily harm. 

-If a client threatens grave bodily harm or death to another person. 

-If the therapist has a reasonable suspicion that a client or other named victim is the perpetrator, observer of, or actual victim of physical, emotional or sexual abuse of children under the age of 18 years. 

-Suspicions as stated above in the case of an elderly person who may be subjected to these abuses. 

-Suspected neglect of the parties named in items #3 and # 4. 

-If a court of law issues a legitimate subpoena for information stated on the subpoena. 

If a client is in therapy or being treated by order of a court of law, or if the information is obtained for the purpose of rendering an expert’s report to an attorney. 

Occasionally, our providers may need to consult with other professionals in their areas of expertise in order to provide the best treatment for you. Information about you may be shared in this context without using your name.  If you see your provider accidentally outside of the therapy office, we will not acknowledge you first. Your right to privacy and confidentiality is of the utmost importance to Fortitiude Wellness Collective, LLC, and we do not wish to jeopardize your privacy. However, if you decide to acknowledge your provider, please know it is up to them if they wish to speak briefly with you. It may often be appropriate not to engage in any lengthy discussions in public or outside of the therapy office.

    `,
  },
  {
    policy: 'Appointments & Cancellations',
    details: `

    Please remember to cancel or reschedule 48 hours in advance. You will be responsible for the entire fee if cancellation is less than 48 hours. The standard meeting time for psychotherapy is 53 minutes. Requests to change the 53-minute session needs to be discussed with the therapist. Cancellations will be subject to a full charge if NOT RECEIVED AT LEAST 24 HOURS IN ADVANCE. This is necessary because a time commitment is made to you and is held exclusively for you. If you are late for a session, you may lose some of that session time.
    `,
  },
  {
    policy: 'Telephone Accessibility',
    details: `

    If you need to contact your therapist between sessions, please email them directly or contact info@fortitudewellnesscollective.com. Our therapists are often not immediately available; however, we will attempt to return your email within 24 hours. In the event that you are out of town, sick, or need additional support, please contact our office at 202-505-1916. If a true emergency situation arises, please call 911 or any local emergency room.
    `,
  },
  {
    policy: 'Social Media & Telecommunication',
    details: `

    Due to the importance of your confidentiality and the importance of minimizing dual relationships, I do not accept friend or contact requests from current or former clients on any social networking site (Facebook, LinkedIn, etc). We believe that adding clients as friends or contacts on these sites can compromise your confidentiality and our respective privacy. It may also blur the boundaries of the therapeutic relationship. If you have questions about this, please bring this up with your therapist during your session.
    `,
  },
  {
    policy: 'Electronic Communication',
    details: `

    We cannot ensure the confidentiality of any form of communication through electronic media, including text messages. If you prefer to communicate via email or text messaging for issues regarding scheduling or cancellations, we will do so. While I may try to return messages in a timely manner, I cannot guarantee immediate response and request that you do not use these methods of communication to discuss therapeutic content and/or request assistance for emergencies. Services by electronic means, including but not limited to telephone communication, the Internet, facsimile machines, and e-mail is considered telemedicine
    `,
  },
  {
    policy: 'Termination',
    details: `
    Ending relationships can be difficult. Therefore, it is important to have a termination process in order to achieve some closure. The appropriate length of the termination depends on the length and intensity of the treatment. I may terminate treatment after appropriate discussion with you and a termination process if I determine that the psychotherapy is not being effectively used or if you are in default on payment. I will not terminate the therapeutic relationship without first discussing and exploring the reasons and purpose of terminating. If therapy is terminated for any reason or you request another therapist, I will provide you with a list of qualified psychotherapists to treat you. You may also choose someone on your own or from another referral source.  Should you fail to schedule an appointment for three consecutive weeks, unless other arrangements have been made in advance, for legal and ethical reasons, I must consider the professional relationship discontinued.
    `,
  },
];

const resources = [ 
  { 
    name: 'The Mental Health Coalition',
    href: 'https://www.thementalhealthcoalition.org/',

  },
  { 
    name: 'Therapy for Black Men',
    href: 'https://therapyforblackmen.org/about/',

  },
  { 
    name: 'National Alliance on Mental Illness (NAMI)',
    href: 'https://www.nami.org/',

  },
  { 
    name: 'LGBT National Help Center',
    href: 'http://www.glbtnationalhelpcenter.org/',

  },
  { 
    name: 'The Trevor Project',
    href: 'http://www.thetrevorproject.org/',

  },
  { 
    name: 'The Jed Foundation',
    href: 'http://www.jedfoundation.org/',

  },
  { 
    name: 'The South Asian Mental Health Initiative & Network',
    href: 'https://samhin.org/',

  },

  { 
    name: 'Substance Abuse and Mental Health Services Administration',
    href: 'http://www.samhsa.gov/',

  },
  { 
    name: 'National Domestic Violence Hotline',
    href: 'http://www.thehotline.org/',

  },
  { 
    name: 'Veterans Crisis Line',
    href: 'https://www.veteranscrisisline.net/',

  },
  { 
    name: 'Asian American Health Initiative',
    href: 'https://aahiinfo.org/',

  },
  { 
    name: 'The Loveland Foundation',
    href: 'https://thelovelandfoundation.org/',

  },
  
]

// FAQ section will be a collection of cards, with the question displayed as heading and answer in body of the card
// example: https://www.mcdonalds.com/gb/en-gb/help/faq.html
const FAQ = (props) => {
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      width="100vw"
      height="100vh"
      component="section"
      sx={{
        // marginTop: match ? '10rem' : 0,
        margin: match ? '6.7rem auto 0 auto': 0,
        // backgroundColor: '#FFFCF9',
        backgroundColor: '#FFEFDB',
        borderRadius: '.5rem',
        paddingTop: '4rem',
        // overflow: 'hidden'
      }}
    >
      {/* <Box
        sx={{
          width: '63%',
          height: '30rem',
          margin: '0 auto',
          border: '1px solid black',
          borderRadius: '.5rem',
          backgroundColor: '#FFFCF9',
          padding: '2rem'
          // backgroundColor: '#FDC600',
          // background: 'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',
          // backgroundColor: '#FFFCF9',

        }}
      >
        <Typography 
        variant="h1" 
        fontSize={match ? '8rem':'5rem' }
        fontWeight={600} 
        textAlign='center'
        color='secondary'
        sx={{
          fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
        // backgroundColor: '#FFFCF9',

        }}
        >
          Help Center
        </Typography>
        <Typography variant="body1" fontSize="1.8rem">
          The help center page provides answers to common questions regarding
          psycho therapy services. If you have an inquiry not answered here,
          feel free to contact us.
        </Typography>
      </Box> */}

      <Grid
        container
        direction={'column'}
        width="100%"
        alignItems={'center'}
        rowGap="2rem"
        columnGap={'1rem'}
        sx={{
          padding: smallScreen ? '0' : '3rem',
        }}
      >
         <ContentStack
        sx={{
          // width: '65%',
          height: '30rem',
          // margin: '0 auto',
          // border: '1px solid black',
          // borderRadius: '.5rem',
          // backgroundColor: '#FFFCF9',
          padding: '2rem'
          // backgroundColor: '#FDC600',
          // background: 'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',
          // backgroundColor: '#FFFCF9',

        }}
      >
        <Typography 
        variant="h1" 
        fontSize={match ? '7rem':'5rem' }
        fontWeight={600} 
        textAlign='center'
        color='secondary'
        sx={{
          fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
        // backgroundColor: '#FFFCF9',

        }}
        >
          Help Center
        </Typography>
        <Typography variant="body1" fontSize="1.8rem">
          The help center page provides answers to common questions regarding
          psycho therapy services. If you have an inquiry not answered here,
          feel free to contact us.
        </Typography>
      </ContentStack>
        <ContentStack
          // direction="column"
          // alignItems="center"
          // sx={{
          //   width: match ? '120rem' : '75%',
          //   height: 'min-content',
          //   border: '1px solid black',
          //   borderRadius: '.5rem',
          //   backgroundColor: '#FFFCF9',
          // }}
        >
          <ContentHeading variant='h3'
          >
            Frequently Asked Questions
          </ContentHeading>
          <Stack
            // width='100%'
            direction={match ? 'row' : 'column'}
            columnGap="2rem"
            rowGap="2rem"
            flexWrap={match ? 'wrap' : 'no-wrap'}
            padding="2rem"
          >
            {faqs.map((f, i) => (
              <FAQCard key={i} primary={f.question} details={f.answer} />
            ))}
          </Stack>
        </ContentStack>

        <ContentStack
          // direction="column"
          // alignItems="center"
          // sx={{
          //   width: match ? '120rem' : '75%',
          //   height: 'min-content',
          //   border: '1px solid black',
          //   borderRadius: '.5rem'
          // }}
        >
          <ContentHeading variant='h3'
           
          >
            Practice Policies
          </ContentHeading>

          <Stack
            width="100%"
            height="min-content"
            direction={match ? 'row' : 'column'}
            // alignItems="center"
            rowGap
          >
            <BasicAccordian policies={policies} />
          </Stack>
        </ContentStack>

        <ContentStack 
          // direction="column"
          // alignItems="center"
          // sx={{
          //   width: match ? '120rem' : '75%',
          //   height: 'min-content',
          //   border: '1px solid black',
          //   borderRadius: '.5rem'
          // }}
        >
          <ContentHeading variant='h3'
          >
            Resources
          </ContentHeading>
          {/* <Typography variant='body1' fontSize={'1.8rem'} height='6rem' fontWeight='600'>
          If you or someone you know is experiencing a mental health or substance use problem, 
          there are several resources available to find out more information or get connected with help.
          </Typography> */}
          <Stack
            // width='100%'
            direction={match ? 'row' : 'column'}
            columnGap="2rem"
            rowGap="2rem"
            flexWrap={match ? 'wrap' : 'no-wrap'}
            padding="2rem"
          >
      
            {/* {resources.map((r, i) => (
              <ListItem key={i} disablePadding >
                <Link 
                component={Link} 
                href={r.href} 
                target='_blank'
                fontSize='1.6rem'
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  marginBottom: '1rem',
                }}
                >
                  {r.name}
                </Link>
              </ListItem>
             
            ))} */}
            {resources.map((r, i) => (
               <FAQCard primary={r.name} key={`${r.resource}${i}`}/>
            ))}
          </Stack>
        </ContentStack>
      </Grid>
    </Grid>
  );
};

export default FAQ;
