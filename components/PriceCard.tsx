import { GlareCard } from "./ui/GlareCard";

export function PriceCard() {
  return (
    <section>
        <h1 className="heading my-20">
            Plans <span className="text-purple"> We Offer</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-center flex-row justify-end py-8 px-6">
            <div class="">
                <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                    <div class="ml-5">
                    <span class="block text-2xl font-semibold">Enterprise</span>
                    <span><span class="font-medium  text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">35 </span></span><span class=" font-medium">/ user</span>
                    </div>
                </div>
                <ul class="mb-7 font-medium ">
                    <li class="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3">All features in <span class="">Startup</span></span>
                    </li>
                    <li class="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3">Growth <span class="">oriented</span></span>
                    </li>
                    <li class="flex text-lg">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3"><span class="">Unlimited</span> cloud storage</span>
                    </li>
                </ul>
                <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                    Choose Plan
                    <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                </a>
            </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-center flex-row justify-end py-8 px-6">
            <div class="">
                <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                    <div class="ml-5">
                    <span class="block text-2xl font-semibold">Enterprise</span>
                    <span><span class="font-medium  text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">35 </span></span><span class=" font-medium">/ user</span>
                    </div>
                </div>
                <ul class="mb-7 font-medium ">
                    <li class="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3">All features in <span class="">Startup</span></span>
                    </li>
                    <li class="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3">Growth <span class="">oriented</span></span>
                    </li>
                    <li class="flex text-lg">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span class="ml-3"><span class="">Unlimited</span> cloud storage</span>
                    </li>
                </ul>
                <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                    Choose Plan
                    <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                </a>
            </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-center flex-row justify-end py-8 px-6">
        {/* <p className="font-bold text-white text-lg">The greatest trick</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p> */}
        <div class=" ">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                <div class="ml-5">
                    <span class="block text-2xl font-semibold">Basic</span>
                    <span><span class="font-medium  text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">10 </span></span><span class=" font-medium">/ user</span>
                </div>
            </div>
            <ul class="mb-7 font-medium text-white-500">
                <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">Get started with <span class="">messaging</span></span>
                </li>
                <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">Flexible <span class="">team meetings</span></span>
                </li>
                <li class="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3"><span class="">5 TB</span> cloud storage</span>
                </li>
                
            </ul>
            <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                Choose Plan
                <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
            </a>
        </div>
        {/* <div
            title="Essential"
            des="We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."
            price="$99"
            seoPlans={[
            { name: "Unlimited OK", value: true },
            { name: "Search Insight", value: true },
            { name: "SEO Website Protocol", value: true },
            ]}
        >
        </div> */}
      </GlareCard>
    </div>
    </section>
    
  );
}
