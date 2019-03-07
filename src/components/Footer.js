import React, { Component } from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <div>
        <MDBFooter>
            <div className="footer-copyright text-center py-3 footerFixed">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: Jessica Diver
              </MDBContainer>
              <MDBContainer fluid >
                <a href="https://github.com/jessdiv/Trip-Planner" className="footerLink"> Visit Github Repo </a>
              </MDBContainer>
            </div>
        </MDBFooter>
      </div>
    )
  }
}

export default Footer;
