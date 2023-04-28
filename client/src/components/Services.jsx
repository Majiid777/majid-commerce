import React from 'react';
import "./Services.css";
import Fouter from './Fouter';

const Services = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
        return images;
      }
      
      const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));




    return (
        <div class="container-fluid">
        <h1 class="text-center mt-5 display-3 fw-bold">Our Services </h1>
        <hr class="mx-auto mb-5 w-25"/>
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
                {/*<!-- card starts here -->*/}
                <div class="card shadow">
                    <img src={images['web.svg']} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Web Development</h3>
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
                    <img src={images['app.svg']} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">App Development</h3>
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
                    <img src={images['dm.svg']} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Digital Marketing</h3>
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
                    <img src={images['seo.svg']} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Email Marketing</h3>
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
        </div>
        <Fouter/>
    </div>

    )
}

export default Services
