<script setup>
import { useEmailStore } from "~/store/EmailStore";
import { faker } from '@faker-js/faker';

// Using the useEmailStore to create a reactive store for email-related data
const store = useEmailStore();

// Function to add a new email contact to the store
function addEmail() {
    // Generating a fake email address using faker and adding it to the store
    store.addContact({ name: faker.internet.email(), subscribed: false });
    // Incrementing the count in the store
    store.increment();
}
</script>

<template>
    <!-- Container for the Email Contacts component -->
    <div class="bg-white h-72 shadow-xl rounded-box overflow-y-scroll">
        <!-- Header section with styling for the "Email" component -->
        <div class="flex flex-rows items-center bg-blue-900 p-2 shadow-lg mb-3">
            <h1 class="font-bold text-white">Email</h1>
            <!-- Button to add a new email contact, with a white square style -->
            <button class="btn btn-square btn-white ml-auto" @click="addEmail">Add</button>
        </div>

        <!-- Display section for email contacts, conditionally showing a message if no contacts are added -->
        <div v-if="store.count === 0" class="text-center">
            Add email contacts
        </div>

        <!-- List of email contacts with dynamic rendering based on store data -->
        <div v-else>
            <ul class="divide-y flow-root">
                <!-- Iterating over the list of email contacts in the store -->
                <li v-for="email in store.list" class="p-3 font-semibold">
                    <!-- Displaying the name of the email contact -->
                    {{ email.name }}
                    <!-- Displaying an icon based on the subscription status of the email contact -->
                    <span v-if="email.subscribed" class="float-right">
                        <!-- Icon for subscribed status in green color -->
                        <Icon name="mdi:email-plus-outline" color="green" size="2em" />
                    </span>
                    <span v-else class="float-right">
                        <!-- Icon for unsubscribed status in red color -->
                        <Icon name="mdi:email-remove-outline" color="red" size="2em" />
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>