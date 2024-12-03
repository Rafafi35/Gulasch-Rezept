import './GoulaschRezept.css';
import hintergrundvideo from "./assets/hintergrund-video.mp4";

function GoulaschRezept() {
    return (
        <div className="total">
            <div className="titel">
            <h1>Gulasch Rezept</h1>
            </div>
            <div className="bg-video">
                <video playsInline autoPlay loop muted>
                    <source src={hintergrundvideo}/>
                </video>
            </div>

            <div className="container">

            <div className="info-section">
                <div className="zutaten">
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
                <div className="kuechenwerkzeug">
                    <h2>Benötigtes Küchenwerkzeug</h2>
                    <ul>
                        <li>Werkzeug 1</li>
                        <li>Werkzeug 2</li>
                        <li>Werkzeug 3</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>

            <div className="steps">
                <div className="step">
                    <div className="step-image">
                        <p>(Bild für Schritt 1)</p>
                    </div>
                    <div className="step-text">
                        <h3>Schritt 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <p>(Bild für Schritt 2)</p>
                    </div>
                    <div className="step-text">
                        <h3>Schritt 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <p>(Bild für Schritt 3)</p>
                    </div>
                    <div className="step-text">
                        <h3>Schritt 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <p>(Bild für Schritt 4)</p>
                    </div>
                    <div className="step-text">
                        <h3>Schritt 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div></div>
        </div>
    );
}

export default GoulaschRezept;
