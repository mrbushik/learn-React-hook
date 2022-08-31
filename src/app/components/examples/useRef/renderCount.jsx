import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = React.useRef(0);
    const [otherState, setOtherState] = React.useState(false);
    React.useEffect(() => {
        renderCount.current++;
    });
    const togleState = () => {
        setOtherState(!otherState);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>{renderCount.current}</p>
            <button className="btn btn-primary" onClick={togleState}>
                toggle
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
