<template>
    <div class="container mx-auto mt-10 my-10 flex justify-center">
        <div class="flex items-center rounded flex-col bg-cafe-3 bg-opacity-70 w-2/5">
            <h1 class="text-xl mt-8 mb-2 font-medium text-cafe-1 font-Mon tracking-widest">
                Book Your Seats!
            </h1>
            <form action="" class="w-3/5 grid grid-cols-1" method="post" @submit.prevent="sumbitForm()">
                <div class="flex flex-col w-full mb-4">
                    <label class="font-Mon text-sm mb-1"> Name : </label>
                    <input type="text" class="bg-gray-100 h-10 text-cafe-1 font-Mon text-sm bg-cafe-3 border border-cafe-3 rounded focus:outline-none hover:border-cafe-1 focus:border-cafe-1 transition ease duration-500" v-model="name">
                </div>
                <div class="flex flex-col w-full mb-4">
                    <p class="font-Mon text-sm mb-1"> Table size : </p>
                    <div class="flex flex-row items-center justify-between font-Mon text-cafe-1">
                        <div class="flex flex-row items-center">
                            <input class="mr-1" type="radio" name="table-size" id="size1" value="2" v-model="table_size">
                            <label class="mr-1" for="size1"> 2 person </label>
                        </div>
                        <div class="flex flex-row items-center">
                            <input class="mr-1" type="radio" name="table-size" id="size2" value="4" v-model="table_size">
                            <label class="mr-1" for="size2"> 4 person </label>
                        </div>
                        <div class="flex flex-row items-center">
                            <input class="mr-1" type="radio" name="table-size" id="size3" value="6" v-model="table_size">
                            <label class="mr-1" for="size3"> 6 person </label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-4">
                    <label class="font-Mon text-sm mb-1" for="people-amt"> How many people : ( max: 8) </label>
                    <input type="text" name="people-amt" class="bg-gray-100 h-10 text-cafe-1 font-Mon text-sm bg-cafe-3 border border-cafe-3 rounded focus:outline-none hover:border-cafe-1 focus:border-cafe-1 transition ease duration-500" v-model="people_amt">
                </div>
                <div class="flex flex-col w-full mb-4">
                    <p class="font-Mon text-sm mb-1"> Floor : </p>
                    <div class="flex flex-row items-center font-Mon text-cafe-1">
                        <input class="mr-1" type="radio" name="floor" id="floor1" value="1" v-model="floor">
                        <label class="mr-8" for="floor1"> 1 </label>
                        <input class="mr-1" type="radio" name="floor" id="floor2" value="2" v-model="floor">
                        <label class="mr-4" for="floor2"> 2 </label>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-4">
                    <p class="font-Mon text-sm mb-1"> Smoking room : </p>
                    <div class="flex flex-row items-center font-Mon text-cafe-1">
                        <input class="mr-1" type="radio" name="smoke" id="smoke1" value="true" v-model="smoking">
                        <label class="mr-8" for="smoke1"> yes </label>
                        <input class="mr-1" type="radio" name="smoke" id="smoke2" value="false" v-model="smoking">
                        <label class="mr-4" for="smoke2"> no </label>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-4">
                    <label class="font-Mon text-sm mb-1"> Time : ( format: hh:mm:ss ) </label>
                    <input type="text" class="bg-gray-100 h-10 text-cafe-1 font-Mon text-sm bg-cafe-3 border border-cafe-3 rounded focus:outline-none hover:border-cafe-1 focus:border-cafe-1 transition ease duration-500" v-model="time">
                </div>
                <div class="flex justify-center mb-10">
                    <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        data() {
            return {
                name: null,
                user_id: this.$auth.user._id,
                table_size: null,
                people_amt: null,
                floor: null,
                smoking: null,
                time: null
            }
        },
        methods: {
            sumbitForm() { 
                console.log(this.name,this.table_size,this.people_amt,this.floor,this.smoking,this.time)
                this.$axios.post('/api/seats/book', {
                    name : this.name,
                    user_id: this.user_id,
                    table_size: this.table_size,
                    people_amt: this.people_amt,
                    floor: this.floor,
                    smoking: this.smoking,
                    time: this.time
                })
                .then((response) => {
                    console.log(response)
                    this.$router.push('/account/book')
                }).catch((error) => {
                    console.log(error)
                })
            }
        }

    }
</script>

<style scoped>

</style>