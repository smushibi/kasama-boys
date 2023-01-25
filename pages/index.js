import Gallery from '../components/Gallery'
import { useState } from 'react'
import Image from 'next/image'
import py1 from '../public/pymath.png'
import py2 from '../public/Pythagoras-1.gif'
import py3 from '../public/Pythagoras-2.gif'
import sce from '../public/experiment-lab.gif'

export default function Home() {
  const data = [
    { name: 'Notification one', age: '31 January 2022' },
    { name: 'Notification two', age: '31 January 2022' },
    { name: 'Notification three', age: '31 January 2022' },
  ]
  const [users] = useState(data)
  return (
    <>
      <div>
        <p className="mt-20 w-full font-bold bg-green-300 text-center text-sm sm:text-xs md:text-xl lg:text-lg">
          "Knowledge and Excellence"
        </p>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="">
          <Gallery />
        </div>
        <div className="col-s m-2 gap-1 grid">
          <div>
            <button className="bg-orange-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
              Notice Board
            </button>
            <table className="table-auto m-3">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.name} className="text-gray-700">
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6777556895895!2d31.172820915081306!3d-10.206802492709562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1908c60136d1d529%3A0x417e50f85be594ba!2sKASAMA%20BOYS%20SECONDARY%20SCHOOL!5e0!3m2!1sen!2szm!4v1674037945881!5m2!1sen!2szm"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className=" m-4 p-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 ">
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            School Administration
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1">
            The School administrators are dedicated and hardworking individuals
            who play a crucial role in the success of schools. They are
            committed to providing students with the best possible educational
            experience, and work tirelessly to ensure that schools run smoothly
            and efficiently. They are excellent leaders who inspire and support
            their staff and faculty, and provide a positive and safe learning
            environment for students. They are effective communicator and
            problem solvers, they are able to work with the school community,
            including parents, teachers and other stakeholders to address any
            issues that may arise and make decisions that benefit the school and
            students. They are also proactive in identifying areas for
            improvement and implementing changes that lead to better student
            outcomes. They are truly dedicated to their work and to the
            well-being of the entire school community.
          </p>
        </div>
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            Teachers
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1">
            Teachers are the backbone of the educational system and play a
            crucial role in shaping the minds and futures of their students.
            They are dedicated professionals who are passionate about their
            subject matter and are committed to helping their students succeed.
            They use their expertise and creativity to design engaging and
            effective lessons that inspire curiosity and critical thinking. They
            also provide guidance and support for their students, helping them
            to navigate the challenges of growing up and to develop the skills
            and confidence they need to succeed in life. Teachers are also
            lifelong learners, who are constantly striving to improve their
            practice and stay current with the latest educational research and
            trends. They are true role models who inspire their students to
            reach their full potential and make a positive impact on the world.
          </p>
        </div>
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            Students
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1">
            Pupils are the reason why schools exist and they are the future of
            our society. They are curious, energetic and full of potential. They
            bring diverse perspectives, ideas, and talents to the classroom,
            which enriches the learning experience for everyone. They have a
            natural thirst for knowledge and are eager to explore new concepts
            and ideas. They are open-minded, resilient and determined to
            succeed. They are not afraid to take risks, to make mistakes, and to
            learn from them. They are kind, compassionate and respectful of
            others. They are the ones who will shape the future and bring change
            to our world. They are the hope for a better tomorrow.
          </p>
        </div>
      </div>
      <div className=" m-4 p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            Mathematics
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1">
            The beauty of math lies in its ability to explain and make sense of
            the world around us. Math is the language of science and technology,
            and it is used to understand everything from the smallest subatomic
            particles to the largest structures in the universe.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <Image
              src={py1}
              alt="pythagoras Theorem pic"
              height="350"
              width="350"
            />
            <Image
              src={py2}
              alt="pythagoras Theorem pic"
              height="350"
              width="350"
            />
            <Image
              src={py3}
              alt="pythagoras Theorem pic"
              height="350"
              width="350"
            />
          </div>
        </div>
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            Science
          </button>{' '}
          <div className="flex flex-wrap items-center">
            <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1 smooth-transition">
              <Image src={sce} alt="science pic" height="300" width="300" className='smooth-transition'/>
              Science education in schools is essential in preparing students
              for the future by giving them the skills and knowledge they need
              to understand and engage with the world around them. It helps
              students to develop critical thinking, problem-solving and
              analytical skills, which are valuable for any career. Science
              education also helps students to understand the natural world and
              how it works, and to appreciate the beauty and complexity of the
              universe. It also helps students to understand the impact of
              science and technology on their daily lives, and to make informed
              decisions about the issues that affect their future. Furthermore,
              science education can also be a lot of fun, with hands-on
              experiments and investigations that allow students to explore and
              discover the world around them. Overall, science education in
              schools is vital for the development of a well-informed and
              scientifically literate society.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 shadow-sm p-1">
          <button className="bg-green-400 shadow-2xl w-full rounded-sm  hover:bg-green-300">
            School Administration
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg p-1">
            Pupils are the reason why schools exist and they are the future of
            our society. They are curious, energetic and full of potential. They
            bring diverse perspectives, ideas, and talents to the classroom,
            which enriches the learning experience for everyone. They have a
            natural thirst for knowledge and are eager to explore new concepts
            and ideas. They are open-minded, resilient and determined to
            succeed. They are not afraid to take risks, to make mistakes, and to
            learn from them. They are kind, compassionate and respectful of
            others. They are the ones who will shape the future and bring change
            to our world. They are the hope for a better tomorrow.
          </p>
        </div>
      </div>
    </>
  )
}
