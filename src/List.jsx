import React from "react";



const List = (props) => {
    return (
        <>
            <div className="list__style">
                {/* <i className="fas-fa-circle" >✖</i> */}
                <i className="bi bi-x-circle-fill" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                <li>{props.text}</li>
            </div>
        </>

    );
};
export default List;