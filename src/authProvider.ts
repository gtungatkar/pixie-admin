import { AuthProvider } from "react-admin";
import { supabaseClient } from './supabase';


export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
      return supabaseClient.auth.signInWithPassword({"email": username, "password": password})
      .then(response => {
        if (response.error) {
          throw response.error;
        }
        const authToken = response.data.session.access_token 
        localStorage.setItem("user", authToken);
        localStorage.setItem("identity", JSON.stringify(response.data.user))
      }).catch(() => {
        throw new Error('Invalid login parameters')
    })
    },
    logout: async () => {
      localStorage.removeItem("user");
      localStorage.removeItem("identity")
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>  localStorage.getItem('user') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
      return Promise.resolve(undefined);
    },
    getIdentity: () => {
      const persistedUser = localStorage.getItem("identity");
      const user = persistedUser ? JSON.parse(persistedUser) : null;

      return Promise.resolve(user);
    },
};


// export default authProvider;
// import { supabaseAuthProvider } from 'ra-supabase-core';
// import { supabaseClient } from './supabase';

// export const authProvider = supabaseAuthProvider(supabaseClient, {
//   });

// import { supabaseAuthProvider } from 'ra-supabase';
// import { supabaseClient } from './supabase';

// export const authProvider = supabaseAuthProvider(supabaseClient, {
//   getIdentity: async user => {
//     // const { data, error } = await supabase
//     //     .from('userProfiles')
//     //     .select('id, first_name, last_name')
//     //     .match({ email: user.email })
//     //     .single();

//     // if (!data || error) {
//     //     throw new Error();
//     // }

//     return {
//         id: "foo",
//         fullName: `GT`,
//     };
// },
// });