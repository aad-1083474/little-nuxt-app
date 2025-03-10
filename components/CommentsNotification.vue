<script setup>
// Importing the useCommentStore function from the CommentStore module
import { useCommentStore } from "@/store/CommentStore";

// Creating a reactive store for comment-related data using useCommentStore
const store = useCommentStore();

// Async function to handle subscription changes based on the selected method
async function handleSubscription(method, e) {
    // Checking the checkbox status and subscribing/unsubscribing accordingly
    if (e.target.checked) {
        await store.subscribe(method);
    } else {
        await store.unsubscribe(method);
    }

    // Updating the checkbox state based on the subscription status
    if (method === 'email') {
        e.target.checked = store.isEmailSubscribed;
    } else if (method === 'sms') {
        e.target.checked = store.isSMSSubscribed;
    } else if (method === 'phone') {
        e.target.checked = store.isPhoneSubscribed;
    }
}
</script>

<template>
    <!-- Card component for Comments Notification Settings -->
    <div class="card bg-base-100 p-3 mb-5 shadow-xl">
        <!-- Grid layout with two columns for information and subscription options -->
        <div class="grid grid-cols-2 gap-2">
            <!-- Section with information about Comments Notifications -->
            <div>
                <h5 class="card-title">Comments</h5>
                <p>
                    Receive notifications when someone comments on your documents or mentions you.
                </p>
            </div>

            <!-- Section with subscription options for Email, SMS, and Phone -->
            <div>
                <!-- Flex container for checkbox inputs -->
                <div class="flex flex-col">
                    <!-- Email Subscription checkbox -->
                    <div class="form-control w-52 ml-auto">
                        <label class="cursor-pointer label">
                            <span class="label-text">Email</span>
                            <input type="checkbox" class="toggle toggle-success"
                                @click="handleSubscription('email', $event)" />
                        </label>
                    </div>
                    <!-- SMS Subscription checkbox -->
                    <div class="form-control w-52 ml-auto">
                        <label class="cursor-pointer label">
                            <span class="label-text">SMS</span>
                            <input type="checkbox" class="toggle toggle-success"
                                @click="handleSubscription('sms', $event)" />
                        </label>
                    </div>
                    <!-- Phone Subscription checkbox -->
                    <div class="form-control w-52 ml-auto">
                        <label class="cursor-pointer label">
                            <span class="label-text">Phone</span>
                            <input type="checkbox" class="toggle toggle-success"
                                @click="handleSubscription('phone', $event)" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>