import React from "react"

const About = () => {
  return (
    <div className='w-full h-screen bg-slate-100'>
      <h1 className='text-center text-3xl p-6'>National Parks Picker</h1>
      <div className='m-6'>
        <p className='mb-3'>
          This website is built with React and Tailwindcss. The website uses the
          national park service API to render park information. Click{" "}
          <span>
            <a
              href='https://www.nps.gov/subjects/developer/api-documentation.htm'
              target='_blank'
              rel='noreferrer'
              className='font-bold'
            >
              here{" "}
            </a>
            for API details.
          </span>
        </p>
        <p className='mb-3'>
          On the home page, you can input the number of different parks you
          would like to learn about/view. You can also check 'Want to Vist'
          and/or 'Visited' input boxes. Your choices will output on the 'Stats'
          page.
        </p>
        <p>
          The Stats page is used to view the number of parks you have visited,
          you want to visit and their respective names with links to parks
        </p>
        <p>
          The Search page is used to search for parks by their names or by state
          dropdown
        </p>
      </div>
    </div>
  )
}

export default About
