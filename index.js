const Bot = require("node-telegram-bot-api");
const request = require("request");

const token = require("./token");

const bot = new Bot(token, { polling: true });

const trigger1 = "I LOVE RONALD THIAN";
const hintTrigger = "HINT ZELDA";
const trigger2 = "1TODAY LOVE LETTER";

const whatIsThis = "What is this?";

bot.on("message", msg => {
  if (
    msg.text.toString().includes("1TODAY ") &&
    msg.text.toString() !== trigger2
  ) {
    bot.sendMessage(
      msg.chat.id,
      "....Are you... sure? Let me tell you what. I'll cut you a deal - \n\nTell me the name of the favourite game and I'll let you in on a hint. \n\nREPLY <HINT><SPACE><YOUR_ANSWER>"
    );
  } else {
    switch (msg.text.toString()) {
      case "/start":
        bot.sendMessage(
          msg.chat.id,
          "This, is Project KŌJI 🔒.\n\nUse the default options to open the lock.",
          {
            reply_markup: {
              keyboard: [
                ["Activate!"],
                ["HOCUS POCUS"],
                [trigger1],
                [whatIsThis]
              ]
            }
          }
        );
        break;

      case whatIsThis:
        bot.sendMessage(
          msg.chat.id,
          `This is KŌJI，幸二. \nFrom Japanese 幸 (kō) meaning "happiness, good luck", 二 (ji) meaning "two" or 次 (ji) meaning "next".`
        );
        break;

      case trigger1:
        bot.sendMessage(
          msg.chat.id,
          "ACCESS GRANTED 🔐✅\n\nHello. \nWelcome to Project KŌJI 💮\n\nYesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present. Name the first 'today'. Reply <1TODAY><SPACE><YOUR_ANSWER>"
        );
        break;

      case hintTrigger:
        bot.sendMessage(
          msg.chat.id,
          "Cool cool cool cool cool. \n\nHINT: Sometimes you don't have to look for it. Something he carries around always, without fail. \nREPLY <1TODAY><SPACE><YOUR_ANSWER>"
        );
        break;
      case trigger2:
        for (let i = 0; i < 12; i++) {
          bot.sendMessage(msg.chat.id, "BINGO!!!! 🛎🛎🛎🛎🛎🛎🛎🛎🛎🛎");
        }
        bot.sendMessage(
          msg.chat.id,
          "BINGO!!!!  Very well done!!!!! https://drive.google.com/file/d/1aEDsYqh77sQ_B1wtKcISU7FAzc2XadNC/view?usp=sharing \n\nCongrats! The key to the future is in the identity of the baby sister."
        );
        break;
      case "Activate!":
      case "HOCUS POCUS":
        bot.sendMessage(msg.chat.id, "❌ ACCESS DENIED. ");
        break;
      default:
        bot.sendMessage(msg.chat.id, "Try again.");
        break;
    }
  }
});
