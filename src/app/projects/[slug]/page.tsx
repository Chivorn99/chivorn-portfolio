import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import AnimatedBackground from '@/components/AnimatedBackground'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getProjectById, projects } from '@/data/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10">
        <Header />

        <section className="pt-28 pb-20 bg-theme-primary">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              href="/#projects"
              className="inline-flex text-theme-secondary hover:text-accent transition-colors duration-200"
            >
              ← Back to projects
            </Link>

            <div className="mt-6 bg-theme-secondary rounded-xl overflow-hidden border border-theme-secondary/20">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover" />

                <div
                  className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                    ${
                      project.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-black'
                    }
                  `}
                >
                  {project.status}
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-4xl font-bold gradient-text mb-4">
                  {project.title}
                </h1>

                <p className="text-theme-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-theme-primary/10 text-theme-secondary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-10">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-medium"
                    >
                      View live demo
                    </a>
                  ) : (
                    <p className="text-theme-secondary text-sm">
                      Live demo is not public yet.
                    </p>
                  )}
                </div>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-bold text-theme-primary mb-3">
                      Problem
                    </h2>
                    <p className="text-theme-secondary leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-theme-primary mb-3">
                      Solution
                    </h2>
                    <p className="text-theme-secondary leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-theme-primary mb-3">
                      Key Features
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-theme-secondary">
                      {project.caseStudy.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-theme-primary mb-4">
                      Screenshots
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.caseStudy.screenshots.map((shot) => (
                        <div
                          key={shot.src}
                          className="relative h-48 md:h-56 overflow-hidden rounded-lg border border-theme-secondary/20"
                        >
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
