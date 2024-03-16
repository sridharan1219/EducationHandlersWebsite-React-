import React from 'react'
 import './Footer.css'


const Footer = () => {
  return (
    <div>

  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
        <div  className='b'>
        <footer class="footer">
  	 <div class="cr">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Menu</h4>
  	 			<ul className='aa'>
  	 				<li><a href='./Home'>Home</a></li>
  	 				<li><a href='./Allcourses'>All Cources</a></li>
  	 				<li><a href='./About'>About</a></li>
  	 				<li><a href='./Blog'>Blog</a></li>
                       <li><a href='/SignIn'>SignIn</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul className='aa'>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">News</a></li>
  	 				<li><a href="#">Terms</a></li>
  	 				<li><a href="/ContactUs">Contact</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 	
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
				
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  </div>
    </div>
  )
}

export default Footer