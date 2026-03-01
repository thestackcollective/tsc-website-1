import "./index.scss";

import BrianSayler from '../../assets/images/brian.png'
import OliviaWebster from '../../assets/images/olivia.jpg'
import RoryMagee from '../../assets/images/rory.jpg'
import AnthonyShellman from '../../assets/images/anthony.jpg'
import StevieAmbroise from '../../assets/images/stevie.png'
import CameronMackintosh from '../../assets/images/cameron.jpg'

export default function Board() { 
    return (
        <>
            <div className="container board-page">
                <div className="board">
                    <div className="professional-card">
                        <img src={BrianSayler} />
                        <h1 className="professional-title">Brian Sayler, President</h1>
                    </div>   
                     <div className="professional-card">
                        <img src={OliviaWebster} />
                        <h1 className="professional-title">Olivia Webster, Vice President</h1>
                    </div> 
                     <div className="professional-card">
                        <img src={RoryMagee} />
                        <h1 className="professional-title">Rory Magee, Treasurer & Chairman</h1>
                    </div>
                     <div className="professional-card">
                        <img src={AnthonyShellman} />
                        <h1 className="professional-title">Anthony Shellman, Developer</h1>
                    </div>
                     <div className="professional-card">
                        <img src={StevieAmbroise} />
                        <h1 className="professional-title">Stevie Ambroise, Developer</h1>
                    </div>
                     <div className="professional-card">
                        <img src={CameronMackintosh} />
                        <h1 className="professional-title">Cameron Mackintosh, Developer</h1>
                    </div>     
                </div>
            </div>
        </>
    );
}