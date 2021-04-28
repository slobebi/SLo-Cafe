<template>
    <div class="container mx-auto mb-10 mt-10 flex justify-center">
        <div class="flex items-center rounded flex-col bg-cafe-3 bg-opacity-70 w-2/5">
            <h1 class="text-xl mt-8 mb-2 font-medium text-cafe-1 font-Mon tracking-widest">
                Your Booking: 
            </h1>
            <div class="flex flex-col items-center text-md my-5 font-Mon" v-if="books.length">
                <NuxtLink class="border-b border-cafe-3 border-opacity-0 mb-1 hover:border-cafe-1 transition ease duraiton-500" :to="'/account/book/' + book._id" v-for="book in books" :key="book._id">{{ book.name }} at {{ book.time }}</NuxtLink>
            </div>
            <div class="flex flex-col items-center text-md my-5 font-Mon" v-else>
                No Booking yet:(
            </div>
            <NuxtLink to="/account/addbook" class="flex justify-center w-full mb-10">
                <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">Add New Booking</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        async asyncData({ $axios, $auth }) {
            try{
                const id = await $auth.user._id
                const {data} = await $axios.get('/api/seats/' + id)
                return {
                    books : data
                }
            } catch (error) {
                return{
                    books : []
                }
            }
        },
    }
</script>

<style scoped>

</style>