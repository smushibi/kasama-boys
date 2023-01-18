import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <>
      <div className="bg-orange-500 mt-20 p-2 text-center ">
        <p className="ml-4 font-sans font-semibold text-center text-base sm:text-base md:text-xl lg:text-xl">
          Welcome to Kasama Boys Secondary School
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4  col-span-2">
        <div className="col-span-2">
          <Gallery />
        </div>

        <div className="m-5 w-full justify-items-center">
          <div>
            <h1 className='bg-red-300 shadow-2xl '>Notice Board</h1>
            <p>
              08/09/2019 Congratulations to our boys. Umuntu Mutwe!!
              Congratulations to Kasama Boys Secondary School for scooping the
              2019 Battle of the Brains in Water Supply and Sanitation Inter
              Schools Quiz Grand Prize of K15,000.
            </p>
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
    </>
  )
}
