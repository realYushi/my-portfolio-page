"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="feature-title text-center mb-12 text-foreground">Core Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <CardTitle className="feature-title">Full-Stack Proficiency</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">.NET</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                <strong>End-to-End Project Ownership:</strong> I have the versatility to build and manage 
                complete features from the database to the UI, creating cohesive solutions and simplifying 
                the development workflow.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <CardTitle className="feature-title">DevOps & AI Integration</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">GitHub Actions</Badge>
                <Badge variant="secondary">AI Agent Architecture</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                <strong>Efficient & Forward-Thinking Development:</strong> I leverage modern practices 
                like containerization for scalable deployments and explore AI to build smarter, more 
                competitive products.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <CardTitle className="feature-title">Professional & Agile Mindset</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Agile</Badge>
                <Badge variant="secondary">Scrum</Badge>
                <Badge variant="secondary">TDD</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                <strong>Seamless Team Integration:</strong> With professional experience and a strong grasp 
                of agile methodologies, I am equipped to join your team and begin delivering high-quality, 
                reliable code from day one.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};