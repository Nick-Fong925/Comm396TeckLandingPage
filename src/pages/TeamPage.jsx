import IndividualTeamMember from "../components/IndividualTeamMember";

function TeamPage() {
  return (
    <div className="bg-blue-950 pt-28">
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4">
          <div className="flex justify-center">
            <h2 className="text-6xl font-bold text-white mb-10 mt-10"></h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <IndividualTeamMember />
            <IndividualTeamMember />
          </div>

          <div className="flex justify-center">
            <h2 className="text-6xl font-bold text-white mb-10 mt-10"></h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <IndividualTeamMember />
            <IndividualTeamMember />
          </div>

          <div className="flex justify-center">
            <h2 className="text-6xl font-bold text-white mb-10 mt-10"></h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <IndividualTeamMember />
            <IndividualTeamMember />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
