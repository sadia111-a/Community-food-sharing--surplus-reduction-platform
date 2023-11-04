const Header = () => {
  return (
    <div className="carousel w-full h-[650px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/2h1QQKy/pexels-photo-3184195.jpg"
          className="w-full rounded-xl"
        />
        <div
          className="absolute  rounded-xl flex  h-full  left-0 pl-4 items-center bottom-0 bg-gradient-to-r from-[#151515] to-[
  rgba(21, 21, 21, 0.00)]"
        >
          <div className="text-amber-50 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl  font-bold">
              Affordable Price For Food Serving
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn bg-amber-100 text-orange-950 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline  text-green-400">
                Latest Food
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/Lr7V025/pexels-photo-4871119.jpg"
          className="w-full rounded-xl"
        />
        <div
          className="absolute  rounded-xl flex  h-full  left-0 pl-4 items-center bottom-0 bg-gradient-to-r from-[#151515] to-[
  rgba(21, 21, 21, 0.00)]"
        >
          <div className="text-amber-50 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl  font-bold">
              Affordable Price For Food Serving
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn bg-amber-100 text-orange-950 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline  text-green-400">
                Latest Food
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dkyWdZG/pexels-photo-5638732.jpg"
          className="w-full rounded-xl"
        />
        <div
          className="absolute  rounded-xl flex  h-full  left-0 pl-4 items-center bottom-0 bg-gradient-to-r from-[#151515] to-[
  rgba(21, 21, 21, 0.00)]"
        >
          <div className="text-amber-50 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl  font-bold">
              Affordable Price For Food Serving
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn bg-amber-100 text-orange-950 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline  text-green-400">
                Latest Food
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
