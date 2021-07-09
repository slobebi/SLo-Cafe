<template>
    <div class="sticky z-50 top-0 text-cafe-1 bg-cafe-3 font-Mon w-full h-14 shadow-xl">
        <div class="md:hidden flex flex-row justify-between h-full">
            <div class="flex items-center pl-2 py-2">
                <div class="pr-5 pl-5">
                    <h1 class="text-cafe-1 pl-2 pr-2 tracking-widest font-bold text-2xl
                    border-b border-cafe-3
                    hover:border-b hover:border-cafe-1 transition ease-out duration-500">
                    <NuxtLink to="/">SLo Cafe</NuxtLink>
                    </h1>
                </div>
                <div class="px-2 pt-2">
                    <NuxtLink class="border-b border-cafe-3 font-medium pb-1
                    hover:border-b hover:border-cafe-1 transition ease-out duration-500" 
                    to="/about">About Us</NuxtLink>
                </div>
                <div class="px-2 pt-2">
                    <NuxtLink class="border-b border-cafe-3 font-medium pb-1
                    hover:border-b hover:border-cafe-1 transition ease-out duration-500" 
                    to="/menu/beverages">Beverages</NuxtLink>
                </div>
                <div class="px-2 pt-2">
                    <NuxtLink class="border-b border-cafe-3 font-medium pb-1
                    hover:border-b hover:border-cafe-1 transition ease-out duration-500"
                    to="/menu/food">Food</NuxtLink>
                </div>
                <div v-if="$auth.loggedIn">
                    <div v-if="!$auth.user.admin" class="px-2 pt-2">
                        <NuxtLink class="border-b border-cafe-3 font-medium pb-1
                        hover:border-b hover:border-cafe-1 transition ease-out duration-500"
                        to="/account/book">Book Your Seat!</NuxtLink>
                    </div>
                </div>
                <div v-if="$auth.loggedIn">
                    <div v-if="$auth.user.admin" class="px-2 pt-2">
                        <NuxtLink class="border-b border-cafe-3 font-medium pb-1
                        hover:border-b hover:border-cafe-1 transition ease-out duration-500"
                        to="/admin">Admin</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-row-reverse items-center w-2/5">
                <transition name="slide-fade">
                    <div v-if="searchInput" class="flex relative w-2/3 flex-row-reverse 
                    pr-2 py-2 h-full">
                        <div class="text-cafe-1 w-full h-full">
                            <input type="text" v-model="InputValue" class="inputnav bg-cafe-3 h-full 
                            w-full  pr-4 pl-4 border-b border-cafe-3 hover:border-b hover:border-cafe-1 
                            focus:outline-none focus:border-b focus:border-cafe-1 transition ease-out 
                            duration-500"
                            placeholder="Search">
                        </div>
                        <button class="absolute right-0 pb-4 pr-4 h-full focus:outline-none" 
                        @click="searchVisible">
                            <fa icon="times" />
                        </button>
                    </div>
                </transition>
                <transition name="fade">
                    <div v-if="searchButton" class="pr-5">
                        <button class="transition ease duration-500 tracking-wider 
                        text-lg border-b border-cafe-3 hover:border-b hover:border-cafe-1 
                        transition ease duration-500 focus:outline-none" 
                        @click="searchVisible">Search</button>
                    </div>
                </transition>
                <transition name="fade">
                    <div v-if="searchButton" class="pl-2 pr-3 tracking-wider text-lg"> Cart(0) </div>
                </transition>
                <div v-if="$auth.loggedIn">
                    <transition name="fade">
                        <div v-if="searchButton" class="pr-3">
                            <NuxtLink to="/account/logout" class="transition ease duration-500 tracking-wider 
                            text-lg border-b border-cafe-3 hover:border-b hover:border-cafe-1 
                            transition ease duration-500 focus:outline-none" >Log Out</NuxtLink>
                        </div>
                    </transition>
                </div>
                <div v-if="$auth.loggedIn">
                    <transition name="fade">
                        <div v-if="searchButton" class="pr-3">
                            <div class="transition ease duration-500 tracking-wider 
                            text-lg border-b border-cafe-3">Welcome!</div>
                        </div>
                    </transition>
                </div>
                <div v-if="!$auth.loggedIn">
                    <transition name="fade">
                        <div v-if="searchButton" class="pr-3">
                            <NuxtLink to="/account/login" class="transition ease duration-500 tracking-wider 
                            text-lg border-b border-cafe-3 hover:border-b hover:border-cafe-1 
                            transition ease duration-500 focus:outline-none" >Log In</NuxtLink>
                        </div>
                    </transition>
                </div>
                <div v-if="!$auth.loggedIn">
                    <transition name="fade">
                        <div v-if="searchButton" class="pr-3">
                            <NuxtLink to="/account/signup" class="transition ease duration-500 tracking-wider 
                            text-lg border-b border-cafe-3 hover:border-b hover:border-cafe-1 
                            transition ease duration-500 focus:outline-none" >Sign Up</NuxtLink>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="hidden md:flex md:items-center md:justify-between md:h-full">
            <button class="pl-5 focus:outline-none" @click="searchsmVisible">
                <svg class="w-7 h-7 transition ease duration-500 border-cafe-3 hover:opacity-80 hover:shadow-md 
                    hover:rounded hover:border-2 hover:border-cafe-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <div class="flex pr-5">
                <div class="text-cafe-1 pl-2 pr-2 mr-2 tracking-widest font-bold text-2xl
                border-b border-cafe-3
                hover:border-b hover:border-cafe-1 transition ease-out duration-500">
                <NuxtLink to="/">SLo Cafe</NuxtLink>
                </div>
                <button class="focus:outline-none" @click="menusmVisible">
                    <svg class="w-7 h-7 transition ease duration-500 border-cafe-3 hover:opacity-80 hover:shadow-md 
                    hover:rounded hover:border-2 hover:border-cafe-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
        <transition name="slide-top">
            <div v-if="menusm" class="hidden md:flex md:items-center md:justify-between md:px-5 md:bg-cafe-1 md:h-12 md:w-full">
                <div class="flex items-center">
                    <NuxtLink class="text-cafe-3 pr-2 font-medium" 
                    to="/about">About Us</NuxtLink>
                    <NuxtLink class="text-cafe-3 pr-2 font-medium" 
                    to="/menu/beverages">Beverages</NuxtLink>
                    <NuxtLink class="text-cafe-3 font-medium" 
                    to="/menu/food">Food</NuxtLink>
                </div>
                <div class="flex items-center">
                    <NuxtLink class="text-cafe-3 pr-2 font-medium" to="/account/signup">Sign Up</NuxtLink>
                    <NuxtLink class="text-cafe-3 pr-2 font-medium" to="/account/login">Log In</NuxtLink>
                </div>
            </div>
        </transition>
        <transition name="slide-top">
            <div v-if="searchsm" class="hidden md:flex md:items-center md:pl-5 md:bg-cafe-1 md:h-12 md:w-full">
                <input type="text" v-model="InputValue" class="inputnav-sm bg-cafe-1 h-4/5 text-cafe-3
                    w-4/5  pr-4 pl-4 border-b border-cafe-1 hover:border-b hover:border-cafe-3 
                    focus:outline-none focus:border-b focus:border-cafe-3 transition ease-out 
                    duration-500" placeholder="Search">
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                InputValue : '',
                searchButton : true,
                searchInput : false,
                menusm : false,
                searchsm : false
            }
        },
        methods: {
            searchVisible() {
                this.searchInput = !this.searchInput
                this.searchButton = !this.searchButton
                this.InputValue = ''
            },
            menusmVisible() {
                this.menusm = !this.menusm
                if(this.searchsm === true){
                    this.searchsm = false
                }
            },
            searchsmVisible() {
                this.searchsm = !this.searchsm
                if(this.menusm === true){
                    this.menusm = false
                }
            }
        }
    }
</script>

<style scoped>
.inputnav::placeholder{
    color: #45230f;
    opacity: 0.7;
}
.inputnav {
    appearance: none;
}
.inputnav-sm::placeholder{
    color: #c08267;
    opacity: 0.7;
}
.inputnav-sm {
    appearance: none;
}
.fade-enter-active {
  transition: all .2s ease-out;
  transition-delay: 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active  {
  transition: all .2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  width: 0%;
}
.slide-top-enter,
.slide-top-leave-to {
    height: 0%;
}    
.slide-top-enter-active,
.slide-top-leave-active  {
  transition: all .2s ease-in;
}

</style>