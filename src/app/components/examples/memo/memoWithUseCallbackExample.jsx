import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            log out
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(pervState, nextState) {
    if (pervState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizationLigOut = React.memo(LogOutButton, areEqual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = React.useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initial state
            </button>
            ;
            <MemoizationLigOut onLogOut={handleLogOut} />;
        </>
    );
};

export default MemoWithUseCallbackExample;
