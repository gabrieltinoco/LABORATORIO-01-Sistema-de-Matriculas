const { PrismaClient, DisciplineState, Role } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Criar Currículo
  const curriculum = await prisma.curriculum.create({
    data: {
      name: 'Currículo Padrão',
      description: 'Currículo inicial com disciplinas básicas',
    },
  });

  // criar cursos
  await prisma.course.createMany({
    data: [
      {
        name: 'Engenharia de Software',
        description: 'Curso focado em desenvolvimento de software',
        credits: 240,
        curriculumId: curriculum.id,
      },
      {
        name: 'Ciência da Computação',
        description: 'Curso voltado para teoria e ciência computacional',
        credits: 260,
        curriculumId: curriculum.id,
      },
      {
        name: 'Sistemas de Informação',
        description: 'Curso com foco em gestão e tecnologia da informação',
        credits: 200,
        curriculumId: curriculum.id,
      },
    ],
  });
  const createdCourses = await prisma.course.findMany({
    where: { curriculumId: curriculum.id },
  });

  // Hash da senha
  const hashedPassword = await bcrypt.hash('password', 10);

  // Criar Usuários
  await prisma.user.create({
    data: {
      name: 'Ana Souza',
      email: 'ana@estudante.com',
      password: hashedPassword,
      role: Role.Student,
      courseId: createdCourses[0].id,
    },
  });

  const teacher = await prisma.user.create({
    data: {
      name: 'Professor João',
      email: 'joao@universidade.com',
      password: hashedPassword,
      role: Role.Teacher,
    },
  });

  await prisma.user.create({
    data: {
      name: 'Carlos Gestor',
      email: 'carlos@admin.com',
      password: hashedPassword,
      role: Role.Manager,
    },
  });

  const disciplinesData = [
    {
      name: 'Banco de Dados',
      description: 'Modelagem e otimização de bancos de dados',
      credits: 4,
      semester: 1,
      price: 500,
    },
    {
      name: 'Estruturas de Dados',
      description: 'Algoritmos e manipulação de estruturas de dados',
      credits: 5,
      semester: 2,
      price: 550,
    },
    {
      name: 'Redes de Computadores',
      description: 'Protocolos, redes e segurança',
      credits: 4,
      semester: 3,
      price: 600,
    },
    {
      name: 'Inteligência Artificial',
      description: 'Técnicas de aprendizado de máquina e IA',
      credits: 6,
      semester: 4,
      price: 700,
    },
    {
      name: 'Desenvolvimento Web',
      description: 'Criação de aplicações para a web',
      credits: 5,
      semester: 2,
      price: 500,
    },
  ];

  for (const discipline of disciplinesData) {
    await prisma.discipline.create({
      data: {
        ...discipline,
        state: DisciplineState.Active,
        professorId: teacher.id,
        courseId:
          createdCourses[Math.floor(Math.random() * createdCourses.length)].id, // Associa a um curso aleatório
        curriculumId: curriculum.id,
      },
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
