// import Java from '../skill icons/java.svg';

import React, {useEffect, useContext} from 'react';
import {useTrail, config} from 'react-spring';
import {animated} from 'react-spring';
import {ga} from '../firebase';
import Navbar from './Navbar';
import {updatePage, updatePageTime} from '../firestore';
import {CountContext} from '../App';
import moment from 'moment';

function Skills({id}) {
  const entryTime = moment();

  useEffect(() => {
    document.title = 'Sridhar Nallasamy 😊 • 👨🏻‍💻';
    ga.logEvent('Skills Page');
    console.log('Skills Page');
  }, []);

  const [count, setCount] = useContext(CountContext);

  useEffect(() => {
    if (id !== '') {
      setCount((prevCount) => prevCount + 1);
      updatePage(id, count + '. skills page');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    return () => {
      const exitTime = moment();
      if (id !== '') {
        updatePageTime(entryTime, exitTime, id, count + '. skills page');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const [trail, set] = useTrail(2, () => ({
    transform: 'translate3d(0, 30px, 0)',
    opacity: 0,
    config: config.wobbly,
  }));
  set({transform: 'translate3d(0, 0px, 0)', opacity: 1});
  return (
    <>
      <Navbar show="yes" />
      <div className="Skills">
        <animated.div className="Text" style={trail[0]}>
          <h2>As of now.</h2>
        </animated.div>
        <animated.div className="Container" style={trail[1]}>
          {/* <animated.div className="Card" style={trail[0]}>
          <div className="Circle">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="Percent">
              <h2>82%</h2>
              <img src={Java} alt="java" width="50px" />
            </div>
          </div>
        </animated.div> */}

          <ul>
            <li className="java">Java</li>
            <li className="spring">Spring Framework</li>
            <li className="htmlcss">HTML & CSS</li>
            <li className="react">React Js</li>
            <li className="sass">SASS</li>
          </ul>
        </animated.div>
      </div>
    </>
  );
}

export default Skills;
