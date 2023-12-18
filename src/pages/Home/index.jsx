import React from 'react'
import "./index.scss"
import FlashSalesCard from '../../components/FlashSalesCard'

function Home() {
    return (
        <div id='homePage'>
            <div className='homeHeader'>
                <div className='leftHeader'>
                    <ul>
                        <li>Woman's Fashion</li>
                        <li>Men's fashion</li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby's & Toys</li>
                        <li>Groceries & Pets</li>
                        <li>Health & Beauty</li>
                    </ul>
                </div>
                <div className='rightHeader'>
                    <div className='rightImage'>
                        <div className='imageLeft'>
                            <div className='iphone'><img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1704067200&Signature=E5ZC3Ce8h~Kow1hL0xCIA~rXGzJtX9Ya~3DMYa2xRSxuAJJbGtdswvrpK12F-0MD4JV-259UJuIvao5scTW-XVI0uDI6BImKaMJEZTeOrfAm2Mcp~j-5qCGKQcwcyWmZuzhlHqxuR5qX2AShZFkuOtQW1qRcLU4y49ClUhNu8MFYfekLfIXNjDHsAuAlfWEXI3qK4TmUY~Ng5C0IFXWCqUUu4OR8yEN6nsd8kgcwYWVPFV03a8tVDkhQjjMTZ7uzYmHLQ0pXtuoIT0NQYa0QYvZexgsI4WlC5o7el3ACRauoAvdVMhT6b9JqBXX-h-QNqYK5SykOkgTOjSiXvp8QZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /> <div className='text'>Iphone 14 series</div></div>
                            <div className='main'>Up to 10% off Voucher</div>
                            <div className='shop'>Shop Now</div>
                        </div>
                        <div className='imageRight'><img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='flashSales'>
                <div className='today'>Today's</div>
                <div className='flashSalesBox'>
                    <div className='main'>
                        <div className='name'>Flash Sales</div>
                        <div className='time'>03:23:19:56</div>
                    </div>
                    <div className='icons'>
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <FlashSalesCard></FlashSalesCard>

        </div>
    )
}

export default Home