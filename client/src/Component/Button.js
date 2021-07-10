import React from 'react'

function Button(props) {
    const text = props.text;
    const color = props.color;
    return (
        <button>
            {text}
        </button>
    )

}

Button.defaultProps = {
    text: "Đây là giá trị mặc định của text"
};
export {Button}