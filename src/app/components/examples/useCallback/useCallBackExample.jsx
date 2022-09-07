import React, { useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = React.useState({});
    const withOutCallback = React.useRef(0);
    const withCallback = React.useRef(0);
    const handleChange = ({ target }) => {
        // console.log(target);
        setData((pervState) => ({ ...pervState, [target.name]: target.value }));
    };

    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    React.useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    React.useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);
    React.useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback {withOutCallback.current}</p>
            <p>Render withCallback {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
