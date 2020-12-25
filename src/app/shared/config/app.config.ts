export const Config = {
  apiMethods: {
    post: 'post',
    put: 'put',
    delete: 'delete',
    get: 'get',
    patch: 'patch'
  },
  apiStatusCode: {
    serverError: 500,
    notFound: 404,
    success: 200,
    notAuthenticated: 403,
    unAuthorized: 401,
    timeout: 408,
    noInternet: 0,
    unprocessable: 422
  },
  endpoint: {},
  message: {
    // prefixed with components name
    loginText: 'Akelius Gmbh',
    startHeading: 'Welcome to the App',
    startsubHeading: 'Click on the top left burger menu to start using the App. ',
    startText: 'This app covers all the tasks mentioned in the assignment. For more details look for the attached documentation.',
    viewHeading: 'Registered Users',
    viewsubHeading: 'List of all the registered users',
    viewFirstName: 'First Name',
    viewLastName: 'Last Name',
    viewEmail: 'Email-ID',
    viewBirthday: 'Birthday',
    createFirstName: 'First Name',
    createLastName: 'Last Name',
    createEmail: 'Email-ID',
    createBirthday: 'Birthday',
    createAdress: 'Address',
    
  },
  // custome font sizes, new fonts can be added dynamically
  fonts: {
    small: '1rem',
    medium: '1.2rem',
    large: '1.4rem',

    fSmall: 'Small',
    fLarge: 'Large',
    fMedium: 'Medium',
  }
};
