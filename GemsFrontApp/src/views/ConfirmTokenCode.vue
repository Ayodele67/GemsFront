<template>
 <Form @submit="handleTokenCode" :validation-schema="schema">
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Verify your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
   
      <div>
        <label for="phoneNumber" class="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
        <div class="mt-2.5">
          <Field name="phoneNumber" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
          <ErrorMessage name="phoneNumber" class="error-feedback" />
         </div>
      </div>

      <div>
        <label for="tokenCode" class="block text-sm font-semibold leading-6 text-gray-900">Token Code</label>
        <div class="mt-2.5">
          <Field name="tokenCode" type="text" class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
          <ErrorMessage name="tokenCode" class="error-feedback" />
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
        <span>Verify</span>
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
  name: "ConfirmTokenCode",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      phoneNumber: yup.string().required("Phone Number is required!"),
      tokenCode: yup.string().required("Token Code is required!"),
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
   handleTokenCode(user) {
      this.loading = true;

      this.$store.dispatch("auth/confirmTokenCode", user).then(
        () => {
          this.$router.push("/");
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
