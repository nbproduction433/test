module.exports = async (client) => {
  let statuses = [
    "discord.gg/uyxZWkkg5s"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};