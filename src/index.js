import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { FaAlignRight } from 'react-icons/fa'
import Section from "./components/app";
import dummyText from "../DummyText";
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render() {
        return (
            <div>
                <div className="navBar">
                    <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <li className='nav-item'>

                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                Home</Link></li>
                    <li className='nav-item'>
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >
                            About us</Link></li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                Contact</Link></li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                Hello</Link></li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                zest</Link></li>
                    </ul>
                </div>

                <Section
                    title="Section 1"
                    subtitle={dummyText}
                    dark={true}
                    id="section1"
                />
                <Section
                    title="Section 2"
                    subtitle={dummyText}
                    dark={false}
                    id="section2"
                />
                <Section
                    title="Section 3"
                    subtitle={dummyText}
                    dark={true}
                    id="section3"
                />
                <Section
                    title="Section 4"
                    subtitle={dummyText}
                    dark={false}
                    id="section4"
                />
                <Section
                    title="Section 5"
                    subtitle={dummyText}
                    dark={true}
                    id="section5"
                />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.nav-special'));