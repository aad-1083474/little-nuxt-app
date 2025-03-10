import { defineStore } from "pinia";
import { useCommentStore } from "./CommentStore";

export const useSmsStore = defineStore("SmsStore", {
    state: () => {
        return {
            count: 0,
            list: []
        };
    },
    getters: {
        listOfContacts: (state) => {
            return state.list
        }
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        addContact(data) {
            const commentStore = useCommentStore();
            this.list.push(data);
            if (commentStore.isSMSSubscribed) {
                commentStore.subscribe("sms");
            }
        }
    }
});