import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl tracking-tighter leading-tight md:pr-8" style={{fontFamily: 'Baskerville'}}>
        SQS
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Welcome to the Swedish Quantum Society | SQS established by {' '}
        <a
          href="https://enccs.se/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          ENCCS.se
        </a>{' '}
        !
      </h4>
    </section>
  )
}

export default Intro
