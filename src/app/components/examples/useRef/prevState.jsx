import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const pervState = React.useRef("");
    const [otherState, setOtherState] = React.useState("false");
    React.useEffect(() => {
        pervState.current = otherState;
    }, [otherState]);
    const togleState = () => {
        setOtherState((pervState) =>
            pervState === "false" ? "true" : "false"
        );
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>pervState: {pervState.current}</p>
            <p>current State: {otherState}</p>

            <button className="btn btn-primary" onClick={togleState}>
                toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
