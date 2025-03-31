import React from 'react';
import './Channel.css';
import { Link } from 'react-router-dom';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const Profile = ({ sidenav }) => {
    return (
        <div className="profile">
            <SideNavbar sidenav={sidenav} />
            
            <div className="profilepage">
                {/* Banner Image */}
                <div className="banner-container">
                    <img
                        className="banner-img"
                        src="https://img.freepik.com/free-photo/development-opportunity-strategy-improvement-word_53876-13771.jpg?semt=ais_hybrid"
                        alt="ChannelBanner"
                    />
                </div>

                {/* Profile Section */}
                <div className="profile-top-section">
                    {/* Profile Details */}
                    <div className="profile-content">
                        <div className="container-box">
                            <div className="about-name-profile">My Channel</div>
                            <div className="about-info">15k subscribers • 2 videos</div>
                            <div className="about-info">Hii guys, I am priya currently working as a Software engineer  in Google</div>
                            <div className="about-info">
                                <a href="#" className="profile-link">port-b74454.web.app</a> and <span className="profile-link">3 more links</span>
                            </div>

                            {/* Buttons */}
                            <div className="profile-buttons">
                                <button className="profile-button subscribe-button">Subscribe</button>
                                <button className="profile-button join-button">Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar (Home, Videos, etc.) */}
                <div className="profile-nav">
                    <span className="nav-item active">Home</span>
                    <span className="nav-item">Videos</span>
                    <span className="nav-item">Shorts</span>
                    <span className="nav-item">Playlists</span>
                    <span className="nav-item">Posts</span>
                </div>

                {/* Video Categories */}
                <div className="profile-nav-element">
                    <div className="category1">
                        <div className="heading">Popular Videos</div>
                        <div className="all-elements">
                            <Link to={'/watch/25'} className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?semt=ais_hybrid" alt="pic1" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to create react files</div>
                                    <div className="info-popular">2k views  .  8 month ago</div>
                                </div>
                            </Link>
                            <Link to={'/watch/25'} className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid" alt="pic2" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">2k views  .  8 month ago</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
