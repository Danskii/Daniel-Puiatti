import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
            <Container>
          <div className="testimonialsWrapper">
          <div id="testimonials">Testimonials</div>
     
          <Carousel interval="null" indicators="false" controls="true" pauseOnHover="true">
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  I have had the pleasure of working with Daniel Puiatti at
                  Outpost for several years and find him to be the
                  consummate professional. His knowledge of social media
                  trends and practices is outstanding and he brings a wealth
                  of knowledge, experience and creativity to the website and
                  web presence.
                </p>

                <p>
                  Dan is an excellent writer, has great general knowledge
                  and an exemplary attitude. He is a committed hard worker,
                  has a valuable sense of humour and is someone you always
                  want on your team.
                </p>
                <p className="testimonialName">Simon Vaughan</p>
                <p className="testimonialPosition">
                  Communications Manager at St. Clement's Schools
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  It was an absolute thrill having Daniel as a part of our
                  call center team!!!
                </p>
                <p>
                  Daniel is an extremely dependable, reliable, hard-working
                  person that always goes the extra mile to get the job
                  done. He would consistently meet and exceed our daily
                  production quotas and always set a good example for the
                  rest of the staff. His work ethic and upbeat personality
                  makes it easy for him to build effective work
                  relationships and succeed in a team based environment.
                  Above all, he is a very creative and strategically minded
                  person with great attention to detail. He was always
                  asking the right questions and looking for ways to
                  improve! Daniel would be a great addition to any team!!
                </p>

                <p className="testimonialName">Jeff Ludlow</p>
                <p className="testimonialPosition">
                  Production Manager
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  It is my distinct pleasure to provide this recommendation
                  for Daniel.
                </p>

                <p>
                  Daniel works in the Communication unit in a tight-knit
                  digital media team of three. He possesses extensive
                  knowledge and passion for all things digital media,
                  marketing, and communications, and with a fondness for
                  HTML and CSS. Further, he possesses great knowledge in
                  creating digital media with the required accessibility
                  standards.
                </p>
                <p>
                  He is daring, adventurous, creative and a hard-working
                  professional who will get the job done under strong
                  pressures against time-sensitive deadlines and ongoing
                  projects.{" "}
                </p>
                <p>
                  It is without reserve that I would recommend him in any
                  role that calls for multiple challenges, a need for
                  excellent communication, technological skills and
                  leadership.
                </p>
                <p className="testimonialName">Wendy Quon</p>
                <p className="testimonialPosition">
               
                    Certified Project Management and ScrumMaster
                    Professional
       
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  I was lucky enough to have Daniel Puiatti as my supervisor
                  during my internship at Outpost. He was a very patient
                  teacher and made me feel right at home in the Outpost
                  office.
                </p>
                <p>
                  Daniel is very knowledgeable on everything related to
                  content management systems (CMS), digital media and
                  content marketing. He was always up-to-date on all the
                  latest programs and apps that could help promote the
                  company and improve the reader’s experience. He is an
                  excellent writer and he even encouraged me to pitch ideas
                  to the editor-in-chief, which led to my work being
                  published online and in print. He taught me so much that I
                  was able to take over his position as a freelancer when he
                  was on an expedition. It is always nice to see somebody
                  who is really good at their job and also loves doing it.
                </p>
                <p className="testimonialName">Rebecca Bowslaugh</p>
                <p className="testimonialPosition">
                  Marketing Communications Professional
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  Dan is a critical thinker that brings value to a team.
                  Working with him on a charity fundraising event and in a
                  number of group projects has given me the chance to see
                  his skills in action. He's politically savvy, knows the
                  ins-and-outs of digital communication and has an uncanny
                  sense of humour that lights up the room.
                </p>
                <p className="testimonialName">Brittany Flamank</p>
                <p className="testimonialPosition">
             
                    Community Management, Startup Relations & Internal
                    Operations to Support Montreal's Tech Startup Ecosystem
         
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  I would like to really extend my appreciation for Daniel's
                  efforts to increase action onto my blog site. He is very
                  professional, detailed oriented, and is very thorough in
                  his approach
                </p>

                <p className="testimonialName">Conrad Gayle</p>
                <p className="testimonialPosition">
                  President and CEO at Con-Radical Media
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <p>
                  Dan is a clear and pragmatic thinker who I look forward to
                  collaborating with again...
                </p>

                <p className="testimonialName">Jo Fergus</p>
                <p className="testimonialPosition">
                  Content Marketing Strategist
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>

          </Container>

      </div>
    );
}
}


export default Testimonials;
