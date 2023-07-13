interface CardProps {
  name: string;
  teamLider: string;
  team: string[];

  createdDate: string;
  updateDate: string;
}

const CardProject = ({
  name,

  teamLider,
  team,
  createdDate,
  updateDate,
}: CardProps) => {
  return (
    <div
      className="border-4 px-6 py-1 gap-6 flex flex-col items-center"
      id="container-proiect"
    >
      <h1>Project Name : {name}</h1>
      <h1>Team Leader : {teamLider}</h1>

      <section className="flex flex-col border  items-center px-4 py-2 gap-2">
        <h2>Your Team</h2>
        <hr className="w-4/5 " />
        <div
          className="flex flex-col "
          id="team-container"
        >
          {team.map((teamMember: string, index: number) => (
            <p key={index}>
              Member {index + 1} : {teamMember}
            </p>
          ))}
        </div>
      </section>

      <span>Created at : {createdDate}</span>
      <span>Updated at : {updateDate}</span>
    </div>
  );
};

export default CardProject;
