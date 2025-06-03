import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTitle } from '../contexts/TitleContext'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const { setTitle } = useTitle()
    const [formData, setFormData] = useState({
        eventId: id, 
        firstName: '', 
        lastName: '', 
        email: '', 
        streetName: '', 
        postalCode: '', 
        city: '' 
    })
    const [formErrors, setFormErrors] = useState({})
    
    const getEvent = async () => {
        try {
            const res = await fetch(`https://philipventixieeventservice-f6f6faasfgc3gsbt.swedencentral-01.azurewebsites.net/api/Events/${id}`)
            if (!res.ok) throw new Error("Failed to fetch event")
            
            const data = await res.json()
            setEvent(data.result)
        } catch (err) {
            console.error(err)
        }
        
    }

    const postBooking = async () => {
        try {
            const res = await fetch(`https://philipventixiebookingservice-dke4aabpghgahzea.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            }) 
            
            if (!res.ok) {
                console.error("Booking failed")
            } else {
                console.log("Booking Successful")
                navigate('/')
            }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }

    // Tog hjälp av chatGPT 4.o för att skapa valideringen för bokingsformuläret
    const validateForm = () => {
        const errors = {}

        if (!formData.firstName.trim()) errors.firstName = 'First Name is required'
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
        if (!formData.streetName.trim()) errors.streetName = 'Street name is required'
        if (!formData.city.trim()) errors.city = 'City is required'

        const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        if (!emailRegex.test(formData.email)) errors.email = 'Invalid email adress'

        const postalRegex = /^[0-9]{5}$/
        if (!postalRegex.test(formData.postalCode)) errors.postalCode = 'Postal code must be 5 digits'

        setFormErrors(errors)

        return Object.keys(errors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (!isValid) return

        await postBooking()
    }

    

    useEffect(() => {
        setTitle('Book Event')
        document.title = 'Book Event'
        getEvent()
    }, [])

    


    return (
        <div className='booking-card'>
            <h2 className='booking-headline'>Book Event - {event.title}</h2>
            <div >
                <form className='booking-form' onSubmit={handleSubmit} noValidate>
                    <div className='booking-form-group'>
                        <label className='booking-label'>First Name</label>
                        <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='Enter your first name' required />
                        {formErrors.firstName && <span className='error'>{formErrors.firstName}</span>}
                    </div>
                    <div className='booking-form-group'>
                        <label className='booking-label'>Last Name</label>
                        <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Enter your last name' required />
                        {formErrors.lastName && <span className='error'>{formErrors.lastName}</span>}
                    </div>
                    <div className='booking-form-group'>
                        <label className='booking-label'>Email</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email address' required />
                        {formErrors.email && <span className='error'>{formErrors.email}</span>}
                    </div>
                    <div className='booking-form-group'>
                        <label className='booking-label'>Street Name</label>
                        <input  type='text' name='streetName' value={formData.streetName} onChange={handleChange} placeholder='Enter your street name' required />
                        {formErrors.streetName && <span className='error'>{formErrors.streetName}</span>}
                    </div >
                    <div className='booking-form-group'>
                        <label className='booking-label'>Postal Code</label>
                        <input type='text' name='postalCode' value={formData.postalCode} onChange={handleChange} placeholder='Enter your postal code' required />
                        {formErrors.postalCode && <span className='error'>{formErrors.postalCode}</span>}
                    </div>
                    <div className='booking-form-group'>
                        <label className='booking-label'>City</label>
                        <input type='text' name='city' value={formData.city} onChange={handleChange} placeholder='Enter your city' required />
                        {formErrors.city && <span className='error'>{formErrors.city}</span>}
                    </div>
                    <button className='btn btn-submit' type='submit'>Book Now</button>
                </form>
            </div>
        </div>
    )
}

export default BookingEventPage