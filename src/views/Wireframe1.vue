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
        class="w-full max-w-sm bg-white rounded-lg p-6 shadow grid grid-rows-[auto,1fr] h-auto"
      >
        <div>
          <div class="flex items-center justify-center relative mb-4">
            <div
              class="absolute left-0 flex items-center text-xl font-bold text-gray-700"
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
            <h2 class="text-lg font-semibold text-center">
              Verify your mobile number
            </h2>
          </div>
          <p class="text-xs md:text-sm text-left mb-4 font-semibold">
            Please enter the code we sent to +9726555566
          </p>
          <div class="flex flex'wrap justify-between gap-2">
            <input
              type="text"
              maxlength="1"
              class="w-[20vw] h-[6vh] max-w-[60px] max-h-[60px] text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              class="w-[20vw] h-[6vh] max-w-[60px] max-h-[60px] text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              class="w-[20vw] h-[6vh] max-w-[60px] max-h-[60px] text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              class="w-[20vw] h-[6vh] max-w-[60px] max-h-[60px] text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div class="self-center">
          <button
            class="w-full bg-gray-500 text-white font-semibold py-2 rounded mb-3 hover:bg-gray-600 transition-colors"
          >
            Continue
          </button>

          <button
            class="w-full border border-gray-500 text-gray-500 font-semibold py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Resend verification code
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
