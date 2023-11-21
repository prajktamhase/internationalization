import React, { useState } from "react";
import "./Home.css"
import I18n from "./../../utils/I18n"
function Home() {

    const users = 20;

    return (<>
        <h1 className="center">Internationalization (I18n)</h1>
        <div className="container">
            <h3>1: {I18n("morninng")}</h3>

            <h3>2: {I18n("welcomemsg")} </h3>

            <h3>3: {I18n("learningmsg")}</h3>

            <h3>4: {I18n("greetingmsg")}</h3>

            <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}
                className="text-container">
                <option value="en">English</option>
                <option value="hin">Hindi</option>
                <option value="mr">Marathi</option>
            </select>

            <p>{I18n("sessionmsg", "<studentCount>", users)}</p>
        </div>
    </>
    )
}

export default Home;