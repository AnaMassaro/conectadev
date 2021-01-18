import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if(email !== 'anamassaro@gmail.com' || password !== 'admin'){
    return [400, { message: 'Email ou senha incorreto' }] 
  }

  const user = { 
    id: 1,
    name: 'Ana Massaro',
    username: 'anamassaro',
    email: 'anamassaro@gmail.com'
  }
  return [200, {user}]
});