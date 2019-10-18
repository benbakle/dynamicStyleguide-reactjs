import React from 'react';
import StyleAdd from './StyleAdd';
import '../assets/css/components/template.scss';

export default class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    setSelector = (selector) => {
        this.setState({ selected: selector });
    }

    render() {
        const { selected } = this.state;
        const { setSelector } = this;

        return (
            <div className="template body">
                <StyleAdd type="vanilla" selector={selected} />
                <div className="video-banner">
                    <video autoPlay loop>
                        <source src="https://storage.googleapis.com/coverr-main/mp4/Clouds_Fly_By.mp4" />
                    </video>
                    <div className="navigation">
                        <a href="#">Home</a>
                        <a href="#">Retail</a>
                        <a href="#">Events</a>
                        <a href="#">Blog</a>
                        <a href="#">About Us</a>
                    </div>
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="heading heading1" onClick={() => { setSelector(".heading.heading1") }}>Discover your world</div>
                            <p onClick={() => { setSelector("p, .p") }} >Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                            <br />
                            <div className="button-wrapper">
                                <button className="button large" onClick={() => { setSelector(".button.large") }}>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="mask"></div>
                </div>
                <div className="swim-lane">
                    <div className="flex">

                        <div className="left">
                            <div className="icon dark">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <div className="heading heading3">We have pie chart icons!</div>
                                <p>Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                                <button className="button">
                                    <span>Check out our angle right icon&nbsp;&nbsp;</span>
                                    <i className="fas fa-angle-right"> </i>
                                    <i className="fas fa-angle-right"> </i>
                                    <i className="fas fa-angle-right"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
