<script setup>
import { CounterStore } from '../stores/counter.js'
import router from '../router';


const store = new CounterStore()
const  id = store.id;
const updateName = store.name;
const updateEmail = store.email;

const Data = {
    id:id,
    name:updateName,
    email:updateEmail
}

async function updateData() {
    try{
        //データベースからの削除リクエストを送信
        await fetch('http://localhost:8080/api/insert',{
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        //編集が成功した場合、リダイレクトまたは適切な処理を行う
        //例えば、編集後の画面にリダイレクトする場合
        router.push('/Users')
    }catch (error) {
        console.error('編集エラー:',error)
        //エラーハンドリングなど、編集エラー時の処理を行う
    }
  }

</script>
<template>
    <h1 class="updateh1">研修生編集確認</h1>
    <p>ID:{{ id }}</p>
    <p>名前:{{ updateName }}</p>
    <p>メールアドレス:{{ updateEmail }}</p>
    <router-link to="Users">
        <button @click="updateData">確認</button>
    </router-link>
    <router-link to="/Users">
        <button>キャンセル</button>
    </router-link>

</template>
<style>
    
</style>