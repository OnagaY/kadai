<script setup>
import router from '../router';
import { CounterStore } from '../stores/counter';
import axios from 'axios';

const store =CounterStore()
  const id = store.id;
  const name =store.name;
  const email = store.email;

  async function deleteData() {
    try{
        //データベースからの削除リクエストを送信
        await fetch('http://localhost:8080/api/delete',{
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        //削除が成功した場合、リダイレクトまたは適切な処理を行う
        //例えば、削除後の画面にリダイレクトする場合
        router.push('/Users')
    }catch (error) {
        console.error('削除エラー:',error)
        //エラーハンドリングなど、削除エラー時の処理を行う
    }
  }

</script>
<template>
    <h1>研修生削除</h1>
    <p>ID:{{ id }}</p><br>
    <p>名前:{{  name }}</p><br>
    <p>メールアドレス:{{  email }}</p><br>
    <p>こちらのデータを削除します。本当によろしいですか？</p>
    <router-link to="/Users">
        <button @click="deleteData">削除</button>
    </router-link>
    <router-link to="/Users">
        <button>キャンセル</button>
    </router-link>
</template>
<style>
</style>