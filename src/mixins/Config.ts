import { Component, Vue } from 'vue-property-decorator';
import AWS from 'aws-sdk/global';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const CONFIG = {
  region: process.env.VUE_APP_REGION,
  IdentityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
  UserPoolId: process.env.VUE_APP_USER_POOL_ID,
  ClientId: process.env.VUE_APP_CLIENT_ID,
};

AWS.config.region = CONFIG.region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: CONFIG.IdentityPoolId,
});

const USER_POOL = new CognitoUserPool({
  UserPoolId: CONFIG.UserPoolId,
  ClientId: CONFIG.ClientId,
});

@Component
export default class Config extends Vue {
  signUp(params) {
    const { userId, givenName, familyName, password } = params;

    const attributeList = [];

    attributeList.push(
      new CognitoUserAttribute({ Name: 'given_name', Value: givenName })
    );
    attributeList.push(
      new CognitoUserAttribute({ Name: 'family_name', Value: familyName })
    );

    const now = Math.floor(new Date().getTime() / 1000);
    attributeList.push(
      new CognitoUserAttribute({ Name: 'updated_at', Value: String(now) })
    );

    return new Promise((resolve, reject) => {
      USER_POOL.signUp(
        userId, // Must be an email address.
        password,
        attributeList,
        null,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  signIn(params) {
    const { userId, password } = params;

    const cognitoUser = new CognitoUser({
      Username: userId,
      Pool: USER_POOL,
    });

    const authenticationDetails = new AuthenticationDetails({
      Username: userId,
      Password: password,
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }
}
