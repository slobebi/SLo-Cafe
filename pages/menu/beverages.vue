<template>
    <div class="container mx-auto mt-10 mb-10">
        <div class="mx-10 grid grid-cols-1">
            <h1 class="text-2xl text-cafe-1 mb-5 w-full tracking-widest font-medium font-Mon">
                SLo Bevereages
            </h1>
            <h2 class="text-lg text-cafe-1 mb-3 w-full font-medium font-Mon">
                Bringing you a perfect cup of coffee. It’s what got us started in 1971, and it’s what keeps us going today. (That, plus the coffee.)
            </h2>
            <p class="text-sm text-cafe-1 mb-5 w-full font-medium font-Mon">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, at sed! Excepturi dolore cumque incidunt dignissimos officia, voluptates eius, nobis maiores ut quidem beatae exercitationem repudiandae magnam aliquam accusamus tempora obcaecati unde eos tenetur sapiente, fuga pariatur! Beatae ab veniam, autem sit in vero error dolore. Tempora delectus maxime soluta.
            </p>
        </div>
        <div class="mx-10 grid grid-cols-3 gap-4 md:grid-cols-1">
            <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
                <img src="~/assets/images/espresso-coffee.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="beverages">
                <NuxtLink to="/menu/beverages/espresso" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
                <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
                ESPRESSO COFFEE 
                </div>
                </NuxtLink>
            </div>
            <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
                <img src="~/assets/images/brewed-coffee.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="beverages">
                <NuxtLink to="/menu/beverages/brewed" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
                <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
                BREWED COFFEE
                </div>
                </NuxtLink>
            </div>
            <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
                <img src="~/assets/images/blended-coffee.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="beverages">
                <NuxtLink to="/menu/beverages/blended" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
                <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
                BLENDED COFFEE
                </div>
                </NuxtLink>
            </div>
            <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
                <img src="~/assets/images/non-coffee.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="beverages">
                <NuxtLink to="/menu/beverages/non-coffee" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
                <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
                NON COFFEE
                </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>