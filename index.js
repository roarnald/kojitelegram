const Bot = require("node-telegram-bot-api");
const request = require("request");

const token = require("./token");
const url = "https://launchlibrary.net/1.3/launch";
const trigger = "I want to travel!";

const bot = new Bot(token, { polling: true });

const trigger1 = "I LOVE RONALD THIAN";
const trigger2 = "1TODAY LOVE LETTER";
const trigger3 = "";
const trigger4 = "";
const trigger5 = "";

const whatIsThis = "What is this?";

bot.on("message", msg => {
  switch (msg.text.toString()) {
    case "/start":
      bot.sendMessage(msg.chat.id, "This, is Project KŌJI.", {
        reply_markup: {
          keyboard: [["Activate!"], ["HOCUS POCUS"], [trigger1], [whatIsThis]]
        }
      });
      break;
    case whatIsThis:
      bot.sendMessage(
        msg.chat.id,
        `This is KŌJI，幸二. From Japanese 幸 (kō) meaning "happiness, good luck", 二 (ji) meaning "two" or 次 (ji) meaning "next".`
      );
      break;
    case trigger1:
      bot.sendMessage(
        msg.chat.id,
        "ACCESS GRANTED 🔐✅: Hello. Welcome to Project KŌJI 💮- Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present. Name the first 'today'. Reply <1TODAY><SPACE><YOUR_ANSWER>"
      );
      break;

    case msg.text
      .toString()
      .toUpperCase()
      .contains("1TODAY "):
      break;

    case trigger2:
      bot.sendMessage(msg.chat.id, "Welcome, to Project KŌJI.");
      break;
    case trigger3:
      bot.sendMessage(msg.chat.id, "Welcome, to Project KŌJI.");
      break;
    case trigger4:
      bot.sendMessage(msg.chat.id, "Welcome, to Project KŌJI.");
      break;
    case trigger5:
      bot.sendMessage(msg.chat.id, "Welcome, to Project KŌJI."); // send link to google drive -> locked
      break;
    case "Activate!" || "HOCUS POCUS":
      bot.sendMessage(msg.chat.id, "ACCESS DENIED.");
      break;
    default:
      bot.sendMessage(msg.chat.id, "Try again.");
      break;
  }
});
// if contains <Ans> -> send
