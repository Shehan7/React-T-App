import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './emailtemp.css';

{/** Please install bootstrap on the project using version 5.1.0:

npm install react-bootstrap@next bootstrap@5.1.0
 */}


const bodyWrap = {
    backgroundColor: '#f6f6f6',
    width: '100%'
}

const container = {
    display: 'block',
    maxWidth: '600px',
    margin: '0 auto',
    clear: 'both'
}

const content = {
        maxWidth: '600px',
        margin: '0 auto',
        display: 'block',
        padding: '20px'
}

const main = {
    background: '#fff',
    border: '1px solid #e9e9e9',
    borderRadius: '3px'
}

const contentWrap = {
    padding: '20px',
    textAlign: 'center'
}

const contentBlock = {
    padding: '0 0 20px'
}

const invoice = {
    margin: '40px auto',
    textAlign: 'left',
    width: '80%'
}

const invoiceItems = {
    width: '100%',
    borderTop: '#eee 1px solid',
    marginTop: '10px'
}

const invoiceItemsTd = {
    padding: '5px 0',
}

const totalTd = {
    borderTop: '1px solid #333',
    borderBottom: '2px solid #333',
    fontWeight: '700'
}

const alignRight ={
    textAlign: 'right'
}

const Footer = {
    width: '100%',
    clear: 'both',
    color: '#999',
    padding: '20px'
}

const h2 = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    color: '#e80e0e',
    margin: '40px 0 0',
    lineHeight: '1.2',
    fontWeight: '600',
    fontSize: '24px'
}

const h3 = {
    fontSize: '18px',
    color: "#66ff00",
    marginTop: '20px'
}

export default function emailtemp(){
    return(
        <table style={bodyWrap}>
        <tbody><tr>
        <td></td>
        <td style={container} width="600">
            <div style={content}>
                <table style={main} width="100%" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td style={contentWrap}>
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <img src="https://makeadifference.lk/images/logo.png" alt="" style={{height:"30%", width:"30%"}}/>
                                    </tr>
                                    
                                    <tr>
                                    <td style={contentBlock}>
                                        {/** Donation status: */}
                                        <h3 style={h3}>Donation Successful</h3> <br />

                                        <h2 style={h2}>Thanks for your genereous donation</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={contentBlock}>
                                        <table style={invoice}>
                                            <tbody><tr>
                                                {/* Pass data to below placeholders */}
                                                <td>Donor's Name<br />Invoice #12345<br />August 29, 2021</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table style={invoiceItems} cellpadding="0" cellspacing="0">
                                                        <tbody><tr>
                                                            <td style={invoiceItemsTd}>Donation Title</td>
                                                            <td style={alignRight}>Rs: 1000.00</td>
                                                        </tr>
                                                        <tr style={totalTd}>
                                                            <td >Total</td>
                                                            <td style={alignRight}> Rs: 1000.00</td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={contentBlock}>
                                        <h3 style={{color: 'black', fontSize: '20px'}}>Your donation will help us to make a difference!</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={contentBlock}>
                                    CCC Foundation Sri Lanka 466/9, Galle Road, Colombo 03
                                    </td>
                                </tr>
                                <tr>
                                    <td style={contentBlock}>
                                    <a style={{fontSize: '14px'}} href="https://makeadifference.lk" target="_blank">makeadifference.lk</a>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
                <div style={Footer}>
                    <table width="100%">
                        <tbody><tr>
                            <td style={contentBlock, {textAlign:'center', fontSize: '12px'}} >Any Questions? Feel Free to Email <a style={{color: '#999', fontSize: '12px'}} href="mailto:managercccline@gmail.com">managercccline@gmail.com</a></td>
                        </tr>
                    </tbody>
                    </table>
                </div></div>
        </td>
        </tr>
    </tbody>
    </table>
    );
}