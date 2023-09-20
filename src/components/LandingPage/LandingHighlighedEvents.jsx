
import QandA from "../../assets/EventsPhotos/Event1Photo.jpg";
import CaseCompetition from "../../assets/EventsPhotos/Event2Photo.jpg";
import Workshop from "../../assets/EventsPhotos/Event3Photo.jpg";

function LandingHighlightedEvents() {
  const events = [
    {
      id: 1,
      name: "Q & A",
      description:
        "The Campus Ambassador Program is launching a brand new event to help applicants answer all their inquiries. Prospective applicants can attend our virtual Information and Q&A sessions with our panelists from various backgrounds. We will have a plethora of students with unique backgrounds to share their journey to Sauder and answer any of your questions! We welcome all students interested in Sauder to attend.",
      imageUrl: QandA,
    },
    {
      id: 2,
      name: "Business Fundamentals workshop",
      description:
        "CAP hosts a Business Fundamentals workshop that introduces attendees to the world of business and professional development, gives them a great opportunity to network with one another, and informs them about the many options that are available to UBC Sauder students post-graduation.",
      imageUrl: Workshop,
    },
    {
      id: 3,
      name: "CAP Case Competition",
      description:
        "Every year, CAP hosts their very own case competition that gives participants an opportunity to develop and apply their critical thinking and problem-solving skills in a business context. Through collaboration with other organizations in the commerce undergraduate society, the Campus Ambassador Program introduces multifaceted cases to participants that challenge their thinking and expand their perspectives.",
      imageUrl: CaseCompetition,
    },
  ];

  return (
    <div className="bg-black pb-20">
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10 mr-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-black rounded-lg overflow-hidden shadow-md border-4 border-lime-400"
              >
                <img
                  src={event.imageUrl}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-lime-400">
                    {event.name}
                  </h2>
                  <p className="text-white text-xs">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHighlightedEvents;
