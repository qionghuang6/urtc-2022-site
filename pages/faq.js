import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import GlassBox from '../src/GlassBox';

var general = [
  // ["How prestigious is URTC?", "From our perspective, we’re just as prestigious as other national/international conferences at the undergraduate level! We host hundreds of undergraduates each year from top institutions throughout the globe, feature guest speakers from many of the best organizations in tech, and are even sponsored by some of those said organizations!"],
  ["Is URTC a competition?", "No, URTC is a collaborative/exploratory forum for sharing and presenting student research and innovations made in the technological sphere! Our conference is aimed towards generating interest and discussion in new breakthroughs in technological research."]
]
var registration = [
  ["Where can I register to attend the conference (non-presenter)?", "General registration to attend the conference for the public opens up each year after the submission period ends, when we have finalized the head count for our student presenters. If you do not yet see a way to register for the conference, please check back after the submission period is over."]
]

var iAmA = [
  ["I am a student who wishes to attend URTC, but I do not want to present my research. Is this possible to do?", "Of course! Registration for the general public (conference \“attendees\”) opens after the submission period, so if registration is not yet open, please check back then."],
  ["I am an industry professional/university faculty/grad student/member of the general public who wishes to participate (non-presenter) in URTC. How can I do so?", "Thank you for your interest in URTC! If you are:\n•\tan industry professional, college faculty, or grad student, please consider either acting as a guest speaker/panelist for the conference or participating as a peer reviewer for submissions to the conference! You may also attend the conference as a general attendee\n•\ta member of the general public, please consider attending the conference as a general attendee"],
  ["I am a university student outside of the US. Am I eligible to submit my research?", "Yes! As long as you meet our eligibility guidelines, you are fully eligible to participate in URTC, whether as a presenter or as an attendee."],
  ["I am graduating with my undergraduate degree before URTC takes place, but I completed my research prior to graduation. Am I eligible to submit my research?", "As long as your research was completed prior to graduation, you are eligible to present at URTC."],
  ["I am a high school student doing research that is affiliated with an undergraduate institution. Am I eligible to submit my research?", "As long as your research is associated with an undergraduate program, you are eligible to submit as a paper presenter (or with a poster/lightning talk). This includes but is not limited to: participation in an official faculty-mentored research program, informal mentorship by university faculty, substantial collaboration with an undergraduate or graduate student, etc."],
  ["I am a high school student doing research that is not affiliated with an undergraduate institution. Am I eligible to submit my research?", " If you are not associated with an undergraduate program, you may not submit as a paper presenter, but you may be eligible to submit as a poster presenter or as a lightning talk."],
  ["I am a high school student doing research as part of the Advanced Placement (AP) Capstone (AP Seminar/AP Research) curriculum from the College Board/as part of my International Baccalaureate (IB) Extended Essay/etc. Am I eligible to submit my research?", "Affiliation with AP, IB, or other \“college-level\” high school program does not qualify as undergraduate affiliation. Please see our answer concerning high school students not affiliated with a university program."],
  ["I am a recently-graduated high school student who will be attending university this fall/taking a gap year. Am I eligible to submit my research?", "We consider institutional affiliation with respect to your status when you were completing your research. Furthermore, you would be considered \"college-bound\" until the fall, at the start of the semester. Because you would have completed your research during your time in high school, unless you had worked with a college research program, you would not be eligible to submit a paper. Please see our answer on high school students not affiliated with a university program."],
  ["I am a legal minor (below the age of 18) but am otherwise eligible to submit my work (university student/HS student affiliated with a university research program). Are there any special restrictions for me to submit to or participate in URTC?", "No special restrictions at all! As long as you follow all applicable governmental laws and guidelines as well as institutional policy applicable to minors before and during URTC, you’re all set."],
  ["I am a faculty mentor for an undergraduate/high school student looking to submit material for the conference. Can I be listed as an author on the paper/poster/keynote presentation graphic/etc.?", "Yes, you can be listed as an author on all submissions and publications! As long as you follow IEEE’s guidelines on publishing ethics. You may also attend URTC as a general attendee, but you may not be part of the presenting team for the conference."]
]

var submission = [
  ["What is the difference between early paper submission and regular paper submission? Do I have a higher chance of being accepted if I submit by the early date versus the regular date?", "The only difference between early submission and regular submission is when your notification of acceptance is given. Earlier notifications of acceptance are useful, for example, for students outside of the US who need more time to set up travel and other logistic matters. Your “chance of acceptance” is not affected by when you submit."],
  ["What are the acceptance rates for submissions?", "We do not publish any acceptance rates or statistics as we do not want prospective presenters to fixate on the numbers. While URTC is a very prestigious conference, it is not the college admissions process. Our policies and processes are very similar to other, professional conferences in the research world."],
  ["Who reviews submissions?", " A committee of faculty members, industry professionals, and grad students are assembled each year to review, discuss, and accept submissions. All reviewers have the qualifications necessary to critically evaluate student work."],
  ["I want to submit my research, but I’m not sure if it is relevant with URTC’s themes/tracks. What do I do?", "You can email the conference chairs if you’re unsure of your research’s relevance to our conference! While we will not formally review any full abstracts and make no guarantee of your work’s admission into URTC, you may send us a few sentences about your project and some clarification of why you think it is relevant."],
  ["I want to submit my paper, but it is longer than 5 pages. Can I still submit my manuscript as-is for review and just cut it down for publication?", "Unfortunately, you must meet the 5-page limit for both submission and publication. The review committee has to manually read through, evaluate, and discuss each student submission for approval."],
  ["I want to submit my paper/present my research, but it is currently in review/published in another journal/conference/etc. Am I still eligible?", "No. All manuscripts submitted to URTC must not be in review or published in substantially similar form to any other journal, conference, or other third party. After URTC ends, all paper presentations will be published as conference proceedings in the IEEE Xplore database. If your work has already been published—it cannot be currently in review—but you would still like to present your work without publication through URTC, please consider presenting with a poster presentation or a lightning talk. If you would like to present as a paper presenter without publication, please contact the conference chairs."],
  ["I want to present my research, but I do not want to publish it in the IEEE Xplore database. May I still do so?", "Yes! You may submit your work either as a poster presentation or as a lightning talk, which does not publish material in IEEE Xplore. If you wish to participate as a paper presenter but not publish your work with us, please contact the conference chairs."],
  ["I conducted my work as lead of/part of a research team, but we never explicitly set up roles for ourselves. Some people did more work than others. How do I know who should be credited as an author for our submission?", "Please follow IEEE’s guidelines on publishing ethics. Contributors who are determined to not meet the requirements for authorship may be listed in the Acknowledgment section. Please note that all listed authors must consent to the publication or otherwise submission of all material, and all acknowledged contributors must be sufficiently notified of the acknowledgment."],
  ["I want to submit my research, but some of the listed authors in the paper refuse to give authorization for submission. What do I do?", "Please contact the conference chairs for assistance."]
]

var technical = [
  ["Do I have to transfer the copyright of my paper to IEEE?", "Yes. It is mandatory, in all major journals, that copyright of a paper is transferred to them before publication takes place. This is universally accepted in the research world and is meant to, for example, prevent authors from publishing the same work in other venues, allow subscribers of the journal to feel secure that they have subscribed for exclusive content not found elsewhere, and solidify the binding legal agreement between the author and the journal concerning publication of the work."],
  ["What if I do not transfer copyright of my paper to IEEE?", "Student presenters are asked to fill out an IEEE Copyright Form prior to the conference. Failure to fill out the form prevents a presenter from having their work published in the IEEE Xplore database. If you wish to present at URTC but do not wish to publish your work in IEEE Xplore, please consider presenting through a poster presentation or lightning talk. If you have already been accepted for a paper presentation but do not wish to publish in IEEE Xplore, please contact the conference chairs."]
]

var financial = [
]


export default function FAQ() {
  return (
    <Container maxWidth="lg">
      <GlassBox sx={{ my: 3, mx: 0, paddingY: '1rem' }} background="rgba(100,100,20, 0.5)">
          <Typography color="white"  variant="h4" sx={{marginTop: '12px'}} >General</Typography>
          {general.map((item) => <Box key={item[0]}><Typography variant="h6" sx={{marginTop: '8px'}} color="white" >{item[0]}</Typography><Typography color="#e6e6e6" variant="body1">&#x2022; {item[1]}</Typography></Box>)}
      </GlassBox>
      <GlassBox sx={{ my: 3, mx: 0, paddingY: '1rem' }} background="rgba(20,100,20, 0.5)">
          <Typography color="white" variant="h4" sx={{marginTop: '12px'}}>Registration</Typography>
          {registration.map((item) => <Box key={item[0]}><Typography variant="h6"  sx={{marginTop: '8px'}} color="white" >{item[0]}</Typography><Typography color="#e6e6e6" variant="body1">&#x2022; {item[1]}</Typography></Box>)}
      </GlassBox>
      <GlassBox sx={{ my: 3, mx: 0, paddingY: '1rem' }} background="rgba(50,50,150, 0.5)">
          <Typography color="white"  variant="h4" sx={{marginTop: '12px'}}>I Am A:</Typography>
          {iAmA.map((item) => <Box key={item[0]}><Typography variant="h6"  sx={{marginTop: '8px'}}  color="white" >{item[0]}</Typography><Typography color="#e6e6e6" variant="body1">&#x2022; {item[1]}</Typography></Box>)}
      </GlassBox>
      <GlassBox sx={{ my: 3, mx: 0, paddingY: '1rem' }} background="rgba(218,20,160, 0.5)">
          <Typography color="white"  variant="h4" sx={{marginTop: '12px'}}>Submission</Typography>
          {submission.map((item) => <Box key={item[0]}><Typography variant="h6"  sx={{marginTop: '8px'}}  color="white" >{item[0]}</Typography><Typography color="#e6e6e6" variant="body1">&#x2022; {item[1]}</Typography></Box>)}
      </GlassBox>
      <GlassBox sx={{ marginTop: 3, marginBottom: 0, mx: 0, paddingY: '1rem' }} background="rgba(60,130,230, 0.5)">
          <Typography color="white" variant="h4" sx={{marginTop: '12px'}}>Technical:</Typography>
          {technical.map((item) => <Box key={item[0]}><Typography variant="h6"  sx={{marginTop: '8px'}}  color="white" >{item[0]}</Typography><Typography color="#e6e6e6" variant="body1">&#x2022; {item[1]}</Typography></Box>)}
      </GlassBox>
      <Button sx={{color: 'white', borderColor: 'white', marginTop: '1rem', width: '100%'}} variant="outlined" size="large" component={Link} noLinkStyle href="/">
        Return to the main page
      </Button>
      <Box sx={{paddingY: '2rem'}}></Box>
    </Container>
  );
}
