import React from 'react';
import Footer from '../../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from '../../components/Sidenav/sidenav';

const bod = {
    backgroundColor: '#282c34',
    paddingLeft: '100px'
}

const back = {
    textAlign:'center',
    color: 'black',
    paddingTop: "60px"
}

const h1 = {
    color: '#282c34',
    paddingBottom: '10px'
}

const frm = {
    backgroundColor: 'white',
    padding: '35px',
    borderWidth: '5px',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: '15px'
}

const lab = {
    /*borderRadius: '10px',
    borderWidth: '1px',
    paddingLeft: '5px',*/

    borderTop: '1px',
    borderLeft: '1px',
    borderRight: '1px',
    borderColor: '#282c34'
}

const btn = {
    borderRadius: '10px',
    backgroundColor: '#282c34',
    color: 'white',
    borderWidth: '2px'
}

const contact = () => {
    return (
        <div style={{paddingTop: "60px"}} >
            <Sidenav />
            <body style={bod}>
                <div style={back}>
            <div class="container">
            <div class="row">
                <div class="col-sm"/>
                <div class="col-sm">
                
                <div style={frm}>
                <h1 style={h1}>Contact Us</h1>
                <form action="action.php" >
                    <p>
                    <input style={lab} id="name" type="text" size="50" placeholder="Name"/>
                    </p>
                    <p>
                    <input style={lab} id="email" type="text" size="50" placeholder="Email"/>
                    </p>
                    <p>
                    <input style={lab} id="subject" type="text" size="50" placeholder="Subject"/>
                    </p>
                    <p>
                    <textarea style={lab} id="message" name="message" rows="7" cols="50"maxWidth="true" placeholder="Message" />
                    </p>
                    <input type="submit" value="Submit" style={btn}/>

                </form>
                </div>
                </div>
                <div class="col-sm" />
            </div>
            </div>
            </div>

            <div style={{paddingTop: "50px", textAlign: "center"}}>
                <Footer />
            </div>

            </body>
        </div>
        
    );
}

export default contact;