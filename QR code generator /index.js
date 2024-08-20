//Inquirer
//qr-image
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "message" : "Type in your URL :",
        name :"URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers)
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {//url = data that we got at xonst url
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  //Steps
  //1 se the inquirer npm package to get user input
  //2. Use the qr-imagenpm package to turn the user entered into a Qr code image 
  //3. Create a txt file to save the user input using native fs node module


  //For Multipe URL Qr generator

// 1. Prompt for Multiple URLs
// Instead of asking for just one URL, you can modify the inquirer prompt to accept multiple URLs. You can use the input type for simplicity and allow users to enter multiple URLs separated by commas.

// 2. Generate QR Codes for Each URL
// After receiving the list of URLs, iterate over them and generate a QR code for each one. Save each QR code image with a unique filename.

// 3. Save Each QR Code Image
// Generate and save each QR code image using a unique filename, typically incorporating an index or part of the URL in the filename to differentiate them.



// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';

// // Prompt user for multiple URLs
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'URLs',
//       message: 'Type in your URLs separated by commas:',
//       filter: (input) => input.split(',').map(url => url.trim()) // Split URLs and trim spaces
//     }
//   ])
//   .then((answers) => {
//     const urls = answers.URLs;

//     // Generate QR codes for each URL
//     urls.forEach((url, index) => {
//       const qr_svg = qr.image(url);
//       const qrFilename = `qr_img_${index + 1}.png`;
//       qr_svg.pipe(fs.createWriteStream(qrFilename));

//       // Save URL to a file with a unique name
//       fs.writeFile(`URL_${index + 1}.txt`, url, (err) => {
//         if (err) throw err;
//         console.log(`The file for URL ${index + 1} has been saved!`);
//       });
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//       console.error('Prompt couldn\'t be rendered in the current environment');
//     } else {
//       // Something else went wrong
//       console.error('An error occurred:', error);
//     }
//   });
