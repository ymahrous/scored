import './Home.css';
import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
export default function Home() {
    const [highest, setHighest] = useState('');
    const [lowest, setLowest] = useState('');
    const [highSchool, setHighSchool] = useState('');
    const [highestUni, setHighestUni] = useState('');
    const [lowestUni, setLowestUni] = useState('');
    const [firstUni, setFirstUni] = useState('');
    const calcGermanScore = () => {
        const HScore = (((highest-highSchool)/(highest-lowest))*3)+1;
        const UniScore = (((highestUni-firstUni)/(highestUni-lowestUni))*3)+1;
        const msg = document.querySelector('h2');
        const globalScore = (HScore+UniScore)/2;
        
        if(highest === '' || lowest === '') {
            msg.innerHTML = 'you must provide values for both Highest Possible Score and Lowest Succeed Score';
        } else if(highSchool === '') {
            msg.innerHTML = 'you must provide a value for High School Score';
        } else if(firstUni === '') {
            if(HScore>4) {
                return msg.innerHTML = 'Your German Score is 5';
            }
            if(HScore<1) {
                return msg.innerHTML = 'invalid High School Score';
            }
            msg.innerHTML = 'Your German Score is ' + HScore;
        } else if(highestUni === '' || lowestUni === '') {
            msg.innerHTML = 'you must provide values for both Highest Possible Score and Lowest Succeed Score';
        } else {
            if(HScore>4) {
                return msg.innerHTML = 'Your German Score is 5';
            }
            if(HScore<1) {
                return msg.innerHTML = 'invalid High School Score';
            }
            if(UniScore>4) {
                return msg.innerHTML = 'Your German Score is 5';
            }
            if(UniScore<1) {
                return msg.innerHTML = 'invalid University 1st Year Score';
            }
            msg.innerHTML = 'Your German Score is ' + globalScore;
        };
    };
    return  (
        <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="legend f2 fw6 ph0 mh0">high school</legend>
                        <div className="ui form mt4">
                            <div className="fields">
                                <div className="field">
                                    <label>highest possible score</label>
                                    <Input type="number" className='highest' onChange={e => setHighest(e.target.value)} />
                                </div>
                                <div className="field">
                                    <label>lowest passing score</label>
                                    <Input type="number" className='lowest' onChange={e => setLowest(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="ui form mt2">
                            <div className="fields">
                                <div className="field sixteen wide">
                                    <label>high school score</label>
                                    <Input type="number" onChange={e => setHighSchool(e.target.value)} />
                                </div>
                            </div>
                         </div>
                    </fieldset>
                    <br/><br/>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="legend f2 fw6 ph0 mh0">first uni year</legend>
                        <div className="ui form mt4">
                            <div className="fields">
                                <div className="field">
                                    <label>highest possible score</label>
                                    <Input type="number" className='highest' onChange={e => setHighestUni(e.target.value)} />
                                </div>
                                <div className="field">
                                    <label>lowest passing score</label>
                                    <Input type="number" className='lowest' onChange={e => setLowestUni(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="ui form mt2">
                            <div className="fields">
                                <div className="field sixteen wide">
                                    <label>first university year score</label>
                                    <Input type="number" onChange={e => setFirstUni(e.target.value)} />
                                </div>
                            </div>
                        </div> 
                        <div className="buton mt4">
                            <Button content='submit' primary onClick={calcGermanScore} />
                        </div>
                        <div className='buton mt4'>
                            <h2></h2>
                        </div>
                    </fieldset>
                </div>
            </main>
        </article>
    );
};