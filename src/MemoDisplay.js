import React from 'react';

class MemoDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            memo : 'Loading...'
        }
    }


    render(){
        return (
            <div className='container'>
                <div className='memo-box'>
                    <h1>Here's your memo:  {console.log(this.props.match.password)}</h1>
                    <div className='memo'>{this.state.memo}</div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){
        fetch(`http://localhost:4001/${this.props.match.params.username}`, {
            method : 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({password : this.props.location.state.password})
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState(
                    {
                        memo : result.memo
                    }
                );
                console.log(result.memo);
            },
            (error) => {
                this.setState(
                    {
                        memo: 'There was an error loading your memo. Please try again with a proper account.'
                    }
                );
            }
        );
    }   
}

export default MemoDisplay;