import { defineStore } from "pinia";
import { useCommentStore } from "./CommentStore";

// Defining a Pinia store named "useEmailStore" to manage email-related data
export const useEmailStore = defineStore("EmailStore", {
    // Initial state configuration for the email store
    state: () => {
        return {
            // Count of email contacts
            count: 0,
            // List of email contacts
            list: []
        };
    },
    // Getter to retrieve the list of email contacts from the state
    getters: {
        listOfContacts: (state) => {
            return state.list;
        }
    },
    // Actions to perform operations on the email store state
    actions: {
        // Action to increment the count of email contacts
        increment() {
            this.count++;
        },
        // Action to decrement the count of email contacts
        decrement() {
            this.count--;
        },
        // Action to add a new email contact to the list
        addContact(data) {
            // Accessing the CommentStore to check and subscribe to email notifications
            const commentStore = useCommentStore();

            // Adding the new email contact to the list
            this.list.push(data);

            // Checking if email notifications are subscribed in the CommentStore
            if (commentStore.isEmailSubscribed) {
                // Subscribing to email notifications in the CommentStore
                commentStore.subscribe("email");
            }
        }
    }
});