import React from "react";

export default function ProfilePic(props) {
    const { firstname, lastname, avatar, user_bio } = props.rootState;
    const { clickHandler } = props.clickHandler;
    return (
        <div className="profilePicContainer">
            <img
                onClick={clickHandler}
                width="300px"
                src={avatar || "/default_image.png"}
            />
            <h1 className="userfullname">
                {firstname} {lastname}
            </h1>
        </div>
    );
}
