import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                        University Street<br />
                        Amman , Capital<br />
                        JORDAN - AMMAN <br />
                        <i className="fa fa-phone fa-lg"></i>: +962 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +962 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:aghyadalbalkhi@gmail.com">
                            aghyadalbalkhi@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://web.facebook.com/aghyadalbalkhi/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/magheadalbalkhe/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/aghyadalbalkhi"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:aghyadalbalkhi@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Aghyad ALbalkhi</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;