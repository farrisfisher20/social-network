import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <HashRouter>
            <div className="welcomeContainer">
                <header>
                    <nav>
                        <img
                            id="logo"
                            src="./sesame_logo_white.png"
                            alt="sesame logo"
                        />
                        <div className="headerLinks">
                            <Link to="/login">Sign in</Link>
                            /
                            <Link to="/">Register</Link>
                        </div>
                    </nav>
                </header>
                <section>
                    <div className="centerHolder">
                        <div className="greetings">
                            <h1>
                                <span className="slide-in-blurred-top">
                                    Welcome
                                </span>{" "}
                                <span className="slide-in-blurred-top2">
                                    to
                                </span>{" "}
                                <span className="flicker-in-1">
                                    SesameBook!
                                </span>
                            </h1>
                            <h2 className="fade-in">
                                A place to stay in touch...
                            </h2>
                            <p className="fade-in2">...and worship...</p>
                        </div>
                        <div className="formHolder">
                            <div>
                                <Route
                                    exact
                                    path="/"
                                    component={Registration}
                                />
                                <Route path="/login" component={Login} />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footerCenterHolder">
                        <img
                            id="logo"
                            src="./sesame_logo.png"
                            alt="sesame logo"
                        />
                        <p>SesameBook &copy;</p>
                    </div>
                </footer>
            </div>
        </HashRouter>
    );
}

// class Hello extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Sesame"
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <h1> HEY! WELCOME {this.state.name} </h1>
//                 <Greetee name={this.state.name} />
//             </div>
//         );
//     }
// }
//
// function Greetee(props) {
//     console.log(props);
//     return <p>Hi! This cohort is {props.name}.</p>;
// }
