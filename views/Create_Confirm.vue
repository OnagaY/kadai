<script setup>
import { CounterStore } from '../stores/counter.js'

const store =CounterStore()
const inputValue = store.name
const mail = store.email


</script>
<template>
    <div>
    <p>入力値: {{ inputValue }}</p>
    <p>入力値: {{ mail }}</p>
  </div>
  <router-link to="/Users">
    <button>確認</button>
  </router-link>
  <router-link to="/Users">
    <button>キャンセル</button>
  </router-link>
</template>
<style>
</style>