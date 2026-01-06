import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-white text-gray-800">

    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <nav className="hidden md:flex gap-8 text-sm">
        <a className="hover:text-indigo-600" href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </nav>

      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
        Get Started
      </button>
    </header>


    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Grow your <br /> subscription <br /> business
        </h1>

        <p className="mt-6 text-gray-500">
          Outcome-centered products that reduce churn, <br /> optimize pricing,
          and grow your subscription <br /> business end-to-end.
        </p>

        <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/Hero.png"
          alt="Hero"
          className="w-full max-w-md"
        />
      </div>
    </section>

     <div className="flex justify-center gap-35">
      <img src="/images/ipsum.png" alt="" />
      <img src="/images/Sum.png" alt="" />
      <img src="/images/cards ip.png.png" alt="" />
      <img src="/images/water sum.png" alt="" />
      <img src="/images/circle.png" alt="" />
     </div>


    <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/images/content.png" alt="" />
        <div>
          <h2 className="text-3xl font-semibold">Subscription index</h2>
          <p className="mt-4 text-gray-500">
          A daily dataset to keep you up to date on <br /> subscription market trends and what's happening in <br /> your vertical.
          </p>
          <a className="text-indigo-600 mt-4 inline-block" href="#">
            Learn more →
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold">In-depth metrics</h2>
          <p className="mt-4 text-gray-500">
          Accurate, real-time reporting at your fingertips. <br /> Getting data has never been easier.
          </p>
          <a className="text-indigo-600 mt-4 inline-block" href="#">
            Learn more →
          </a>
        </div>
        <img src="/images/content-2.png" />
      </div>

    </section>

    
    <div className="w-full  py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center font-bold">
              <img src="/images/carta.png" alt="" />
            </div>
            <h3 className="font-semibold">Benchmarks</h3>
            <p className="text-sm text-gray-500">
              See how your product compares <br /> across industry standards.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
              <img src="/images/kalkulyator.png" alt="" />
            </div>
            <h3 className="font-semibold">Pricing Audit</h3>
            <p className="text-sm text-gray-500">
              Benchmark the health of your monetization <br /> and pricing strategy.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold">
           <img src="/images/Camera.png" alt="" />
            </div>
            <h3 className="font-semibold">Retention Audit</h3>
            <p className="text-sm text-gray-500">
              Audit where users drop off and <br /> where you can increase retention.
            </p>
          </div>
        </div>




      
      <div className="w-full max-w-5xl flex items-center justify-between mb-14">
        <h1 className="text-4xl font-bold text-gray-900 max-w-md leading-tight">
          Get the right plan <br /> for future product.
        </h1>

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button className="px-6 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md">
            Yearly
          </button>
          <button className="px-6 py-2 text-sm font-medium text-gray-600">
            Monthly
          </button>
        </div>
      </div>





      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Starter</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Free</h2>

          <ul className="text-sm text-gray-500 space-y-3 mb-8">
            <li>1 Website</li>
            <li>5 GB Hosting</li>
            <li>Limited Support</li>
          </ul>

          <button className="w-full py-3 text-indigo-600 font-medium rounded-lg border border-indigo-600">
            Get Started
          </button>
        </div>

        
        <div className="bg-orange-500 rounded-xl p-8 text-center text-white scale-105">
          <p className="text-sm mb-4 opacity-90">Premium</p>
          <h2 className="text-4xl font-bold mb-6">
            $29<span className="text-base font-medium">/month</span>
          </h2>

          <ul className="text-sm space-y-3 mb-8 opacity-90">
            <li>10 Website</li>
            <li>15 GB Hosting</li>
            <li>Premium Support</li>
          </ul>

          <button className="w-full py-3 bg-orange-800 rounded-lg font-medium">
            Get Started
          </button>
        </div>

   
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Enterprise</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            $49<span className="text-base font-medium text-gray-500">/month</span>
          </h2>

          <ul className="text-sm text-gray-500 space-y-3 mb-8">
            <li>Unlimited Website</li>
            <li>50 GB Hosting</li>
            <li>Premium Support</li>
          </ul>

          <button className="w-full py-3 text-indigo-600 font-medium rounded-lg border border-indigo-600">
            Get Started
          </button>
        </div>
      </div>
      </div>
    </div>

    </div>
  )
}
