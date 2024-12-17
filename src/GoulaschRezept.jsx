import "./mvp.css";
import './GoulaschRezept.css';
import hintergrundvideo from "./assets/hintergrund-video.mp4";
import bild from "./assets/kochbild.png";

function GoulaschRezept() {

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
                    <input type="number" name="anzahlPortionen" id="anzahlPortionen" max="100" min="1"
                           defaultValue="4"/>
                </div>


                <div className="info-section">
                    <div className="box">
                        <h2>Zutaten</h2>
                        <ul>
                            <li>Zutat 1</li>
                            <li>Zutat 2</li>
                            <li>Zutat 3</li>
                            <li>Zutat 4</li>
                            <li>Zutat 5</li>
                            <li>Zutat 6</li>
                            <li>...</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Benötigtes Küchenwerkzeug</h2>
                        <ul>
                            <li>Werkzeug 1</li>
                            <li>Werkzeug 2</li>
                            <li>Werkzeug 3</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>

                <h1>Nährwerte pro Portion (...g)</h1>

                <div className="nährwerte">

                    <table>
                        <tr>
                            <td>Kalorien</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Fett</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>davon gesättigte Fettsäuren</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Kohlenhydrathe</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>davon Zucker</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Proteine</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Salz</td>
                            <td>100</td>
                        </tr>
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
