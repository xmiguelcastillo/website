import MathIcon from "../assets/mathsvg";

function MathClasses() {
  const mathCourses = [
    {
      title:
        "01:640:151 - Calculus I for the Mathematical and Physical Sciences",
      link: "https://math.rutgers.edu/academics/undergraduate/courses/941-01-640-151-calculus-i-for-the-mathematical-and-physical-sciences",
    },
    {
      title:
        "01:640:152 - Calculus II for the Mathematical and Physical Sciences",
      link: "https://math.rutgers.edu/academics/undergraduate/courses/942-01-640-152-calculus-ii-for-the-mathematical-and-physical-sciences",
    },
    {
      title: "01:640:250 - Introductory Linear Algebra",
      link: "https://math.rutgers.edu/academics/undergraduate/courses/948-01-640-250-introductory-linear-algebra",
    },
    {
      title: "01:960:384 - Intermediate Statistical Analysis",
      link: "https://statistics.rutgers.edu/course-descriptions/511-01-960-384-intermediate-statistical-analysis-3-formerly-960-380",
    },
    {
      title: "01:960:211 - Statistics I",
      link: "https://statistics.rutgers.edu/course-descriptions/505-01-960-211-212-statistics-i-ii-3-3",
    },
    {
      title: "01:198:205 - Introduction to Discrete Structures I",
      link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-205-introduction-to-discrete-structures-i",
    },
    {
      title: "01:198:206 - Introduction to Discrete Structures II",
      link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii",
    },
    {
      title: "01:198:344 - Design and Analysis of Computer Algorithms",
      link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-344-design-and-analysis-of-computer-algorithms",
    },
  ];
  return (
    <div className="flex flex-wrap justify-start w-[400px] lg:w-[500px] sm:w-[400px] mx-auto">
      {mathCourses.map((course, index) => (
        <div key={index} className="lg:w-[240px] w-[190px] group ml-2">
          <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] lg:w-full h-24 text-xs group-hover:border-yellow-300">
            <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
              <MathIcon />
            </div>
            <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                {course.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MathClasses;
