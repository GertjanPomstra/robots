import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: 'calc(100vh - 148px)', borderTop:'5px solid #60F0F0'}}> {/* Header height is 148px. I tried to make it flexible with headerHeight. */}
            {props.children}
        </div>
    )
}

export default Scroll