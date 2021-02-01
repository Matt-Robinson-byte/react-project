import React from 'react';

function Picture(props) {
    console.log(props)
    return (
        <div className="picture">
            <img src={props.image} alt=""/>
            {/* <button value="Rio Naranjo"onClick={props.getPic}>picture</button> */}
        </div>
    );

}

export default Picture;