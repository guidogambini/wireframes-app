<template>
    <div class="min-h-screen bg-gray-100 flex">
      <div class="hidden md:flex w-1/2 bg-gray-200 items-center justify-center p-8">
        <h2 class="text-3xl font-bold text-gray-700 text-center">Wireframe Challange: Guido Gambini</h2>
      </div>
      <div class="w-full md:w-1/2 flex justify-center p-6">
        <div class="w-full max-w-sm bg-white rounded-lg p-6 shadow grid grid-rows-[auto,1fr] h-auto">
          <div>
            <div class="relative mb-4">
              <button class="absolute left-0 text-xl font-bold text-gray-700"><</button>
              <h2 class="text-lg font-semibold text-center">Verify your mobile number</h2>
            </div>
            <p class="text-sm text-left mb-6 font-semibold">
              Please enter the code we sent to +9726555566
            </p>
            <div class="flex justify-between gap-2 mb-6">
              <input
                type="text"
                maxlength="1"
                class="w-20 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-20 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-20 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-20 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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