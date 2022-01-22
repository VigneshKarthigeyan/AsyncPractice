// Using Promises

getCustomer(1)
  .then((customer) => getTopMovies(customer))
  .then((obj) => {
    console.log("Top movies: ", obj.movies);
    sendEmail(obj.customer.email, obj.movies);
  })
  .then(() => console.log("Email sent..."))
  .catch((error) => console.log(error));

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Vignesh Karthigeyan",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies(customer) {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ customer: customer, movies: ["movie1", "movie2"] });
      }, 4000);
    });
  }
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}
