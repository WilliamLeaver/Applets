import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
let article1 = "Edible forms of cannabis, including gummies, mints, brownies, cookies, tinctures, drinks, and other food products, are discreet and can produce long-lasting, safe effects. They’re great when consumed responsibly, and when you know how much you’re consuming. But edibles can lead you down an unpredictable path if you’re not careful, so it’s important to know what kind of experience you want to have. Eating too much cannabis isn’t going to hurt your body, but unwanted or unpleasant effects from edibles can be avoided if you know the dose of the product and what dose of edible works best for you.";
let article2 = "In the landscape of cannabis innovations, including rosin vape pens, transdermal topicals, and nanotechnology beverages, tried-and-true classic products can get overlooked.";
let article3 = "Cannabis legalization is the removal of criminal penalties for cannabis activities such as production, distribution, possession, and consumption, and includes the replacement of those penalties with regulations on commercial cannabis activity.";
let article4 = "Growing weed is super easy—it’s called “weed” for a reason—so don’t worry if you haven’t grown anything before. Our clear, easy-to-digest guide will help growers of all kinds, especially first-time ones.";
const News = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item card w-full rounded-3xl bg-stone-200">
                    <Image className="rounded-2xl w-full" alt="site image" width={1000} height={1000} src="/Edible.png" />
                    <div className="card-body">
                        <h1 className="font-semibold text-lg text-green-700 w-full truncate">Edible dosing for beginners: with dosage chart by milligrams</h1>
                        <span className="text-black truncate">{article1}</span>
                        <Link className="btn btn-md rounded text-green-700 bg-stone-200" href="https://www.leafly.com/learn/consume/edibles/edible-dosing" >Click here to learn more</Link>
                    </div>
                </div>
                <div id="item2" className="carousel-item card w-full rounded-3xl bg-stone-200">
                    <Image className="rounded-2xl w-full" alt="site image" width={1000} height={1000} src="/Tincture.png" />
                    <div className="card-body">
                        <h1 className="font-semibold text-lg text-green-700 w-full truncate">Cannabis tinctures 101: How to make, consume, and dose them</h1>
                        <span className="text-black truncate">{article2}</span>
                        <Link className="btn btn-md rounded text-green-700 bg-stone-200" href="https://www.leafly.com/news/cannabis-101/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to" >Click here to learn more</Link>
                    </div>
                </div>
                <div id="item3" className="carousel-item card w-full rounded-3xl bg-stone-200">
                    <Image className="rounded-2xl w-full" alt="site image" width={1000} height={1000} src="/Legal.png" />
                    <div className="card-body">
                        <h1 className="font-semibold text-lg text-green-700 w-full truncate">Leafly’s guide to marijuana legalization</h1>
                        <span className="text-black truncate">{article3}</span>
                        <Link className="btn btn-md rounded text-green-700 bg-stone-200" href="https://www.leafly.com/learn/legalization" >Click here to learn more</Link>
                    </div>
                </div>
                <div id="item4" className="carousel-item card w-full rounded-3xl bg-stone-200">
                    <Image className="rounded-2xl w-full" alt="site image" width={1000} height={1000} src="/Seedling.png" />
                    <div className="card-body">
                        <h1 className="font-semibold text-lg text-green-700 w-full truncate">Leafly’s guide to growing marijuana</h1>
                        <span className="text-black truncate">{article4}</span>
                        <Link className="btn btn-md rounded text-green-700 bg-stone-200" href="https://www.leafly.com/learn/growing" >Click here to learn more</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <Link href="#item1" className="btn btn-xs rounded-full bg-stone-200 text-green-700">1</Link>
                <Link href="#item2" className="btn btn-xs rounded-full bg-stone-200 text-green-700">2</Link>
                <Link href="#item3" className="btn btn-xs rounded-full bg-stone-200 text-green-700">3</Link>
                <Link href="#item4" className="btn btn-xs rounded-full bg-stone-200 text-green-700">4</Link>
            </div>
        </div>
    )
}

export default News