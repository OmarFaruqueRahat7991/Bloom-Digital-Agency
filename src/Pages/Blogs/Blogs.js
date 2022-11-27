import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What's The Difference between SQL and NoSQL?
            </summary>
            <div className="px-4 pb-4">
              <p>
               1.SQL databases are relational, NoSQL databases are non-relational.
			   2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
			   3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
			   4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
			   5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
			What is JWT, and how does it work?
            </summary>
            <div className="px-4 pb-4">
              <p>
			  JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

			  Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

			  1.User sign-in using username and password or google/facebook.
			  2.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
			  3.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
			  4.Resource server then verifies the authenticity of the token using the secret salt/ public key.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
			What is the difference between Javascript and NodeJS?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
			  1.JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

			  As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

			  2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

			  3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

			  4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

			  Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
			How does NodeJS handle multiple requests at the same time?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
			  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

			  If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
