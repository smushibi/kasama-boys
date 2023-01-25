import Gallery from '../components/Gallery'
import { useState } from 'react'

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
          knowledge and Excellence
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
          <p className="text-justify sm:text-sm md:text-base lg:text-lg">
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
          <p className="text-justify sm:text-sm md:text-base lg:text-lg">
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
            School Administration
          </button>{' '}
          <p className="text-justify sm:text-sm md:text-base lg:text-lg">
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
      <div className=" m-1 p-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="bg-blue-300 p-1">
          {' '}
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-yellow-200 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-slate-400 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
      </div>
      <div className=" m-4 p-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 ">
        <div className="bg-blue-300 p-1">
          {' '}
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-yellow-200 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-slate-400 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
      </div>
      <div className=" m-1 p-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 align-middle justify-items-center justify-center w-full">
        <div className="bg-blue-300 p-1">
          {' '}
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-yellow-200 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
        <div className="bg-slate-400 p-1">
          <p>
            08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
            Congratulations to Kasama Boys Secondary School for scooping the
            2019 Battle of the Brains in Water Supply and Sanitation Inter
            Schools Quiz Grand Prize of K15,000.
          </p>
        </div>
      </div>
    </>
  )
}
