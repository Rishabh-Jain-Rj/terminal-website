import React, { useContext, useState } from 'react';
import Error from '../pages/Error';
import { user ,components} from '../config';
import { MyContext } from '../context/MyContext';

const Terminal = () => {
    const [inputValue, setInputValue] = useState('');
  const {formFlag}=  useContext(MyContext);
    const [history, setHistory] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "cls") {
            setHistory([])
        }
        else {
            setHistory((prev) => ([
                ...prev,
                {
                    command: inputValue,
                    component: components[inputValue],
                }
            ]))
        }

        setInputValue("")
    }
    return (
        <div className='flex flex-col bg-black backdrop-blur-sm rounded-lg overflow-hidden md:h-[80vh] md:w-[65vw] h-[550px] w-[100%] shadow-lg border-gray-500 border '>
            <div className='bg-white p-2 flex justify-end  gap-x-3 sticky top-0' >
                <span className='w-5 h-5 rounded-full bg-yellow-500'></span>
                <span className='w-5 h-5 rounded-full bg-green-500'></span>
                <span className='w-5 h-5 rounded-full bg-red-500'></span>
            </div>
            <div className=' p-3 text-gray-300 overflow-auto '>
                <div>
                    {
                        history?.map((item) => (
                            <div className='mb-2'>
                                <p className='mb-1'><span className='text-primary '>$ {user} <span className=' font-bold'>&gt;</span> </span> {item.command}</p>
                                {
                                    !item.component ?
                                        <Error command={item.command} /> :
                                       

                                            <item.component />
                                      
                                }
                               
                            </div>
                        ))
                    }
                    {
                        formFlag &&
                    <form onSubmit={handleSubmit}
                    >
                        <span className='text-primary'>$ {user} <span className=' font-bold'>&gt;</span> </span>
                        <input type="text" className='bg-transparent outline-none border-none text-gray-200 ' value={inputValue} onChange={handleChange} />
                    </form>
                    }
                </div>
            </div>
        </div>

    );
};

export default Terminal;
