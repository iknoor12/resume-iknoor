function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "DSA"];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <li key={i} className="bg-red-100 text-xl p-4 shadow rounded text-center hover:scale-105 transition">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
