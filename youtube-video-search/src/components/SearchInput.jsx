import React, { Component } from "react";
import axios from 'axios';

class SearchInput extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: '',
        };

        //this.onFormSubmit = this.onFormSubmit.bind(this); 
        // при потере контекста используется либо bind, либо стрелочная 
        // функция (берет this у родителя)
    }

    onFormSubmit = (event) => { // стрелочная функция туть!
        event.preventDefault();
        //console.log(this.state.inputValue);
        axios.get('https://www.googleapis.com/youtube/v3/search');
    }

    render() { 
        return (
            <div>
                {/* // или туть, если вызвать onSubmit={(event)=> this.onFormSubmit(event)} */}
                 <form onSubmit={this.onFormSubmit}>  
                    <input type='text'
                        value={this.state.inputValue}
                        onChange={(event) => this.setState({ inputValue: event.target.value })}
                    />
                    <input type='submit'
                        value='Search videos' />
                </form>
            </div>
           );
    }
}
 
export default SearchInput;