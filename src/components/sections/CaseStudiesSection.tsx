import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const CaseStudiesSection = () => {
  const { containerRef, getItemClass } = useScrollAnimation(4, {
    staggerDelay: 150,
    threshold: 0.2,
  });

  return (
    <section id="case-studies" className="bg-muted/20 section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Solutions in Action</h2>
          <p className="section-description">
            Real-world projects that showcase my ability to deliver high-quality solutions across different industries and technical challenges.
          </p>
        </div>

        <div className="section-grid-2">
          {/* Case Study 1 */}
          <Card className={`card-enhanced group ${getItemClass(0)}`}>
            <CardHeader className="pb-6">
              <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium px-3 py-1">
                HALO Systems Internship
              </Badge>
              <CardTitle className="feature-title text-xl leading-tight">
                Real-Time Data Dashboard for AgriTech
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Objective:</strong> To engineer a performance-critical,
                  real-time monitoring dashboard for an enterprise client.
                </p>
              </div>
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Outcome:</strong> Successfully developed and delivered a
                  production-level HMI component using Vue.js and TypeScript. My
                  front-end data filtering strategy significantly improved
                  performance and usability.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">Vue.js</Badge>
                <Badge variant="outline" className="text-xs">TypeScript</Badge>
                <Badge variant="outline" className="text-xs">Real-time Data</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2 */}
          <Card className={`card-enhanced group ${getItemClass(1)}`}>
            <CardHeader className="pb-6">
              <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium px-3 py-1">
                Personal Project
              </Badge>
              <CardTitle className="feature-title text-xl leading-tight">
                Personalized AI Workflow Agent (My GTD Buddy)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Objective:</strong> A self-directed project to explore
                  the practical application of AI agents in enhancing personal
                  productivity.
                </p>
              </div>
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Outcome:</strong> Designed and built a multi-agent
                  system using Gemini to automate the 'Getting Things Done' (GTD)
                  methodology. This project showcases my initiative and skills in
                  AI agent orchestration and prompt engineering.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">AI Agents</Badge>
                <Badge variant="outline" className="text-xs">Gemini</Badge>
                <Badge variant="outline" className="text-xs">Productivity</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3 */}
          <Card className={`card-enhanced group ${getItemClass(2)}`}>
            <CardHeader className="pb-6">
              <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium px-3 py-1">
                Hackathon Winner
              </Badge>
              <CardTitle className="feature-title text-xl leading-tight">
                Award-Winning FinTech Prototype
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Objective:</strong> To design and build a high-impact
                  financial dashboard prototype within a 12-hour timeframe.
                </p>
              </div>
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Outcome:</strong> Co-led a team to a first-place victory
                  by focusing on core user value and demonstrating rapid,
                  collaborative prototyping with Vue.js.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">Vue.js</Badge>
                <Badge variant="outline" className="text-xs">Prototyping</Badge>
                <Badge variant="outline" className="text-xs">FinTech</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 4 */}
          <Card className={`card-enhanced group ${getItemClass(3)}`}>
            <CardHeader className="pb-6">
              <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium px-3 py-1">
                Full-Stack Project
              </Badge>
              <CardTitle className="feature-title text-xl leading-tight">
                Task Management Application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Objective:</strong> A comprehensive project to build a
                  production-ready, full-stack application from the ground up.
                </p>
              </div>
              <div>
                <p className="ui-text text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Outcome:</strong> Built a robust, mobile-first
                  application with React, .NET, and SQL, fully containerized with
                  Docker and developed using TDD methodologies to ensure code
                  quality and reliability.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">.NET</Badge>
                <Badge variant="outline" className="text-xs">Docker</Badge>
                <Badge variant="outline" className="text-xs">TDD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
