import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Loading = () =>{
    return(
        <div>
            <Segment>
                <Dimmer active inverted>
                    <Loader size="small">
                        Loading
                    </Loader>
                </Dimmer>
            </Segment>
        </div>
    )
    
}
export default Loading;