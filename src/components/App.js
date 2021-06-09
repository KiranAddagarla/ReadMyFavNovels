import React from "react";
import { ApplicationProvider } from "../context/ApplicationContext";
import Navigator from '../components/Navigator';


const App = () => {
    return(
    <ApplicationProvider>
        <div>
            <Navigator />
            
        </div>
    </ApplicationProvider>
    );
}

export default App;