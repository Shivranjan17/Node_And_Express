import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */




// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route to render the home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Route to render the about page
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Route to render the contact page
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Route to handle form submission from the contact page
app.post("/contact", (req, res) => {
  const { name, email, text } = req.body;
  console.log("Form Submission Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Comment:", text);

  // Respond back to the client (you can also redirect to a thank you page or home)
  res.send("Thank you for your submission!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
