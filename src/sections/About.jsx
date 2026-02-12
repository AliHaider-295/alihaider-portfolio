import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning Ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
               Interactive Web Experiences
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              Hi, I’m Ali Haider, a passionate MERN Stack Developer with 1 year 
              of hands-on experience in building modern, responsive, and user-focused 
              web applications. I enjoy transforming ideas into real-world digital
               solutions and continuously improving my skills in both front-end 
               and back-end development.
              </p>
              <p>
                I have practical experience working with MongoDB, Express.js,
                 React.js, and Node.js, along with strong knowledge of JavaScript,
                  HTML, CSS, and Tailwind CSS. I focus on writing clean, maintainable 
                  code and creating smooth user experiences.
              </p>
              <p>
            On the backend, I’m comfortable developing REST APIs, handling CRUD operations,
             implementing authentication (JWT), and managing databases. On the frontend,
              I specialize in building responsive UI components, optimizing performance, 
              and ensuring cross-browser compatibility.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
              I am a quick learner, team-oriented, and always excited
               to work on challenging projects that help me grow as a Full Stack Developer. 
               My goal is to contribute to impactful products while continuously advancing my 
               technical expertise.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};