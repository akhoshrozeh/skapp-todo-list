import React from 'react';
import {
    Button, 
    Dimmer, Segment
} from 'semantic-ui-react';
import { SkynetClient } from "skynet-js";

const dataDomain = 'localhost';

function MySkyButton(props) {

    return (
        <div>
           {/* <button onClick={() => {
               handleMySkyClick(props);
           }}>button comp</button>  */}
           <Segment>
            {props.loggedIn === true && (
                <Button color="vk" onClick={props.handleMySkyLogout}>
                    Log Out of MySky
                </Button>
                )}
                {props.loggedIn === false && (
                <Button color="green" onClick={props.handleMySkyLogin}>
                    Login with MySky
                </Button>
                )}
                {props.loggedIn === null && <Button>Loading MySky...</Button>}
           </Segment>
        </div>
    )
}


export default MySkyButton;