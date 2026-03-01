# CS-465-Portfolio
---
# README Reflection

## Architecture

The full stack architecture of this project incorporates both server-side rendering and a client-side single-page application (SPA). The customer-facing portion of the application uses Express, Node.js, HTML, and Handlebars to dynamically render content on the server. Each request results in a full HTML response, which is appropriate for public browsing and simple content delivery.

In contrast, the administrative interface is implemented as an Angular SPA. Rather than reloading full pages, Angular updates the view dynamically using client-side routing and HTTP requests to RESTful API endpoints. This approach provides a richer and more responsive user experience. The SPA communicates with the Express backend using JSON over HTTP, allowing separation between frontend presentation and backend logic.

MongoDB was selected as the database because it aligns naturally with JavaScript-based development in the MEAN stack. Its document-oriented structure allows trip data to be stored in flexible JSON-like documents, reducing impedance mismatch between frontend objects and backend persistence. MongoDB also supports scalability and rapid iteration, which are beneficial for web applications that may evolve over time.

---

## Functionality

JSON serves as the bridge between frontend and backend layers. Unlike JavaScript, which is a full programming language, JSON is a lightweight data-interchange format used to transmit structured data. In this application, the Express API returns trip and authentication data in JSON format, which Angular consumes and renders in the SPA. This standardized format ensures consistent communication between tiers of the application.

During development, refactoring was performed to improve maintainability and efficiency. For example, authentication logic was moved into a dedicated Angular service, allowing login, token storage, and logout functionality to be reused across components. Route guards were implemented to centralize access control rather than embedding authentication checks inside individual components. On the backend, middleware was introduced to handle JWT validation for protected routes, reducing code duplication across endpoints.

Reusable UI components in Angular significantly improved development efficiency. By separating concerns into modular components, updates to form logic or trip display formatting could be made in one location and reflected throughout the application. This modularity reduces bugs, enhances readability, and supports future feature expansion.

---

## Testing

Testing involved verifying API endpoints using tools such as the browser’s developer tools and command-line requests. GET requests were tested to ensure trip data was correctly retrieved from MongoDB and displayed in the SPA. PUT requests were validated by editing trip information, confirming successful HTTP status codes, and verifying persistence after page refresh.

With the addition of authentication and JWT-based security, testing required validation of protected routes. Attempts to access secured endpoints without a token resulted in proper redirection to the login page. Successful login returned a token, which was stored client-side and attached to future API requests through an interceptor. This confirmed that authentication, authorization, and route protection were functioning correctly.

Understanding HTTP methods (GET, POST, PUT, DELETE) and how they map to specific API endpoints was critical in validating both data retrieval and data modification workflows. Security layers introduced additional complexity, as endpoints had to be tested under both authenticated and unauthenticated conditions.

---

## Reflection

This course significantly strengthened my understanding of full stack architecture and modern web application development. I gained hands-on experience building a complete MEAN stack application, implementing RESTful APIs, structuring Angular components, and integrating MongoDB persistence. More importantly, I developed practical experience implementing authentication using JWTs and protecting application routes.

The project reinforced the importance of separation of concerns, modular design, and clean API architecture. By integrating frontend, backend, and database layers into a cohesive system, I improved my ability to design scalable applications and troubleshoot across the full stack. These skills directly support my long-term professional goals in backend development, DevOps, and secure application architecture.

Completing this application demonstrates not only technical competency but also the ability to implement security, testing, and architectural planning in a real-world development scenario.

---


