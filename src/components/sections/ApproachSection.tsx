"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ApproachSection = () => {
  return (
    <section id="approach" className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="feature-title mb-6 text-foreground">A Product-Focused Approach</h2>
          <p className="ui-text text-muted-foreground max-w-3xl mx-auto">
            Great products are built on more than just code—they're built on a deep understanding of 
            user needs and business goals. My development process is grounded in this product-first 
            mindset, ensuring that every feature I build delivers tangible value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <Card className="text-center card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform duration-300 ease-out">
                <span className="text-xl group-hover:text-primary transition-colors duration-300 ease-out" aria-hidden="true">🏗️</span>
              </div>
              <CardTitle className="feature-title">Clean & Scalable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                I write modular, maintainable code designed for future growth and easy collaboration.
              </p>
            </CardContent>
          </Card>

          {/* Principle 2 */}
          <Card className="text-center card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform duration-300 ease-out">
                <span className="text-xl group-hover:text-primary transition-colors duration-300 ease-out" aria-hidden="true">🎯</span>
              </div>
              <CardTitle className="feature-title">User-Centric Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                I prioritize the user experience at every step, from API design to front-end implementation.
              </p>
            </CardContent>
          </Card>

          {/* Principle 3 */}
          <Card className="text-center card-shadow hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-card hover:to-card/90">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform duration-300 ease-out">
                <span className="text-xl group-hover:text-primary transition-colors duration-300 ease-out" aria-hidden="true">⚡</span>
              </div>
              <CardTitle className="feature-title">Performance & Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="ui-text text-muted-foreground">
                I build fast, efficient, and well-tested applications that users can depend on.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};