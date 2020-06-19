import axios from 'axios';

const Login = function Login() {
  this.get = async function AuthLogin(credential) {
    try {
      const response = await axios.get(
        `${url}/user/login`,
        {
          params: credential,
          validateStatus(status) {
            return status < 500;
          },
        },
      );
      return response;
    } catch (err) {
      console.log(err);
      throw new Error(`URL - ${err}`);
    }
  };
};
export default new Login();
