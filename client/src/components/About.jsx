import React from 'react';
import "./About.css";
import Fouter from './Fouter';
import { LibraryBooks, Public, Create } from "@material-ui/icons";


const About = () => {
    
  function importAll(r) {
    let images = {};
    r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
    return images;
  }
  
  const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));




return (
    <div class="container-fluid">
    <h1 class="text-center mt-5 display-3 fw-bold">About Us </h1>
    <hr class="mx-auto mb-5 w-25"/>
    <div>
    <img src={images['map.png']} alt=""/>
        
    </div>
    <iframe width="853" height="480" src="https://www.youtube.com/embed/fzIZ2B7uBaI" title="BSHOPStore" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
   
    <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-3 m-auto">
            {/*<!-- card starts here -->*/}
            <div class="card shadow">
                <LibraryBooks style={{ marginLeft: '150px' }}/>
                <div class="card-body">
                    <h3 class="text-center">MISSION</h3>
                    <hr class="mx-auto w-75"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi
                        nemo, quas delectus eveniet ducimus rem animi. Natus non earum deleniti aliquam
                    </p>
                </div>
            </div>
            {/*<!-- card ends here -->*/}
        </div>
        {/*<!-- col ends here -->*/}
        <div class="col-12 col-sm-6 col-md-3 m-auto">
            {/*<!-- card starts here -->*/}
            <div class="card shadow">
                <Public style={{ marginLeft: '150px' }}/>
                <div class="card-body">
                    <h3 class="text-center">VISION</h3>
                    <hr class="mx-auto w-75"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi
                        nemo, quas delectus eveniet ducimus rem animi. Natus non earum deleniti aliquam
                    </p>
                </div>
            </div>
            {/*<!-- card ends here -->*/}
        </div>
        {/*<!-- col ends here -->*/}
        <div class="col-12 col-sm-6 col-md-3 m-auto">
            {/*<!-- card starts here -->*/}
            <div class="card shadow">
                <Create style={{ marginLeft: '150px' }} />
                <div class="card-body">
                    <h3 class="text-center">ACHIEVEMENTS</h3>
                    <hr class="mx-auto w-75"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi
                        nemo, quas delectus eveniet ducimus rem animi. Natus non earum deleniti aliquam
                    </p>
                </div>
            </div>
            {/*<!-- card ends here -->*/}
        </div>
       
            
    </div>
    <Fouter/>
</div>

)
}
export default  About