import React from 'react'
import HeaderMark from './HeaderMark';
import FooterMark from './FooterMark';


const Marketing = () => {
  document.title = "Mitambi Marketing - Perfect Influencer For Your Product";
  document.getElementById("favicon").href = "images/faviconMark.png";

  return (
    
    <div>
    
      <HeaderMark/>

      <section id="joinus" className='shadow_dreamy' style={{ 'padding': '0.7% 0% 0.3% 0%','margin': '2rem 0rem','width': '100%'}}>
        {/* <img src="images/banners/bannerMark1.png" alt="" style={{ 'width': '100%','z-index': '-1','height':'700px','object-fit':'cover' ,'position':'absolute'}} /> */}
        {/* <button type="button" className="btn btn-primary btn-lg"style={{ 'width': 'auto','textAlign':'left','position': 'relative','top': '65%','left':'15%'}}>I'm a Brand</button>
        <button type="button" className="btn btn-primary btn-lg"style={{ 'width': 'auto','textAlign':'left','position': 'relative','top': '65%','left':'20%'}}>I'm an Influencer</button> */}
        <video muted loop playsinline="" autoplay="" style={{ 'width': '100%','z-index': '-1','object-fit':''}} >
        {/* <source src="https://firebasestorage.googleapis.com/v0/b/mitambisolutions-eb34c.appspot.com/o/bannerVid%2Fbv.mp4?alt=media&token=eac531ac-b043-4556-a333-9076c7d1599b" type="video/mp4" /> */}
                    <source src="images/banners/bv.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
      </section>

      <section id="aboutus" className='' style={{ 'margin': '1.5px auto' ,'padding': '2.5rem 0rem','width': '95%', 'textAlign':'center','font-size': '170%'}}>
        <span style={{ 'font-weight':'bold','font-size': '180%'}}>About Us</span> <br /><br />

        Mitambi Marketing, is the best digital marketing agency in the industry. <br />
        We are a team of best creators and data scientists and data analysts to bring <br />
        out the best campaign for your products and services. Be a part of team Mitambi <br />
        and get your product to skyrocket.🥳🥳🥳<br />
      </section>

      <section id="oursecretrecipe" style={{'margin': '1.5px auto' ,'padding': '2.5rem 0rem','width': '100%', 'text-align':' justify','font-size': '140%'}}>
        <div className='shadow_dreamy' style={{'margin':'1.5px auto','border-top-left-radius': '50px','border-bottom-right-radius': '50px','padding': '2.5rem 2.5rem','max-width': '90%', 'text-align':' justify','font-size': '140%'}}>
        <br />
        <p style={{'font-weight':'bold','font-size': '130%','textAlign':'center'}}>OUR SECRET RECIPE</p>
          <br /><br />
          <div className='grid2'>
            <div style={{ 'width': '160px', 'height': '160px', 'margin':'auto', 'backgroundColor': '#ef74a2', 'borderRadius':'50%','textAlign':'center'}}>
              <img src="images/bulb.png" alt="" style={{ 'height': '90%','padding-top':'15px', 'margin':'auto'}} />
            </div>
            <div>
              <div className='markTextLeft' style={{'font-weight':'bold'}}>Innovating New Ideas</div>
              Our research team is working day and night to bring out the best ideas that suits your product and services.
            </div> 
          </div>

          <br /><br />
          <div className='grid2'>
            <div>
              <div className='markTextRight' style={{'font-weight':'bold'}}>Market research</div>
              Our data scientists have a loads of data of past 20 years in every field to research the market and bring out the ultimate strategy for your product and services.
            </div> 
            <div style={{ 'width': '160px', 'height': '160px', 'margin':'auto', 'backgroundColor': '#ef74a2', 'borderRadius':'50%','textAlign':'center'}}>
              <img src="images/bulb.png" alt="" style={{ 'height': '90%','padding-top':'15px', 'margin':'auto'}} />
            </div>
          </div>

          <br /><br />
          <div className='grid2'>
          <div style={{ 'width': '160px', 'height': '160px', 'margin':'auto', 'backgroundColor': '#ef74a2', 'borderRadius':'50%','textAlign':'center'}}>
              <img src="images/bulb.png" alt="" style={{ 'height': '90%','padding-top':'15px', 'margin':'auto'}} />
            </div>
            <div>
              <div className='markTextLeft' style={{'font-weight':'bold'}}>Creative team</div>
              We have picked the best script writers and ad creaters from the industry to give your product the best it deserves.
            </div> 
          </div>

          <br /><br />
          <div className='grid2'>
            <div>
              <div className='markTextRight' style={{'font-weight':'bold'}}>Solution focused</div>
              Combining all these we give you the best influencer marketing solution so that we can grow together.
            </div> 
            <div style={{ 'width': '160px', 'height': '160px', 'margin':'auto', 'backgroundColor': '#ef74a2', 'borderRadius':'50%','textAlign':'center'}}>
              <img src="images/bulb.png" alt="" style={{ 'height': '90%','padding-top':'15px', 'margin':'auto'}} />
            </div>
          </div>
          
          <br /><br />
        </div>

      </section>

      <section id="contactus" style={{'margin': '1.5px auto' ,'padding': '2.5rem 0rem','width': '100%', 'textAlign':'center','font-size': '140%'}}>
        <p style={{'font-weight':'bold','font-size': '170%'}}>Contact Us</p>
              <br />
              <div style={{ 'height': '300px' }}>
                      <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSf5TEIoMnqlNz1tnnvRZFB33Y06_BPeaA9d6tDWrYOPzAZclA/viewform?embedded=true"
                      width="100%" height="100%" frameborder="0">Loading…</iframe>
              </div>
      </section>
      <FooterMark />
    </div>
  )
}

export default Marketing