
import React, { Component } from 'react';
import { render } from 'react-dom';
import Accordion from '../components/Accordian';

class Skills extends Component {
  render() {
    return (
    <div className="Skills">
     
      <Accordion>
        <div label='Technical'>
         <p> From building websites from scratch to developing framework driven webapps, I have over 10 years of experience working with frontend technologies. 
         </p>
         <p>Skills include: HTML, CSS, JavaScript, React, Git, Team Foundation Server, Sitecore, SharePoint, Joomla, Wordpress, Shopify, Squarespace, Active Server Pages, Cpanel</p>
        </div>
        <div label='Marketing/Advertising'>
        <p>My digital campaigns have reached over two million Canadians. You may very well remember my work with  brands like SickKids, Outpost Magazine and the Ontario College of Teachers.  
         </p>
         <p>Skills include: Facebook Ads Manager, Twitters Ads Manager, LinkedIn Advertising, Pinterest Advertising, Google AdWords, Google Display Ads, Campaign Development and Optimization, SEO, Social Media Content Creation and monitoring.</p>
         
        </div>
        <div label='Leadership'>
        <p>I take pride in helping my teams strive towards excellence. From managaing  small technical teams to a network of global writers, I'm driven by the success of others.</p>
       
        </div>

        <div label='Creative'>
        <p>I take pride in helping my teams strive towards excellence. From managaing  small technical teams to a network of global writers, I'm driven by the success of others.</p>
        </div>
        
      </Accordion>
    </div>
  );
}
}


export default Skills;
