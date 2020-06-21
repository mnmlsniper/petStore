import { apiService } from '../../lib/apiInstanse';

const Login = function Login() {
  this.p = async function pLogin(data) {
    const url = '/user/login';
    const r = await apiService.get(url, data);
    return r;
  };
};
export default new Login();
