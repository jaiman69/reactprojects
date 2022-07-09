import "./FormInput.css";
import React from "react";

const FormInput = props => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = React.useState(false);

    const handleFocus = e => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;
