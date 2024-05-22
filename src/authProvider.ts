// import { AuthProvider, HttpError } from "react-admin";
// import data from "./users.json";
// import { SupabaseClient } from "@supabase/supabase-js";

// export const authProvider = (client: SupabaseClient): AuthProvider => {
//   return {
//     login: async ({ username, password }) => {

//       const { data, error } = await client.auth.signInWithPassword({"email": username, "password": password});
//       if (error) {
//         throw error;
//     }
//     localStorage.setItem("user", JSON.stringify(data.user));
//     return;

//       // return Promise.reject(
//       //   new HttpError("Unauthorized", 401, {
//       //     message: "Invalid username or password",
//       //   })
//       // );
//     },
//     logout: () => {
//       localStorage.removeItem("user");
//       return Promise.resolve();
//     },
//     checkError: () => Promise.resolve(),
//     checkAuth: () =>
//       localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
//     getPermissions: () => {
//       return Promise.resolve(undefined);
//     },
//     getIdentity: () => {
//       const persistedUser = localStorage.getItem("user");
//       const user = persistedUser ? JSON.parse(persistedUser) : null;

//       return Promise.resolve(user);
//     },
//   }
// };

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
// export const authProvider: AuthProvider = {
//   login: ({ username, password }) => {
//     const user = data.users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       // eslint-disable-next-line no-unused-vars
//       let { password, ...userToPersist } = user;
//       localStorage.setItem("user", JSON.stringify(userToPersist));
//       return Promise.resolve();
//     }

//     return Promise.reject(
//       new HttpError("Unauthorized", 401, {
//         message: "Invalid username or password",
//       })
//     );
//   },
//   logout: () => {
//     localStorage.removeItem("user");
//     return Promise.resolve();
//   },
//   checkError: () => Promise.resolve(),
//   checkAuth: () =>
//     localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
//   getPermissions: () => {
//     return Promise.resolve(undefined);
//   },
//   getIdentity: () => {
//     const persistedUser = localStorage.getItem("user");
//     const user = persistedUser ? JSON.parse(persistedUser) : null;

//     return Promise.resolve(user);
//   },
// };

// export default authProvider;
// import { supabaseAuthProvider } from 'ra-supabase-core';
// import { supabaseClient } from './supabase';

// export const authProvider = supabaseAuthProvider(supabaseClient, {
//   });

import { supabaseAuthProvider } from 'ra-supabase';
import { supabaseClient } from './supabase';

export const authProvider = supabaseAuthProvider(supabaseClient, {
  getIdentity: async user => {
    // const { data, error } = await supabase
    //     .from('userProfiles')
    //     .select('id, first_name, last_name')
    //     .match({ email: user.email })
    //     .single();

    // if (!data || error) {
    //     throw new Error();
    // }

    return {
        id: "foo",
        fullName: `GT`,
    };
},
});