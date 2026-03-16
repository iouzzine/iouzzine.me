import SectionHeader from '@/components/ui/section-header';
import { AnimateIn } from '@/components/ui/animate-in';
import { Badge } from '@/components/ui/badge';
import type { AboutInfo } from '@/types';

interface AboutProps {
  about: AboutInfo;
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" aria-labelledby="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <AnimateIn>
        <SectionHeader label="Who I am" title="About Me" />
      </AnimateIn>

      <div className="grid items-start gap-12 md:grid-cols-2">
        <AnimateIn delay={0.1}>
          <p className="text-muted-foreground text-base leading-relaxed">{about.summary}</p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Top skills
              </p>
              <div className="flex flex-wrap gap-2">
                {about.featuredSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 font-mono text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                What I build
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {[
                  'Web applications & SaaS platforms',
                  'Internal tools, ERPs & dashboards',
                  'REST & GraphQL APIs',
                  'Real-time features & event-driven systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default About;
