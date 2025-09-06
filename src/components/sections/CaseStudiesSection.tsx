"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="feature-title text-center mb-12 text-foreground">Solutions in Action: Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Case Study 1 */}
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">HALO Systems Internship</Badge>
              <CardTitle className="feature-title">Real-Time Data Dashboard for AgriTech</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground mb-4">
                <strong>Objective:</strong> To engineer a performance-critical, real-time monitoring dashboard for an enterprise client.
              </p>
              <p className="ui-text text-muted-foreground">
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
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">Personal Project</Badge>
              <CardTitle className="feature-title">Personalized AI Workflow Agent (My GTD Buddy)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground mb-4">
                <strong>Objective:</strong> A self-directed project to explore the practical application of AI agents in enhancing personal productivity.
              </p>
              <p className="ui-text text-muted-foreground">
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
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">Hackathon Winner</Badge>
              <CardTitle className="feature-title">Award-Winning FinTech Prototype</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground mb-4">
                <strong>Objective:</strong> To design and build a high-impact financial dashboard prototype within a 12-hour timeframe.
              </p>
              <p className="ui-text text-muted-foreground">
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
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">Full-Stack Project</Badge>
              <CardTitle className="feature-title">Task Management Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground mb-4">
                <strong>Objective:</strong> A comprehensive project to build a production-ready, full-stack application from the ground up.
              </p>
              <p className="ui-text text-muted-foreground">
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
  );
};