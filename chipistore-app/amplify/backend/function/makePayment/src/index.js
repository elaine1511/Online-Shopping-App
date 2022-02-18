const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_ZxpDYrYeP";
const stripe = require("stripe")('pk_test_51KJ4EUJVjSQQmIyAxf4RIGZcH8D1u5UPlfSqYuspf8uba6h2LHTsFd43izCOsTifbRD28ChFHgcnGNHlI5lFYn4600Iv0eKyUs');

const findUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
            return attr.Value;
        }
        return email;
    });

};
exports.handler = async (event) => {
    // TODO implement
    try {
        const { id, cart, totalAmount, address, token } = event.arguments.input;
        const { username } = event.identity.claims;
        const email = await findUserEmail(event)
        await stripe.charges.create({
            amount: totalAmount * 100,
            currency: 'usd',
            source: token,
            description: `Order made on ${new Date()} by ${email}`
        });
        return { id, cart, totalAmount, address, username, email }

    } catch (err) {
        console.log(err)
    }
};
