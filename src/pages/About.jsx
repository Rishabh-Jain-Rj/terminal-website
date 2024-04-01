import React, { useContext, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { MyContext } from '../context/MyContext';
let paras = [
    "Cool Programming Projects is a dynamic platform founded by Rishabh Jain and Nitin Goswami , dedicated to offering innovative solutions in the realm of React, Next.js, and UI-related website development. With a passion for cutting-edge technology and a commitment to excellence, our team brings together expertise from diverse backgrounds to deliver exceptional projects tailored to meet the unique needs of our clients.",
    "At Cool Programming Projects, we believe in the power of collaboration and continuous learning. Our mission is to empower businesses and individuals by providing top-notch development services, insightful consultations, and customizable solutions that drive growth and success in the digital landscape.",
    "With a focus on creativity, functionality, and user experience, we strive to push the boundaries of web development, staying at the forefront of industry trends and emerging technologies. Whether you're seeking a sleek and intuitive UI design, robust backend development, or seamless integration of cutting-edge features, our team is dedicated to bringing your vision to life.",
    "Backed by a solid foundation of technical expertise, professionalism, and a client-centric approach, Cool Programming Projects is your trusted partner in achieving your digital goals. Let us be the catalyst for your next big idea and together, let's transform possibilities into realities."
]

const About = () => {
    const { setFormFlag } = useContext(MyContext)
    useEffect(() => {
        setFormFlag(false);
    }, [])
    return (
        <div className='text-primary  rounded-md p-2 my-3'>
            <h1 className='font-1 text-3xl border-b-2 border-primary drop-shadow-sm font-semibold'>About Us</h1>
           
            <p className='mt-1 font-2 text-base'>
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        paras[0],
                        200,
                        paras[0] + "\n" + paras[1],
                        100,
                        paras[0] + "\n" + paras[1] + "\n" + paras[2],
                        () => { setFormFlag(true); },


                    ]}
                    wrapper="p"
                    speed={99}
                    repeat={0}
                    style={{ whiteSpace: 'pre-line', }}
                />
            </p>
        </div>
    )
}

export default About