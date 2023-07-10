import NavigareAdaugaProiect from "@/components/projects/NavigareAdaugaProiect";
import Proiect from "@/models/Proiect";
import User from "@/models/User";
import { authOptions } from "@/utils/auth";
import db from "@/utils/db";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import CardProiect from "./CardProiect";

async function getProjects(session: Session | null) {
  const userId = session?.user.id;
  await db.connect();
  const user = await User.findById(userId);
  function getProjectsIds() {
    const getProjectIds = () => {
      return user.proiecte.map(function (proiectId: string) {
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

  const projects = await getProjects(session);

  return (
    <div className="flex flex-col items-center py-4 gap-6 text-white min-h-screen">
      <div
        className="grid grid-cols-2 gap-5 "
        id="container-proiectele-mele"
      >
        {projects.map(({ nume, id, echipa }) => (
          <CardProiect
            echipa={echipa}
            key={id}
            nume={nume}
            id={id}
          />
        ))}
      </div>
      <div>
        <NavigareAdaugaProiect />
      </div>
    </div>
  );
};

export default ProiecteleMele;
