<template>
  <div class="container mx-auto">
    <div class="flex justify-center mb-16 mt-16">
      <div class="flex flex-col w-2/3 text-cafe-1">
        <div class="flex py-4 text-5xl md:text-2xl font-Indie">Fulfill your own desire...</div>
        <div class="flex flex-row-reverse py-4 text-5xl md:text-2xl font-Indie">...only at SLo Cafe</div>
      </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="grid grid-cols-2 md:grid-cols-1 md:gap-6 shadow-md px-16 py-8 gap-32 bg-cafe-3 bg-opacity-70">
        <div class="flex items-center md:justify-center justify-end">
          <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
            <img src="~/assets/images/beverages.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="beverages">
            <NuxtLink to="/menu/beverages" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
            <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
            BEVERAGES 
            </div>
            </NuxtLink>
          </div>
        </div>
        <div class="h-full flex flex-col justify-center">
          <h1 class="text-xl text-cafe-1 uppercase font-semibold pb-4 tracking-widest font-Mon">
            Slo Cafe Beverages
          </h1>
          <p class="text-md text-cafe-1 font-medium font-Mon pb-4">
            Amazing coffees from around the world. Handcrafted beverages to discover and enjoy. We love bringing you these things.
          </p>
          <NuxtLink to="/menu/beverages">
            <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">
              EXPLORE
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-1 md:gap-6 px-16 shadow-md py-8 gap-32 bg-cafe-2 bg-opacity-50">
        <div class="h-full md:order-last flex flex-col justify-center">
          <h1 class="text-xl text-cafe-1 uppercase font-semibold pb-4 tracking-widest font-Mon">
            Slo Cafe Fresh Foods
          </h1>
          <p class="text-md text-cafe-1 font-medium font-Mon pb-4">
            Our pastries and sandwiches are made with high-quality, simple ingredients. So all the goodness you taste is real food, simply delicious.
          </p>
          <NuxtLink to="/menu/food">
            <button class="w-3/5 bg-cafe-3 bg-opacity-0 border border-cafe-1 h-10 rounded text-cafe-1 font-Mon tracking-widest hover:bg-cafe-1 hover:text-cafe-3 hover:border-cafe-1 hover:border focus:outline-none transition ease duration-500">
              EXPLORE
            </button>
          </NuxtLink>
        </div>
        <div class="flex items-center md:justify-center justify-star">
          <div class="relative group bg-cafe-5 rounded shadow-md bg-gray-600 overflow-hidden">
            <img src="~/assets/images/food.jpg" class="group-hover:opacity-50 transition ease duration-500" alt="food">
            <NuxtLink to="/menu/food" class="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease duration-500">
              <div class="font-Mon text-xl font-semibold text-cafe-1 tracking-widest"> 
                FOODS
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
