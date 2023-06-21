import { createRouter, createWebHistory } from 'vue-router';
import Test3 from '../views/Test3.vue';
import Users from '../views/Users.vue';
import Delete from '../views/Delete.vue';
import Update from '../views/Update.vue';
import Create from '../views/Create.vue';
import Update_Comfirm from '../views/Update_Comfirm.vue';
import Create_Confirm from '../views/Create_Confirm.vue';

const routes =[
    {
      path: '/',
      name: 'test3',
      component: Test3
    },
    {
      path: '/Users',
      name: 'users',
      component: Users
    },
    {
      path: '/Delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/Update',
      name: 'update',
      component: Update
    },
    {
      path: '/Create',
      name: 'create',
      component: Create
    },
    {
      path: '/Create_Confirm',
      name: 'create_confirm',
      component: Create_Confirm
    },
    {
      path: '/Update_Comfirm',
      name: 'update_comfirm',
      component: Update_Comfirm
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
