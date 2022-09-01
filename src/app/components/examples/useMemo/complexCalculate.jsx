import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const { value, setValue } = React.useState(100);
    const [otherState, setOtherState] = React.useState(false);
    const fact = factorial(100);
    React.useEffect(() => {
        console.log("render");
    });
    const buttonColor = otherState ? "primary" : "secondary";

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>factorial resault: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((pervState) => pervState + 10)}
                >
                    inctement
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((pervState) => pervState + 10)}
                >
                    decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn  btn-" + buttonColor}
                    onClick={() => setOtherState((pervState) => !pervState)}
                >
                    changeColor
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
