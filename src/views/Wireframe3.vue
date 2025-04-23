<template>
  <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row">
    <div
      class="hidden md:flex w-1/2 bg-gray-200 items-center justify-center p-8"
    >
      <h2 class="text-3xl font-bold text-gray-700 text-center">
        Wireframe Challenge: Guido Gambini
      </h2>
    </div>
    <div class="w-full md:w-1/2 flex justify-center items-center p-6">
      <div class="w-full max-w-sm bg-white rounded-xl p-6 shadow">
        <h1 class="text-xl font-semibold text-center mb-6">Sign up</h1>
        <label class="text-sm font-medium text-gray-700 mb-1 block"
          >Enter your phone number</label
        >
        <div
          class="flex items-center border rounded-md overflow-hidden bg-white mb-1"
        >
          <span
            class="flex items-center px-3 border-r text-sm text-gray-700"
            >+972</span
          >
          <input
            type="tel"
            placeholder="Phone number"
            class="flex-1 px-3 py-2 outline-none text-sm"
          />
        </div>
        <p class="text-xs text-gray-500 mb-4">
          We will send you a verification code to this number.
        </p>
        <button
          class="w-full bg-gray-500 text-white py-2 rounded-md font-medium mb-4"
        >
          Sign up
        </button>
        <div class="flex items-center gap-2 my-4">
          <hr class="flex-grow border-gray-300" />
          <span class="text-gray-500 text-sm">OR</span>
          <hr class="flex-grow border-gray-300" />
        </div>
        <div class="space-y-2">
          <button
            class="w-full relative flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md"
          >
            <span class="text-lg absolute left-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            Sign up with Apple
          </button>
          <button
            class="w-full relative flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md"
          >
            <span class="text-lg absolute left-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            Sign up with Google
          </button>
          <button
            class="w-full relative flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md"
          >
            <span class="text-lg absolute left-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            Sign up with Facebook
          </button>
          <button
            class="w-full relative flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md"
          >
            <span class="text-lg absolute left-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            Sign up with Email
          </button>
        </div>
        <p class="text-xs text-gray-500 text-center mt-6">
          By continuing, you are agree to the Dishie's
          <a href="#" class="underline">Terms & Conditions</a> and
          <a href="#" class="underline">Privacy policy</a>.
        </p>

        <p class="text-sm text-center mt-4">
          Already a user?
          <a href="#" class="font-medium underline">Log in</a>
        </p>
        <p class="text-sm text-center">
          Not ready to sign up?
          <a href="#" class="font-medium underline">Guest mode</a>
        </p>
      </div>
    </div>
  </div>
</template>