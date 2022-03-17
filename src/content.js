//main
import logo from "./images/smicon.png";
import contentImageTwo from "./images/p1.png";
import contentImageOne from "./images/p1.png";
import content from './contents.json';

export const RouteItems = [
    {name:content.header_nav_home,
        href:'/pages/',
        routeTag:'view_home_nav'},
    {name:content.header_nav_other,
        href:content.other_route,
        routeTag:'view_other_nav'},
    {name:content.header_nav_other2,
        href:content.other_route2,
        routeTag:'view_other2_nav'},
    {name:'Contact',
        href:content.contact_route,
        routeTag:'view_contact_nav'},
];

export const mainButtonTitle=content.button_title_1;
export const mainButtonLink =content.button_link_1;
export const contactButtonTitle='Contact Us';

export const titleContent=content.busines_Tag_Line;
export const titleBlurb=content.business_blurb;
export const supportingHeading =content.business_header_1;
export const supportingBlurb =content.business_subheader;
export const secondaryContentTitle=content.aux_header;
export const secondaryContent =content.aux_content

//other


export const businessBlurb = content.contact_subcontent
export const contactTitle=content.contact_header;
export const contactEmail = content.email;
export const contactPhone = content.phone;
export const contactBlurb = content.contact_blurb;


//secondary

export const secondaryHeader=content.secondary_header;
export const secondaryHeading1=content.secondary_heading1;
export const secondaryContent1=content.secondary_content1;
export const secondaryHeading2=content.secondary_heading2;
export const secondaryContent2=content.secondary_content2;
export const businessBlurbShort=content.businessBlurbShort;
export const secondaryPhoto1=contentImageOne;
export const secondaryPhoto2=null;
export const contactCTA='Make an enquiry';
//third

export const p3Header=content.p3_header;
export const p3Heading1=content.p3_heading1;
export const p3Content1=content.p3_content1;
export const p3Heading2=content.p3_heading2;
export const p3Content2=content.p3_content2;
export const p3ContentPhoto=contentImageTwo;
export const backgroundType='bg20';

