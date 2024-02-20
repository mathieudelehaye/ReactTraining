import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

// console.log(AlexaImage)
// console.log(SiriImage)

function App() {
    return (
        <div>            
            <div>Personal Digital Assistants</div>
            <img src="https://picsum.photos/200/300" />

            <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99"/>
            <ProfileCard image={CortanaImage} title="Cortana" handle="@cortana32"/>
            <ProfileCard image={SiriImage} title ="Siri" handle="@siri01"/>
        </div>
    );
}
export default App;