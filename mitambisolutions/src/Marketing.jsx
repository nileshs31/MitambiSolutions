import React from 'react'
import HeaderMark from './HeaderMark';
import FooterMark from './FooterMark';


const Marketing = () => {
  document.title = "Mitambi Marketing - Perfect Influencer For Your Product";
  document.getElementById("favicon").href = "images/faviconMark.png";

  return (
    
    <div>
    
      <HeaderMark/>

      <section id="joinus" className='shadow_dreamy' style={{ 'margin': '2rem 0rem','height':'700px'}}>
        <img src="images/banners/bannerMark.png" alt="" style={{ 'width': '100%','z-index': '-1','height':'700px','object-fit':'cover' ,'position':'absolute'}} />
        <button type="button" className="btn btn-primary btn-lg"style={{ 'width': 'auto','textAlign':'left','position': 'relative','top': '65%','right':'2%'}}>I'm a Brand</button>
        <button type="button" className="btn btn-primary btn-lg"style={{ 'width': 'auto','textAlign':'left','position': 'relative','top': '65%','right':'2%'}}>I'm an Influencer</button>
      </section>

      <section id="aboutus" className='' style={{ 'margin': '1.5px auto' ,'padding': '2.5rem 0rem','width': '95%', 'textAlign':'center','font-size': '140%'}}>
        <span style={{ 'font-weight':'bold','font-size': '180%'}}>About Us</span> <br /><br />

        Mitambi Marketing, is the best digital marketing agency in the industry. <br />
        We are a team of best creators and data scientists and data analysts to bring <br />
        out the best campaign for your products and services. Be a part of team Mitambi <br />
        and get your product to skyrocket.🥳🥳🥳<br />
      </section>

      <section id="oursecretrecipe" style={{'display': 'block','padding': '.1rem 1rem','padding-right': '1rem','padding-left': '1rem','height':'900px','background-color': '#321123','font-size': '150%'}}>
        RECIPE
      </section>

      <section id="contactus" style={{'display': 'block','padding': '.1rem 1rem','padding-right': '1rem','padding-left': '1rem','height':'900px','background-color': '#211123','font-size': '150%'}}>
        CoNTACT US
      </section>
      
    </div>
  )
}

export default Marketing