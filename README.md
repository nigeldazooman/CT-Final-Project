Goal: Using ideas and programs introduced during the Coding Temple QA Flex program, design and implement a comprehensive test plan for the following website:

https://thinking-tester-contact-list.herokuapp.com/

Objectives: Use a combination of functional, non-functional, UI and security tests to confirm the robustness of the above site.
  - API Tests: Testing the API functions to add a user, modify an existing user, log in and out for that user, and delete user
  - Functional Tests: Verify password privacy, hide password characters, various site button functionalities, main contact list page header visible, developer website clickthrough works, contact form fields receive inputs correctly
  - Non-Functional Tests: Alternative browser compatibiliy, alternative device compatibility, boundary value analysis of password length, contact list sort feature usability test
  - Security Tests: XSS Vulnerability, Login Form Fuzz Test, SQL Injection, CSS Injection

Tools Used:
  - OS: My main OS under which most of my tests were written and verified was Windows 10. I used iOS Mobile v17.4.1 for Non-Functional Test 2 (mobile site compatibility)
  - Web Browsers: Most of my default testing was done using Mozilla Firefox v125.0.3. I also used Brave browser v1.64.116 for Non-Functional Test 1 (alternate browser compatibility)
  - Software: All of my code was written using VS Code. Code was all written to be run using Cypress v13.6.1. Syntax issues were occasionally resolved using ChatGPT v3.5

Overall Results: Despite its relatively minimal appearance, my testing found the site to hold up pretty well and perform its basic functionalities as designed and intended. When tested individually, all of the API tests passed, meaning potential users could freely create new accounts, log in and out of the site, modify their accounts and delete them. They could also do the same with individual contacts and all of that worked seamlessly as well. My functional tests also passed, meaning that buttons and features mainly worked as designed. All of the security tests also passed, meaning that the site was robust and able to handle potential malicious attacks in the future. Lastly, non-functional testing such as alternate browser and device compatibility showed that the site responded to those changes as anticipated and still provided the expected user experience.

Recommendations: Based on the tests I conducted, I found only a few minor changes to be recommended.

Link To Developer Site (Minor): As part of my functional testing plan, I tested the banner ad at the bottom of each page for "The Thinking Tester" and found the link to be not active. I would recommend providing the banner ad with an active link that redirects users to the main developer website in order to increase traffic to the developer's other potential projects while also providing a more established connection with the development team.

Contact List Sort Function (Major): During the non-functional testing phase, I conducted a usability test to see if the site allowed the user to sort the contact list based on any of the fields displayed on the main page. Unfortunately, this test discovered that no sort feature was available on any of the fields listed. This would prevent the user from being able to sort their contacts in the way that suits them best, potentially causing potentially significant frustration. I recommend implementing a basic sort feature available on each column header that would allow the users to sort their contacts in a way that's easiest for them.


-Brad Nicholson, filed 5/26/2024
