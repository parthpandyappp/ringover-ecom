import { useProductData } from "context";

const Team = () => {
  const { state } = useProductData();
  return (
    <div className="team">
      <h5>
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great.
      </h5>
      <div className="members">
        {state.team &&
          state.team.map((member) => {
            return (
              <div className="profile-card">
                <img src={member.profile} alt="" className="member-profile" />
                <div className="profile-details">
                  <p className="text-md">{member.name}</p>
                  <p className="text-sm">{member.position}</p>
                </div>
                <div className="feature-img">
                  {member.socials.map((social) => {
                    return <img src={social} className="social-img" alt="" />;
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { Team };
