import * as React from 'react';
import pnp from 'sp-pnp-js';
import { SearchResults } from 'sp-pnp-js/lib/sharepoint/search';
export default class Dokumenty extends React.Component<{},{}>{
    
    state = {
        dokumenty: [],
        search: []
    }

    getDocs = () => {
        pnp.sp.web.lists.getByTitle('Documents').items.get()
            .then( res => this.setState({dokumenty:res}))            
    };

    search = () =>{
        pnp.sp.search("Home")
            .then( (r: SearchResults) => this.setState({search:r}))
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
<table>
    {this.state.search.map( search => <tr><td> {search.Title} </td></tr>)}
</table>
</div>
        );
    }
}

