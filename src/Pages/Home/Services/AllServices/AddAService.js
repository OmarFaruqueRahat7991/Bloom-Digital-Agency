import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const AddAService = () => {

    
    return (
        <div>
             <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-blue-300 text-white">
	<form  novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <h1 className="text-center text-5xl font-semibold">Add A Service</h1>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl">Add A Service That You Want</p>
				<p className="text-2xl">And Stay Privileged.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="serviceID" className="text-xl">Service ID</label>
					<input id="serviceID" type="number" name='serviceID' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="serviceTitle" className="text-xl">Service Title</label>
					<input id="serviceTitle" type="text" name='serviceTitle' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-xl">Price</label>
					<input id="lastname" type="text" name='lastName' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-xl">Image URL</label>
					<input id="image" type="text" name='image' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full">
					<label for="description" className="text-xl">Description</label>
					<input id="description" type="text" name='description'  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-20" />
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
        </div>
    );
};

export default AddAService;