if (process.env.NODE_ENV === "production") {
  try {
    console.log("NewRelic is starting...");
    require("newrelic");
  } catch (error) {
    console.log("There happened an error during NewRelic starting", error);
  }
}

module.exports = {
  reactStrictMode: true,
};
