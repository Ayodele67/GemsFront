<template>
<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register</h2>
   
  </div>
      <Form @submit="handleRegister" :validation-schema="schema" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div v-if="!successful" class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="firstName" class="block text-sm font-semibold leading-6 text-gray-900">First Name</label>
            <Field name="firstName" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
            <ErrorMessage name="firstName" class="error-feedback" />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-semibold leading-6 text-gray-900">Last Name</label>
            <Field name="lastName" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
            <ErrorMessage name="lastName" class="error-feedback" />
          </div>
 
 <div class="sm:col-span-2">
      <div>
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
            <Field name="email" type="email" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
      </div>
<div class="sm:col-span-2">
      <div>
            <label for="phoneNumber" class="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
            <Field name="phoneNumber" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
            <ErrorMessage name="phoneNumber" class="error-feedback" />
          </div>
      </div>



      <div class="sm:col-span-2">
      <div>
            <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
            <Field name="password" type="password" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
      </div>

      <div class="sm:col-span-2">
      <div>
            <label for="confirmPassword" class="block text-sm font-semibold leading-6 text-gray-900">Confirm Password</label>
            <Field name="confirmPassword" type="password" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }" />
            <ErrorMessage name="confirmPassword" class="error-feedback" />
          </div>
      </div>
          

          <div class="mt-10">
            <button class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>

           <p class="mt-10 text-center text-sm text-gray-500">
      Already has an account?
      <a href="login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
    </p>
    <p class="mt-10 text-center text-sm text-gray-500">
      Verify an account?
     <RouterLink to="/tokenVerify" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Verify Now</RouterLink>
    </p>
        </div>
      </Form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .required("First Name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      lastName: yup
        .string()
        .required("Last Name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
     phoneNumber: yup
        .string()
        .required("Phone Number is required!")
        .min(10, "Must be at least 10 characters!")
        .max(15, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      confirmPassword: yup
        .string()
        .required("Confirm Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/VinList");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.tokenCode = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.tokenCode=data.tokenCode;
          this.successful = true;
          this.loading = false;
          alert("Success, Pls Verify Your SMS Token Code is"+ data.tokenCode);
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>