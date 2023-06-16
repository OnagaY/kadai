<script setup>
import { CounterStore } from '../stores/counter.js'

const store =CounterStore()
const inputName = store.name;
const inputEmail = store.email;

async function sendData() {
  try {
    const response = await fetch('http://localhost:8080/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: inputName, email: inputEmail })
    });

    if (!response.ok) {
      const errorMessage = `エラー: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    // 送信成功時の処理
    console.log('完了');
  } catch (error) {
    console.error(error);
  }
}


</script>
<template>
    <div>
    <p class="inp">入力値: {{ inputName }}</p>
    <p class="inp">入力値: {{ inputEmail }}</p>
  </div>
  <router-link to="/Users">
    <button @click="sendData">確認</button>
  </router-link>
  <router-link to="/Users">
    <button>キャンセル</button>
  </router-link>
</template>
<style>
</style>