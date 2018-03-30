import * as React from 'react';
import pnp from 'sp-pnp-js';
export default class Dokumenty extends React.Component<{},{}>{
    
    state = {
        dokumenty: []
    }

    getDocs = () => {
        pnp.sp.web.lists.getByTitle('Documents').items.get()
            .then( res => this.setState({dokumenty:res}))            
    };

    search = () =>{

    };





render():JSX.Element{

        return(
<div>
    Helllo from Typescript + React!<br/>
    <button onClick={this.getDocs}>Gete data from list!</button><br/>
    <button onClick={this.search}>Search</button>

<table>
    {this.state.dokumenty.map( dok => <tr><td> {dok.Title} </td></tr>)}
</table>
</div>
        );
    }
}

