import React from 'react';

class MemoDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            memo : 'Loading...'
        }
    }


    render(){
        return <div>{this.state.memo}</div>;
    }
    
    componentDidMount(){
        fetch(`http://localhost:4001/${this.props.match.params.username}`)
        .then(res => res.json)
        .then(
            (result) => {
                this.setState(
                    {
                        memo : result.memo
                    }
                );
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