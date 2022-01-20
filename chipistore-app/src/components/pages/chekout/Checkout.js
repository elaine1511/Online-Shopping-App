import React from 'react';
import { AmplifyAuthenticator } from "@aws-amplify/ui-react"
import Layout from '../../shared/Layout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout-form';


const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51KJ4EUJVjSQQmIyAxf4RIGZcH8D1u5UPlfSqYuspf8uba6h2LHTsFd43izCOsTifbRD28ChFHgcnGNHlI5lFYn4600Iv0eKyUs');
    return (
        <Layout>
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />

                </Elements>
            </AmplifyAuthenticator>
        </Layout>
    )
}

export default Checkout