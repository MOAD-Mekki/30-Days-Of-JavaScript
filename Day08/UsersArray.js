const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

function signUp(){
    const newUser = {
        _id : 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    };
    let isSignedUp = false;
    for (const user of users){
        if (user.email === newUser.email){
            console.log(`${newUser.username} Already existe!`);
            isSignedUp = true;
            break;
        }
    }
    if (!isSignedUp){
        users.push(newUser);
        console.log('User added successfully');
    }
};
signUp();

function signIn(email, password) {
  for (const user of users) {
    if (user.email === email) {
      if (user.password === password) {
        user.isLoggedIn = true;
        console.log('Logged in successfully');
        return;
      } else {
        console.log('Email or password is incorrect');
        return;
      }
    }
  }

  console.log('User not found');
}
signIn('thomas@thomas.com','123333');