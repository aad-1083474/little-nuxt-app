
<template>
  <title>States tuto</title>
  <div class="container mx-auto bg-inherit h-screen p-5">

    <div class="bg-blue-50 shadow-md h-1/2 mb-2">
      <div class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">Contact Settings</div>
      <div class="grid grid-cols-3 gap-4 p-5">
        <EmailContacts />
        <SmsContacts />
        <PhoneContacts />
      </div>
    </div>

    
    <div class="bg-blue-50 shadow-md h-1/2">
      <div class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">Notification Settings</div>
      <div class="grid grid-cols-1 p-5">
        <CommentsNotification />
      </div>
    </div>
  </div>
</template>