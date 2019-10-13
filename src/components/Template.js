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
                <StyleAdd selector={selected} />
                <div className="banner">
                    <div className="flex">
                        <div className="left">
                            <div className="heading heading1" onClick={() => { setSelector(".heading.heading1") }}>Create A Better Webpage!</div>
                        </div>
                        <div className="right">
                            <p onClick={() => { setSelector("p, .p") }} >Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                            <br />
                            <div className="button-wrapper">
                                <button className="button large" onClick={() => { setSelector(".button.large") }}>Show Me</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="swim-lane dark">
                    <div className="flex">
                        <div className="left">
                            <div className="icon dark">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <div className="heading heading2 dark">We have pie chart icons!</div>
                                <p className="dark">Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                <p className="dark">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                                <br />
                                <div className="button-wrapper">
                                    <button className="button dark">
                                        <span>Learn about all the things </span>
                                        <i className="fas fa-angle-right"> </i>
                                        <i className="fas fa-angle-right"> </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
