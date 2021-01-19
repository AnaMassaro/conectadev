import mock from '../utils/mock';

mock.onPost('api/home/me').reply(200, {
  user: {
    'id': '1',
    'name': 'anamassaro',
    'email': 'anamassaro@gmail.com'
  }
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if(email !== 'anamassaro@gmail.com' || password !== 'admin'){
    return [400, { message: 'Email ou senha incorreto' }] 
  }

  const user = { 
    id: 1,
    name: 'Ana Massaro',
    username: 'anamassaro',
    email: 'anamassaro@gmail.com',
    avatar: '/images/avatars/avatar_1.jpeg'
  }
  return [200, {user}]
});