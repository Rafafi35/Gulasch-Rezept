import "./mvp.css";
import './GoulaschRezept.css';
import hintergrundvideo from "./assets/vorschau1.mp4";
import bild1 from "./assets/bild1.jpg";
import bild2 from "./assets/bild2.jpg";
import bild3 from "./assets/bild3.jpg";
import bild4 from "./assets/bild4.jpg";
import bild5 from "./assets/bild5.jpg";
import bild6 from "./assets/bild6.jpg";
import arrow from "./assets/arrow.png";
import {useState} from "react";

function GoulaschRezept() {

    const [anzahlPortionen, setAnzahlPortionen] = useState(4)
    const changeAnzahlPortionen = (e) => {
        setAnzahlPortionen(e.target.value);
    }

    //Mengen als Variabeln
    let oelMenge = 2
    let fettMenge = 1
    let zwiebelMenge = 50
    let fleischMenge = 150
    let paprikaMenge = 50
    let kartoffelMenge = 75
    let karottenMenge = 75
    let sellerieMenge = 75
    let kohlrabiMenge = 30
    let paprikaPulverMenge = 1
    let kuemmelPulverMenge = 2


    return (
        <div className="total">
            <div className="bg-video-container">
                <div className="bg-video">
                    <video playsInline autoPlay loop muted>
                        <source src={hintergrundvideo}/>
                    </video>
                </div>

                <div className="arrow">
                    <img src={arrow}/>
                </div>
            </div>

            <div className="content">
                <h1>Gulasch Rezept</h1>
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

                <div className={"zutaten-parent"}>
                    <div className="zutaten-child">
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
                            <li>{anzahlPortionen * kuemmelPulverMenge} TL Kümmelpulver</li>
                        </ul>
                    </div>
                </div>

                <h1>Nährwerte pro Portion</h1>

                <div className="nährwerte">

                    <table>
                        <tbody>
                        <tr>
                            <td>Kcal</td>
                            <td>512</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Fett</td>
                            <td>23.5g</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>davon gesättigte Fettsäuren</td>
                            <td>4.6g</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Kohlenhydrathe</td>
                            <td>34g</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>davon Ballaststoffe</td>
                            <td>10.9g</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>davon Zucker</td>
                            <td>18.4g</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Proteine</td>
                            <td>35.7g</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h1>Schritt für Schritt Anleitung</h1>
                <div className="steps-parent">

                    <div className="steps-child">
                        <div className="step-element-left">
                            <img src={bild1}/>
                        </div>

                        <div className="step-element-right">
                            <h3>Schritt 1</h3>
                            <p>Fleisch, Kartoffeln, Karotten, Kohlrabi, Sellerie, rote/weisse Paprika und rote
                                Zwiebeln klein schneiden. Gewürze bereitstellen.

                            </p>
                        </div>
                    </div>

                    <div className="steps-child">
                        <div className="step-element-left">
                            <h3>Schritt 2</h3>
                            <p>Fett oder Öl in einen Topf geben. Sobald das Fett/Öl heiss ist Zwiebeln hinzufügen
                                und goldbraun anbraten.
                            </p>
                        </div>

                        <div className="step-element-right">
                            <img src={bild2}/>
                        </div>
                    </div>

                    <div className="steps-child">
                        <div className="step-element-left">
                            <img src={bild3}/>
                        </div>

                        <div className="step-element-right">
                            <h3>Schritt 3</h3>
                            <p>Fleisch hinzugeben und anbraten.</p>
                        </div>
                    </div>

                    <div className="steps-child">
                        <div className="step-element-left">
                            <h3>Schritt 4</h3>
                            <p>Rote und Weisse Paprika hinzugeben. Paprika Pulver und Kümmelpulver hinzugeben.
                                und untermischen. 20 - 30 Minuten auf niedrig bis mittelen Stufe köcheln lassen,
                                zwischendurch gut umrühren. Wenn nötig Wasser hinzufügen.
                            </p>
                        </div>

                        <div className="step-element-right">
                            <img src={bild4}/>
                        </div>
                    </div>

                    <div className="steps-child">
                        <div className="step-element-left">
                            <img src={bild5}/>
                        </div>

                        <div className="step-element-right">
                            <h3>Schritt 5</h3>
                            <p>Karotten, Sellerie, Kohlrabi beigeben. Wasser hinzugeben. 1 bis 1.5 Stunden
                                kochen lassen, währenddessen immer wieder umrühren und verdunstetes Wasser
                                nachfüllen.
                            </p>
                        </div>
                    </div>

                    <div className="steps-child">
                        <div className="step-element-left">
                            <h3>Schritt 6</h3>
                            <p>Kartoffeln hinzugeben und weitere 40 Minuten kochen lassen. Wenn nötig Wasser
                                hinzufügen. Mit Salz und Pfeffer abschmecken.
                                <br/> Guten Appetit!
                            </p>
                        </div>

                        <div className="step-element-right">
                            <img src={bild6}/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer">
                <p>Rafael Salinger</p>

            </div>

        </div>
    );
}

export default GoulaschRezept;
