<template>
    <h2 v-if="isLoading">Espera por favor...</h2>

    <h2 v-else>Usuarios</h2>

    <h5 v-if="errorMessage" >{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <user-list 
            :users="users"
            v-slot="{ user }">
            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            <span>{{ user.email }}</span>

        </user-list>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Página: {{  currentPage }}</span>

</template>

<script>
import useUsers from '../composables/useUsers'
import UserList from '../components/UserList.vue'

export default {
    components: { UserList },
    setup(){

        const { isLoading, errorMessage, users, prevPage, nextPage, currentPage } = useUsers();
        console.log(users.value, "view")
        return {
            isLoading, errorMessage, users, prevPage, nextPage, currentPage
        }

    }

}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}

div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
}
</style>