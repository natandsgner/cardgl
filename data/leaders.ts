export type Leader = {
  slug: string
  title: string
  name: string
  role: string
  admission: string
  bloodType: string
  allergy: string
  initials: string
  photo?: string
}

export const leaders: Leader[] = [
  {
    slug: 'jullyana-pereira',
    title: 'LIDERANÇA',
    name: 'JULLYANA PEREIRA',
    role: 'GERENTE RH/DP',
    admission: '19/06/2023',
    bloodType: 'O+',
    allergy: 'Crustáceos, Frutos do Mar, Pescada Amarela',
    initials: 'GL',
    photo: '/images/leaders/jullyana.png',
  },
  {
      slug: 'rebeca-marques',
      title: 'LIDERANÇA',
      name: 'REBECA MARQUES',
      role: 'GERENTE GERAL  CSC/CENTRAL',
      admission: '21/02/2022',
      bloodType: 'A+',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/rebeca.png',
  },
  {
      slug: 'annye-laurentino',
      title: 'LIDERANÇA',
      name: 'ANNYE LAURENTINO',
      role: 'COORDENADORA',
      admission: '20/02/2025',
      bloodType: '-',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/annye.png',
  },
  {
      slug: 'saarha-priscila',
      title: 'LIDERANÇA',
      name: 'SAARHA PRISCILA',
      role: 'ASSISTENTE FINANCEIRO',
      admission: '05/08/2023',
      bloodType: 'A+',
      allergy: 'Camarão',
      initials: 'GL',
      photo: '/images/leaders/saarha.png',
  },
  {
      slug: 'ana-claudia',
      title: 'LIDERANÇA',
      name: 'ANA CLAUDIA',
      role: 'GERENTE',
      admission: '05/12/2024',
      bloodType: '-',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/ana.png',
  },
  {
      slug: 'lili-brilhante',
      title: 'LIDERANÇA',
      name: 'LILI BRILHANTE',
      role: 'COORDENADORA',
      admission: '18/04/2019',
      bloodType: '-',
      allergy: 'Amendoim, castanha, mariscos, caranguejo e dipirona',
      initials: 'GL',
      photo: '/images/leaders/lili.png',
  },
  {
      slug: 'andreza-kelly',
      title: 'LIDERANÇA',
      name: 'ANDREZA KELLY',
      role: 'GERENTE',
      admission: '13/04/2024',
      bloodType: 'O-',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/andreza.png',
  },
  {
      slug: 'thamara-cavalcanti',
      title: 'LIDERANÇA',
      name: 'THÂMARA CAVALCANTI',
      role: 'DIRETORIA',
      admission: '-',
      bloodType: '-',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/thamara.png',
  },
  {
      slug: 'thamiris-cavalcanti',
      title: 'LIDERANÇA',
      name: 'THÂMIRIS CAVALCANTI',
      role: 'DIRETORIA',
      admission: '-',
      bloodType: '-',
      allergy: 'Dramin e Plasil',
      initials: 'GL',
      photo: '/images/leaders/thamiris.png',
  },
  {
      slug: 'emilly-maria',
      title: 'LIDERANÇA',
      name: 'EMILLY MARIA',
      role: 'COORDENADORA',
      admission: '-',
      bloodType: 'O+',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/emilly.png',
  },
  {
      slug: 'dayana-ellen',
      title: 'LIDERANÇA',
      name: 'DAYANA ELLEN',
      role: 'GERENTE',
      admission: '08/12/2021',
      bloodType: 'O+',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/dayana.png',
  },
  {
      slug: 'bruno-medeiros',
      title: 'LIDERANÇA',
      name: 'BRUNO MEDEIROS',
      role: 'GERENTE GERAL',
      admission: '02/05/2018',
      bloodType: 'B+',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/bruno.png',
  },
  {
      slug: 'sandra-defatima',
      title: 'LIDERANÇA',
      name: 'SANDRA DE FATIMA',
      role: 'GERENTE',
      admission: '01/10/2017',
      bloodType: '-',
      allergy: 'Nenhuma',
      initials: 'GL',
      photo: '/images/leaders/sandra.png',
  },
  // Adicione novos líderes copiando este bloco e trocando o slug e os dados.
]

export function getLeader(slug: string) {
  return leaders.find((leader) => leader.slug === slug)
}
