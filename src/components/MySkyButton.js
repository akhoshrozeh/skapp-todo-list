import React from 'react';
import {
    Button, 
    Dimmer, Segment, Label, Grid
} from 'semantic-ui-react';
import { SkynetClient } from "skynet-js";
import 'semantic-ui-css/semantic.min.css';


const dataDomain = 'localhost';

function MySkyButton(props) {

    return (
        <div>
           <Segment>
            <Grid>
                <Grid.Column textAlign="center">

                    {props.loggedIn === true && (
                    <Button color="green" onClick={props.handleMySkyLogout}>
                        Log Out of MySky
                    </Button>
                    )}

                    {props.loggedIn === false && (
                    <Button className="buttin-out" onClick={props.handleMySkyLogin}>
                        Login with MySky
                    </Button>
                    )}

                    {props.loggedIn === null && <Button>Loading MySky...</Button>}

                </Grid.Column>
            </Grid>
           </Segment>
        </div>
    )
}


export default MySkyButton;