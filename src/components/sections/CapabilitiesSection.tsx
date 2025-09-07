import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ANIMATION_CONFIG } from "@/constants";

export const CapabilitiesSection = () => {
  const { containerRef, getItemClass } = useScrollAnimation(3, {
    staggerDelay: ANIMATION_CONFIG.STAGGER_DELAY,
    threshold: ANIMATION_CONFIG.SCROLL_THRESHOLD,
  });

  return (
    <section id="capabilities" className="section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-description">
            A comprehensive skill set that enables me to deliver end-to-end
            solutions with modern technologies and industry best practices.
          </p>
        </div>

        <div className="section-grid-3">
          {/* Feature 1 */}
          <Card className={`card-enhanced group ${getItemClass(0)}`}>
            <CardHeader className="pb-6">
              <CardTitle className="feature-title text-lg mb-4">
                Full-Stack Proficiency
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Vue.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  .NET
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  SQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Python
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  End-to-End Project Ownership:
                </strong>{" "}
                I have the versatility to build and manage complete features
                from the database to the UI, creating cohesive solutions and
                simplifying the development workflow.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className={`card-enhanced group ${getItemClass(1)}`}>
            <CardHeader className="pb-6">
              <CardTitle className="feature-title text-lg mb-4">
                DevOps & AI Integration
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Docker
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  GitHub Actions
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  AI Agent
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Efficient & Forward-Thinking Development:
                </strong>{" "}
                I leverage modern practices like containerization for scalable
                deployments and explore AI to build smarter, more competitive
                products.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className={`card-enhanced group ${getItemClass(2)}`}>
            <CardHeader className="pb-6">
              <CardTitle className="feature-title text-lg mb-4">
                Professional & Agile Mindset
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Agile
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Scrum
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  TDD
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1"
                >
                  Git
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Seamless Team Integration:
                </strong>{" "}
                With professional experience and a strong grasp of agile
                methodologies, I am equipped to join your team and begin
                delivering high-quality, reliable code from day one.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
