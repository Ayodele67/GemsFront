import axios from 'axios';

const API_URL = 'http://localhost:5226/gems/api/v1/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'User/login/token', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'User/user/register', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      confirmPassword: user.confirmPassword
    });
  }

  confirmTokenCode(user) {
    let phone=user.phoneNumber;
    let code=user.tokenCode
    console.log(phone);
    return axios.post(API_URL + 'User/user/VerifyUserAccount/'+ phone +'/'+ code, {
       phoneNumber: user.phoneNumber,
       tokenCode: user.tokenCode
    });
  }
}

export default new AuthService();