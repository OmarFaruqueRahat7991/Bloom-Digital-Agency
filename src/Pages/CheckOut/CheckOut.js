import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const  {title} = useLoaderData();
    
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-blue-300 text-white">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <h1 className="text-center text-5xl font-semibold">You Are Buying {title} </h1>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl">Checkout </p>
				<p className="text-2xl">I Hope You Will Be More Than Satisfied Working With Us</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-xl">First name</label>
					<input id="firstname" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-xl">Last name</label>
					<input id="lastname" type="text"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-xl">Email</label>
					<input id="email" type="email"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-xl">Address</label>
					<input id="address" type="text"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-20" />
				</div>
			</div>
		</fieldset>
		
	</form>
</section>
    );
};

export default CheckOut;