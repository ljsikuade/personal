import React from "react";
import styles from "../styles/App.scss";
import Projects from "./Projects";
import otone from "../../static/images/otshow.png";
import fledgeone from "../../static/images/fledgeone.png";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showProjectList: true,
      hideProjects: true,
      showOpenTab: false,
      showMovie: false,
      showFledge: false
    };
    this.showFledge = this.showFledge.bind(this);
    this.showOpenTab = this.showOpenTab.bind(this);
    this.showGuessTheMovie = this.showGuessTheMovie.bind(this);
    this.backToProjects = this.backToProjects.bind(this);
  }

  showFledge() {
    this.setState({
      showProjectList: false,
      showFledge: true,
      showMovie: false,
      showOpenTab: false
    });
  }
  showOpenTab() {
    this.setState({
      showProjectList: false,
      showFledge: false,
      showMovie: false,
      showOpenTab: true
    });
  }
  showGuessTheMovie() {
    this.setState({
      showProjectList: false,
      showFledge: false,
      showMovie: true,
      showOpenTab: false
    });
  }

  backToProjects() {
    this.setState({
      showProjectList: true,
      showFledge: false,
      showMovie: false,
      showOpenTab: false
    });
  }

  render() {
    return (
      <main>
        <section className="content">
          <CSSTransition
            in={this.state.hideProjects}
            timeout={700}
            classNames="slide"
            unmountOnExit
          >
            <section className="behind">
              <section className="tagline">
                <span className="tag-container">
                  <p className="tag">Hi, I'm Luke.</p>
                  <p className="tag">And I build websites.</p>
                  <button
                    onClick={() => {
                      console.log("clicked");
                      this.setState({ hideProjects: false });
                    }}
                    className="up-button"
                  />
                </span>
              </section>
            </section>
          </CSSTransition>

          <section className="projects">
            {this.state.showFledge && (
              <span className="about-proj">
                <div className="proj-info">
                  <h2>A simple way to flag beginner friendly repositories.</h2>
                  <p>
                    I wanted to make it easier for people who were new to github
                    to contribute. The idea is for repository owners to list
                    specific jobs suitable for beginners that will acquaint them
                    with the codebase.
                  </p>
                  <h2>Technologies Used:</h2>
                  <ul>
                    <li>React</li>
                    <li>SCSS</li>
                    <li>NodeJS - With Nodemailer (currently transitioning)</li>
                    <li>
                      OAuth2 - For repository owners to configure their listing.
                    </li>
                    <li>
                      MySQL - To back up the OAuth capability with protection
                      against cross-site request forgery attacks.
                    </li>
                  </ul>
                  <button
                    className="live-button"
                    onClick={() =>
                      (window.location.href =
                        "https://fledge-app.herokuapp.com")
                    }
                  >
                    See it live
                  </button>
                </div>
                <div className="triangle-left" />
                <div className="triangle-left" />
                <div className="triangle-left" />
                <button className="back" onClick={this.backToProjects} />

                <img className="fledgeimage" src={fledgeone} />
              </span>
            )}
            {this.state.showOpenTab && (
              <span className="about-proj">
                <div className="proj-info">
                  <h2>A PWA for settling debts with friends.</h2>
                  <p>
                    This was a two-week long group project. We worked well
                    together under agile conditions: daily standups, kanban
                    boards and story points. I focused on both the front and
                    back end portions of this, writing endpoints in Node and
                    creating Redux containers that would feed data into our
                    presentational components. We used Socket.io for this
                    project, and I was able to expand my own personal
                    understanding of the technology in my next project: Guess
                    The Movie.
                  </p>
                  <h2>Technologies Used:</h2>
                  <ul>
                    <li>React with Redux</li>
                    <li>SCSS</li>
                    <li>NodeJS</li>
                    <li>BCrypt - For password encryption.</li>
                    <li>Socket.io - For realtime transactions.</li>
                    <li>Postgres</li>
                    <li>Jest - For testing.</li>
                  </ul>
                  <button
                    className="live-button"
                    onClick={() =>
                      (window.location.href =
                        "http://team-open-tab.herokuapp.com")
                    }
                  >
                    See it live
                  </button>
                </div>
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <img className="otimage" src={otone} />
                <button className="back" onClick={this.backToProjects} />
              </span>
            )}

            {this.state.showMovie && (
              <span className="about-proj">
                <div className="proj-info">
                  <h2>A fun, realtime, multiplayer quiz game.</h2>
                  <p>
                    Inspired by an experimental group project, I decided to
                    learn more about Socket.io, and used this work as the basis
                    for that. Plot synopses are taken from an API and filtered
                    for direct spoilers (i.e. titles) and presented to the user
                    on a round-by-round basis. To keep things synchronised
                    required a lot of work on the back-end, and a lot of object
                    traversal and data processing. I would like to add a
                    database in the near future and host the project on a live
                    server.
                  </p>
                  <h2>Technologies Used:</h2>
                  <ul>
                    <li>React</li>
                    <li>SCSS</li>
                    <li>PoseJS</li>
                    <li>NodeJS</li>
                    <li>Socket.io</li>
                  </ul>
                  <button
                    className="live-button"
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/ljsikuade/Guess-the-Movie")
                    }
                  >
                    See it on Github
                  </button>
                </div>
                <div className="triangle-topright" />
                <div className="triangle-topright" />
                <div className="triangle-topright" />
                <span className="guessimage-positioner">
                  <div className="guessimage">
                    <span className="stamp">WORK IN PROGRESS</span>
                  </div>
                </span>

                <button className="back" onClick={this.backToProjects} />
              </span>
            )}

            {this.state.showProjectList && (
              <ul className="proj-list">
                <li id="proj-fledge">
                  <span className="figcap" onClick={this.showFledge}>
                    <h2>Fledge</h2>
                    <h4>
                      Helping beginner-coders contribute to Github repositories.
                    </h4>
                    <p className="mycap" />
                  </span>
                </li>

                <li id="proj-opentab">
                  <span className="figcap" onClick={this.showOpenTab}>
                    <h2>OpenTab</h2>

                    <h4>Balancing debts with friends.</h4>

                    <p className="mycap" />
                  </span>
                </li>

                <li id="proj-movie">
                  <span className="figcap" onClick={this.showGuessTheMovie}>
                    <h2>Guess The Movie</h2>

                    <h4 id="film-override">
                      Guessing film titles from synopses under timed conditions.
                    </h4>

                    <p className="mycap" />
                  </span>
                </li>
              </ul>
            )}
          </section>

          <CSSTransition
            in={this.state.hideProjects}
            timeout={400}
            classNames="cut-down"
          >
            <section className="cut-in">
              <CSSTransition
                in={this.state.hideProjects}
                timeout={400}
                classNames="rise-up"
              >
                <span className="cut-in-details">
                  <span className="desc">
                    <a href="https://github.com/ljsikuade" target="_blank">
                      <i id="git" class="fab fa-github" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/luke-sikuade/"
                      target="_blank"
                    >
                      <i id="linked" class="fab fa-linkedin" />
                    </a>
                  </span>
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1n1XgXYTVBrotqhfCOHu4SDLCM3PO7m-hAHJ27JRC_QI/edit?usp=sharing"
                    className="cv-button"
                  >
                    CV
                  </a>
                </span>
              </CSSTransition>
            </section>
          </CSSTransition>
        </section>
      </main>
    );
  }
}
export default App;
