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
