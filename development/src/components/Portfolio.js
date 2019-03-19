import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PortfolioThumbnails from "../components/PortfolioThumbnails";
import Image from "react-bootstrap/Image";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <PortfolioThumbnails />
        <Jumbotron fluid className="slide-in-left">
          <Container>
            <Image
              src={require("../images/professionally-speaking.jpg")}
              thumbnail
            />

            <div className="portfolioJumbotronContentWrapper">
              <h3 id="professionallyspeaking">Professionally Speaking</h3>
              <p className="portfolioPageSubHeading">
                Online magazine of the Ontario College of Teachers.
              </p>

              <ul>
                <li>
                  Developed the content structure, markup, stylesheets and
                  JavaScript for the online edition of the magazine from
                  scratch.
                </li>
                <li>
                  Site was developed with accessibility, speed and browser
                  compatibility as the focus.
                </li>
                <li>
                  Supervised a team of developers and content editors during
                  development.
                </li>
                <li>
                  Over 200 pages of content were manually built over a year.
                </li>
                <li>No frameworks or libraries used.</li>
              </ul>
              <a
                href="https://www.oct.ca/publications/professionally_speaking/default.aspx"
                target="_blank"
              >
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-right">
          <Container>
            <Image
              src={require("../images/daniel-puiatti-photography.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="dpPhotography">Daniel Puiatti Photography</h3>
              <p className="portfolioPageSubHeading">
                Full featured photography website. All photos taken and edited
                by myself.
              </p>
              <ul>
                <li>
                  Developed around the bootstrap framework with the integration
                  of content delivery networks.{" "}
                </li>
                <li>
                  Built based on a visual mockup provided via non-technical
                  illustrator.
                </li>
                <li>
                  Collection of over 200 photographs taken and edited by myself.
                </li>
                <li>Site was developed with a focus on responsive design.</li>
              </ul>
              <a
                href="https://danskii.github.io/Daniel-Puiatti-Photography/"
                target="_blank"
              >
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-left">
          <Container>
            <Image
              src={require("../images/toronto-bike-fixit-map.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="toBikeFixit">Toronto Bike Fixit Map</h3>
              <p className="portfolioPageSubHeading">
                Open source map of free repair stations in the Greater Toronto
                Area.
              </p>
              <ul>
                <li>
                  Built with the React framework and the Google Maps API; hosted
                  on GitHub pages.
                </li>
                <li>
                  Simple, interactive layout designed to keep focus on map.
                </li>
                <li>Map developed to facilitate quick, seamless updates.</li>
                <li>Social sharing integrated as NPM package.</li>
              </ul>
              <a
                href="https://danskii.github.io/Toronto-Bike-Fixit-Map/"
                target="_blank"
              >
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-right">
          <Container>
            <Image src={require("../images/danskii.jpg")} thumbnail />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="danskii">Danskii</h3>
              <p className="portfolioPageSubHeading">
                Clothing and social media lifestyle brand based out of Toronto,
                Canada.
              </p>
              <ul>
                <li>Responsive landing page built from scractch.</li>
                <li>
                  Integration with MailChimp, Facebook Ads, particle.js and
                  autotrack.js
                </li>
                <li>All elements hand coded: CSS, HTML, JavaScript.</li>
                <li>All graphics designed by myself.</li>
              </ul>
              <a href="https://danskii.com/" target="_blank">
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-left">
          <Container>
            <Image
              src={require("../images/gradient-background-generator.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="gradientgen">Gradient Generator</h3>
              <p className="portfolioPageSubHeading">
                Free web application to help you generate cool looking
                gradients.
              </p>
              <ul>
                <li>
                  Interactive webapp built from scratch from HTML, CSS and
                  JavaScript.
                </li>
                <li>Built as a project for a web development course.</li>
                <li>
                  Provides functional gradients that can be used for web design.
                </li>
                <li>Built in one-hour.</li>
              </ul>
              <a
                href="https://danskii.github.io/Graident-Background-Generator/"
                target="_blank"
              >
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-right">
          <Container>
            <Image
              src={require("../images/making-pdfs-aoda-compliant.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="accessible">Acessible PDFs</h3>
              <p className="portfolioPageSubHeading">
                An easy to follow guide on how you can make your PDFs
                accessible.
              </p>
              <ul>
                <li>
                  Designed and built to facilitate a simple reading experience.
                </li>
                <li>
                  All content in this guide developed and written by myself.
                </li>
                <li>
                  Functional guide on how to make your PDFs aoda compliant.
                </li>
                <li>
                  Layout provides optimal read experience for technically dense
                  content.
                </li>
              </ul>
              <a href="https://aoda-compliant.com/" target="_blank">
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-left">
          <Container>
            <Image
              src={require("../images/outpost-magazine-shop.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="opshop">The Outpost Shop</h3>
              <p className="portfolioPageSubHeading">
                Ecommerce platform for travel magazine.
              </p>
              <ul>
                <li>Built on Shopify.</li>
                <li>
                  Optimized via A/B testing to increase conversions and lead
                  generation.
                </li>
                <li>
                  Developed back-issues section to showcase each edition and
                  optimize SEO.
                </li>
                <li>
                  Integrated payment system to accept AMEX, MasterCard, PayPal
                  and VISA.
                </li>
              </ul>
              <a href="https://the-outpost-shop.myshopify.com/" target="_blank">
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="slide-in-right">
          <Container>
            <Image
              src={require("../images/daniel-puiatti-portfolio.jpg")}
              thumbnail
            />
            <div className="portfolioJumbotronContentWrapper">
              <h3 id="dpportfolio">Daniel Puiatti's Portfolio</h3>
              <p className="portfolioPageSubHeading">
                That's this website! Is that cheating?
              </p>
              <ul>
                <li>Built with React and React Bootstrap</li>
                <li>Looks great!</li>
                <li>Is Fast!</li>
                <li>You are already on it!</li>
              </ul>
              <a
                href="https://danskii.github.io/Daniel-Puiatti/"
                target="_blank"
              >
                <p className="portfolioCallToActionLink">
                  See the live page >>>
                </p>
              </a>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Portfolio;
