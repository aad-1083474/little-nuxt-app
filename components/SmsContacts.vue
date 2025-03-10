<script setup>
import { useSmsStore } from "@/store/SmsStore";
import { faker } from '@faker-js/faker';
const store = useSmsStore();
function addSMS() {
    store.addContact({ name: faker.string.numeric(10), subscribed: false });
    store.increment();
}
</script>
<template>
    <div class="bg-white h-72 shadow-xl rounded-box overflow-y-scroll">
        <div class="flex flex-rows items-center bg-blue-900 p-2 shadow-lg mb-3">
            <h1 class="font-bold text-white">SMS</h1>
            <button class="btn btn-square btn-white ml-auto" @click="addSMS">Add</button>
        </div>
        <div v-if="store.count === 0" class="text-center">
            Add SMS contacts
        </div>
        <div v-else>
            <ul class="divide-y flow-root">
                <li v-for="sms in store.list" class="p-3 font-semibold">
                    {{ sms.name }}
                    <span v-if="sms.subscribed" class="float-right">
                        <Icon name="ic:outline-sms" color="green" size="2em" />
                    </span>
                    <span v-else class="float-right">
                        <Icon name="ic:outline-sms-failed" color="red" size="2em" />
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>