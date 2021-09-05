import React from 'react';
import Footer from '../components/Footer/Footer';


const h1 = {
    textAlign : 'center',
    color: '#e6e6e6',
    paddingTop : '100px'
}

const desc = {
    textAlign : 'center',
    color: '#b5b5b5',
    paddingTop : '30px'
}

const DivP = {
    textAlign : 'center',
    color: '#eff',
    paddingLeft:'200px', 
    paddingRight:'200px'
}

const BodyStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/03/09/18/39/dandelion-3212292_960_720.jpg")',
    height: '700px',
    width: '100%',
    margin: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const about = () => {
    
    
    return (
        
        <body style={BodyStyle}>

        <div>
            <h1 style={h1}>ABOUT US</h1>
            <div style={desc}>
                <p>This is the about page and this project contains my works on the React platform <br /> which is
                    an amazing development environment for the Software Developers. Personally I really like <br />
                    the React JS because it gives various opportunities to develop a WebApp with various functions.</p>
            </div>
            <div style={DivP}>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div> 
            <div style={{paddingTop: "100px", textAlign: "center"}}>
            
            </div>
        </div>
        <footer style={{textAlign : "center"}}>
        <Footer />
        </footer>
        </body>
        
    )
}

export default about;