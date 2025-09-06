import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold">John Doe</div>
            
            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#work" className="text-sm font-medium hover:text-primary">Work</a>
              <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
            </div>
            
            {/* CTA Button */}
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Creative Designer & Developer
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Crafting digital experiences that blend beautiful design with functional excellence.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">View Work</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <p>Hero Image/Photo</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-16 border-t pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Showcase Grid Section */}
      <section id="work" className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <Button variant="link" className="text-primary">
              View all →
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">Web Design</Badge>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>Modern online shopping experience with intuitive UI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                  <Badge variant="outline">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">Mobile App</Badge>
                <CardTitle>Fitness Tracker</CardTitle>
                <CardDescription>Health and wellness app with activity monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">Web Development</Badge>
                <CardTitle>Portfolio Website</CardTitle>
                <CardDescription>Personal branding and project showcase platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">E-commerce</Badge>
                <CardTitle>Product Dashboard</CardTitle>
                <CardDescription>Inventory management and analytics system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">Data Visualization</Badge>
                <CardTitle>Analytics Platform</CardTitle>
                <CardDescription>Real-time data insights and reporting tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">D3.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">AI Integration</Badge>
                <CardTitle>Chatbot System</CardTitle>
                <CardDescription>Intelligent customer support automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">OpenAI</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">WebSocket</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">Trusted by leading companies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {['Google', 'Microsoft', 'Amazon', 'Netflix', 'Apple', 'Meta'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground opacity-70 hover:opacity-100 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Technical Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Technical Stack</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Frontend</p>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <p className="font-medium">Backend</p>
                  <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <p className="font-medium">Tools</p>
                  <p className="text-sm text-muted-foreground">Figma, Git, Docker, AWS, Vercel</p>
                </div>
              </div>
            </div>

            {/* Center Column - Process */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Design Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <p className="font-medium">Discovery</p>
                    <p className="text-sm text-muted-foreground">Research and requirements gathering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <p className="font-medium">Design</p>
                    <p className="text-sm text-muted-foreground">Wireframing and prototyping</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <p className="font-medium">Development</p>
                    <p className="text-sm text-muted-foreground">Implementation and testing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <p className="font-medium">Launch</p>
                    <p className="text-sm text-muted-foreground">Deployment and maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <p>Process Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics/About Section */}
      <section id="about" className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Data Visualization */}
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Frontend Development</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Backend Development</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Project Management</span>
                      <span className="text-sm text-muted-foreground">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground">
                With over 8 years of experience in digital design and development, I specialize in 
                creating user-centered solutions that drive business growth and enhance user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Users Reached</div>
                </div>
              </div>

              <Button size="lg">Download Resume</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Let's create something amazing together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your ideas to life? Get in touch today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground">hello@johndoe.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                  <a key={social} href="#" className="text-muted-foreground hover:text-primary">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground">Available worldwide</p>
            </div>
          </div>

          <div className="border-t pt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-muted-foreground">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;