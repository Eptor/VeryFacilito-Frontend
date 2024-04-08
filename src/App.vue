<template>
  <nav class="bg-indigo-600 p-4">
    <div class="flex items-center justify-between">
      <router-link class="text-white text-lg font-semibold" to="/">Inicio</router-link>
      <div v-if="user">
        <button @click="logout" class="text-white text-lg mx-2">Salir</button>
      </div>
      <div v-else>
        <router-link class="text-white text-lg mx-2" to="/login">Entrar</router-link>
        <router-link class="text-white text-lg mx-2" to="/register">Crear cuenta</router-link>
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