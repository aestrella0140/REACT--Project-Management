import React from "react";

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';



export default function Footer() {
    return(
        <MDBFooter className="text-center" color="white" bgColor="dark" style={{ marginTop: '100px'}}>
            <MDBContainer className="p-4">
                <section className="mb-4">
                    <MDBBtn outline color="light" floating className="m-1 my-custom-btn" href="#!" role="button">
                        <MDBIcon fab icon="facebook-f"/>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className="m-1 my-custom-btn" href="#!" role="button"> 
                        <MDBIcon fab icon="github"/>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className="m-1 my-custom-btn" href="#!" role="button">
                        <MDBIcon fab icon="linkedin-in"/>
                    </MDBBtn>
                </section>

                <section className="mb-4">
                    <p >
                        short paragraph here
                    </p>
                </section>
            {/* want links to personal about page....sources for development maybe and a short paragraph page about gore.... and new development ideas and issue report page */ }
                <section className="">
                    <MDBRow>
                        <MDBCol lg='3' md='6' className="mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="" className="text-white">
                                        link
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-white">
                                        link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-white">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-white">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div  className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, o.2)' }}>
                @ 2024 Copyright:
                <a className="text-white p-1" href="https://github.com/aestrella0140">
                aestrella0140
                </a>
            </div>
        </MDBFooter>
    );
}