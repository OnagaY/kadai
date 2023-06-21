<template>
  <table id="data-table">
    <thead>
      <h1><nobr>研修生一覧</nobr></h1>
      <router-link to="/Create">
      <button type="button">新規登録</button>
    </router-link>
      <tr>
        <th class="th">ID</th>
        <th class="th">名前</th>
        <th class="th">メールアドレス</th>
        <td><p><nobr>削除</nobr></p></td>
        <td><p><nobr>編集</nobr></p></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in displayedUsers" :key="item.id">
        <td class="td">{{ item.id }}</td>
        <td class="td">{{ item.name }}</td>
        <td class="td">{{ item.email }}</td>
       <router-link to="/Delete">
          <td><button @click="sakujo(item)" type="button">削除</button></td>
        </router-link>
        <router-link to="/Update">
        <td><button @click="idbutton(item)" type="button">編集</button></td>
      </router-link>
      </tr>
    </tbody>
  </table>
  <div>
    <!-- ... -->
    <div class="pagination"> 
    <button @click="goToPreviousPage" :disabled="currentPage === 1">＜</button>
    <button
  v-for="index in Math.min(totalPages - currentPage + 1, 2)"
  :key="currentPage - 1 + index"
  @click="goToPage(currentPage - 1 + index)"
  :class="{ 'highlight': currentPage === (currentPage - 1 + index) }"
  :disabled="currentPage === (currentPage - 1 + index)"
>
  {{ currentPage - 1 + index }}
</button>


    <span v-if="totalPages > 3 && currentPage <= totalPages - 2">...</span>
    <button
  v-if="currentPage < totalPages && currentPage + 1 < totalPages"
  :key="totalPages"
  @click="goToLastPage"
  :class="{ 'highlight': currentPage === totalPages }"
>
  {{ totalPages }}
</button>

    <button @click="goToNextPage" :disabled="currentPage === totalPages">＞</button>
    
    </div>
  </div>

</template>

<script setup>
import { CounterStore } from '../stores/counter.js'
import { ref, computed} from 'vue'
import { onMounted } from 'vue';
const store = CounterStore();
// ...

const currentPage = ref(1); // 現在のページ
const itemsPerPage = 10; // 1ページあたりのアイテム数
const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage)); // 総ページ数
const goToPage = (page) => {
  currentPage.value = page;
}

// 前のページへ移動するメソッド
const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 次のページへ移動するメソッド
const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};


// 現在のページに表示するユーザー一覧を計算する算出プロパティ
const displayedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return users.value.slice(startIndex, endIndex);
});

// 最初に行くボタン - 最初のページに移動するメソッド
const goToFirstPage = () => {
  currentPage.value = 1;
};

// 最後に行くボタン - 最後のページに移動するメソッド
const goToLastPage = () => {
  currentPage.value = totalPages.value;
};


     const idbutton = (item) => {
      store.id = item.id
     }

     const sakujo = (item) => {
       store.id = item.id 
       store.name = item.name
       store.email = item.email
     }

//  export default {
//    data() {
//      return {
//        users: [],
//      };
//   },

const users = ref([]);

  onMounted(() => {
    fetch("http://localhost:8080/api/users")
      .then(res => {
        if (!res.ok) {
          throw new Error("network error. we couldn't call the API.");
        }
        return res.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        users.value = jsonData;
      })
      .catch(err => console.error(err));

  });

</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
.btn {
  width: 50px;

  margin: 20%;
}

.th,
.td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}

.pagination span {
  margin: 0 10px;
}
.pagination button.highlight {
    background-color: #ffcc00;
    color: white;
    font-weight: bold;
  }
</style>
