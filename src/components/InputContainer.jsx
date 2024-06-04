import React, { useEffect, useState } from 'react';
import { OutputContainer } from './OutputContainer';

export const InputContainer = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [error, setError] = useState("");
    const [bmi, setBmi] = useState("");
    const [status, setStatus] = useState("");

    const validateInputs = () => {
        if (!height || !weight) {
            setError("Please enter both height and weight.");
        } else {
            setError("");
            return true;
        }
    };

    const handleInputs = () => {
        if (!validateInputs()) {
            setBmi("");
            setStatus("");
            return;
        }

        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);
        let calculateBmi = "";

        if (isValidHeight && isValidWeight) {
            const heightMeter = height / 100;
            calculateBmi = weight / (heightMeter * heightMeter);
            setBmi(calculateBmi.toFixed(2));
            
            if (calculateBmi < 18.5) {
                setStatus("Underweight");
            } else if (calculateBmi < 24.9) {
                setStatus("Normal");
            } else if (calculateBmi < 29.9) {
                setStatus("Overweight");
            } else {
                setStatus("Obese");
            }
        } else {
            setError("Please enter valid numerical values for height and weight.");
            setBmi("");
            setStatus("");
        }
    };

    const cancelInputs = () => {
        setHeight("");
        setWeight("");
        setError("");
        setBmi("");
        setStatus("");
    };

   

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex flex-col font-bold items-center justify-center my-8 w-[20rem] lg:w-full max-w-md bg-white p-8 shadow-md rounded-md font-mono'>
                <h1 className='text-center font-bold lg:pb-6 pb-4 text-xl lg:text-2xl text-sky-800 font-sans'>BMI CALCULATOR</h1>
                <form action="" className='flex flex-col w-full' onSubmit={(e) => {
                    e.preventDefault();
            
                }}>
                    <div className='mb-4'>
                        <label htmlFor="input-ht" className='block mb-2 '>Enter your Height :</label>
                        <input 
                            type="text" 
                            id='input-ht' 
                            className='border-2 border-slate-600 text-center p-2 w-30 lg:w-full rounded-xl' 
                            value={height} 
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="input-wt" className='block mb-2'>Enter your Weight :</label>
                        <input 
                            type="text" 
                            id='input-wt' 
                            className='border-2 border-slate-600 text-center p-2 w-30 lg:w-full rounded-xl' 
                            value={weight} 
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>

                    {error && <p className='text-red-500 mb-4'>{error}</p>}
                    <div className='flex flex-row gap-6 lg:gap-12'>
                    <button type="submit" className='px-6 py-2 mt-4 h-10 w-full bg-blue-500 text-white rounded hover:bg-blue-600' onClick={handleInputs}>Submit</button>
                    <button type="cancel" className='px-6 py-2 mt-4 h-10 w-full bg-red-400 text-white rounded hover:bg-red-600' onClick={cancelInputs}>Clear</button>
                    </div>
                </form>
                
                <OutputContainer bmi={bmi} status={status}/>
            </div>
        </div>
    );
};
