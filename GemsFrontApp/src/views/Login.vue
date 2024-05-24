<template>
 <Form @submit="handleLogin" :validation-schema="schema">
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
   
      <div>
        <label for="username" class="block text-sm font-semibold leading-6 text-gray-900">Username</label>
        <div class="mt-2.5">
          <Field name="username" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
          <ErrorMessage name="username" class="error-feedback" />
         </div>
      </div>

      <div>
        
       <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
       <div class="mt-2.5">
          <Field name="password" type="password"  class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
          <ErrorMessage name="password" class="error-feedback" /> </div>
      </div>
<div class="flex items-center justify-between">
          
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
      <div>
        <button type="submit" class="flex w-full 
        justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :disabled="loading">
        <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
        <span>Login</span>
        </button>
      </div>
  

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <RouterLink to="/reg" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</RouterLink>
    </p>
  </div>
</div>


 <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <div v-if="message" class="font-medium" role="alert">
            {{ message }}
          </div>
        </div>
</Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.message = "";
      this.$store.dispatch("auth/login", user).then(
        (data) => {
          this.message = data.message;
           alert(data.message);
          this.$router.push("/vinList");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
