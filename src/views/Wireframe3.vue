<template>
    <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <div class="hidden md:flex w-1/2 bg-gray-200 items-center justify-center p-8">
        <h2 class="text-3xl font-bold text-gray-700 text-center">Wireframe Challange: Guido Gambini</h2>
      </div>
      <div class="w-full md:w-1/2 flex justify-center items-center p-6">
        <div class="w-full max-w-sm bg-white rounded-xl p-6 shadow">
          <h1 class="text-xl font-semibold text-center mb-6">Sign up</h1>
          <label class="text-sm font-medium text-gray-700 mb-1 block">Enter your phone number</label>
          <div class="flex items-center border rounded-md overflow-hidden bg-white mb-1">
            <span class="flex items-center px-3 bg-gray-100 border-r text-sm text-gray-700">+972</span>
            <input
              type="tel"
              placeholder="Phone number"
              class="flex-1 px-3 py-2 outline-none text-sm"
            />
          </div>
          <p class="text-xs text-gray-500 mb-4">
            We will send you a verification code to this number.
          </p>
          <button class="w-full bg-gray-500 text-white py-2 rounded-md font-medium mb-4">
            Sign up
          </button>
          <div class="flex items-center gap-2 my-4">
            <hr class="flex-grow border-gray-300" />
            <span class="text-gray-500 text-sm">OR</span>
            <hr class="flex-grow border-gray-300" />
          </div>
          <div class="space-y-2">
            <button class="w-full flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md">
              <span class="text-lg">A</span> Sign up with Apple
            </button>
            <button class="w-full flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md">
              <span class="text-lg">G</span> Sign up with Google
            </button>
            <button class="w-full flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md">
              <span class="text-lg">f</span> Sign up with Facebook
            </button>
            <button class="w-full flex items-center justify-center gap-2 bg-gray-200 py-2 rounded-md">
              <span class="text-lg">E</span> Sign up with Email
            </button>
          </div>
          <p class="text-xs text-gray-500 text-center mt-6">
            By continuing, you are agree to the Dishie's
            <a href="#" class="underline">Terms & Conditions</a> and
            <a href="#" class="underline">Privacy policy</a>.
          </p>
  
          <p class="text-sm text-center mt-4">
            Already a user?
            <a href="#" class="text-blue-600 font-medium">Log in</a>
          </p>
          <p class="text-sm text-center">
            Not ready to sign up?
            <a href="#" class="text-blue-600 font-medium">Guest mode</a>
          </p>
        </div>
      </div>
    </div>
  </template>