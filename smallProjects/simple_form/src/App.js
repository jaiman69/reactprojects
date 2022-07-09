import React from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
    const [values, setValues] = React.useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and should not include any special characters.",
            label: "Username",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address.",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            type: "text",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character.",
            label: "Password",
            required: true,
            pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$"
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "text",
            placeholder: "Confirm Password",
            errorMessage: "Password should match.",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const onChange = e => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <div className="app">
            <form onSubmit={e => e.preventDefault()}>
                <h1>Register</h1>
                {inputs.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;
