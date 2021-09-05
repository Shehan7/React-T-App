import React from 'react';
import './sidenav.css';

const sidenav = () => {
    return (
        <div>


            <div className="wrapper">

                <div className="sidebar">
                    <div className="profile">
                        <div style={{paddingTop: '50px'}}>
                        <h3>Shehan Somaweera</h3>
                        <p>Software Developer</p>
                        </div>
                    </div>
                    
                    
                    <ul>
                        <li>
                            <a href="#" className="active">
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="item">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-desktop"></i></span>
                                <span className="item">My Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-user-friends"></i></span>
                                <span className="item">People</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                                <span className="item">Perfomance</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-database"></i></span>
                                <span className="item">Development</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-chart-line"></i></span>
                                <span className="item">Reports</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-user-shield"></i></span>
                                <span className="item">Admin</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-cog"></i></span>
                                <span className="item">Settings</span>
                            </a>
                        </li>
                    </ul>
                
                </div>

            </div>
        </div>
    )
}

export default sidenav;