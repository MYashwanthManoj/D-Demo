import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  const existingCount = await prisma.roadmap.count()
  if (existingCount > 0) {
    console.log('Database already has content. Skipping seed.')
    return
  }

  // Seed a Super Admin
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@careercafe.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@careercafe.com',
      password: 'password123', // INSECURE: For development prototype only
      role: 'SUPER_ADMIN',
      status: 'ACTIVE',
    },
  })
  console.log(`Created super admin: ${superAdmin.email}`)

  // Seed a Content Admin
  const contentAdmin = await prisma.user.upsert({
    where: { email: 'content@careercafe.com' },
    update: {},
    create: {
      name: 'Content Manager',
      email: 'content@careercafe.com',
      password: 'password123', 
      role: 'CONTENT_ADMIN',
      status: 'ACTIVE',
    },
  })
  console.log(`Created content admin: ${contentAdmin.email}`)

  // Seed Content Engines
  const roadmap = await prisma.roadmap.create({
    data: {
      title: 'Frontend Developer',
      description: 'A complete path from HTML/CSS to React and Next.js.',
      status: 'PUBLISHED',
      stages: {
        create: [
          { order: 1, title: 'Internet Fundamentals', description: 'How the web works, DNS, HTTP/HTTPS.', skills: 'HTTP, DNS' },
          { order: 2, title: 'HTML & CSS', description: 'Semantic HTML, Flexbox, Grid, Responsive Design.', skills: 'HTML, CSS, Flexbox' },
          { order: 3, title: 'JavaScript Basics', description: 'Variables, Functions, ES6+, DOM Manipulation.', skills: 'JavaScript, DOM' },
        ]
      }
    }
  })
  console.log(`Created roadmap: ${roadmap.title}`)

  const resource = await prisma.resource.create({
    data: {
      title: 'How to write a one-page resume with no experience',
      description: 'A comprehensive guide to crafting a strong entry-level resume.',
      category: 'Resume',
      type: 'ARTICLE',
      readingTime: 6,
      content: 'Start with a strong summary. Highlight projects, internships, and relevant coursework. Use bullet points and action verbs.',
      status: 'PUBLISHED'
    }
  })
  console.log(`Created resource: ${resource.title}`)

  const video = await prisma.video.create({
    data: {
      title: 'Mock Interview: Frontend Developer',
      description: 'Watch a realistic mock interview for an entry-level frontend role.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: 1800,
      category: 'Interview Prep',
      status: 'PUBLISHED'
    }
  })
  console.log(`Created video: ${video.title}`)

  const shot = await prisma.shot.create({
    data: {
      title: 'CSS Grid in 60 Seconds',
      description: 'Learn the absolute basics of CSS Grid.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: 60,
      status: 'PUBLISHED'
    }
  })
  console.log(`Created shot: ${shot.title}`)

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
