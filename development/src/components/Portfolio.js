import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import PortfolioThumbnails from '../components/PortfolioThumbnails'; 
import Image from 'react-bootstrap/Image';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
           <PortfolioThumbnails />
<Jumbotron fluid>
  <Container>
  <Image src={require('../images/professionally-speaking.jpg')} thumbnail  />
    <h3>Professionally Speaking</h3>
    <p>
    Online magazine of the Ontario College of Teachers.
    </p>
    
    
    <ul>
      <li>Developed the content structure, markup, stylesheets and JavaScript for the online edition of the magazine from scratch.</li>
      <li>Site was developed with accessibility, speed and browser compatibility as the focus.</li>
      <li>Supervised a team of developers and content editors during development.</li>
      <li>Over 200 pages of content were manually built over a year.</li>
      <li>No frameworks or libraries used.</li>

</ul>

  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
  <Image src={require('../images/daniel-puiatti-photography.jpg')} thumbnail  />
    <h3>Daniel Puiatti Photography</h3>
    <p>
    Full featured photography website. All photos taken and edited by myself.
    </p>
    <ul>
        <li>Developed around the bootstrap framework with the integration of content delivery networks. </li>
      <li>Built based on a visual mockup provided via non-technical illustrator.</li>
      <li>Collection of over 200 photographs taken and edited by myself.</li>
      <li>Site was developed with a focus on responsive design.</li>

      

</ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
  <Image src={require('../images/toronto-bike-fixit-map.jpg')} thumbnail  />
    <h3>Toronto Bike Fixit Map</h3>
    <p>
    Open source map of free repair stations in the Greater Toronto Area.
    </p>
    <ul>
      <li>Built with the React framework and the Google Maps API; hosted on GitHub pages.</li>
      <li>Simple, interactive layout designed to keep focus on map.</li>
      <li>Map developed to facilitate quick, seamless updates.</li>
      <li>Social sharing integrated as NPM package.</li>
    </ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
  <Image src={require('../images/danskii.jpg')} thumbnail  />
    <h3>Danskii</h3>
    <p>
    Clothing and social media lifestyle brand based out of Toronto, Canada.
    </p>
    <ul>
        <li>Responsive landing page built from scractch.</li>
        <li>Integration with MailChimp, Facebook Ads, particle.js and autotrack.js</li>
        <li>All elements hand coded: CSS, HTML, JavaScript.</li>
        <li>All graphics designed by myself.</li>
      </ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
  <Image src={require('../images/gradient-background-generator.jpg')} thumbnail  />
    <h3>Gradient Generator</h3>
    <p>
    Free web application to help you generate cool looking gradients
    </p>
    <ul>
      <li>Interactive webapp built from scratch from HTML, CSS and JavaScript.</li>
      <li>Built as a project for a web development course.</li>
      <li>Provides functional gradients that can be used for web design.</li>
      <li>Built in one-hour.</li>
    </ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
      <Image src={require('../images/making-pdfs-aoda-compliant.jpg')} thumbnail  />
    <h3>Acessible PDFs</h3>
    <p>
    An easy to follow guide on how you can make your PDFs accessible.
    </p>
    <ul>
      <li>Designed and built to facilitate a simple reading experience.</li>
      <li>All content in this guide developed and written by myself.</li>
      <li>Functional guide on how to make your PDFs aoda compliant.</li>
      <li>Layout provides optimal read experience for technically dense content.</li>
   
    </ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
      <Image src={require('../images/outpost-magazine-shop.jpg')} thumbnail  />
    <h3>The Outpost Shop</h3>
    <p>
    Ecommerce platform for travel magazine.
    </p>
    <ul>
      <li>Built on Shopify.</li>
      <li>Optimized via A/B testing to increase conversions and lead generation.</li>
      <li>Developed back-issues section to showcase each edition and optimize SEO.</li>
      <li>Integrated payment system to accept AMEX, MasterCard, PayPal and VISA.</li>
    </ul>
  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
      <Image src={require('../images/daniel-puiatti-portfolio.jpg')} thumbnail  />
    <h3>Daniel Puiatti's Portfolio</h3>
    <p>
   That's this website! Is that cheating?
    </p>
    <ul>
      <li>Built with React and React Bootstrap</li>
      <li>Looks great!</li>
      <li>Is Fast!</li>
      <li>You are already on it!</li>
    </ul>
  </Container>
</Jumbotron>
      </div>
    );
  }
}

export default Portfolio;
