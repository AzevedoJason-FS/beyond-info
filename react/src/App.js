import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { config } from "./constants";
import axios from "axios";
import { Tilt } from "react-tilt";
import "./style.scss";
import Logo from "./static/logo.png";
import Player1 from "./static/shy.png";
import Player2 from "./static/chovy.png";
import Player3 from "./static/faker.png";
import Player4 from "./static/caps.png";
import Ranks from "./static/ranks.png";
import VS from "./static/vsmode.png";
import VSRanks from "./static/vsranks.png";
import Homeview from "./static/homeview.png";
import Prematch from "./static/prematch.png";
import Prematch2 from "./static/prematch2.png";
import LNG from "./static/lng.png";
import Zika from "./static/zika.png";
import Tarzan from "./static/tarzan.png";
import Scout from "./static/scout.png";
import Gala from "./static/gala.png";
import Hang from "./static/hang.png";
import JDG from "./static/JDGlogo.png";
import JDGtop from "./static/369.png";
import Kanavi from "./static/kanavi.png";
import Knight from "./static/knight.png";
import Ruler from "./static/ruler.png";
import Missing from "./static/missing.png";
import G2 from "./static/g2.png";
import BB from "./static/bb.png";
import Yike from "./static/yike.png";
import Caps from "./static/caps2.png";
import Hans from "./static/hans.png";
import Miky from "./static/miky.png";
import Twitter from "./static/twitter-xxl-white.png";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1500, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 5000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const App = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState("");

  const url = config.url.API_URL;
  const urlGET = config.url.API_URL_GET;

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    axios.get(urlGET).then((response) => {
      setUsers(response.data);
      console.log(users)
    });
  }, []);

  const emailSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, { email }).then((response) => {
        toast.success(response.data, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    } catch (err) {
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <header>
        <div className="header-logo">
          <img src={Logo} id="logo" alt="Beyond Logo" />
          <h2 id="title">Beyond</h2>
        </div>
        <div id="counter">
          <h3
            style={{
              textDecoration: "underline",
              textDecorationColor: "#3273FA",
            }}
          >
            {users} fans ready to go Beyond
          </h3>
        </div>
      </header>
      <div className="intro">
        <h2 id="body-title">Beyond Fantasy</h2>
        <p id="sub-title">
          Free Collectable Card Game For Your Favorite League of Legends Stars
          Around the World
        </p>
        <p id="info-body">
          Take your League of Legends experience to the next level and
          strategically put together your dream team to take over the world
          ranks!
        </p>
        <button id="button">
          <a href="#how">Features</a>
        </button>
        <button id="button">
          <a href="#newsletter">Newsletter</a>
        </button>
      </div>
      <div className="player-cards">
        <h2 id="body-title"># Player Cards</h2>
        <p id="info-body">
          Check out some of our card designs you'll be using to build your
          super-teams! <br></br>
          Collect all limited edition cards and create unlimited strategies
          where your knowledge of the Esports scene will earn you an upper hand
          over your opponents!
        </p>
        <h2 style={{ marginTop: "4rem" }}>Hover over the cards!</h2>
        <div className="cards">
          <Tilt
            options={defaultOptions}
            style={{ height: 420, width: 260 }}
            className="tilt-card"
          >
            <img src={Player1} id="player-card" alt="Player Card Design" />
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: 420, width: 260 }}
            className="tilt-card"
          >
            <img src={Player2} id="player-card" alt="Player Card Design" />
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: 420, width: 260 }}
            className="tilt-card"
          >
            <img src={Player3} id="player-card" alt="Player Card Design" />
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: 420, width: 260 }}
            className="tilt-card"
          >
            <img src={Player4} id="player-card" alt="Player Card Design" />
          </Tilt>
        </div>
        <h3>Many more designs coming soon!</h3>
      </div>
      <div className="how-it-works" id="how">
        <h2 id="body-title"># Features</h2>
        <h2>Fantasy Leagues</h2>
        <p id="info-body">
          Strategically build your team at the end of each day and compete in
          split-long leagues where you can fight for a spot at the 'Worlds
          League' which takes place during the Worlds Championship!
        </p>
        <img src={Ranks} id="ranks" alt="Player Card Design" />
        <div className="how-it-works">
          <h2>Dashboard</h2>
          <p id="info-body">
            While on the Dashboard, you'll have access to a large number of
            features including the Leaderboard, Squad Builder and various other
            analysis tools.
          </p>
          <img src={Homeview} id="ranks" alt="Player Card Design" />
        </div>
        <div className="how-it-works">
          <h2>Pre-Match Analysis</h2>
          <p id="info-body">
            Take the opportunity to dive deep into each matchup and player stats
            before locking in your super team
          </p>
          <img src={Prematch} id="ranks" alt="Player Card Design" />
          <img src={Prematch2} id="ranks" alt="Player Card Design" />
        </div>
      </div>
      <div className="how-it-works" id="how">
        <h2>VS Mode</h2>
        <p id="info-body">
          If you miss the start of the split and don't want to start halfway;
          You can compete against others in our 'VS Mode' and grind through the
          ranks to reach #1!
        </p>
        <p id="info-sub-body">
          Level up your player cards each time you play and take advantage of
          their collection perks to climb the ranks!
        </p>
        <img src={VSRanks} id="ranks" alt="Player Card Design" />
        <img src={VS} id="ranks" alt="Player Card Design" />
      </div>
      <div className="intro">
        <h2 id="body-title"># Collect Them All</h2>
        <p id="sub-title">
          Claim each limited collection from the store and show off your rare
          cards while taking over the world rankings!
        </p>
        <div className="cards-show">
          <div className="row">
            <img src={LNG} id="team-background" alt="Team Logo Design" />
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Zika} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img
                src={Tarzan}
                id="player-card-show"
                alt="Player Card Design"
              />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Scout} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Gala} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Hang} id="player-card-show" alt="Player Card Design" />
            </Tilt>
          </div>
          <div className="row">
            <img src={JDG} id="team-background" alt="Team Logo Design" />
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img
                src={JDGtop}
                id="player-card-show"
                alt="Player Card Design"
              />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img
                src={Kanavi}
                id="player-card-show"
                alt="Player Card Design"
              />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img
                src={Knight}
                id="player-card-show"
                alt="Player Card Design"
              />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Ruler} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img
                src={Missing}
                id="player-card-show"
                alt="Player Card Design"
              />
            </Tilt>
          </div>
          <div className="row">
            <img src={G2} id="team-background" alt="Team Logo Design" />
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={BB} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Yike} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Caps} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Hans} id="player-card-show" alt="Player Card Design" />
            </Tilt>
            <Tilt
              options={defaultOptions}
              style={{ height: 259, width: 160 }}
              className="tilt-card"
            >
              <img src={Miky} id="player-card-show" alt="Player Card Design" />
            </Tilt>
          </div>
          <h3>And +200 other cards and designs!!</h3>
        </div>
      </div>
      <footer id="newsletter">
        <div className="footer-leftbox">
          <p id="footer-title">STAY UP TO DATE</p>
          <h2 id="footer-subtitle">
            Notify<br></br>Release
          </h2>
          <div className="input-button">
            <form onSubmit={emailSignup}>
              <input placeholder="Your email" onChange={handleInputChange} />
              <button id="button2">Send</button>
            </form>
          </div>
        </div>

        <div className="footer-rightbox">
          <p id="footer-title">GET IN TOUCH, QUESTIONS?</p>
          <h2 id="footer-subtitle2">hello@beyondleagues.com</h2>
          <a href="https://twitter.com/beyond_card">
            <img src={Twitter} alt="Beyond Twitter" id="twitter-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
