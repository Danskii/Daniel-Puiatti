import React, { Component } from "react";
import Image from "react-bootstrap/Image";

class Blog1 extends Component {
  render() {
    return (
      <div className="Blog1">
   <div className="musingsWrapper">
						
            <h2>Starting a brand from scratch</h2>
            <div className="musingsSubHeading">The first step to building a brand from scratch is failure.</div>
            <div className="blogBodyCopyWrapper">
            <p>At some point in December 2017 I decided I would try and sell products online. Real original, I know.</p>
            <p>I think the idea took hold when I came across a Shopify advertisement promoting something called drop shipping as a way to generate income through ecommerce. The idea Shopify advertised was seductively simple. First, you start up a trial ecommerce store with Shopify. Second, connect your ecommerce store to an automated drop shipping product (Oberlo) and finally, run some ads to drive traffic to your store and watch the money roll in.</p>
              
            <figure className="musingsPhotoEmbed">
            <Image
                  src={require("../../images/blog/blog1/starting-a-brand-from-scratch-1.jpg")}          
                  fluid
                />
              <figcaption>The source of my temptation</figcaption>
            </figure>
            <p>Some money did roll in, but it was far less than was rolling out. I had no financial success with Shopify or Oberlo, but failure imparts it's own value: wisdom. I had attempted to break into a market which was over-saturated with bigger and better product providers. Competing with the likes of Amazon and Ali Express provided too monumental a task.</p>

            <div className="quotes">
              <a href="https://www.techrepublic.com/article/these-8-e-commerce-giants-are-redefining-retail-around-the-world/" target="_blank">
                <span class="blockQuoteQuotationMark">"</span>Amazon and Alibaba are leading the world-wide e-commerce revolution, according to a study from Website Builder Expert (WBE). In their study, WBE mapped out the world's top online marketplaces. By geographically outlining the top online marketers, the power struggle for e-commerce domination becomes clear.<span class="blockQuoteQuotationMark">"</span>
              </a>
            </div>

            <p>Nevertheless, I was optimistic that I might still be able to develop a profitable ecommerce business. So I started to consider some alternative products and approaches: baby product reviews, pet food newsletters, trading cards forums, you name it. Almost every niche product has a market, and a blog trying to sell you on monetizing it. However, with so many providers offering the same product I would need to rely on a different value proposition. Instead of better prices, faster shipping or sophisticated ecommerce system, I would need to develop a following of people who liked the idea of my business. I would need to develop a brand. So...</p>
            <figure className="musingsPhotoEmbed">
            <Image
                  src={require("../../images/blog/blog1/starting-a-brand-from-scratch-2.jpg")}          
                  fluid
                />
              <figcaption>
                <p>I spent some time applying my design skills towards building out a simple tshirt brand.</p>
              </figcaption>
            </figure>
            <p>
              I built a website from scratch to accompany this brand: <a href="http://danskii.com/" target="_blank">Danskii.com</a>. I integrated analytics, marketing and and business intelligence tools:
              <a href="https://marketingplatform.google.com/about/analytics/" target="_blank">Google Analytics,</a>
              <a href="https://www.hotjar.com/" target="_blank">HotJar</a> and
              <a href="https://mailchimp.com/" target="_blank">MailChimp</a>.
              I set up the <a href="https://www.instagram.com/danskiishop/" target="_blank"> social media profiles.</a> Then I rested
            </p>
            <p>But not for long! Now I'll need to figure out how to get followers.</p>
            </div>
          </div>
          </div>
    );
  }
}

export default Blog1;
