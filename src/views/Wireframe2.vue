<template>
    <div class="min-h-screen bg-gray-100 flex">
      <!-- Columna izquierda para desktop (branding, imagen, etc.) -->
      <div class="hidden md:flex w-1/2 bg-gray-200 items-center justify-center p-8">
        <h2 class="text-3xl font-bold text-gray-700 text-center">Wireframe Challange: Guido Gambini</h2>
      </div>
  
      <!-- Columna derecha con el formulario -->
      <div class="w-full md:w-1/2 flex justify-center p-6">
        <div class="w-full max-w-sm bg-white rounded-lg p-6 shadow h-auto md:h-auto grid grid-rows-[auto,1fr]">
          <!-- Header -->
          <div>
            <div class="relative mb-4">
              <button class="absolute left-0 text-xl font-bold text-gray-700"><</button>
              <h2 class="text-lg font-semibold text-center">Add your password</h2>
            </div>
  
            <!-- Campo Password -->
            <p class="text-sm text-left mb-2 font-semibold">Password</p>
            <input
              type="password"
              placeholder="Password"
              class="w-full h-12 pl-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
  
            <!-- Ayuda -->
            <p class="text-xs text-gray-500 text-left mb-6 font-semibold">
              Must be at least 8 characters long and contain at least one letter, one number, and one special character.
            </p>
          </div>
  
          <!-- Botón -->
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
  