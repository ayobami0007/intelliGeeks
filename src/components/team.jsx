import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';


const teamMembers = [
  {
    name: 'Bonnie Green',
    role: 'Senior Front-end Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
  },
  {
    name: 'Thomas Lean',
    role: 'Senior Front-end Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
  },
  {
    name: 'Jese Leos',
    role: 'Senior Front-end Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
  },
  {
    name: 'Leslie Livingston',
    role: 'Senior Front-end Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
  },
];
const team = () => {
  return (
     <section className="px-6 md:px-16 py-16 bg-white text-center">
      <div className="mb-12">
        <div className=" text-2xl font-medium mb-2">— Our Team</div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Lorem ipsum dolor sit amet, consecturess adipisicing ellit, Nuc
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8  lg:grid-cols-4">
        {
            teamMembers.map((member, index) =>(
                <div key={index} 
                className='bg-white shadow-md flex flex-col rounded-lg p-6  text-left'>
                    <div className='w-full bg-blue-100 h-40  mb-4 rounded-md'/>

                        <p className="text-xl text-gray-900 font-semibold ">{member.name}</p>
                        <p className="text-base mb-2 text-gray-600 ">{member.role}</p>
                        <p className="text-base text-gray-500 mb-4">{member.desc}</p>

                        <div className='flex text-sm text-gray-500 gap-4'>
                        <a href="#"><FaFacebookF className='hover:text-blue-600 transition'/></a>
                        <a href="#"><FaTwitter className='hover:text-blue-600 transition'/></a>
                        <a href="#"><FaDribbble className='hover:text-blue-600 transition'/></a>
                        <a href="#"><FaGithub className='hover:text-blue-600 transition'/></a>
                        </div>

                    </div>

            )

            )
        }

      </div>
      </section>
  )
}

export default team;