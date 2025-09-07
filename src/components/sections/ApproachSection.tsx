import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const ApproachSection = () => {
  const { containerRef, getItemClass } = useScrollAnimation(3, {
    staggerDelay: 200,
    threshold: 0.2,
  });

  return (
    <section id="approach" className="bg-muted/20 section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">A Product-Focused Approach</h2>
          <p className="section-description">
            Great products are built on more than just code—they're built on a deep understanding of 
            user needs and business goals. My development process is grounded in this product-first 
            mindset, ensuring that every feature I build delivers tangible value.
          </p>
        </div>

        <div className="section-grid-3">
          {/* Principle 1 */}
          <Card className={`text-center card-enhanced group ${getItemClass(0)}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-500 ease-out" aria-hidden="true">🏗️</span>
              </div>
              <CardTitle className="feature-title text-lg">Clean & Scalable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                I write modular, maintainable code designed for future growth and easy collaboration.
              </p>
            </CardContent>
          </Card>

          {/* Principle 2 */}
          <Card className={`text-center card-enhanced group ${getItemClass(1)}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-500 ease-out" aria-hidden="true">🎯</span>
              </div>
              <CardTitle className="feature-title text-lg">User-Centric Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                I prioritize the user experience at every step, from API design to front-end implementation.
              </p>
            </CardContent>
          </Card>

          {/* Principle 3 */}
          <Card className={`text-center card-enhanced group ${getItemClass(2)}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-500 ease-out" aria-hidden="true">⚡</span>
              </div>
              <CardTitle className="feature-title text-lg">Performance & Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground leading-relaxed">
                I build fast, efficient, and well-tested applications that users can depend on.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};