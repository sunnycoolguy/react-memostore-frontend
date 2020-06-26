import React from 'react';

const MemoInput = (props) => {
    
    if(props.mode ==='sign-up'){
        return (
            <div class='memo-input-container'>
                <label for='memo-input'>Enter your memo: </label>
                <textarea onChange={props.onMemoChange} value={props.value} id='memo-input' name='memo'/> 
            </div>
        );
    }

    return null;
};

export default MemoInput;