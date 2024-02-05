<template>
    <div class="grid grid-cols-6 gap-7 bg-white p-4">
        <ul 
            v-for="category in categories" 
            :key="category?.title"
        >
            <li class="mb-1">
                <h4>
                    <Link 
                        :href="category?.titlePath" 
                        class="font-bold hover:underline"
                    >
                        {{ category?.title }}
                    </Link>
                </h4>
            </li>
            <li 
                v-for="subCategory in category?.subCategories" 
                :key="subCategory?.path"
            >
                <Link 
                    :href="subCategory?.path" 
                    class="text-sm hover:underline hover:text-primary"
                >
                    {{ subCategory?.name }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

const categories = [
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Diesel',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Diesel',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Diesel',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Diesel',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            },
            {
                name: 'Petrol',
                path: '/'
            }
        ]
    },
    {
        title: 'Delivery vans',
        titlePath: '/',
        subCategories: [
            {
                name: 'Petrol',
                path: '/'
            },
            {
                name: 'Diesel',
                path: '/'
            },
            {
                name: 'Electric/Petrol',
                path: '/'
            }
        ]
    }
]
</script>