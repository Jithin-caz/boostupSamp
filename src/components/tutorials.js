import React from 'react';
import About from './about';
function Tuts()
{
    return(
        <body>
    <div className='master'>
<div id='welcome'>
<div id='welcome1'>Hello</div>
<div id='welcome2'>bonjour</div>
<div id='welcome3'>Hello</div> </div>
<p id='firspar'>Boost Up is website which allows you to <br></br>explore your field of interest and connect <br></br>with other people with similar interests</p>
<p id='secpar'>create your account today and join the <br></br> community of budding techies</p>
<div className='cover'>
 <div className='tutorial'></div> 
<div id='tuttext'>How to navigate this page</div>
</div>
<div className='images'>
    <div className='img1'></div>
    <div className='img2'></div>
    <div className='img3'></div>
    <div className='img4'></div>
    <div className='img5'></div>
</div> </div>  
<About/>
<footer className='tutorials-foot'>contact</footer>
        </body>
    );
}
export default Tuts;