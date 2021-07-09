<template>
    <div class="container mx-auto mb-10 mt-10 flex justify-center">
        <div class="flex items-center rounded flex-col bg-cafe-3 bg-opacity-70 w-2/5 md:w-4/5">
            <h1 class="text-xl mt-8 mb-2 font-medium text-cafe-1 font-Mon tracking-widest">
                Your Booking detail:
            </h1>
            <div class="flex items-center flex-col mb-4 rounded border border-cafe-1">
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Name: {{ book.name }}
                </h2>
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Table Size: for {{ book.table_size }} people
                </h2>
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Number of People: {{ book.people_amt }} people
                </h2>
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Floor: {{ book.floor }}
                </h2>
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Smoking Room: {{ book.smoking }}
                </h2>
                <h2 class="text-xl m-4 font-medium text-cafe-1 font-Mon">
                    Booked for: {{ book.time }} WIB
                </h2>
            </div>
            <div class="flex justify-center w-full mb-2">
                <button @click="deleteRecord()" class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">Delete</button>
            </div>
            <NuxtLink to="/account/book" class="flex justify-center w-full mb-10">
                <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">Back</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        async asyncData(context){
            const {data} = await context.$axios.get('/api/seats/seat/' + context.route.params.id)
            return {
                book : data
            }      
        },
        methods: {
            deleteRecord(){
                if(confirm("Are you sure?") === true){
                    this.$axios.delete('/api/seats/seat/' + this.$route.params.id)
                    .then((response) => {
                        if(response.data._id){
                        this.$router.push('/account/book')
                        }
                    })
                    .catch( (error) => {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>