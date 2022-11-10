import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReviewPage = () => {
    const {title} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "Unregistered";
        const phone = form.phone.value;
        const address = form.address.value;
        const review = form.review.value;
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-blue-300 text-white">
	<form onSubmit={handlePlaceReview} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <h1 className="text-center text-5xl font-semibold">Give Review About {title} </h1>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl">Keep Giving Reviews</p>
				<p className="text-2xl">Help Me Grow My Business</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-xl">First name</label>
					<input id="firstname" type="text" name='firstName' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-xl">Last name</label>
					<input id="lastname" type="text" name='lastName' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-xl">Email</label>
					<input id="email" type="email" name='email' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-16" defaultValue={user?.email}  readOnly/>
				</div>
				<div className="col-span-full">
					<label for="address" className="text-xl">Address</label>
					<input id="address" type="text" name='address'  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-20" />
				</div>
				<div className="col-span-full">
					<label for="review" className="text-sm">Your Review</label>
					<input id="review" type="text" name='review' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-40" />
				</div>
			</div>
		</fieldset>
		
	</form>
</section>
    );
};

export default ReviewPage;