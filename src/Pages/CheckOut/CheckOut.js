import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const address = form.address.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      address,
    };
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-blue-300 text-white">
      <form
        onSubmit={handlePlaceOrder}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <h1 className="text-center text-5xl font-semibold">
          You Are Buying {title}{" "}
        </h1>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-4xl">Checkout </p>
            <p className="text-2xl">
              I Hope You Will Be More Than Satisfied Working With Us
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-xl">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                name="firstName"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-xl">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                name="lastName"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-xl">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="phone" className="text-xl">
                Phone Number
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-xl">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-20"
              />
            </div>
          </div>
          
        </fieldset>
        <input
            style={{marginLeft: '500px'}}
            className="btn btn-info w-2/5"
            type="submit"
            value="Confirm Your Purchase"
          />
      </form>
    </section>
  );
};

export default CheckOut;
