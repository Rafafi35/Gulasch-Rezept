import "./mvp.css";
import './GoulaschRezept.css';
import hintergrundvideo from "./assets/hintergrund-video.mp4";
import bild from "./assets/kochbild.png";
import {useState} from "react";

function GoulaschRezept() {

    const [anzahlPortionen, setAnzahlPortionen] = useState(4)
    const changeAnzahlPortionen = (e) => {
        setAnzahlPortionen(e.target.value);
    }

    //Mengen als Variabeln
    let oelMenge = 1
    let fettMenge = 1
    let zwiebelMenge = 50
    let fleischMenge = 150
    let paprikaMenge = 50
    let kartoffelMenge = 75
    let karottenMenge = 100
    let sellerieMenge = 75
    let kohlrabiMenge = 30
    let paprikaPulverMenge = 1
    let kuminPulverMenge = 2


    return (
        <div className="total">
            <div className="bg-video-container">
                <div className="titel">
                    <h1>Gulasch Rezept</h1>
                </div>
                    <video playsInline autoPlay loop muted>
                        <source src={hintergrundvideo} />
                    </video>
            </div>

            <div className="content">
                <div className="anzahlPortionen">
                    <label htmlFor="anzahlPortionen">Anzahl Portionen:</label>
                    <input type="number"
                           name="anzahlPortionen"
                           id="anzahlPortionen"
                           max="100"
                           min="1"
                           value={anzahlPortionen}
                           onChange={changeAnzahlPortionen}
                    />
                </div>

                <div className={"info-section"}>
                    <div className="box">
                        <h2>Zutaten</h2>
                        <ul>
                            <li>{anzahlPortionen * fettMenge} EL Schweine Fett / {anzahlPortionen * oelMenge} EL Öl</li>
                            <li>{anzahlPortionen * zwiebelMenge}g rote Zwiebeln</li>
                            <li>{anzahlPortionen * fleischMenge}g Rindsragout</li>
                            <li>{anzahlPortionen * paprikaMenge}g rote Paprika</li>
                            <li>{anzahlPortionen * paprikaMenge}g weisse Paprika</li>
                            <li>{anzahlPortionen * kartoffelMenge}g Kartoffeln</li>
                            <li>{anzahlPortionen * karottenMenge}g Karotten</li>
                            <li>{anzahlPortionen * sellerieMenge}g Sellerie</li>
                            <li>{anzahlPortionen * kohlrabiMenge}g Kohlrabi</li>
                            <li>{anzahlPortionen * paprikaPulverMenge} EL Paprika Pulver süss</li>
                            <li>{anzahlPortionen * kuminPulverMenge} TL Kuminpulver</li>
                        </ul>
                    </div>
                </div>

                <h1>Nährwerte pro Portion (...g)</h1>

                <div className="nährwerte">

                    <table>
                        <tbody>
                        <tr>
                            <td>Kalorien</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Fett</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>davon gesättigte Fettsäuren</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Kohlenhydrathe</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>davon Zucker</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Proteine</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Salz</td>
                            <td>100</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="steps">
                    <h1>Schritt für Schritt Anleitung</h1>
                    <div className="step">
                        <div className="step-left">
                            <img src={bild}/>
                        </div>

                        <div className="step-right">
                            <h3>Schritt 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-left">
                            <h3>Schritt 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>

                        <div className="step-right">
                            <img src={bild}/>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-left">
                            <img src={bild}/>
                        </div>

                        <div className="step-right">
                            <h3>Schritt 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-left">
                            <h3>Schritt 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>

                        <div className="step-right">
                            <img src={bild}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoulaschRezept;
