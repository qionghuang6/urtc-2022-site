import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

import GlassBox from '../src/GlassBox';


export default function Submission() {
  const title = 'Submission | URTC 2023'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Submission Guidelines
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            To maintain high standards for each annual conference, we typically require prospective presenters to meet the following guidelines. While URTC is typically aimed towards college students, we do accept papers and posters from high-performing high school students engaged in college-level research work.

            Submissions are peer-reviewed by faculty, graduate students, and industry professionals, who evaluate student work based on originality, quality of content, and adherence to the themes of the conference.

            All prospective applicants should carefully review all content in this section to ensure that all expectations prior to, during, and after the course of the conference have been satisfied.

          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Eligibility
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Each author in a paper submission must be enrolled either full-time as an undergraduate student in an accredited college or university OR as a high school student affiliated with a collegiate research program.
            Undergraduate students may submit non-mentored research work provided it meets IEEE’s standards of quality.
            High school students must be affiliated with faculty-mentored research programs (i.e. ASSIP, RISE, RSI, SSP, etc.) or be working directly and substantially with university students during the course of the research, but not necessarily during the time of application or conference, to submit their work as a paper presentation.
            High school students not affiliated with an undergraduate institution may be eligible to submit their research as poster presentations and lightning talks.
            All submissions must be the full and sole work of the student(s) taking ownership of the material.
            Faculty mentors who supervised the student research may be listed as co-authors on the paper, but are not eligible to be part of the presenting team of said research during the conference.
            The student(s) must have completed their research prior to receiving their undergraduate degree.
            In addition to meeting all URTC guidelines, prospective presenters must also meet all IEEE guidelines for publication.
            The student(s) interested in submitting for the paper presentation must submit a manuscript that is no more than 5 pages long, no exceptions.
            All prospective submissions must align to one of the stated URTC tracks.
          </Typography>

          <Typography variant="string" component="h2" color="white" gutterBottom>
            Plagiarism and Multiple Submissions
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            By submitting a manuscript or poster to the conference, all authors guarantee that it has not been previously published, accepted for publication, or under review at other conferences/workshops/journals in substantially similar form at the time of URTC’s review period. Any content submitted to URTC must be original, previously unpublished, non-confidential, and without commercial content—review committee will process manuscripts both manually and through IEEE’s plagiarism check software to identify and eliminate plagiarism (including excessive self-duplication and dependence on earlier published works, as well as duplicated and unattributed content).

            Content found to violate URTC’s and IEEE’s policies on plagiarism will not be further reviewed and will be automatically rejected. Even if authors are accepted into the conference and paid for registration, the review committee reserves the right to reject the content and will not publish it in the proceedings on IEEE.

          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Authorization to Publish
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            IEEE assumes that material presented at its conferences or submitted to its publications is properly available for general dissemination to the audiences these activities are organized to serve. It is the responsibility of the authors, not IEEE, to determine whether disclosure of their material requires the prior consent of other parties and, if so, to obtain it. The authors ensure that they solely and completely own the copyright to the material being submitted, and that they have the authority to transfer it to IEEE. To ensure that the authors are aware of their responsibilities, IEEE Copyright Forms must be collected for all papers accepted for publication.

            Furthermore, IEEE reserves the right to withhold publishing of proceedings or papers that do not meet IEEE quality standards.
          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Presentations (Paper, Poster, Lightning Talk)
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Each author is allowed to be a presenter on a maximum of three separate submissions (total across papers, posters, and lightning talks). If an author has more than three submissions accepted to the conference, they must register accompanying co-authors to present the additional submissions.

            While multiple authors may be registered to present together during the conference, it is not necessary that all listed authors on a submission be part of the presentation team, assuming that all non-attending authors have given prior consent.
            <a id="presentation" />
            Presenters are solely responsible for the creation of their presentation. The presentation should be based on the approved/accepted submission, but may include updates and related additional content.

          </Typography>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Presentation Guidelines
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Presenters are solely responsible for the creation of their presentation. The presentation should be based on the approved/accepted submission but may include updates and related additional content. Papers must be presented, or they will not be published in the IEEE Xplore database. Only listed authors on the URTC schedule may present their submissions.
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Please contact [gimsoon@ieee.org] as soon as possible if you are unable to attend the conference.
          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Paper Presentations & Lightning Talks
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            - Paper presentations must be at maximum 10 minutes long (inclusive of 1 to 2 minutes for audience questions) <br/>
            - Lightning talks must be at maximum 5 minutes long <br />
            - Presentations must include prepared graphics in the style of a keynote presentation and must be visible, comprehensible, and professional
          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Poster Presentations
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            - Poster size must be around 2x3 feet (width x height) <br/>
            - The title of the poster should appear at the top in CAPITAL letters about 25 mm (1”) high <br/>
            - The author’s/authors’ name(s) and institutional affiliations are put below the title <br/>
            - Use color to highlight and make the poster more attractive <br/>
            - Use varied methods of communication such as pictures, diagrams, cartoons, figures, etc. wherever possible and minimize the amount of block text on the poster<br/>
            - The smallest text on the poster should be at least 9 mm (3/8”) high, and significant content should be in larger font<br/>
            - The poster must be as self-explanatory and readable/comprehensible to the audience as possible, to save time for discussions and questions
          </Typography>

          <br/>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Submission Guidelines:
          </Typography>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="/paper_submission_2024.pdf">
            Paper Submission
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="/conference-template-letter.docx">
            Paper Template
          </Button>

          <Typography variant="string" component="h1" color="white" gutterBottom>
            Presentation Guidelines:
          </Typography>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="/paper_presentation_2024.pdf">
            Paper Presentation
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="/poster_presentation_2024.pdf">
            Poster Presentation
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="/lightning_talk_presentation_2024.pdf">
            Lightning Talk
          </Button>
        </GlassBox>
        <Box paddingBottom="3rem"></Box>
      </Container>
    </>
  );
}
