<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        Bienvenido a nuestro Bazar
      </h1>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Una aplicación de realidad aumentada para mejorar la experiencia de los clientes en nuestro bazar.
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:flex-col sm:items-stretch lg:justify-center">
        <div class="sm:flex sm:items-center sm:justify-center sm:space-x-4 mb-4">
          <div class="rounded-md shadow">
            <a href="/login"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Iniciar sesión
            </a>
          </div>
          <div class="rounded-md shadow">
            <a href="/register"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Registrarse
            </a>
          </div>
        </div>
        <div class="rounded-md shadow">
          <a href="/realidad-aumentada"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Probar Realidad Aumentada
          </a>
        </div>
        <div class="rounded-md shadow">
          <a href="/mapa-interactivo"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-12">
            Probar Mapa Interactivo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>