function Projects() {
  return (
    // <div>
    //   <h2 className="text-3xl font-bold mb-3">Projects</h2>
    //   <p className="text-gray-700">Your cool projects will appear here soon.</p>
    // </div>
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {/* Project 1 */}
      <div className="mb-8 p-5 border rounded-lg shadow-sm bg-blue-50 hover:scale-105 transition">
        <h3 className="text-2xl font-semibold">Akaal Connect – Volunteer Platform</h3>
        <p className="text-gray-700 mt-2 leading-7">
          A real-world community platform made for volunteers and event
          organizers. It includes features like event management, volunteer
          registration, location-based filtering, and communication via email.
        </p>
      </div>

      {/* Project 2 */}
      <div className="mb-8 p-5 border rounded-lg shadow-sm bg-blue-50 hover:scale-105 transition">
        <h3 className="text-2xl font-semibold">Simple Blog Front-End</h3>
        <p className="text-gray-700 mt-2 leading-7">
          A blog front-end built using React + Fake API (JSONPlaceholder). It
          displays posts, styles them using grid layout, and focuses on UI
          design basics.
        </p>
      </div>

      {/* Project 3 */}
      <div className="mb-8 p-5 border rounded-lg shadow-sm bg-blue-50 hover:scale-105 transition">
        <h3 className="text-2xl font-semibold">Task Manager App</h3>
        <p className="text-gray-700 mt-2 leading-7">
          A productivity tool that includes a calendar, to-do list, reminders,
          and a dashboard with user profile and website details. Built to
          practice DOM manipulation and modern UI layout.
        </p>
      </div>
    </div>
  );
}

export default Projects;
