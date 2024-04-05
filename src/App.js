import './App.css'
import WhatPeopleSay from './components/CarouselForReviews'
import Logo from './components/Logo'
import PageUpScrollButton from './components/PageUpButton'
import { MdOutlinePlace } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="px-[10%] ">
      {/* <Course
        text="Coding"
        image="https://thumbs.dreamstime.com/b/digital-binary-code-green-tone-square-background-160461791.jpg"
      /> */}
      {/* <div className='flex flex-col'>

      
      <Events
        day={30}
        month={'September'}
        title="Autumn Science Lectures"
        hour="08:00 - 17:00"
        place="London, UK"
        description="Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat"
        image="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-7-450x233.jpg"
      />

      <Events
        day={30}
        month={'September'}
        title="Autumn Science Lectures"
        hour="08:00 - 17:00"
        place="London, UK"
        description="Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat"
        image="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-7-450x233.jpg"
      />
      </div> */}

      <Logo />
      <PageUpScrollButton />
      <WhatPeopleSay />
      <ContactInfo
        text="Address way"
        description="1800 Abbot Kinney Blvd. Unit D & E Venice"
        icon={<MdOutlinePlace className='text-8xl text-primary' />}
        color="primary"
    />
          <ContactInfo
        text="Address way"
        description="1800 Abbot Kinney Blvd. Unit D & E Venice"
        icon={<IoMdPerson className='text-8xl text-green' />}
        color="green"
    />
          <ContactInfo
        text="Address way"
        description="1800 Abbot Kinney Blvd. Unit D & E Venice"
        icon={<MdOutlineWatchLater className='text-8xl text-secondary' />}
        color="secondary"
    />
    </div>
  )
}

export default App
