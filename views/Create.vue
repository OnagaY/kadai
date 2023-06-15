<script setup>
import { CounterStore } from '../stores/counter.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

    const store = CounterStore()
    const inputValue = ref('')
    const mail = ref('')

    function b() {
      store.name = (inputValue.value)
      store.email = (mail.value)
    }



</script>

<template>
  <h1><nobr>研修生&emsp;新規登録</nobr></h1>
  <label for="fullname">名前  <input v-model="inputValue" id="fullname" name="fullname" type="text" required/></label><br>
  <label for="email">メールアドレス <input v-model="mail" id="email" name="email" type="email" required/></label><br>
  <router-link to="/Create_Confirm">
  <button @click="b" class="btn" ><nobr>確認</nobr></button>
  </router-link>
  <a class="btn"><nobr>キャンセル</nobr></a>
</template>

<style>
h1 {
  color: white;
  margin-left: 60%;
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
}
</style>
