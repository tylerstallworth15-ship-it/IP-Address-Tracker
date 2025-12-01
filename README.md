# IP Address Tracker

A front-end web application built for my HTML, CSS, JaveScript project.
<img src="./![alt text](active-states.jpg)" alt="IP Address Tracker 

## Description
The IP Address Tracker is a responsive web application that allows users to search for any valid IP address or domain and view detailed geolocation information including the IP address, location, timezone, and ISP. A dynamic map given by Leaflet.js updates to display the exact coordinations of the searched IP


## Table of Contents
- [IP Address Tracker](#ip-address-tracker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Device Images](#device-images)
  - [Trello Planning](#trello-planning)
  - [Design](#design)
  - [Project Next Steps](#project-next-steps)
  - [Deployed Link](#deployed-link)
  - [About The Author](#about-the-author)
  - [Works Cited:](#works-cited)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML
* CSS
* Bootstrap
* Geo.IPify API
* Leaflet.js 
* Google Fonts 
* Git and GitHub


## Features
* Users can search for any IP address or domain.
* Users can update a live map based on search results 
* Fully responsive across desktop,tablet, and mobile devices
* Displays IP info live on screen (IP Address, Location, Timezone, ISP)
* Automatically grabs and displays users current IP address

## Device Images
* can be found in project Images folder

## Trello Planning
* https://trello.com/b/OdWKuJ0X/ip-address-tracker-project

## <a name="design"></a>Design
* Design elements implemented using HTML5, CSS3 and Bootstrap. They include a header with background image
* Centered search bar
* Information panel overlapping the map 
* continuos use of Google font Rubik
* clean styling with rounded corners, shadows, and spacing


## <a name="nextsteps"></a>Project Next Steps
* Add validation that detects incorrect ip formats before submitting 
* Store previous searches
* Add map animations when new IPs load
* Add dark/light mode toggle


## <a name="deployment"></a>Deployed Link
* You can view the repository:
[Github.com](http://127.0.0.1:3000/index.html?serverWindowId=6bde79da-8ea7-49db-bdee-daafed0282c0)
* If unable to view please go live locally through VS Code

## <a name="author"></a>About The Author
* Tyler Stallworth-An aspiring web developer with who enjoys building frontend applications. I enjoy solving problems creatively and learning modern web development tools that will further my knowledge and abilities in the future.
    
## Works Cited:
* Frontend Mentor challenge assets.
MDN Web Docs- Javascript Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
* W3School -Flexbox and Responsive Design
https://www.w3schools.com/html/html_responsive.asp
*Bootstrap- Columns, z- index.
https://getbootstrap.com/docs/5.3/layout/columns/
https://getbootstrap.com/docs/5.3/layout/z-index/
* IP Geolocation API- https://geo.ipify.org
* Leaflet.js documentation

Reflections: Working on the IP Address Tracker project was both challenging and rewarding. I started by building the layout with HTML and CSS, focusing first on making the header, search bar, and info panel match the design. One of the harder parts of this project was getting the info panel to overlap the map correctly. I had to experiment with margin-top, position, and z-index to layer the elements without breaking the layout. Making the design responsive across mobile, tablet, and desktop took time as well, especially adjusting spacing and making sure the info blocks stacked properly on smaller screens.

JavaScript was the hardest part. Setting up the API and handling the fetch call was confusing at first, especially when I kept getting “invalid IP address” errors. Learning how to use try/catch, check for response errors, and update the UI helped me understand how APIs work in real applications. Another challenge was using event listeners correctly—my form wasn’t submitting the data at first, and I eventually realized I needed preventDefault() to stop the page from reloading.

Working with Leaflet.js was new to me as well. Getting the map to load, center correctly, and update with new coordinates taught me how important initialization order is. I also added accessibility features like aria-labels and a live region, which helped me think more intentionally about inclusive design.



