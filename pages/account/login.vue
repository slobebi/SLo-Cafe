<template>
    <div class="container mx-auto mt-10 mb-10 flex justify-center">
        <div class="flex items-center rounded flex-col bg-cafe-3 bg-opacity-70 w-2/5 md:w-4/5">
            <h1 class="text-xl mt-8 mb-2 font-medium text-cafe-1 font-Mon tracking-widest">
                Log In
            </h1>
            <form action="" class="w-3/5 grid grid-cols-1" method="post" @submit.prevent="submitForm()">
                <div class="flex flex-col w-full mb-4">
                    <label class="font-Mon text-sm mb-1" for="">Email :</label>
                    <input type="email" name="email" id="email" class="bg-gray-100 h-10 bg-cafe-3 border border-cafe-3 rounded focus:outline-none hover:border-cafe-1 focus:border-cafe-1 transition ease duration-500" v-model="email">
                    <div class="text-sm font-Mon text-cafe-1" v-if="errors && errors.email">
                      {{ errors.email.msg }}
                    </div>
                </div>
                <div class="flex flex-col w-full mb-4">
                    <label class="font-Mon text-sm mb-1" for="">Password :</label>
                    <input type="password" name="password" id="password" class="bg-gray-100 h-10 bg-cafe-3 border border-cafe-3 rounded focus:outline-none hover:border-cafe-1 focus:border-cafe-1 transition ease duration-500" v-model="password">
                    <div class="text-sm font-Mon text-cafe-1" v-if="errors && errors.password">
                        {{ errors.password.msg }}
                    </div>
                </div>
                <div class="flex justify-center mb-10">
                <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">Submit</button>
                </div>
                <div class="flex justify-center mb-10 text-cafe-1 font-Mon text-sm" v-if="login_error">{{ login_error }}</div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        auth: 'guest',
        data(){
            return {
                email: null,
                password: null,
                errors: null,
                login_error: null,
            }
        },
        methods:{
            submitForm(){
                this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                    }).then((response) => {
                        console.log(this.$auth.user)
                    })
                    .catch( (error) => {
                    console.log(error)
                    if(error.response.data.message){
                        this.login_error = error.response.data.message
                        }
                    })
                }
        }
    }
</script>

<style scoped>

</style>