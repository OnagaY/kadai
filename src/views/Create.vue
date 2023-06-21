<script setup>
import { CounterStore } from '../stores/counter.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

    const store = CounterStore()
    const inputName = ref('')
    const inputEmail = ref('')
    const emailError = ref('')
    const isLoading = ref(false)

    const router = useRouter()


    function validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if(!emailRegex.test(inputEmail.value)) {
        emailError.value = '無効なメールアドレスです'
      }else{
        emailError.value = ''
      }
     }

     function submitForm() {
  if (!emailError.value && !isLoading.value) {
    store.name = inputName.value
    store.email = inputEmail.value
    isLoading.value = true

    router.push('/Create_Confirm')

    isLoading.value = false
  }
}



    function b() {
      store.name = inputName.value
      store.email = inputEmail.value
    }



</script>

<template>
  <h1 class="createh1"><nobr>研修生&emsp;新規登録</nobr></h1>
  <label for="fullname">名前  <input v-model="inputName"
    id="fullname" name="fullname" type="text" required/></label><br>

    <span v-if="emailError" class="error-message">{{ emailError }}</span><br>
   <label for="email">メールアドレス <input v-model="inputEmail" 
    id="email" name="userid" type="text"
    @input="validateEmail"
    :class="{ 'error': emailError}"
     required/></label><br>

     <button @click="submitForm" :disabled="emailError || isLoading" class="Createbtn">
    <nobr>確認</nobr>
  </button>
<router-link to="Users">
  <button class="Createbtn">キャンセル</button>
</router-link>

</template>

<style>
.createh1 {
  color: white;
  margin-top: auto;
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
}
.Createbtn{
  width: 20%;
}
</style>
