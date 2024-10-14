import Keycloak from 'keycloak-connect';
import dotenv from 'dotenv';

dotenv.config(); // load environment variables from .env file

export const keycloak = new Keycloak({}, {
    'realm': process.env.NODE_APP_KEYCLOAK_REALM,
    'auth-server-url': `${process.env.NODE_APP_KEYCLOAK_URL}`,
    'ssl-required': 'external',
    'resource': process.env.NODE_APP_KEYCLOAK_CLIENT_ID,
    'confidential-port': 0,
    'bearer-only': true
});

// check if user has a specific role
export const protectWithRole = (role) => {
    return keycloak.protect(`realm:${role}`);
}