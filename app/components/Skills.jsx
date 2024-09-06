import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { ScalaLogo } from "./icons/ScalaLogo";
import { NodeLogo } from "./icons/NodeLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <ScalaLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Scala</h3>
          <p className="text-sm text-muted-foreground">
            <Code>Scala </Code>is my main programming language for back-end.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "20s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main front-end framework is <Code>React</Code>
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <NodeLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Node.js</h3>
          <p className="text-sm text-muted-foreground">
            I also use <Code>Node.js</Code> for back-end development.
          </p>
        </div>
      </div>
    </Section>
  );
};
