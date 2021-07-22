import React from "react";
import Header from './header/Header'
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
        </div>
    );
}

export default App;
