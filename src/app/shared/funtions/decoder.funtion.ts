import jwt_decode from 'jwt-decode';

export function decodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }