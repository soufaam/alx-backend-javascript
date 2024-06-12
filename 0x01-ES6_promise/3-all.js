import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [res1, res2] = responses;
      console.log(res1.body, res2.firstName, res2.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
