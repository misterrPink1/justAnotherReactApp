import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './Auth.css';

const Auth = props => {
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const loginHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //TODO: placeholder to send to the backend
    }

    return <Card className="authentication">
                <h2>Login Required</h2>
                <hr />
                <form class="auth-form" onSubmit={loginHandler}>
                    <Input 
                        id="email"
                        element="input"
                        type="email"
                        label="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter valid email address"
                        onInput={inputHandler} />
                    <Input 
                        id="password"
                        element="input"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter password"
                        onInput={inputHandler} />
                    <Button type="submit" disabled={!formState.isValid} >
                        Log In
                    </Button>
                </form>
            </Card>
};

export default Auth;