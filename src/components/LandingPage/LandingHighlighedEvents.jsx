function LandingHighlightedEvents() {
    const events = [
      {
        id: 1,
        name: 'Event 1',
        description: 'Description for Event 1',
        imageUrl: 'image_url_1.jpg',
      },
      {
        id: 2,
        name: 'Business Fundamentals workshop',
        description: 'CAP hosts a Business Fundamentals workshop that introduces attendees to the world of business and professional development, gives them a great opportunity to network with one another, and informs them about the many options that are available to UBC Sauder Students post-graduation',
        imageUrl: 'image_url_2.jpg',
      },
      {
        id: 3,
        name: 'CAP Case Competition',
        description: 'Every year, CAP hosts their very own case competition that gives participants an opportunity to develop and apply their critical thinking and problem-solving skills in a business context.',
        imageUrl: 'image_url_3.jpg',
      },
    ];
  
    return (
      <div className="bg-black pb-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <h2 className="text-lg font-bold mb-2 text-lime-400">{event.name}</h2>
                <p className="text-white">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default LandingHighlightedEvents;
  