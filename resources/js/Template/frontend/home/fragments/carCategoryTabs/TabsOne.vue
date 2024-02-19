<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-7 bg-white rounded p-4">
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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
        titlePath: '/category',
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