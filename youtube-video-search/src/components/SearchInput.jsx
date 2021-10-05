import React, { Component } from "react";

class SearchInput extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: '',
            videos: [],
        };

        //this.onFormSubmit = this.onFormSubmit.bind(this); 
        // при потере контекста используется либо bind, либо стрелочная 
        // функция (берет this у родителя)
    }

    onFormSubmit = async (event) => { // стрелочная функция туть!
        event.preventDefault();
        //console.log(this.state.inputValue);

        this.props.onSubmit(this.state.inputValue);
    }

    render() { 
        return (
            <div className='app-wrapper'>
                {/* // или туть, если вызвать onSubmit={(event)=> this.onFormSubmit(event)} */}
                 <form onSubmit={this.onFormSubmit}>  
                    <input className='search-input'
                        placeholder='Search video...'
                        type='text'
                        value={this.state.inputValue}
                        onChange={(event) => this.setState({
                            inputValue: event.target.value
                        })}
                    />
                    <input className='btn'
                        type='submit'
                        value='Search videos' />
                </form>
            </div>
           );
    }
}
 
export default SearchInput;