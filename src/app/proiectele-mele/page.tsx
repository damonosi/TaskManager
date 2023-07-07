import NavigareAdaugaProiect from "@/components/projects/NavigareAdaugaProiect";
import Proiect from "@/models/Proiect";
import User from "@/models/User";
import { authOptions } from "@/utils/auth";
import db from "@/utils/db";
import { getServerSession } from "next-auth/next";
async function getProjects(session) {
  const userId = session?.user.id;
  await db.connect();
  const user = await User.findById(userId);
  function getProjectsIds() {
    const getProjectIds = () => {
      return user.proiecte.map(function (proiectId) {
        return proiectId.toString();
      });
    };
    const projectsIds = getProjectIds();
    return projectsIds;
  }
  let projIds = getProjectsIds();

  const proiecte = await Proiect.find({
    _id: {
      $in: projIds,
    },
  });

  return proiecte;
}
const ProiecteleMele = async () => {
  const session = await getServerSession(authOptions);
  console.log("sesiune", session?.user.id);

  const projects = await getProjects(session);
  console.log("proiectep", projects);

  return (
    <div className="flex flex-col items-center">
      <div
        className="grid grid-cols-4 gap-5"
        id="proiectele-mele"
      >
        {projects.map(({ nume }) => (
          <div
            className="border-4"
            id="container-proiect"
          >
            <div>{nume}</div>
          </div>
        ))}
      </div>
      <div>
        <NavigareAdaugaProiect />
      </div>
    </div>
  );
};

export default ProiecteleMele;
