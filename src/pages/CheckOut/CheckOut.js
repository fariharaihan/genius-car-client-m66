import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceorder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;

        const message = form.message.value

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='my-4'>
            <form onSubmit={handlePlaceorder}>
                <h2 className='text-4xl'> You are ordered to {title}</h2>
                <h3 className='text-3xl'>price: {price}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full " required />
                    <input name="email" type="text" defaultValue={user?.email} placeholder="Your email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered w-full h-24" placeholder="Your message"></textarea>
                <input className='btn' type="submit" value="Place your order" />

            </form>
        </div>
    );
};

export default CheckOut;