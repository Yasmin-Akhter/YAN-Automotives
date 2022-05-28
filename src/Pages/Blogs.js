import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-left my-12'>
                <div>
                    <h1 className='text-2xl font-bold my-3' > Q.1  How will you improve the performance of a React Application?</h1>

                    <p>1.Keeping component state local where necessary <br />
                        2. Memoizing React components to prevent unnecessary re-renders <br />
                        3. Code-splitting in React using dynamic import() <br />
                        4. Windowing or list virtualization in React <br />
                        5. Lazy loading images in React</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold my-3' > Q.2  What are the different ways to manage a state in a React application?</h1>
                    <h2 className='font-bold'>There are four kinds of state to manage</h2>
                    <p> - Local state <br />
                        - Global state <br />
                        - Server state <br />
                        - URL state <br />
                    </p>
                    <h2 className='font-bold'>How to Manage Local State in React
                    </h2>
                    <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
                    <h2 className='font-bold'>How to Manage global State in React
                    </h2>
                    <p>To manage it, however, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their <br />

                        <span className='font-bold'>To be clear:</span> the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don't need it), but it is only helpful for reading state, not updating it.</p>

                    <h2 className='font-bold'>How to Manage server State in React
                    </h2>

                    <p>Server state can be deceptively challenging to manage.

                        At first, it seems we just need to fetch data and display it in the page. But then we need to display a loading spinner while we are waiting for the data. Then we need to handle errors and display them to the user as they arise.

                        What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn't changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                        To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>

                    <h2 className='font-bold'>How to Manage URL State in React
                    </h2>
                    URL state is largely already managed in many framework like Next.js or the current version of React Router.

                    URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                    If we use React Router, we can get all the information we need using useHistory or useLocation.
                </div>
                <div>
                    <h1 className='text-2xl font-bold my-3' > Q.3 What is Unit Testing?Why Unit Testing</h1>
                    <h2 className='text-xl font-bold'> What is Unit Testing?</h2>
                    <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>

                    <h2 className='text-xl font-bold'> Why Unit Testing?</h2>
                    Unit Testing is important because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                    Unit tests help to fix bugs early in the development cycle and save costs.
                    It helps the developers to understand the testing code base and enables them to make changes quickly
                    Good unit tests serve as project documentation
                    Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                </div>
                <h1 className='text-2xl font-bold my-3'> Q.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                Why should we not update the state directly?
                One should never update the state directly because of the following reasons:

                If we update it directly, calling the setState() afterward may just replace the update we made.
                When we directly update the state, it does not change state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                We will lose control of the state across all components.
            </div>
            <div className='mb-12'>
                <h1 className='text-2xl font-bold my-3 text-left'> Q.5  How does prototypical inheritance work?</h1>
                <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.  <br />


                    In programming,we ofen want to take something and extend it.
                    For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                    Prototypal inheritance is a language feature that helps in that.

                    [[Prototype]]
                    In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a Prototype.

                    When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

                    The property [[Prototype]] is internal and hidden, but there are many ways to set it.
                </p>

            </div>
            <Footer></Footer>




        </div >
    );
};

export default Blogs;