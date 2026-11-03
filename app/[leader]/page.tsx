import { notFound } from 'next/navigation'
import LeaderPageClient from './LeaderPageClient'
import { leaders, getLeader } from '../../data/leaders'

export function generateStaticParams() {
  return leaders.map(({ slug }) => ({ leader: slug }))
}

export default async function LeaderPage({ params }: { params: Promise<{ leader: string }> }) {
  const { leader: slug } = await params
  if (!getLeader(slug)) notFound()
  return <LeaderPageClient slug={slug} />
}
