import React from 'react'
import styled from 'styled-components'
import { Contact } from '../components'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'




const Footer = () => {
  return (<Wrapper>
    
      <div class="site-footer">
          <div class="socialIconsContainer">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><FaFacebook/></a></li>
              <li><a class="instagram" href="#"><FaInstagram/></a></li>
              <li><a class="twitter" href="#"><FaTwitter /></a></li>
            </ul>
          </div>
        <Contact />
        <div class="container">
          <div class="row">
          <div class="companyContainer">
              <h6>Company</h6>
              <ul class="footer-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>

            <div class="categoriesContainer">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Shopping</a></li>
              </ul>
            </div>

            <div class="quickLinksContainer">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
      </div>

      <div class="container">
        <div class="row">
        <div class="copyrightContainer">
            <h5>&copy;  {new Date().getFullYear()}
            <span> Bruno Marijuan</span>
            </h5>
            <h5> All Rights Reserved</h5>
        </div>

          
        </div>
      </div>
    </div>
    
   
  </Wrapper>)
}

const Wrapper = styled.footer`
.row {
  display: flex;
  justify-content: center;
}
.socialIconsContainer{
  padding-right: 20px;
}
.companyContainer,
.categoriesContainer,
.quickLinksContainer {
  width: 33%;

}

.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-family: Raleway;
  font-size:20px;
  line-height:24px;
  color: var(--clr-primary-2);
}

.copyrightContainer{
  color: var(--clr-primary-4);
  width: 100%;
  justify-content: center;
  text-align: center;
  display: flex;
}

.copyrightContainer h5{
  font-weight: lighter;
  padding-left: 10px;
  font-size: 12px;
}

.site-footer h6
{
  padding-left:50px;
  color: var(--clr-primary-2);
  font-family: Raleway;
  font-weight: semibold;
  font-size:20px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px;
  padding-bottom: 10px;
}
.site-footer a
{
  color: var(--clr-primary-2);
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:50px;
  padding-bottom: 10px;
  list-style:none
}
.footer-links li
{
  display:block;
  padding: 5px 0;
}
.footer-links a
{
  color: var(--clr-primary-2);
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width: 30px;
  height: 30px;
  line-height: 33px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{

  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .socialIconsContainer{
    padding-right: 0px;
  }
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.instagram:hover
{
  background-color:#df26c2
}

@media (max-width:767px)
{
  .site-footer {
    font-size:12px;
  }
  .site-footer h6
{
  padding-left:5px;
  font-size:12px;
  
}
  .footer-links
{
  padding-left:5px;
}
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
`

export default Footer



