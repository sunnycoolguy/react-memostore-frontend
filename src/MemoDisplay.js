import React from 'react';

class MemoDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            memo : 'Loading...',
            isLoaded: false
        }
    }


    render(){
        return (
            <div className='container'>
                <div className='memo-box'>
                    <h1 style={{display : this.state.isLoaded ? 'block' : 'none'}}>Here's your memo:  {console.log(this.props.match.password)}</h1>
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
                //Handle edge case where user tries to create an account with preexisting username and correctly guessed password.
                if(this.props.location.state.containsMemo){
                    this.setState({memo : 'That username is already taken.'});
                } else {
                    this.setState(
                        {
                            memo : result.memo,
                            isLoaded: true,
                        }
                    );
                }
            },
            (error) => {
                if(this.props.location.state.mode === 'login'){
                    this.setState(
                        {
                            memo: 'There was an error loading your memo. Please try again with a proper username & password.'
                        }
                    );
                } else { //Handle case where user tries to create an account with a preexisting username.
                    this.setState({memo : 'That username is already taken'});
                }
            }
        );
    }   
}

export default MemoDisplay;