import './pagesstaticstyle.scss';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import faqImg from '../assets/faq.svg';
import { Accordion } from 'react-bootstrap';
import { useEffect } from 'react';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import {
  quesOne,
  quesTwo,
  quesThree,
  quesFour,
  quesFive,
  ansOne,
  ansTwo,
  ansThree,
  ansFour,
  ansFive,
} from '../components/utilities/StaticPagesText';

const FAskedQuestion = () => {
  useEffect(() => {
    document.title = 'Cypher Store | FAQ';
  }, []);

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <>
          <SharedPages text="Frequently Asked Questions" />
          <div className="myContainer faQuestions">
            <div className="faqImg">
              <img src={faqImg} alt="faqImage" />
            </div>
            <div className="questions">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{quesOne}</Accordion.Header>
                  <Accordion.Body>{ansOne}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{quesTwo}</Accordion.Header>
                  <Accordion.Body>{ansTwo}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{quesThree}</Accordion.Header>
                  <Accordion.Body>{ansThree}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>{quesFour}</Accordion.Header>
                  <Accordion.Body>{ansFour}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>{quesFive}</Accordion.Header>
                  <Accordion.Body>{ansFive}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default FAskedQuestion;
