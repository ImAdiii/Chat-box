const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from : "Prem",
    to : "shub",
    msg : "bol",
    created_at : new Date(),
    },
    {
        from : "Bobby",
        to : "shub",
        msg : "mtt bol",
        created_at : new Date(),
    },
    {
        from : "Prem",
        to : "bobby",
        msg : "kya mt bol",
        created_at : new Date(),
    },
    {
        from : "bobby",
        to : "prem",
        msg : "kuch mtt bol",
        created_at : new Date(),
    },
    {
        from : "Prem",
        to : "bobby",
        msg : "ok",
        created_at : new Date(),
    },
    {
        from : "shub",
        to : "bobby",
        msg : "not ok",
        created_at : new Date(),
    },
    {
        from : "adi",
        to : "all",
        msg : "delete group",
        created_at : new Date(),
    },
    {
        from : "Prem",
        to : "adi",
        msg : "chup",
        created_at : new Date(),
    }
]

Chat.insertMany(allChats);