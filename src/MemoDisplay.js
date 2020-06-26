import React from 'react';

class MemoDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : this.props.match,
            memo : ''
        }
    }


    render(){
        return <h1>{JSON.stringify(this.props.match)}</h1>;
    }
}

export default MemoDisplay;