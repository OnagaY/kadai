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
      <tr v-for="item in users" :key="item.id">
        <td class="td">{{ item.id }}</td>
        <td class="td">{{ item.name }}</td>
        <td class="td">{{ item.email }}</td>
        <router-link to="/Delete">
          <td><button type="button"></button></td>
        </router-link>
        <router-link to="/Update">
        <td><button type="button"></button></td>
      </router-link>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("http://localhost:8080/Users")
      .then(res => {
        if (!res.ok) {
          throw new Error("network error. we couldn't call the API.");
        }
        return res.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        this.users = jsonData;
      })
      .catch(err => console.error(err));
  },
};
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
</style>
