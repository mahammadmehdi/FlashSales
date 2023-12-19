import React from "react";
import "./index.scss";
import FlashSalesCard from "../../components/FlashSalesCard";
import BrowseByCategory from "../../components/BrowseByCategory";
import BestSellingCards from "../../components/bestSellngCards";

function Home() {
  return (
    <div id="homePage">
      <div className="homeHeader">
        <div className="leftHeader">
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
        <div className="rightHeader">
          <div className="rightImage">
            <div className="imageLeft">
              <div className="iphone">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1704067200&Signature=E5ZC3Ce8h~Kow1hL0xCIA~rXGzJtX9Ya~3DMYa2xRSxuAJJbGtdswvrpK12F-0MD4JV-259UJuIvao5scTW-XVI0uDI6BImKaMJEZTeOrfAm2Mcp~j-5qCGKQcwcyWmZuzhlHqxuR5qX2AShZFkuOtQW1qRcLU4y49ClUhNu8MFYfekLfIXNjDHsAuAlfWEXI3qK4TmUY~Ng5C0IFXWCqUUu4OR8yEN6nsd8kgcwYWVPFV03a8tVDkhQjjMTZ7uzYmHLQ0pXtuoIT0NQYa0QYvZexgsI4WlC5o7el3ACRauoAvdVMhT6b9JqBXX-h-QNqYK5SykOkgTOjSiXvp8QZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />{" "}
                <div className="text">Iphone 14 series</div>
              </div>
              <div className="main">Up to 10% off Voucher</div>
              <div className="shop">Shop Now</div>
            </div>
            <div className="imageRight">
              <img
                src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flashSales">
        <div className="today">
          <span className="todayText">Today's</span>
        </div>
        <div className="flashSalesBox">
          <div className="main">
            <div className="name">Flash Sales</div>
            <div className="time">03:23:19:56</div>
          </div>
          <div className="icons">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="flashSalesCardHome">
        <FlashSalesCard></FlashSalesCard>
        <button className="btn">View All Products</button>
      </div>
      <div className="line"></div>

      <div className="browseByCategory">
        <div className="category">
          <span className="categoryText">Categories</span>
        </div>
        <div className="browseByCategoryBox">
          <div className="main">
            <div className="name">Browse By Category</div>
          </div>
          <div className="icons">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="categoryCards">
        <BrowseByCategory
          image={<i class="fa-solid fa-mobile-screen"></i>}
          text={"Phone"}
        ></BrowseByCategory>
        <BrowseByCategory
          image={<i class="fa-solid fa-desktop"></i>}
          text={"Computers"}
        ></BrowseByCategory>
        <BrowseByCategory
          image={<i class="fa-solid fa-stopwatch"></i>}
          text={"SmartWatch"}
        ></BrowseByCategory>
        <BrowseByCategory
          image={<i class="fa-solid fa-camera"></i>}
          text={"Camera"}
        ></BrowseByCategory>
        <BrowseByCategory
          image={<i class="fa-solid fa-headphones"></i>}
          text={"HeadPhones"}
        ></BrowseByCategory>
        <BrowseByCategory
          image={<i class="fa-solid fa-gamepad"></i>}
          text={"Gaming"}
        ></BrowseByCategory>
      </div>
      <div className="line"></div>

      <div className="bestSellingProducts">
        <div className="category">
          <span className="categoryText">Month</span>
        </div>
        <div className="browseByCategoryBox">
          <div className="main">
            <div className="name">Best Selling Products</div>
          </div>
          <div className="icons">
            <button>View All</button>
          </div>
        </div>
      </div>
      <BestSellingCards></BestSellingCards>

      <div className="line"></div>

      <div className="musicExperienceBox">
        <div className="musicExperienceBoxLeft"></div>
        <div className="musicExperienceBoxRight">
          <img
            src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1704067200&Signature=TH37vjPNx17JF~ehOXZ9KYwzlPqtv7HPOhgUr~W3xsOiPZ6dp3GTjw4L2NSimGhY1jZIdNevqu~hnX41QfDsYS99x9zOkS~OmWkmQWY4NhJxiEIwFuLPLP-ZzvkN1P3m-IK7mMTIL2Ou~PfrQuDS664i8rN5rYDuNgQAOH8C0PtHS01K4gbkB7Y9cDt5h9xHTiu8VEoXkEspGZ~ohg65Tf-qQ4VIEc~s3diS2Sts-VE8g2WMDciL80jQNR1JRHoYf6rqbPSVZG7V4~od3TCUG6kQ5tURjmB7tg9IJWxYZ~T3KMStQyV8fKZL0ZGw4pfD9MXBF-6VMJG31ZKNR3GKkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
