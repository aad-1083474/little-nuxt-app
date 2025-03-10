import { defineStore } from "pinia";
import { useEmailStore } from "./EmailStore";
import { useSmsStore } from "./SmsStore";
import { usePhoneStore } from "./PhoneStore";

// Defining a Pinia store named "useCommentStore" to manage comment-related data
export const useCommentStore = defineStore("CommentStore", {
    // Initial state configuration for comment-related data
    state: () => {
        return {
            // State for email-related subscription information
            email: {
                subscribedCount: 0,
                maxAllowed: 3,
                reachedMax: false,
                isSubscribed: false
            },
            // State for SMS-related subscription information
            sms: {
                subscribedCount: 0,
                maxAllowed: 5,
                reachedMax: false,
                isSubscribed: false
            },
            // State for phone-related subscription information
            phone: {
                subscribedCount: 0,
                maxAllowed: 5,
                reachedMax: false,
                isSubscribed: false
            }
        };
    },
    // Getters to retrieve the subscription status for email, SMS, and phone
    getters: {
        isEmailSubscribed: (state) => { return state.email.isSubscribed },
        isSMSSubscribed: (state) => { return state.sms.isSubscribed },
        isPhoneSubscribed: (state) => { return state.phone.isSubscribed }
    },
    // Actions to perform subscription and unsubscription operations
    actions: {
        // Action to subscribe to notifications based on the selected method (email, SMS, or phone)
        subscribe(method) {
            // Accessing individual stores for email, SMS, and phone
            const emailStore = useEmailStore();
            const smsStore = useSmsStore();
            const phoneStore = usePhoneStore();

            // Checking if the maximum subscription limit is reached
            if (this[method].reachedMax) {
                alert("Reached max subscription");
                return;
            }

            let contacts;

            // Determining the list of contacts based on the selected subscription method
            if (method === "email") {
                contacts = emailStore.listOfContacts;
            } else if (method === "sms") {
                contacts = smsStore.listOfContacts;
            } else if (method === "phone") {
                contacts = phoneStore.listOfContacts;
            }

            // Handling scenarios where no contacts are available or subscription limit is reached
            if (contacts.length === 0) {
                alert(`Please add ${method} contacts`);
            } else {
                // Iterating through contacts to subscribe based on the maximum allowed count
                contacts.forEach((contact, index) => {
                    if (contact.subscribed === false && index <= (this[method].maxAllowed - 1)) {
                        contact.subscribed = true;
                        this[method].subscribedCount++;
                    }
                });

                // Updating the overall subscription status and checking if the maximum limit is reached
                this[method].isSubscribed = this[method].subscribedCount > 0 ? true : false;
                if (this[method].subscribedCount === this[method].maxAllowed) {
                    this[method].reachedMax = true;
                }
            }
        },

        // Action to unsubscribe from notifications based on the selected method (email, SMS, or phone)
        unsubscribe(method) {
            // Accessing individual stores for email, SMS, and phone
            const emailStore = useEmailStore();
            const smsStore = useSmsStore();
            const phoneStore = usePhoneStore();

            let contacts;

            // Determining the list of contacts based on the selected unsubscription method
            if (method === "email") {
                contacts = emailStore.listOfContacts;
            } else if (method === "sms") {
                contacts = smsStore.listOfContacts;
            } else if (method === "phone") {
                contacts = phoneStore.listOfContacts;
            }

            // Handling scenarios where no contacts are available for unsubscription
            if (contacts.length === 0) {
                alert(`No ${method} contacts to unsubscribe`);
            } else {
                // Iterating through contacts to unsubscribe based on the current subscription status
                contacts.forEach((contact) => {
                    if (contact.subscribed === true) {
                        contact.subscribed = false;
                        this[method].subscribedCount--;
                    }
                });

                // Updating the overall subscription status and resetting the reachedMax flag
                if (this[method].subscribedCount === 0) {
                    this[method].isSubscribed = false;
                    this[method].reachedMax = false;
                }
            }
        }
    }
});