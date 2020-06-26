import React from 'react';

const MemoInput = (props) => {
    
    if(props.mode ==='sign-up'){
        return (
            <div className='memo-input-container'>
                <label htmlFor='memo-input'>Enter your memo: </label>
                <textarea required onChange={props.onMemoChange} value={props.value} id='memo-input' name='memo'/> 
            </div>
        );
    }

    return null;
};

export default MemoInput;