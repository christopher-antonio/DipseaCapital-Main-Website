/**
 * This file contains all the information for the bullet points in the giving back page
 * To add more content to the community page:
 * 1. Add the image to the /public/Community folder
 * 2. Copy this code over here and paste it at the bottom ->
 * !! Remove the brackets when replace the content. Ex: { Name } -> Put John NOT { John } in the field
*   export const card{n} = {
        head: '{ name of the institution }',
        desc: `{ description of the institution }`,
        link: '{ link to the website of the instituiton }',
        img: '/Community/{ name of the image file }'
    };
    3. Go to the community.js file for next steps
 */

export const card1 = {
    head: 'Canal Alliance',
    desc: `Canal Alliance offers immigration legal services, education, career programs, and social services to help Hispanic 
    immigrants and their families overcome barriers to success.`,
    link: 'https://canalalliance.org/',
    img: '/Community/Canal-Alliance.png'
};

export const card2 = {
    head: 'University of California, Davis',
    desc: `The UC Davis College of Biological Sciences is one of three colleges in the United States dedicated to the study
    of biological sciences.`,
    link: 'https://www.ucdavis.edu/',
    img: '/Community/Ucd.png'
};

export const card3 = {
    head: 'Dipsea Race',
    desc: `To inspire our community and beyond to support the tradition of the Dipsea Race and the stewardship of the Dipsea Trail.`,
    link: 'https://www.dipsea.org/',
    img: '/Community/Dipsea-race-new.jpg'
};

export const card4 = {
    head: 'The Buck Institute',
    desc: `The world’s first biomedical research institution devoted solely to research on aging and helping people live better longer.`,
    link: 'https://www.buckinstitute.org/',
    img: '/Community/Buck.png'
};
