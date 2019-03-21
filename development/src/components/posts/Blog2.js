import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Blog2 extends Component {
  render() {
    return (
      <div className="Blog1">
   <div className="musingsWrapper">
									<h2>Identifying your target audience</h2>
									<div className="musingsSubHeading">
										Whether you are selling high-end shoes,
										making dog yoga videos or writing about how you built a brand from scratch, knowing
										your target audience is absolutely essential.
									</div>
									<div className="musingsReminder">
										This is the second installment of my building a brand from scratch series. It focuses on reaching your brand's target audience. This series is most effective when read in sequence. Here's the 
										<Link to="/Blog1"> first part</Link> of the series if you'd like to start from there.
									</div>
                  <div className="blogBodyCopyWrapper">
									<p>
										I was feeling pretty good after completing my website and setting up my social media
										profiles for <a href="http://danskii.com/" target="_blank">Danskii</a>. There's nothing
										as self-gratifying as the feeling of pulling up your new website and showing it off to
										your friends.
									</p>

									<p>
										There's also nothing quite like the feeling of knowing no one else is seeing it. 0 traffic-itis
										is painful. Since website visitors don't simply manifest from the ether I needed to start building traffic.
									</p>

									<figure className="musingsPhotoEmbed">
                  <Image
                  src={require("../../images/blog/blog2/identifying-a-target-audience-2.jpg")}          
                  fluid
                />
										<figcaption>0 traffic-itis is often fatal to a fledgling brand</figcaption>
									</figure>

									<h3>My Target audiences</h3>
									<p>
										When I began my dropshipping business in December of 2017 I relied primarily on advertising to drive traffic. This worked
										just fine at sending people to my website and provided an added bonus of this really cool upward trending line.
									</p>
									<figure className="musingsPhotoEmbed">
                  <Image
                  src={require("../../images/blog/blog2/identifying-a-target-audience-2.jpg")}          
                  fluid
                />
										<figcaption>Nearly to 50!</figcaption>
									</figure>
									<p>
										But that upward trending line was the only thing the advertising did.
									</p>
									<p>
										One of the major reasons for my initial dropshipping business failure was that I had not identified
										a target audience early enough. This mistake caused my content and advertisements to be
										far too generic when they should have been tailored to a specific group of people. I learned, through trial
										and error and many hours of research that the more tailored to an audience your content and advertising is,
										the more effective it will be.
									</p>
									<p>
										Realization of my failure to define a target audience crept up on me slowly.
										While I had people visiting my site, the majority
										were not doing anything of value. No sharing, no shopping, nothing. Worse,
										I was burning through money at an alarming rate, it often cost me
										more than .20 a click to get visitors to my site. This is far too expensive for online advertising. Your cost-per-click should be closer
										to .3 maximum.
									</p>
									<p>As you can imagine, my approach got very expensive very fast. And results were minimal.</p>

									<blockquote>
										<a href="https://www.quicksprout.com/the-complete-guide-to-building-your-personal-brand-chapter-2/" target="_blank">
											"One of the biggest mistakes that budding personal branders make is trying to appeal to everyone. Think about the game of darts: You have to aim in order to hit the board. (If you let your darts go without aiming them, you probably won’t be very popular.) If you hit the board, you score. And if your aim is very good and you hit the bull’s eye, even better!"
										</a>
									</blockquote>

									<p>
										However, advertising on Facebook introduced me to unique and incredibly powerful tool: <a href="https://www.facebook.com/business/news/audience-insights" target="_blank">Facebook Audience Insights</a>
									</p><p>
										Audience Insights was built by Facebook to allow advertisers to tap into the nearly infinite supply of demographic
										data which Facebook collects from every user: age, gender, occupation, likes, income, you name it.
									</p>

									<figure className="musingsPhotoEmbed">
                  <Image
                  src={require("../../images/blog/blog2/identifying-a-target-audience-3.jpg")}          
                  fluid
                />
										<figcaption>Look at all that sweet glorious demographic data</figcaption>
									</figure>



									<blockquote>
										<a href="https://www.facebook.com/business/news/audience-insights" target="_blank">
											"The more customer insights you have, the better you’re equipped to deliver meaningful messages to people.
											That’s the thinking behind Facebook Audience Insights, a new tool designed to help marketers learn more
											about their target audiences, including aggregate information about geography, demographics, purchase"
										</a>
										</blockquote>
										<h3>Facebook Audience Insights</h3>
										<p>
											The Audience Insights tool was exactly what I needed to identify my target audience. Here's how I used the tool to do just that.
										</p>
										<ol>
											<li>Navigate to the <a href="https://www.facebook.com/ads/audience-insights/" target="_blank"> Audience Insights tools</a></li>
											<li>Think of a brand which is similar to your own (the brand you select must also have a Facebook page for this to work)</li>
											<li>Under the interests text input, type the brand name</li>
											<li>
												Make note of the details which have the highest percentages for each category:
												<ul>
													<li>Gender</li>
													<li>Age</li>
													<li>Relationship Status</li>
													<li>Education Level</li>
													<li>Page Likes</li>
													<li>Location</li>
													<li>Device Users</li>
												</ul>
											</li>
										</ol>

										<figure class="musingsPhotoEmbed">
                    <Image
                  src={require("../../images/blog/blog2/identifying-a-target-audience-4.jpg")}          
                  fluid
                />
											<figcaption>
												Here's where to find Gender, Age, Relationship Status and Education Level. You'll need to explore the
												tool a bit to find Page Likes, Location and Device Users.
											</figcaption>
										</figure>
										<p>
											After some with the Audience Insights tool, I eventually landed on a brand that was similar to my own. After reviewing the brand, via the process
											listed above, I was able to quickly access an extremely detailed set of demographic data about my target audience. This was pure gold...
										</p><blockquote>
											<a href="https://www.facebook.com/business/news/audience-insights" target="_blank">
												"The more customer insights you have, the better you’re equipped to deliver meaningful messages to people..."
											</a>
										</blockquote>
										<p>
											So there it was, my target audience. A true thing of beauty. I had completed one of the most important steps to building a brand.
										</p>

										<p>Now it was time to figure out how to reach them.</p>
                    </div>
									</div>

      </div>
    );
  }
}

export default Blog2;
