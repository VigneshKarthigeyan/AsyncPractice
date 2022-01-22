// Structured callback function

getCustomer(1, dotheNeed);

function dotheNeed(customer) {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies(customer, getTopMovies2);
  }
}

function getTopMovies2(customer, movies) {
  console.log("Top movies: ", movies);
  sendEmail(customer.email, movies, logger);
}

function logger() {
  console.log("Email sent...");
}

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Vignesh Karthigeyan",
      isGold: true,
      email: "email",
    });
  }, 4000);
}

function getTopMovies(customer, callback) {
  setTimeout(() => {
    callback(customer, ["movie1", "movie2"]);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}
