function StatusCounter() {
  return (
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="zoom-out">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Students Enrolled</p>
            </div>
          </div>
          {/* {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Students Completed</p>
            </div>
          </div>
          {/* {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Currently Training</p>
            </div>
          </div>
          {/* {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Our Staffs</p>
            </div>
          </div>
          {/* {/* <!-- End Stats Item --> */}
        </div>
      </div>
    </section>
  );
}

export default StatusCounter;
