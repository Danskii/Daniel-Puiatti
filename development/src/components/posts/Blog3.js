import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Blog3 extends Component {
  render() {
    return (
      <div className="Blog3">
  <div className="musingsWrapper">
								<h2>Know your target audience. Reach your target audience.</h2>
								<div className="musingsSubHeading">
									Any seasoned brand-builder will tell you that knowing your target audience is not enough. You must also reach them. And if you can consistently reach them, then you are well on your way to building a brand.
								</div>
								<div className="musingsReminder">
									This is the third installment of my building a brand from scratch series. It focuses on reaching your brand's target audience. This series is most effective when read in sequence.
									Here's the 
									<Link to="/Blog1"> first part</Link> of the series if you'd like to start from there.
								</div>
                <div className="blogBodyCopyWrapper">
								<p>
									After I had defined my target audience's demographic and psychographic characteristics with help from the  <a href="https://www.facebook.com/business/news/audience-insights" target="_blank">Facebook Audience Insights</a> tool, I started to think about how to put this information about my target audience to work. I needed a way to reach my target audience that was affordable, sustainable and expandable.
								</p>
								<p>The most obvious application was content marketing.</p>

								<h3>Content Marketing? What's Content Marketing? </h3>

								<blockquote>
									<a href="https://contentmarketinginstitute.com/what-is-content-marketing/" target="_blank">
										"Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action."
									</a>
								</blockquote>

								<p>In other words, if you are creating blogs, photos, videos, podcasts or social media posts with the goal of getting the attention of your target audience you are content marketing.</p>

								<p>How does the content you create help get attention for your brand?</p>
								<p>Think of a social media feed. Think of how content appears in the feed. Usually, it's something like this:</p>

								<figure className="musingsPhotoEmbed">
                <Image
                  src={require("../../images/blog/blog3/reaching-a-target-audience-with-content-marketing-1.jpg")}          
                  fluid
                />
									<figcaption>Look close, what do you notice?</figcaption>
								</figure>

								<p>Notice what's attached to the content in the feed: a profile. Often, a brand profile.</p>

								<p>
									So if people are paying attention to your content, they are paying attention to your brand. And if you are
									creating content to get the attention of your target audience, then you are content marketing.
								</p>

								<h3>How you can start content marketing</h3>

								<p>
									As mentioned there are many ways to do content marketing: blogs, photos, video, podcasts,
									social media posts, etc., and each of these methods has their own pros and cons. My approach
									uses images and is built on three proven business principles:
									easy, affordable, expandable.
								</p>

								<p>
									Images are the time-tested favourite as they meet all three of the above criteria and the process I use
									is the result of hundreds of hours of building brands from scratch and developing content marketing processes.
									If you follow my approach to content marketing I guarantee you will save time, money and a good deal of

									sanity.
								</p>

								<h3>
									But how do I you make content that my audience will think is awesome?
								</h3>

								<p>
									<a href="https://danskii.github.io/Daniel-Puiatti/musings/identifying-a-target-audience">
										The demographic and psychographic information Facebook Audience Insights tool revealed about
										your target audience in part two will help you make content that your audience will think is awesome.
									</a>
								</p>

								<p>
									Here's what this looks like in practice. We'll use my tshirt brand <a href="http://danskii.com" target="_blank">Danskii</a> as an example.
								</p>

								<p>
									For Danskii my target audience is composed of 25-34-year-old females with a college education and a preference for travel and photography.
								</p>

								<p>
									So... how do I use this information to do that?
								</p>

								<p>
									Hmm.
								</p>

								<p>
									Travel and photography...
								</p>

								<p>
									Travel and photography?
								</p>

								<p>
									Travel and photography!
								</p>

								<p>
									Bingo.
								</p>

								<p>
									There's how I make content to get my audience's attention. I'll need to create
									images which focus on travel.
								</p>

								<p>
									Ok, so admittedly the figuring out what will appeal to your
									target audience step is always pretty easy. Creating the photos that appeal to your target
									audience is where the real work comes in. Lucky for you I'm going to outline exactly how to do this.
								</p>
                </div>
							</div>

      </div>
    );
  }
}

export default Blog3;
