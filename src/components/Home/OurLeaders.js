const OurLeaders = (props) => {
  let leadersList = props.leaders.data;

  // Sort Leaders List according to the Order Id
  let leadersListSort = [...props.leaders.data];
  console.log(leadersListSort);
  leadersList = leadersListSort.sort((a, b) => {
    return a.attributes.Leader_Id - b.attributes.Leader_Id;
  });

  return (
    <section id="leaders" className="chefs section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Leaders</h2>
          <p>
            Our <span>Leaders</span> in Mission
          </p>
        </div>

        <div className="row gy-4">
          {leadersList.map((leader) => {
            let leaderProfilePic = leader.attributes.Profile_Picture.data || "";

            if (leaderProfilePic) {
              leaderProfilePic = leaderProfilePic.attributes;
            }

            return (
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                key={leader.id}
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src={
                        leaderProfilePic
                          ? leaderProfilePic.formats.large.url
                          : ""
                      }
                      className="img-fluid"
                      alt={
                        leaderProfilePic ? leaderProfilePic.alternativeText : ""
                      }
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{leader.attributes.Name}</h4>
                    <span>{leader.attributes.Role}</span>
                    <p>{leader.attributes.Short_Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
