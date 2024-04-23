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
        <MDBFooter className="text-center">
            <MDBContainer>
                <section>
                    <MDBBtn>
                        <MDBIcon fab icon='facebook-f'/>
                    </MDBBtn>

                    <MDBBtn>
                        <MDBIcon fab icon="github"/>
                    </MDBBtn>

                    <MDBBtn>
                        <MDBIcon fab icon="linkedin-in"/>
                    </MDBBtn>
                </section>

                <section>
                    <p>
                        short paragraph here
                    </p>
                </section>

                <section>
                    <MDBRow>
                        <MDBCol>
                            <h5>Links</h5>

                            <ul>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href="
                                    "></a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div>
                @ 2024 Copyright:
                <a href="https://github.com/aestrella0140">
                aestrella0140
                </a>
            </div>
        </MDBFooter>
    );
}