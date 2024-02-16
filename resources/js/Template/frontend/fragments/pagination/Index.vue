<template>
    <div class="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
      <p class="text-corporateSecondaryBlack text-xs md:text-sm text-center">
        Showing results to 10 of 80 products
      </p>
  
      <div class="flex items-center justify-center xl:justify-end">
        <button type="button" class="px-4 py-2 text-sm font-medium rounded flex items-center gap-x-2 bg-primary border-primary text-white mr-2">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.828 7.00072L7.778 11.9507L6.364 13.3647L0 7.00072L6.364 0.636719L7.778 2.05072L2.828 7.00072Z" fill="#fff" />
          </svg>
          <span class="hidden md:block">Prev</span>
        </button>
  
        <div>
          <button class="px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded">1</button>
          <button class="px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded">2</button>
          <button class="px-4 py-2 text-sm font-bold border rounded bg-white border-borderLight">3</button>
          <button class="px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded">4</button>
          <button class="px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded">5</button>
        </div>
  
        <button type="button" class="px-4 py-2 text-sm font-medium rounded flex items-center gap-x-2 bg-primary border-primary text-white ml-2">
          <span class="hidden md:block">Next</span>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.17266 7.00072L0.222656 2.05072L1.63666 0.636719L8.00066 7.00072L1.63666 13.3647L0.222656 11.9507L5.17266 7.00072Z" fill="#fff" />
          </svg>
        </button>
      </div>
    </div>
  </template>