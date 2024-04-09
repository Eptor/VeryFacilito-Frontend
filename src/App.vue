<template>
  <nav class="bg-indigo-600 p-4">
    <div class="flex items-center justify-between">
      <router-link class="text-white text-lg font-semibold" to="/">Inicio</router-link>
      <div v-if="user">
        <button @click="logout" class="text-white text-lg mx-2">Salir</button>
      </div>
      <div v-else>
        <router-link class="text-white text-lg mx-1" to="/login">Entrar</router-link>
        <router-link class="text-white text-lg mx-1" to="/register">Crear cuenta</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { ref } from 'vue'
import { supabase } from '@/utils/supabase'

export default {
  setup() {
    const user = ref(null)

    supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user
    })

    const logout = async () => {
      await supabase.auth.signOut()
    }

    return {
      user,
      logout
    }
  }
}
</script>

<style scoped>

.nav-link {
  color: white;
  font-size: 1.25rem;
  margin: 0 0.5rem;
}

/* Estilos para el botón de salida */
.logout-button {
  background-color: #ff4d4d;
  color: white;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Estilos para el contenedor del componente */
.container {
  max-width: 1024px;
  margin: 0 auto;
}

/* Estilos para el encabezado */
.header {
  background-color: #4b0082;
  color: white;
  padding: 1rem;
  text-align: center;
}

/* Estilos para el contenedor del contenido */
.content-container {
  padding: 2rem;
}
</style>
