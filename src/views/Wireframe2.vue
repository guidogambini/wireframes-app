<template>
  <div class="min-h-screen bg-gray-100 flex">
    <div
      class="hidden md:flex w-1/2 bg-gray-200 items-center justify-center p-8"
    >
      <h2 class="text-3xl font-bold text-gray-700 text-center">
        Wireframe Challenge: Guido Gambini
      </h2>
    </div>
    <div class="w-full md:w-1/2 flex justify-center p-6">
      <div
        class="w-full max-w-sm rounded-lg p-6 h-auto md:h-auto grid grid-rows-[auto,1fr]"
      >
        <div>
          <div class="relative mb-4">
            <div
              class="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700"
            >
              <router-link
                to="/"
                class="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700"
              >
                <svg
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </router-link>
            </div>
            <h2 class="text-lg font-semibold text-center">Add your password</h2>
          </div>
          <p class="text-sm text-left mb-2 font-semibold">Password</p>
          <input
            type="password"
            placeholder="Password"
            class="w-full h-12 pl-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <p class="text-xs text-gray-500 text-left mb-6 font-semibold">
            Must be at least 8 characters long and contain at least one letter,
            one number, and one special character.
          </p>
        </div>
        <div class="self-center">
          <button
            class="w-full bg-gray-500 text-white font-semibold py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
