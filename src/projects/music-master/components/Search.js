import React , {Component} from 'react';

class Search extends Component {

    state={artistQuery:''};
    UpdateArtistQuery = event=>{
        this.setState({artistQuery:event.target.value});
    }
    handleKeyPress=()=>{
        if(event.key== 'Enter')
{
    this.searchArtist();
}   
 }

 searchArtist =()=>{
     this.props.searchArtist(this.state.artistQuery);
 }
    
    render(){
return(
    <div>
    <input
onChange={this.UpdateArtistQuery}
onKeyPress={this.handleKeyPress}
        placeholder='Search for an Artist'
        className='input'
        />
        <button
        onClick={this.searchArtist} className='button'
        >Search</button>
</div>)
}
}

export default Search;