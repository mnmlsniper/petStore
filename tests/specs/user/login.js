// api
import { apiService } from '../../lib/apiInstanse';
import login from '../../api/user/login';

jest.setTimeout(50000);

describe('/user/login', () => {
  test('User can login into the system', async () => {
    const r = await login.p({ username: 'thisIsName', password: 'q12345' });
    expect(r.status).toBe(200);
  });
});
