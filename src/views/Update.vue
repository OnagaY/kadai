<script setup>
import { CounterStore } from '../stores/counter.js'
import { ref } from 'vue'

const store =CounterStore()

    const updateName = ref('')
    const updateEmail = ref('')

    function updateData() {
      store.name = updateName.value
      store.email = updateEmail.value
    }

const id = store.id;

</script>
<template>
<h1 class="hensyu">研修生編集</h1>
<p>ID:{{ id }}</p>
<label for="fullname">名前  <input v-model="updateName"  type="text" required/></label><br>

  <label for="email">メールアドレス <input v-model="updateEmail" type="email" required/></label><br>
     <router-link to="/Update_Comfirm">
<button @click="updateData">確認</button>
     </router-link>
<button>キャンセル</button>
</template>
<style>
</style>