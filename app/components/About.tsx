import { Title, Body, Hover, Subtitle } from '@/styles/Typography';
import Image from 'next/image';
import PlaceholderPic from '@/assets/fallen_angels.jpg';
import QuizletLogo from '@/assets/quizlet_logo.png';
import HMSALogo from '@/assets/hmsa_logo.png';
import WDBLogo from '@/assets/wdb_logo.svg';


const LandingText = (
  <div className={`flex flex-col items-center gap-8 ${Body.One} max-w-5xl`}>
    <h1 className={Title.One}>
      Hello there! My name is Jackson and I'm a senior at UC Berkeley.
    </h1>
    <p>
      My name is Jackson and I enjoy building things for the web. I first started coding my first programs in middle school when I attended a summer camp through John Hopkins Center for Talented Youth in Los Angeles. My interest then turned to building things on the internet when I started learning React.js and JavaScript at the start of college.
    </p>
    <p>
      Fast-forward to today and I've had the privilege of being a part of many great teams:{' '} 
      <a 
        href="https://www.quizlet.com" 
        className={`text-neonyellow100 ${Hover.Link}`}
      >
        Quizlet
      </a>,{' '}
      <a 
        href="https://www.webatberkeley.com" 
        className={`text-neonyellow100 ${Hover.Link}`}
      >
        Web Development at Berkeley
      </a>,{' '}
      <a 
        href="https://www.hmsa.com" 
        className={`text-neonyellow100 ${Hover.Link}`}
      >
        HMSA (Blue Cross Blue Shield of Hawai'i)
      </a>, and{' '}
      <a 
        href="https://www.rimble.io" 
        className={`text-neonyellow100 ${Hover.Link}`}
      >
        Rimble
      </a>.
    </p>
  </div>
)

const IMAGE_HEIGHT = 400

const LandingImageTiles = (
  <div className="grid grid-cols-2 gap-8 items-center">
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        src={PlaceholderPic}
        alt="Placeholder Image"
        height={IMAGE_HEIGHT}
        className='rounded-lg overflow-hidden'
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        src={PlaceholderPic}
        alt="Placeholder Image"
        height={IMAGE_HEIGHT}
        className='rounded-lg overflow-hidden'
      />
      <Image
        src={PlaceholderPic}
        alt="Placeholder Image"
        height={IMAGE_HEIGHT}
        className='invisible'
      />
    </div>
  </div>
)

const LeftGradient = (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald100 to-darkgreen100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>
);

const RightGradient = (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald100 to-darkgreen100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div>
);

const LandingSection = (
  <div className="mx-auto pb-32 sm:pb-48 lg:pb-56 flex justify-center">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {LandingText}
      {LandingImageTiles}
    </div>
  </div>
);

const AboutText = (
  <div className={`flex flex-col items-start gap-8 ${Body.One} max-w-5xl`}>
    <h1 className={Title.One}>
      About Me
    </h1>
    <p>
      Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
    </p>
    <p>
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
    </p>
    <p>
      Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
    </p>
  </div>
)

const AboutHighlights = (
  <div className='flex flex-col gap-8 max-w-2xl'>
    <h1 className={Title.Two}>
      Computer Science BA
    </h1>
    <h2 className={Subtitle.One}>
      UC Berkeley class of 2025
    </h2>
    <h1 className={Title.Two}>
      2 Years of Experience
    </h1>
    <h2 className={Subtitle.One}>
      3 internships, 1 assistant position
    </h2>
  </div>
)

const AboutLogos = (
  <div className="flex flex-row justify-center items-center gap-16 lg:gap-52">
    <Image
      src={QuizletLogo}
      alt="Placeholder Image"
      height={80}
      className='rounded-lg overflow-hidden'
    />
    <Image
      src={HMSALogo}
      alt="Placeholder Image"
      height={48}
      className='rounded-lg overflow-hidden'
    />
    <div className='text-blue-600 text-5xl font-sans'>Rimble</div>
    <Image
      src={WDBLogo}
      alt="Placeholder Image"
      height={48}
      className='rounded-lg overflow-hidden'
    />
  </div>
)

const AboutSection = (
  <div className="mx-auto py-32 sm:py-48 lg:py-56 flex justify-center">
    <div className='flex flex-col gap-16'>
    <div className="flex lg:flex-row flex-col gap-16 items-start">
      {AboutText}
      {AboutHighlights}
    </div>
    {AboutLogos}
    </div>
  </div>
);



export default function About() {

  return (
    <div>
      <div className='lg:pt-32'>
        {LeftGradient}
        {LandingSection}
        {RightGradient}
        {LeftGradient}
        {AboutSection}
        {RightGradient}
      </div>
    </div>
  );
}
