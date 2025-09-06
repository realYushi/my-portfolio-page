import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { AboutModal } from "@/components/AboutModal";
import { Github, Linkedin, Download, Mail } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">Yushi Cui</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('approach')} className="text-sm font-medium hover:text-primary">Approach</button>
              <button onClick={() => scrollToSection('capabilities')} className="text-sm font-medium hover:text-primary">Capabilities</button>
              <button onClick={() => scrollToSection('case-studies')} className="text-sm font-medium hover:text-primary">Case Studies</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary">Contact</button>
            </div>
            <Button onClick={() => scrollToSection('contact')}>Get in Touch</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Yushi Cui</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold">
              Full-Stack Developer | Building Reliable & User-Focused Applications
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              I engineer clean, high-performance applications with a relentless focus on the end-user. 
              I solve complex problems by crafting elegant, scalable, and well-documented code.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" onClick={() => scrollToSection('case-studies')}>View My Work</Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>Get in Touch</Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" className="p-2 rounded-full border hover:bg-muted transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full border hover:bg-muted transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="/resume.pdf" className="p-2 rounded-full border hover:bg-muted transition-colors">
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <p>Developer Profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">A Product-Focused Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Great products are built on more than just code—they're built on a deep understanding of 
              user needs and business goals. My development process is grounded in this product-first 
              mindset, ensuring that every feature I build delivers tangible value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🏗️</span>
                </div>
                <CardTitle>Clean & Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I write modular, maintainable code designed for future growth and easy collaboration.
                </p>
              </CardContent>
            </Card>

            {/* Principle 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <CardTitle>User-Centric Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I prioritize the user experience at every step, from API design to front-end implementation.
                </p>
              </CardContent>
            </Card>

            {/* Principle 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <CardTitle>Performance & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I build fast, efficient, and well-tested applications that users can depend on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Full-Stack Proficiency</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">.NET</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>End-to-End Project Ownership:</strong> I have the versatility to build and manage 
                  complete features from the database to the UI, creating cohesive solutions and simplifying 
                  the development workflow.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Modern DevOps & AI Integration</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
                  <Badge variant="secondary">AI Agent Architecture</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Efficient & Forward-Thinking Development:</strong> I leverage modern practices 
                  like containerization for scalable deployments and explore AI to build smarter, more 
                  competitive products.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Professional & Agile Mindset</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Scrum</Badge>
                  <Badge variant="secondary">TDD</Badge>
                  <Badge variant="secondary">Git</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Seamless Team Integration:</strong> With professional experience and a strong grasp 
                  of agile methodologies, I am equipped to join your team and begin delivering high-quality, 
                  reliable code from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions in Action: Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">HALO Systems Internship</Badge>
                <CardTitle>Real-Time Data Dashboard for AgriTech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Objective:</strong> To engineer a performance-critical, real-time monitoring dashboard for an enterprise client.
                </p>
                <p className="text-muted-foreground">
                  <strong>Outcome:</strong> Successfully developed and delivered a production-level HMI component using Vue.js and TypeScript. 
                  My front-end data filtering strategy significantly improved performance and usability.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Real-time Data</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Personal Project</Badge>
                <CardTitle>Personalized AI Workflow Agent (My GTD Buddy)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Objective:</strong> A self-directed project to explore the practical application of AI agents in enhancing personal productivity.
                </p>
                <p className="text-muted-foreground">
                  <strong>Outcome:</strong> Designed and built a multi-agent system using Gemini to automate the 'Getting Things Done' (GTD) methodology. 
                  This project showcases my initiative and skills in AI agent orchestration and prompt engineering.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">AI Agents</Badge>
                  <Badge variant="outline">Gemini</Badge>
                  <Badge variant="outline">Productivity</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Hackathon Winner</Badge>
                <CardTitle>Award-Winning FinTech Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Objective:</strong> To design and build a high-impact financial dashboard prototype within a 12-hour timeframe.
                </p>
                <p className="text-muted-foreground">
                  <strong>Outcome:</strong> Co-led a team to a first-place victory by focusing on core user value and demonstrating 
                  rapid, collaborative prototyping with Vue.js.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Prototyping</Badge>
                  <Badge variant="outline">FinTech</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 4 */}
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Full-Stack Project</Badge>
                <CardTitle>Task Management Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Objective:</strong> A comprehensive project to build a production-ready, full-stack application from the ground up.
                </p>
                <p className="text-muted-foreground">
                  <strong>Outcome:</strong> Built a robust, mobile-first application with React, .NET, and SQL, fully containerized with Docker 
                  and developed using TDD methodologies to ensure code quality and reliability.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">.NET</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">TDD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I am actively seeking software developer roles where I can contribute to a talented team 
              and help build exceptional products. If my skills and product-focused mindset align with 
              what you're looking for, I would be thrilled to connect.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:yushi@example.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <Mail className="w-5 h-5" />
              <span>yushi@example.com</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => window.location.href = 'mailto:yushi@example.com'}>
              Send an Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <AboutModal />
            </p>
            <p className="text-sm text-muted-foreground">© 2024 Yushi Cui. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;