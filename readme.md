# Daily Coding Problem Scraper

This repository contains a Node.js script that allows you to scrape Daily Coding Problems from your Gmail account, store them as HTML and Markdown files, and commit them to a Git repository. The script utilizes Google Cloud Platform's OAuth 2.0 to authorize and access the Gmail API.
<br></br>

## Problem Faced

As a subscriber to the Daily Coding Problem service, I often missed the daily coding problems sent via email. This led to a loss of track and missed opportunities to practice coding regularly. To solve this problem, I developed a solution that automates the retrieval and storage of these problems so that I can access and solve them at my convenience.
<br></br>

## Solution

To address the problem of losing track of the coding problems from the "Daily Coding Problem" service, I decided to create a Node.js script that automates the following steps:

1.  Use GCP's OAuth 2.0 to authorize and access the Gmail API to fetch the daily coding problems from your Gmail account.
2.  Convert the fetched email content into both HTML and Markdown formats.
3.  Store the content as HTML and Markdown files locally on my computer.
4.  Commit the files to a Git repository, ensuring I have a record of all the coding problems.

The solution allows you to stay organized and maintain a history of all the problems you receive, making it easier for you to revisit them and solve them when you find the time.
<br></br>

## Installation

To use this Daily Coding Problem Scraper, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/Apra487/scrapeDailyCodingProblem.git
   ```

2. Install the dependencies by navigating into the repository's directory and running:

   ```bash
   cd scrapeDailyCodingProblem
   npm install
   ```

3. Create a Gmail API project and obtain OAuth 2.0 credentials:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
   - Enable the Gmail API for the project.
   - Under the "Credentials" tab, create a new OAuth 2.0 Client ID.
   - Download the credentials JSON file and save it as `credentials.json` in the repository's directory.

4. Run the scraper:

   - To scrape and save the Daily Coding Problems, execute the following command:

     ```bash
     node index.js
     ```

     **Note**: The first time you run the script, it will open your browser and prompts you to authorize access to your Gmail account. **Please accept and allow the access to proceed. The script will then save the access token in a file named `token.json` in the repository's directory.** The next time you run the script, it will use the saved access token to access your Gmail account.

   - The script will retrieve the emails matching the search query given in the code, extract the problem content, and save it as HTML and Markdown files in the `DailyCodingProblem` directory.
   - The scraped files will be automatically committed to the Git repository.

That's it! You should now have a fully functional Daily Coding Problem scraper that retrieves and stores the problems for you to solve at your convenience.

Feel free to customize the script further to fit your specific requirements, such as scheduling it to run automatically or modifying the output format.

## License

<div align="center">  
<br>

<img width=35% src="https://media0.giphy.com/media/3ornjXbo3cjqh2BIyY/200.gif"></p>

<br>
</div>
