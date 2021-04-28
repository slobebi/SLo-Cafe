<template>
    <div class="w-full h-full pt-1">
        <div class="grid grid-cols-1 gap-1">
            <div class="bg-cafe-5 h-16 px-8 flex items-center shadow-md">
                <div class="pr-4">
                    <img class="w-7 h-7 text-cafe-1" src="~/assets/images/icons/facebook.svg" alt="facebook">
                </div>
                <div class="pr-4">
                    <img class="w-7 h-7 text-cafe-1" src="~/assets/images/icons/instagram.svg" alt="instagram">
                </div>
                <div class="pr-4">
                    <img class="w-7 h-7 text-cafe-1" src="~/assets/images/icons/twitter.svg" alt="twitter">
                </div>
                <div class="pr-4">
                    <img class="w-7 h-7 text-cafe-1" src="~/assets/images/icons/pinterest.svg" alt="pinterest">
                </div>
            </div>
            <div class="bg-cafe-3 pt-8 pb-32 px-16">
                <div class="grid grid-cols-11 md:grid-cols-1 gap-16">
                    <div class="flex flex-col col-span-4 md:col-span-1">
                        <h1 class="uppercase font-Mon text-cafe-1 text-sm font-medium tracking-widest pb-4">
                            About Us
                        </h1>
                        <p class="font-Mon text-cafe-1 text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui dignissimos error omnis ea eveniet distinctio dolore. Vitae voluptate non possimus in porro odio distinctio quia doloremque voluptas enim, a quam maiores nihil officiis expedita voluptatibus quis consectetur perspiciatis. Libero saepe officia, laborum iusto animi placeat ducimus veritatis quisquam natus?</p>
                    </div>
                    <div class="flex flex-col col-span-2 md:col-span-1">
                        <h1 class="uppercase font-Mon text-cafe-1 text-sm font-medium tracking-widest pb-4">
                        Eat Now!
                        </h1>
                        <div class="pb-4">
                            <h2 class="pb-2 text-cafe-1 text-sm font-medium tracking-widest">
                                Beverages:
                            </h2>
                            <NuxtLink to="/menu/beverages/espresso">
                                <h3 class="text-cafe-1 text-xs tracking-widest border-b border-cafe-3 hover:border-cafe-1 transition ease duration-500">
                                    Espresso Coffee
                                </h3>
                            </NuxtLink>
                            <NuxtLink to="/menu/beverages/brewed">
                                <h3 class="text-cafe-1 text-xs tracking-widest border-b border-cafe-3 hover:border-cafe-1 transition ease duration-500">
                                    Brewed Coffee
                                </h3>
                            </NuxtLink>
                            <NuxtLink to="/menu/beverages/blended">
                                <h3 class="text-cafe-1 text-xs tracking-widest border-b border-cafe-3 hover:border-cafe-1 transition ease duration-500">
                                    Blended Coffee
                                </h3>
                            </NuxtLink>
                            <NuxtLink to="/menu/beverages/non-coffee">
                                <h3 class="text-cafe-1 text-xs tracking-widest border-b border-cafe-3 hover:border-cafe-1 transition ease duration-500">
                                    Non-Coffee
                                </h3>
                            </NuxtLink>
                        </div>
                        <div>
                            <h2 class="pb-2 text-cafe-1 text-sm font-medium tracking-widest">
                                Foods:
                            </h2>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Starters
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Main Course
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Side Dish
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Dessert
                            </h3>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-2 md:col-span-1">
                        <h1 class="uppercase font-Mon text-cafe-1 text-sm font-medium tracking-widest pb-4">
                        How Can We Help
                        </h1>
                        <div>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Contact Us
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Shipping
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Returns
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                About Us
                            </h3>
                            <h3 class="text-cafe-1 text-xs tracking-widest">
                                Career
                            </h3>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-3 md:col-span-1">
                        <h1 class="uppercase font-Mon text-cafe-1 text-sm font-medium tracking-widest pb-4">
                            News
                        </h1>
                        <p class="font-Mon text-cafe-1 text-xs pb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <input class="bg-cafe-3 text-cafe-1 border h-10 rounded border-cafe-2 p-1 mb-4 focus:outline-none focus:border-cafe-1 focus:border transition ease duration-500" type="email" name="email" id="email" placeholder="someone@example.com">
                        <button class="w-3/5 bg-cafe-3 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#email::placeholder{
    color: #45230f;
    opacity: 0.5;
}
</style>